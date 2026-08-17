import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { DetectedObject, ObjectCategory } from '@/lib/types';
import { getKnowledgeForObject } from '@/lib/knowledgeEngine';
import { isLivingThing, assignInstanceNumbers, buildObjectHierarchy } from '@/lib/analyzer';

export async function POST(req: Request) {
  let fallbackObjects: DetectedObject[] = [];
  try {
    const { imageBase64, tfjsObjects, customApiKey } = await req.json();
    
    // Filter fallback TFJS objects to strictly exclude living things
    fallbackObjects = (tfjsObjects || []).filter(
      (obj: DetectedObject) => !isLivingThing(obj.class, obj.category)
    );

    if (!imageBase64) {
      return NextResponse.json({ error: 'Missing imageBase64' }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.trim() === '' || apiKey.startsWith('AQ.')) {
      console.warn("GEMINI_API_KEY is missing or invalid. Returning local non-living detection objects.");
      return NextResponse.json({ enhancedObjects: assignInstanceNumbers(fallbackObjects) });
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
You are the world's leading Non-Living Object Detection AI.

STRICT MANDATORY RULE:
You MUST COMPLETELY IGNORE ALL LIVING THINGS in the image!
NEVER DETECT OR RETURN:
- Humans, babies, children, adults, people, faces, bodies
- Animals, dogs, cats, horses, birds, wildlife, insects, ants, fish, reptiles
- Plants, trees, flowers, grass, leaves, shrubs, biological vegetation
- Biological food items (fruits, vegetables, meat, sandwiches, pizza)

FOCUS EXCLUSIVELY ON NON-LIVING PHYSICAL OBJECTS.
Detect EVERY visible non-living physical object individually! (e.g. laptop, mobile phone, keyboard, mouse, monitor, water bottle, notebook, pen, headphones, backpack, chair, desk, lamp, clock, shoes, jacket).

CORRECT SPECIFIC OBJECT NAMING:
Do not use overly generic labels when specific accurate names are visible:
- BAD: "Electronic Device" -> BETTER: "Mobile Phone" or "Smartphone"
- BAD: "Furniture" -> BETTER: "Office Chair"
- BAD: "Container" -> BETTER: "Water Bottle"
- BAD: "Computer" -> BETTER: "Laptop"
- BAD: "Writing Object" -> BETTER: "Ballpoint Pen"
- BAD: "Footwear" -> BETTER: "Sneaker"
- BAD: "Bag" -> BETTER: "Backpack"

Valid Categories:
'Electronics', 'Furniture', 'Stationery', 'Clothing', 'Kitchen', 'Household', 'Tool', 'Vehicle', 'Building', 'Outdoor', 'Sports', 'Eyewear', 'Toy', 'Other'

Return a JSON array of non-living physical objects.
Each item in the returned array MUST strictly follow this JSON schema:
[
  {
    "id": "non_living_1",
    "displayName": "Specific Object Name (e.g., 'Laptop', 'Mobile Phone', 'Office Chair', 'Water Bottle', 'Ballpoint Pen', 'Headphones', 'Backpack', 'Desk')",
    "subCategory": "Subcategory description",
    "category": "One of: 'Electronics', 'Furniture', 'Stationery', 'Clothing', 'Kitchen', 'Household', 'Tool', 'Vehicle', 'Building', 'Outdoor', 'Sports', 'Eyewear', 'Toy', 'Other'",
    "score": 0.98,
    "bbox": [x, y, width, height],
    "knowledge": {
      "scientificOrTechName": "Tech classification or material composition",
      "primaryUses": "Primary functional usage",
      "specifications": ["spec 1", "spec 2"],
      "keyFeatures": ["feature 1", "feature 2"],
      "humanDetails": "Physical characteristics",
      "safetyAndLegalStatus": "Safety and manufacturing standards",
      "funFact": "Historical or design trivia fact"
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

    if (!Array.isArray(aiEnhancements) || aiEnhancements.length === 0) {
      return NextResponse.json({ enhancedObjects: assignInstanceNumbers(fallbackObjects) });
    }

    const mergedResults: DetectedObject[] = [];

    for (const enhancement of aiEnhancements) {
      const displayName = enhancement.displayName || 'Physical Object';
      const category = (enhancement.category as ObjectCategory) || 'Other';

      // STRICT LIVING THING FILTER STAGE
      if (isLivingThing(displayName, category)) {
        continue;
      }

      const localKnowledge = getKnowledgeForObject(
        displayName.toLowerCase(),
        displayName,
        category
      );

      const mergedObj: DetectedObject = {
        id: enhancement.id || `gemini_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        class: displayName.toLowerCase(),
        displayName: displayName,
        subCategory: enhancement.subCategory || 'Physical Equipment',
        category: category,
        score: enhancement.score || 0.96,
        bbox: enhancement.bbox && Array.isArray(enhancement.bbox) && enhancement.bbox.length === 4
          ? enhancement.bbox
          : [50, 50, 200, 200],
        hierarchy: buildObjectHierarchy(category, enhancement.subCategory, displayName),
        colorHex: '#00f3ff',
        colorName: 'Neon Cyan',
        estimatedSize: 'Medium',
        locationQuadrant: 'Center',
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

    // Assign instance numbers (e.g. Chair #1, Chair #2, Bottle #1, Bottle #2)
    const finalObjects = assignInstanceNumbers(mergedResults.length > 0 ? mergedResults : fallbackObjects);

    return NextResponse.json({ enhancedObjects: finalObjects });
  } catch (error: any) {
    console.error('Error calling Gemini Vision API:', error?.message, error);
    return NextResponse.json({ enhancedObjects: assignInstanceNumbers(fallbackObjects) });
  }
}
