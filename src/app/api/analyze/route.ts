import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { DetectedObject, ObjectCategory } from '@/lib/types';
import { getKnowledgeForObject } from '@/lib/knowledgeEngine';
import { assignInstanceNumbers, buildObjectHierarchy } from '@/lib/analyzer';

export async function POST(req: Request) {
  let fallbackObjects: DetectedObject[] = [];
  try {
    const { imageBase64, tfjsObjects, customApiKey } = await req.json();
    fallbackObjects = tfjsObjects || [];

    if (!imageBase64) {
      return NextResponse.json({ error: 'Missing imageBase64' }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey || apiKey.trim() === '') {
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
You are the world's leading AI Object Detection Engine.

TASK:
Detect EVERY visible physical object in the image individually! (e.g. laptop, mobile phone, keyboard, mouse, monitor, water bottle, notebook, pen, headphones, backpack, chair, desk, lamp, clock, shoes, jacket, vehicles, tools, products, etc.).

CORRECT SPECIFIC OBJECT NAMING:
Use specific accurate names:
- Use "Mobile Phone" or "Smartphone" instead of "Electronic Device"
- Use "Office Chair" instead of "Furniture"
- Use "Water Bottle" instead of "Container"
- Use "Laptop" instead of "Computer"
- Use "Ballpoint Pen" instead of "Writing Object"
- Use "Sneaker" instead of "Footwear"
- Use "Backpack" instead of "Bag"

Valid Categories:
'Electronics', 'Furniture', 'Stationery', 'Clothing', 'Kitchen', 'Household', 'Tool', 'Vehicle', 'Building', 'Outdoor', 'Sports', 'Eyewear', 'Toy', 'Other'

Return a JSON array of physical objects.
Each item in the returned array MUST strictly follow this JSON schema:
[
  {
    "id": "obj_1",
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
        responseMimeType: "application/json"
      }
    });

    const text = response.text || '';
    const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const rawArray = JSON.parse(cleanJson);

    if (Array.isArray(rawArray) && rawArray.length > 0) {
      const parsedObjects: DetectedObject[] = rawArray.map((item: any, idx: number) => {
        const displayName = item.displayName || 'Physical Object';
        const category: ObjectCategory = item.category || 'Other';
        const subCategory = item.subCategory || 'Physical Item';

        const hierarchy = buildObjectHierarchy(category, subCategory, displayName);
        const defaultKnowledge = getKnowledgeForObject(displayName, displayName, category);

        return {
          id: item.id || `gemini_obj_${Date.now()}_${idx}`,
          class: displayName.toLowerCase(),
          displayName,
          subCategory,
          category,
          score: Math.min(0.99, Math.max(0.7, item.score || 0.95)),
          bbox: Array.isArray(item.bbox) && item.bbox.length === 4 ? item.bbox : [50, 50, 200, 200],
          hierarchy,
          colorHex: '#00f3ff',
          colorName: 'Cyber Blue',
          estimatedSize: 'Medium',
          locationQuadrant: 'Center',
          knowledge: item.knowledge || defaultKnowledge,
        };
      });

      return NextResponse.json({ enhancedObjects: assignInstanceNumbers(parsedObjects) });
    }

    return NextResponse.json({ enhancedObjects: assignInstanceNumbers(fallbackObjects) });
  } catch (err: any) {
    console.error('API Gemini Error', err);
    return NextResponse.json({ enhancedObjects: assignInstanceNumbers(fallbackObjects) });
  }
}
