import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { DetectedObject } from '@/lib/types';
import { getKnowledgeForObject } from '@/lib/knowledgeEngine';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  let fallbackObjects: any[] = [];
  try {
    const { imageBase64, tfjsObjects } = await req.json();
    fallbackObjects = tfjsObjects || [];

    if (!imageBase64) {
      return NextResponse.json({ error: 'Missing imageBase64' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not set. Using local knowledge enrichment.");
      return NextResponse.json({ enhancedObjects: tfjsObjects || [] });
    }

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
You are the world's most advanced AI computer vision system with deep knowledge of history, famous leaders, biology, birds, animals, tech devices, and objects.

${tfjsObjects && tfjsObjects.length > 0 ? `A local object detection model has already found the following objects in the image:\n${JSON.stringify(tfjsObjects, null, 2)}\n\nExamine this image carefully and ENHANCE the knowledge for these objects.` : `Examine this image carefully:`}

1. Identify all people, leaders, historical figures, birds, animals, objects, and eyewear in the image. EVEN IF the local model found nothing, you MUST identify the main subjects!
   - If a person is present, check if they are a world leader, historical figure, or famous personality (e.g. Dr. A.P.J. Abdul Kalam, N. Chandrababu Naidu [Present CM of Andhra Pradesh], Narendra Modi [Prime Minister of India], Mahatma Gandhi, Subhas Chandra Bose, Bhagat Singh, Albert Einstein, Steve Jobs, Elon Musk, etc.). If so, state their full name!
   - If a bird is present, identify its exact species.
   - If an animal is present, identify its specific species/breed.
   - If tech hardware is present (CPU / Desktop Tower, Computer Mouse, Keyboard, Digital Projector, Monitor, Laptop, Smartphone), identify each item precisely!
   - If medical items, tablets, pills, or blister strips are present (e.g. Metformin, Paracetamol, Aspirin, Antibiotics, Vitamin tablets, Blister foil strips), identify them as Medicine Tablets / Blister Strip and read any visible medicine name or dosage!
   - If toys, rocking horses, toy animals, kiddie rides, dolls, or play equipment are present in the image (especially when a child is riding or playing with them), identify each toy precisely as Toy / Rocking Horse / Kiddie Ride!
   - If an object or eyewear is present, identify its specific type.

Return a JSON array of identified objects. You MUST add NEW objects with estimated absolute bounding box [x, y, width, height] in pixels if they are not in the existing list.
Each item in the returned array MUST strictly follow this JSON schema:
[
  {
    "id": "MUST MATCH the id of the existing object from the list above, or create a new unique id like 'gemini_obj_1' if you found something new",
    "displayName": "Concise, specific name (MAX 3-5 WORDS). Examples: 'Medicine Tablets', 'Metformin Tablets IP', 'Rocking Horse Ride', 'Mini Projector'. DO NOT write long descriptions here!",
    "subCategory": "Descriptive category (e.g. 'Pharmaceutical Medication', 'Pill Blister Strip', 'Child Ride-On Toy', 'Famous Leader & Scientist', 'Avian Species', 'Smartphone')",
    "category": "One of: 'Human', 'Animal', 'Vehicle', 'Electronics', 'Eyewear', 'Food', 'Clothing', 'Plant', 'Tool', 'Outdoor', 'Furniture', 'Sports', 'Medical', 'Toy', 'Other'",
    "score": 0.98,
    "bbox": [x, y, width, height],
    "knowledge": {
      "scientificOrTechName": "Full scientific name, tech classification, or historical title",
      "primaryUses": "Detailed primary purpose, role, or historical contribution",
      "specifications": ["specification 1", "specification 2", "specification 3"],
      "keyFeatures": ["key feature 1", "key feature 2", "key feature 3"],
      "humanDetails": "Biography/Context for humans or behavioral traits for animals/birds",
      "safetyAndLegalStatus": "Protection status, legal classification, or regulatory safety standards",
      "funFact": "Fascinating historical, biological, or technological trivia fact"
    }
  }
]

Respond ONLY with raw JSON array. Do not use markdown backticks \`\`\`json.
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

    // Return a safe fallback rather than crashing the UI
    if (fallbackObjects.length === 0) {
      fallbackObjects.push({
        id: 'system_msg',
        class: 'system',
        displayName: error?.status === 429 || String(error?.message).includes('429')
          ? 'AI Quota Exceeded'
          : String(error?.message).includes('API key') || String(error?.message).includes('API_KEY')
            ? 'Invalid Gemini API Key'
            : 'AI Service Unavailable',
        score: 1.0,
        bbox: [20, 20, 400, 150],
        category: 'Other',
        subCategory: 'System Message',
        colorHex: '#ff0044',
        colorName: 'Error Red',
        estimatedSize: 'Medium',
        locationQuadrant: 'Top-Left',
        knowledge: {
          scientificOrTechName: 'System Status',
          primaryUses: error?.status === 429 || String(error?.message).includes('429')
            ? 'The Google Gemini AI free tier limit has been reached. Please click the Settings icon in the top header and enter your own free Gemini API key to continue!'
            : String(error?.message).includes('API key') || String(error?.message).includes('API_KEY') || String(error?.message).includes('400')
              ? 'Your Gemini API Key appears to be invalid. Please click the Settings icon (sliders) in the top bar and paste a valid Google Gemini API key starting with "AIzaSy".'
              : 'The AI vision service is temporarily offline. Basic local COCO model also does not support this specific item (e.g. Pen/Pencil).'
        }
      });
    }
    return NextResponse.json({ enhancedObjects: fallbackObjects });
  }
}
