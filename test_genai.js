const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function test() {
  try {
    const imgRes = await fetch('https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png');
    const buffer = await imgRes.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `You are the world's most advanced AI computer vision system with deep knowledge of history, famous leaders, biology, birds, animals, tech devices, and objects.

Examine this image carefully:
1. Identify all people, leaders, historical figures, birds, animals, objects, and eyewear in the image.
   - If a person is present, check if they are a world leader, historical figure, or famous personality (e.g. Dr. A.P.J. Abdul Kalam, N. Chandrababu Naidu [Present CM of Andhra Pradesh], Narendra Modi [Prime Minister of India], Mahatma Gandhi, Subhas Chandra Bose, Bhagat Singh, Albert Einstein, Steve Jobs, Elon Musk, etc.). If so, state their full name!
   - If a bird is present, identify its exact species.
   - If an animal is present, identify its specific species/breed.
   - If an object or eyewear is present, identify its specific type.

Return a JSON array of identified objects.` },
            { inlineData: { data: base64Data, mimeType: 'image/jpeg' } }
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
    console.log(response.text);
  } catch (error) {
    console.error('ERROR:', error);
  }
}

test();
