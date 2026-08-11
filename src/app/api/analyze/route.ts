import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { DetectedObject } from '@/lib/types';
import { getKnowledgeForObject } from '@/lib/knowledgeEngine';

export async function POST(req: Request) {
  let fallbackObjects: any[] = [];
  try {
    const { imageBase64, tfjsObjects, customApiKey } = await req.json();
    fallbackObjects = tfjsObjects || [];

    if (!imageBase64) {
      return NextResponse.json({ error: 'Missing imageBase64' }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.trim() === '' || apiKey.startsWith('AQ.')) {
      console.warn("GEMINI_API_KEY is missing or invalid. Returning local detection objects.");
      return NextResponse.json({ enhancedObjects: fallbackObjects });
    }

    const ai = new GoogleGenAI({ apiKey: apiKey.trim() });

    let base64Data = imageBase64;
    let mimeType = 'image/jpeg';

    if (imageBase64.startsWith('http://') || imageBase64.startsWith('https://')) {
      const imgRes = await fetch(imageBase64);
      if (!imgRes.ok) throw new Error('Failed to fetch image from URL');
      const arrayBuffer = await imgRes.arrayBuffer();
      base64Data = Buffer.from(arrayBuffer).toString('base64');
      mimeType = imgRes.headers.get('content-type') || 'image/jpeg';
    } else {
      const mimeTypeMatch = imageBase64.match(/^data:(image\/(png|jpeg|jpg|webp));base64,/);
      mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'image/jpeg';
      base64Data = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
    }

    const prompt = `
You are the world's most advanced AI computer vision and deep knowledge system.

${tfjsObjects && tfjsObjects.length > 0 ? `A local object detection model identified the following initial bounding boxes:\n${JSON.stringify(tfjsObjects, null, 2)}\n\nExamine this image thoroughly and ENHANCE or ADD all objects in the scene.` : `Examine this image thoroughly:`}

CRITICAL IDENTIFICATION RULES:
1. Detect ALL main subjects in the image, including celestial objects, animals, electronics, cables, clothing, and everyday items:
   - CELESTIAL / ASTRONOMY: Moon (Full Moon, Crescent, Lunar surface, Craters), Sun, Stars, Clouds, Night Sky. Identify as "The Moon" under Category "Other".
   - CHARGERS & CABLES: Phone Charger, Mobile Wall Adapter, USB Charging Cable, Power Brick, Power Bank, Electrical Adapter. Identify as "Phone Charger & Power Adapter" under Category "Electronics".
   - CLOTHING & FABRIC: Clothing, Garments, Shirts, Pants, Dresses, Bedsheets, Blankets, Floral Patterned Fabrics, Textiles, Towels. Identify as "Clothing / Patterned Fabric" under Category "Clothing".
   - ANIMALS (REAL vs TOY):
     * Real living Animals: Cat (Felis catus), Rat (Rodent), Mouse, Horse (Equus caballus), Dog, Birds, Peacocks, Tigers, Wildlife. Identify under Category "Animal".
     * IMPORTANT FOR HORSES: If a REAL LIVING HORSE is present in the image, identify it as "Horse (Equine Mammal)" under Category "Animal"! DO NOT classify a living horse as a toy!
     * Reserve Category "Toy" ONLY for artificial wooden/plastic rocking horses, ride-on toys, dolls, or plush stuffed animals!
   - FAMOUS LEADERS & HUMANS: Identify famous figures (e.g. Dr. A.P.J. Abdul Kalam, N. Chandrababu Naidu [Present CM of Andhra Pradesh], Narendra Modi [PM of India], Mahatma Gandhi, Subhas Chandra Bose, Bhagat Singh, Albert Einstein, Steve Jobs, Elon Musk, etc.) with their full name under Category "Human".
   - TECH HARDWARE: Headphones, Headset, Earbuds, Computer Mouse, Keyboard, Laptop, Monitor, CPU Tower, Projector.
   - MEDICAL & TABLETS: Medicine Tablets, Pill Blister Foil Strips, Capsules.

Return a JSON array of identified objects.
Each item in the returned array MUST strictly follow this JSON schema:
[
  {
    "id": "gemini_obj_1",
    "displayName": "Concise specific name (MAX 3-5 WORDS). Examples: 'The Moon', 'Phone Charger & Adapter', 'Clothing / Patterned Fabric', 'Domestic Cat', 'Horse (Equine Mammal)'.",
    "subCategory": "Descriptive category (e.g. 'Celestial Astronomical Body', 'Power Supply & Charging Cable', 'Textile & Apparel Material', 'Feline Domestic Animal', 'Equidae Mammalian Animal')",
    "category": "One of: 'Human', 'Animal', 'Vehicle', 'Electronics', 'Eyewear', 'Food', 'Clothing', 'Plant', 'Tool', 'Outdoor', 'Furniture', 'Sports', 'Medical', 'Toy', 'Other'",
    "score": 0.98,
    "bbox": [x, y, width, height],
    "knowledge": {
      "scientificOrTechName": "Full scientific name, astronomical designation, or tech classification",
      "primaryUses": "Detailed primary purpose, ecological role, or functionality",
      "specifications": ["specification 1", "specification 2", "specification 3"],
      "keyFeatures": ["key feature 1", "key feature 2", "key feature 3"],
      "humanDetails": "Context or behavioral traits",
      "safetyAndLegalStatus": "Safety standards, regulatory status, or legal protection",
      "funFact": "Fascinating historical, biological, astronomical, or technological trivia fact"
    }
  }
]

Respond ONLY with raw JSON array.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { data: base64Data, mimeType: mimeType } }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              id: { type: "STRING" },
              displayName: { type: "STRING" },
              subCategory: { type: "STRING" },
              category: { type: "STRING" },
              score: { type: "NUMBER" },
              bbox: { type: "ARRAY", items: { type: "NUMBER" } },
              knowledge: {
                type: "OBJECT",
                properties: {
                  scientificOrTechName: { type: "STRING" },
                  primaryUses: { type: "STRING" },
                  specifications: { type: "ARRAY", items: { type: "STRING" } },
                  keyFeatures: { type: "ARRAY", items: { type: "STRING" } },
                  humanDetails: { type: "STRING" },
                  safetyAndLegalStatus: { type: "STRING" },
                  funFact: { type: "STRING" }
                }
              }
            }
          }
        }
      }
    });

    const responseText = response.text || "[]";
    let aiEnhancements: any[] = [];
    try {
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      aiEnhancements = JSON.parse(cleanJson);
    } catch (e) {
      console.error("Failed to parse Gemini response as JSON", responseText);
    }

    if (!response.text && response.candidates?.[0]?.finishReason) {
      console.error('Gemini Blocked:', response.candidates[0].finishReason);
    }

    if (!Array.isArray(aiEnhancements) || aiEnhancements.length === 0) {
      return NextResponse.json({ enhancedObjects: fallbackObjects });
    }

    // Merge Gemini enhancements with existing TFJS objects or construct final objects
    const baseList: DetectedObject[] = tfjsObjects || [];
    const mergedResults: DetectedObject[] = [];

    // Process Gemini predictions
    for (const enhancement of aiEnhancements) {
      const existingMatch = baseList.find((b) => b.id === enhancement.id);

      const category = enhancement.category || (existingMatch ? existingMatch.category : 'Other');
      const displayName = enhancement.displayName || (existingMatch ? existingMatch.displayName : 'Object');

      // Fallback knowledge lookup if gemini knowledge fields are incomplete
      const localKnowledge = getKnowledgeForObject(
        enhancement.displayName || (existingMatch ? existingMatch.class : 'object'),
        displayName,
        category
      );

      const mergedObj: DetectedObject = {
        id: enhancement.id || existingMatch?.id || `gemini_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        class: existingMatch?.class || enhancement.displayName?.toLowerCase() || 'object',
        displayName: enhancement.displayName || existingMatch?.displayName || 'Object',
        subCategory: enhancement.subCategory || existingMatch?.subCategory,
        category: category,
        score: enhancement.score || existingMatch?.score || 0.95,
        bbox: enhancement.bbox && Array.isArray(enhancement.bbox) && enhancement.bbox.length === 4
          ? enhancement.bbox
          : (existingMatch ? existingMatch.bbox : [50, 50, 200, 200]),
        colorHex: existingMatch?.colorHex || '#00f3ff',
        colorName: existingMatch?.colorName || 'Neon Cyan',
        estimatedSize: existingMatch?.estimatedSize || 'Medium',
        locationQuadrant: existingMatch?.locationQuadrant || 'Center',
        knowledge: {
          scientificOrTechName: enhancement.knowledge?.scientificOrTechName || localKnowledge.scientificOrTechName,
          primaryUses: enhancement.knowledge?.primaryUses || localKnowledge.primaryUses,
          specifications: enhancement.knowledge?.specifications || localKnowledge.specifications,
          keyFeatures: enhancement.knowledge?.keyFeatures || localKnowledge.keyFeatures,
          humanDetails: enhancement.knowledge?.humanDetails || localKnowledge.humanDetails,
          safetyAndLegalStatus: enhancement.knowledge?.safetyAndLegalStatus || localKnowledge.safetyAndLegalStatus,
          funFact: enhancement.knowledge?.funFact || localKnowledge.funFact,
        }
      };

      mergedResults.push(mergedObj);
    }

    // Retain any TFJS object that wasn't touched
    for (const baseObj of baseList) {
      if (!mergedResults.some((m) => m.id === baseObj.id)) {
        mergedResults.push(baseObj);
      }
    }

    return NextResponse.json({ enhancedObjects: mergedResults });
  } catch (error: any) {
    console.error('Error calling Gemini Vision API:', error?.message, error);
    return NextResponse.json({ enhancedObjects: fallbackObjects });
  }
}
