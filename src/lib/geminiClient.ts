import { GoogleGenAI } from '@google/genai';
import { DetectedObject, ObjectCategory } from './types';
import { getKnowledgeForObject } from './knowledgeEngine';
import { buildObjectHierarchy, isLivingThing, assignInstanceNumbers } from './analyzer';

export async function analyzeWithGeminiClientSide(
  imageBase64: string,
  tfjsObjects: DetectedObject[],
  sampleHint?: string | null,
  apiKey?: string
): Promise<DetectedObject[] | null> {
  const keyToUse = apiKey || (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_GEMINI_API_KEY : undefined);

  if (!keyToUse || keyToUse.trim() === '' || keyToUse.startsWith('AQ.')) {
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
You are an AI vision system specialized ONLY in NON-LIVING PHYSICAL OBJECT DETECTION.

VERY IMPORTANT STRICT RULE:
You MUST COMPLETELY IGNORE all living things in the image!
NEVER DETECT OR RETURN:
- Humans, babies, children, adults, people, faces
- Animals, dogs, cats, horses, birds, wildlife
- Insects, ants, bees, spiders, beetles
- Fish, reptiles, snakes, turtles, amphibians
- Plants, trees, flowers, grass, leaves, shrubs, flora
- Biological food items (fruits, vegetables, meat, sandwiches, pizza)

FOCUS ONLY ON NON-LIVING PHYSICAL OBJECTS.
Detect EVERY visible non-living physical object individually! (If there are 15 non-living objects like laptops, phones, chairs, desks, pens, bottles, books, headphones, backpacks, lamps, attempt to detect ALL of them individually).

ACCURATE SPECIFIC OBJECT NAMING RULES:
Use specific accurate names instead of generic names!
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
    "id": "non_living_1",
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

    const responseText = response.text || "[]";
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const aiEnhancements = JSON.parse(cleanJson);

    if (!Array.isArray(aiEnhancements) || aiEnhancements.length === 0) {
      return null;
    }

    const mergedResults: DetectedObject[] = [];
    for (const enhancement of aiEnhancements) {
      const displayName = enhancement.displayName || 'Physical Object';
      const category = (enhancement.category as ObjectCategory) || 'Electronics';

      // Enforce living exclusion filter
      if (isLivingThing(displayName, category)) {
        continue;
      }

      const localKnowledge = getKnowledgeForObject(displayName.toLowerCase(), displayName, category);

      mergedResults.push({
        id: enhancement.id || `client_gemini_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        class: displayName.toLowerCase(),
        displayName,
        subCategory: enhancement.subCategory || 'Physical Equipment',
        category,
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
      });
    }

    // Filter living things & assign instance numbers (#1, #2...)
    return assignInstanceNumbers(mergedResults);
  } catch (err) {
    console.warn("Client side Gemini AI call failed:", err);
    return null;
  }
}
