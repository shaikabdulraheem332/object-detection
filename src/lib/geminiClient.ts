import { GoogleGenAI } from '@google/genai';
import { DetectedObject, ObjectCategory } from './types';
import { getKnowledgeForObject } from './knowledgeEngine';
import { buildObjectHierarchy, assignInstanceNumbers } from './analyzer';

export async function analyzeWithGeminiClientSide(
  imageBase64: string,
  tfjsObjects: DetectedObject[],
  sampleHint?: string | null,
  apiKey?: string
): Promise<DetectedObject[] | null> {
  const keyToUse = apiKey || (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY : undefined);

  if (!keyToUse || keyToUse.trim() === '') {
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: keyToUse.trim() });

    let base64Data = imageBase64;
    let mimeType = 'image/jpeg';

    if (imageBase64.startsWith('http://') || imageBase64.startsWith('https://')) {
      const imgRes = await fetch(imageBase64);
      if (!imgRes.ok) return null;
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
Detect EVERY visible physical object in the image individually! (e.g. laptops, mobile phones, chairs, desks, monitors, keyboards, mice, water bottles, notebooks, pens, headphones, backpacks, lamps, clocks, shoes, jackets, vehicles, tools, products, etc.).

ACCURATE SPECIFIC OBJECT NAMING:
Use specific accurate names:
- Use "Mobile Phone" or "Smartphone" instead of "Electronic Device"
- Use "Office Chair" or "Chair" instead of "Furniture"
- Use "Water Bottle" instead of "Container"
- Use "Laptop" instead of "Computer"
- Use "Ballpoint Pen" instead of "Writing Object"
- Use "Sneaker" instead of "Footwear"
- Use "Backpack" instead of "Bag"
- Use "Desktop Monitor", "Keyboard", "Mouse", "Headphones", "Table Lamp", "Notebook"

Category must be one of:
'Electronics', 'Furniture', 'Stationery', 'Clothing', 'Kitchen', 'Household', 'Tool', 'Vehicle', 'Building', 'Outdoor', 'Sports', 'Eyewear', 'Toy', 'Other'

Return a JSON array following this schema:
[
  {
    "id": "obj_1",
    "displayName": "Laptop",
    "subCategory": "Portable Computer Workstation",
    "category": "Electronics",
    "score": 0.98,
    "bbox": [x, y, width, height],
    "knowledge": {
      "scientificOrTechName": "Portable Computer System",
      "primaryUses": "Computing, software development, data processing.",
      "specifications": ["Aluminum chassis", "High resolution display"],
      "keyFeatures": ["Integrated keyboard", "Trackpad"],
      "safetyAndLegalStatus": "Standard consumer electronics safety compliance.",
      "funFact": "The first portable computer was the Osborne 1, released in 1981."
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

      return assignInstanceNumbers(parsedObjects);
    }
  } catch (err) {
    console.error('Client-side Gemini AI error', err);
  }

  return null;
}
