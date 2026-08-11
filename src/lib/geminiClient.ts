import { GoogleGenAI } from '@google/genai';
import { DetectedObject } from './types';
import { getKnowledgeForObject } from './knowledgeEngine';

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
You are an advanced AI vision system. Analyze this image carefully:

1. Identify all animals, insects, people, astronomical objects, electronics, chargers, clothes, and items in the image.
   - ANIMALS: African Lion (Panthera leo), Bengal Tiger, Bear, Domestic Cat, Dog, Horse (living equine animal), Ants (Formicidae insect colony), Rat, Rodent, Birds, Peacocks, Wildlife.
     IMPORTANT: If a living African Lion is in the image, identify it as "African Lion (Panthera leo)" under Category "Animal"!
     If ants or insects are present, identify them as "Ants (Formicidae Colony)" under Category "Animal"!
   - ASTRONOMY: The Moon (Earth's Natural Satellite), Sun, Stars, Sky.
   - ELECTRONICS & CHARGERS: Phone Charger & Power Adapter, USB Cable, Headphones, Laptop, Mouse.
   - CLOTHING & FABRICS: Clothing / Patterned Fabric, Garments, Bedsheets.

Return a JSON array strictly following this schema:
[
  {
    "id": "gemini_client_1",
    "displayName": "African Lion (Panthera leo)",
    "subCategory": "Apex Feline Predator",
    "category": "Animal",
    "score": 0.98,
    "bbox": [x, y, width, height],
    "knowledge": {
      "scientificOrTechName": "Panthera leo — African Lion",
      "primaryUses": "Apex carnivore predator, keystone species in savannah ecosystems.",
      "specifications": ["Species: Panthera leo", "Bite force: 650 PSI", "Roar: heard 8km away"],
      "keyFeatures": ["Social cat living in prides", "Male lion mane protects neck"],
      "safetyAndLegalStatus": "IUCN Status: Vulnerable.",
      "funFact": "A lion's roar can be heard from 5 miles away!"
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
      const category = enhancement.category || 'Animal';
      const displayName = enhancement.displayName || 'Object';
      const localKnowledge = getKnowledgeForObject(displayName.toLowerCase(), displayName, category);

      mergedResults.push({
        id: enhancement.id || `client_gemini_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        class: displayName.toLowerCase(),
        displayName,
        subCategory: enhancement.subCategory || 'Wildlife Species',
        category,
        score: enhancement.score || 0.98,
        bbox: enhancement.bbox && Array.isArray(enhancement.bbox) && enhancement.bbox.length === 4
          ? enhancement.bbox
          : [50, 50, 400, 300],
        colorHex: '#00f3ff',
        colorName: 'Neon Cyan',
        estimatedSize: 'Large',
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

    return mergedResults;
  } catch (err) {
    console.warn("Client side Gemini AI call failed:", err);
    return null;
  }
}
