import { DetectedObject, ObjectCategory, ObjectHierarchy } from './types';
import { getKnowledgeForObject } from './knowledgeEngine';

// Master blacklist for all living organisms and biological materials
const LIVING_THING_KEYWORDS = new Set([
  // Humans
  'person', 'human', 'man', 'woman', 'child', 'baby', 'boy', 'girl', 'people', 'face',
  'head', 'guy', 'lady', 'infant', 'toddler', 'adult', 'teen', 'teenager', 'body',

  // Animals & Wildlife
  'animal', 'dog', 'cat', 'horse', 'cow', 'sheep', 'elephant', 'bear', 'zebra',
  'giraffe', 'rat', 'rodent', 'lion', 'tiger', 'monkey', 'ape', 'deer', 'pig',
  'fox', 'wolf', 'rabbit', 'hare', 'squirrel', 'hamster', 'mouse', 'donkey',
  'camel', 'goat', 'cheetah', 'leopard', 'panther', 'hyena', 'hippopotamus',
  'rhinoceros', 'kangaroo', 'koala', 'panda', 'sloth', 'otter', 'beaver',

  // Avian / Birds
  'bird', 'peacock', 'eagle', 'sparrow', 'parrot', 'duck', 'pigeon', 'owl',
  'falcon', 'hawk', 'swan', 'goose', 'crow', 'flamingo', 'penguin', 'canary',
  'stork', 'pelican', 'vulture', 'woodpecker', 'seagull',

  // Insects & Bugs
  'insect', 'ant', 'ants', 'bee', 'spider', 'butterfly', 'beetle', 'fly',
  'mosquito', 'caterpillar', 'wasp', 'cricket', 'grasshopper', 'cockroach',
  'moth', 'dragonfly', 'ladybug', 'centipede', 'scorpion',

  // Marine / Aquatic
  'fish', 'shark', 'dolphin', 'whale', 'salmon', 'trout', 'goldfish', 'octopus',
  'squid', 'jellyfish', 'crab', 'lobster', 'shrimp', 'seal', 'walrus', 'starfish',

  // Amphibians & Reptiles
  'reptile', 'snake', 'lizard', 'turtle', 'tortoise', 'crocodile', 'alligator',
  'frog', 'toad', 'chameleon', 'gecko', 'iguana', 'viper', 'python', 'cobra',

  // Plants & Biological Vegetation
  'plant', 'tree', 'flower', 'flowers', 'grass', 'potted plant', 'rose', 'shrub',
  'leaf', 'leaves', 'bush', 'cactus', 'fern', 'moss', 'bloom', 'oak', 'pine',
  'maple', 'coconut', 'banyan', 'neem', 'sunflower', 'tulip', 'orchid', 'lily',
  'palm', 'stem', 'branch', 'weed', 'vegetation', 'flora',

  // Biological Food & Produce (biological origin)
  'food', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot',
  'hot dog', 'pizza', 'donut', 'cake', 'fruit', 'vegetable', 'meat', 'chicken',
  'beef', 'pork', 'burger', 'salad', 'strawberry', 'grape', 'tomato', 'potato',
  'onion', 'garlic', 'mushroom', 'bread', 'cheese', 'egg', 'cookie', 'pie'
]);

/**
  Checks whether a given class label or category represents a living organism or biological food.
 */
export function isLivingThing(rawClass: string, category?: string): boolean {
  if (!rawClass) return false;
  const normalized = rawClass.toLowerCase().trim();

  // Explicit check against blacklist words
  if (LIVING_THING_KEYWORDS.has(normalized)) return true;

  // Check substring matches for compound living labels (e.g. "potted plant", "human face", "domestic cat")
  for (const word of LIVING_THING_KEYWORDS) {
    if (normalized === word || normalized.startsWith(`${word} `) || normalized.endsWith(` ${word}`)) {
      return true;
    }
  }

  // Category level living check
  if (category) {
    const catUpper = category.toUpperCase();
    if (catUpper === 'HUMAN' || catUpper === 'ANIMAL' || catUpper === 'PLANT' || catUpper === 'FOOD') {
      return true;
    }
  }

  return false;
}

// COCO-SSD and general object mapping to rich Non-Living categories
export const CATEGORY_MAP: Record<string, ObjectCategory> = {
  // Electronics
  tv: 'Electronics',
  laptop: 'Electronics',
  mouse: 'Electronics',
  remote: 'Electronics',
  keyboard: 'Electronics',
  'cell phone': 'Electronics',
  'mobile phone': 'Electronics',
  smartphone: 'Electronics',
  tablet: 'Electronics',
  desktop: 'Electronics',
  computer: 'Electronics',
  monitor: 'Electronics',
  display: 'Electronics',
  cpu: 'Electronics',
  headphones: 'Electronics',
  headset: 'Electronics',
  headphone: 'Electronics',
  earphones: 'Electronics',
  earbuds: 'Electronics',
  speaker: 'Electronics',
  camera: 'Electronics',
  charger: 'Electronics',
  'phone charger': 'Electronics',
  adapter: 'Electronics',
  'power adapter': 'Electronics',
  'power bank': 'Electronics',
  smartwatch: 'Electronics',
  calculator: 'Electronics',
  printer: 'Electronics',
  router: 'Electronics',
  'game controller': 'Electronics',
  microwave: 'Electronics',
  oven: 'Electronics',
  toaster: 'Electronics',
  refrigerator: 'Electronics',
  projector: 'Electronics',

  // Furniture
  chair: 'Furniture',
  'office chair': 'Furniture',
  'dining chair': 'Furniture',
  sofa: 'Furniture',
  couch: 'Furniture',
  table: 'Furniture',
  desk: 'Furniture',
  'dining table': 'Furniture',
  'coffee table': 'Furniture',
  bed: 'Furniture',
  cabinet: 'Furniture',
  wardrobe: 'Furniture',
  bookshelf: 'Furniture',
  drawer: 'Furniture',
  bench: 'Furniture',
  stool: 'Furniture',
  toilet: 'Furniture',
  clock: 'Furniture',
  vase: 'Furniture',

  // Stationery
  pen: 'Stationery',
  'ballpoint pen': 'Stationery',
  pencil: 'Stationery',
  marker: 'Stationery',
  eraser: 'Stationery',
  ruler: 'Stationery',
  notebook: 'Stationery',
  book: 'Stationery',
  stapler: 'Stationery',
  scissors: 'Stationery',
  paper: 'Stationery',
  clipboard: 'Stationery',
  'pencil case': 'Stationery',

  // Clothing & Wearables
  shirt: 'Clothing',
  't-shirt': 'Clothing',
  jacket: 'Clothing',
  jeans: 'Clothing',
  trousers: 'Clothing',
  shoes: 'Clothing',
  sneakers: 'Clothing',
  sandals: 'Clothing',
  belt: 'Clothing',
  hat: 'Clothing',
  cap: 'Clothing',
  backpack: 'Clothing',
  handbag: 'Clothing',
  wallet: 'Clothing',
  watch: 'Clothing',
  wristwatch: 'Clothing',
  sunglasses: 'Eyewear',
  eyeglasses: 'Eyewear',
  glasses: 'Eyewear',
  helmet: 'Clothing',
  umbrella: 'Clothing',
  tie: 'Clothing',
  suitcase: 'Clothing',
  cloth: 'Clothing',
  clothes: 'Clothing',
  clothing: 'Clothing',
  fabric: 'Clothing',

  // Kitchen Utensils & Non-living Containers
  plate: 'Kitchen',
  bowl: 'Kitchen',
  cup: 'Kitchen',
  mug: 'Kitchen',
  glass: 'Kitchen',
  'wine glass': 'Kitchen',
  spoon: 'Kitchen',
  fork: 'Kitchen',
  knife: 'Kitchen',
  pan: 'Kitchen',
  pot: 'Kitchen',
  kettle: 'Kitchen',
  bottle: 'Kitchen',
  'water bottle': 'Kitchen',
  'lunch box': 'Kitchen',
  'cutting board': 'Kitchen',
  tray: 'Kitchen',

  // Household Items
  box: 'Household',
  basket: 'Household',
  mirror: 'Household',
  lamp: 'Household',
  'table lamp': 'Household',
  fan: 'Household',
  curtain: 'Household',
  door: 'Household',
  window: 'Household',
  pillow: 'Household',
  blanket: 'Household',
  towel: 'Household',
  'trash bin': 'Household',
  bucket: 'Household',
  broom: 'Household',
  mop: 'Household',
  iron: 'Household',
  'vacuum cleaner': 'Household',
  'hair drier': 'Household',
  toothbrush: 'Household',

  // Tools
  hammer: 'Tool',
  screwdriver: 'Tool',
  wrench: 'Tool',
  pliers: 'Tool',
  drill: 'Tool',
  saw: 'Tool',
  'tape measure': 'Tool',
  level: 'Tool',
  toolbox: 'Tool',

  // Vehicles
  bicycle: 'Vehicle',
  car: 'Vehicle',
  sedan: 'Vehicle',
  suv: 'Vehicle',
  hatchback: 'Vehicle',
  bus: 'Vehicle',
  truck: 'Vehicle',
  van: 'Vehicle',
  motorcycle: 'Vehicle',
  scooter: 'Vehicle',
  train: 'Vehicle',
  airplane: 'Vehicle',
  aircraft: 'Vehicle',
  boat: 'Vehicle',
  ship: 'Vehicle',

  // Outdoor & Infrastructure
  'traffic light': 'Outdoor',
  'fire hydrant': 'Outdoor',
  'stop sign': 'Outdoor',
  'parking meter': 'Outdoor',
  sign: 'Outdoor',
  'traffic sign': 'Outdoor',
  pole: 'Outdoor',

  // Sports & Toys
  skis: 'Sports',
  snowboard: 'Sports',
  'sports ball': 'Sports',
  'baseball bat': 'Sports',
  'baseball glove': 'Sports',
  skateboard: 'Sports',
  surfboard: 'Sports',
  'tennis racket': 'Sports',
  toy: 'Toy',
  'rocking horse': 'Toy',
  'teddy bear': 'Toy',
  doll: 'Toy',
  'toy car': 'Toy',
  frisbee: 'Toy',
  kite: 'Toy',
};

// Generic-to-Specific Name mapping dictionary
const SPECIFIC_NAME_MAP: Record<string, { displayName: string; subCategory: string; category: ObjectCategory }> = {
  // Electronics
  'cell phone': { displayName: 'Mobile Phone', subCategory: 'Touchscreen Smartphone', category: 'Electronics' },
  'mobile phone': { displayName: 'Mobile Phone', subCategory: 'Handheld Smartphone', category: 'Electronics' },
  smartphone: { displayName: 'Mobile Phone', subCategory: '5G Smart Device', category: 'Electronics' },
  computer: { displayName: 'Desktop Computer', subCategory: 'Personal Computing Workstation', category: 'Electronics' },
  laptop: { displayName: 'Laptop', subCategory: 'Portable Computer', category: 'Electronics' },
  tv: { displayName: 'Television', subCategory: 'Digital Display Screen', category: 'Electronics' },
  monitor: { displayName: 'Desktop Monitor', subCategory: 'High Resolution Display', category: 'Electronics' },
  keyboard: { displayName: 'Computer Keyboard', subCategory: 'Hardware Input Peripheral', category: 'Electronics' },
  mouse: { displayName: 'Computer Mouse', subCategory: 'Optical Pointing Device', category: 'Electronics' },
  headphone: { displayName: 'Headphones', subCategory: 'Over-Ear Audio Headset', category: 'Electronics' },
  headphones: { displayName: 'Headphones', subCategory: 'Over-Ear Audio Headset', category: 'Electronics' },
  headset: { displayName: 'Headphones', subCategory: 'Acoustic Headset with Mic', category: 'Electronics' },
  earphones: { displayName: 'Earphones', subCategory: 'In-Ear Audio Earbuds', category: 'Electronics' },
  earbuds: { displayName: 'Earphones', subCategory: 'Wireless Earbuds', category: 'Electronics' },
  charger: { displayName: 'Phone Charger', subCategory: 'Power Adapter & Cable', category: 'Electronics' },
  'phone charger': { displayName: 'Phone Charger', subCategory: 'Wall Charger Adapter', category: 'Electronics' },

  // Furniture
  chair: { displayName: 'Office Chair', subCategory: 'Ergonomic Desk Seating', category: 'Furniture' },
  'office chair': { displayName: 'Office Chair', subCategory: 'Ergonomic Workstation Chair', category: 'Furniture' },
  table: { displayName: 'Desk', subCategory: 'Workstation Table', category: 'Furniture' },
  'dining table': { displayName: 'Dining Table', subCategory: 'Wood / Glass Table Surface', category: 'Furniture' },
  desk: { displayName: 'Desk', subCategory: 'Office Work Surface', category: 'Furniture' },
  couch: { displayName: 'Sofa / Couch', subCategory: 'Upholstered Living Room Seating', category: 'Furniture' },
  sofa: { displayName: 'Sofa / Couch', subCategory: 'Comfort Seating Furniture', category: 'Furniture' },

  // Containers & Utensils
  bottle: { displayName: 'Water Bottle', subCategory: 'Hydration Container', category: 'Kitchen' },
  'water bottle': { displayName: 'Water Bottle', subCategory: 'Reusable Liquid Container', category: 'Kitchen' },
  cup: { displayName: 'Mug / Cup', subCategory: 'Beverage Container', category: 'Kitchen' },
  mug: { displayName: 'Mug', subCategory: 'Ceramic Drinkware', category: 'Kitchen' },
  container: { displayName: 'Water Bottle', subCategory: 'Storage Container', category: 'Kitchen' },

  // Stationery
  pen: { displayName: 'Ballpoint Pen', subCategory: 'Writing Instrument', category: 'Stationery' },
  pencil: { displayName: 'Pencil', subCategory: 'Graphite Writing Tool', category: 'Stationery' },
  'writing object': { displayName: 'Ballpoint Pen', subCategory: 'Ink Writing Instrument', category: 'Stationery' },
  notebook: { displayName: 'Notebook', subCategory: 'Paper Journal', category: 'Stationery' },
  book: { displayName: 'Book', subCategory: 'Bound Print Volume', category: 'Stationery' },

  // Clothing & Wearables
  shoes: { displayName: 'Sneakers', subCategory: 'Athletic Footwear', category: 'Clothing' },
  footwear: { displayName: 'Sneakers', subCategory: 'Casual / Athletic Shoes', category: 'Clothing' },
  backpack: { displayName: 'Backpack', subCategory: 'Travel / School Bag', category: 'Clothing' },
  bag: { displayName: 'Backpack', subCategory: 'Storage Bag', category: 'Clothing' },
  handbag: { displayName: 'Handbag', subCategory: 'Personal Accessory Bag', category: 'Clothing' },
  sunglasses: { displayName: 'Sunglasses', subCategory: 'UV Eyewear Protection', category: 'Eyewear' },
  glasses: { displayName: 'Eyeglasses', subCategory: 'Optical Prescription Glasses', category: 'Eyewear' },

  // Household
  lamp: { displayName: 'Table Lamp', subCategory: 'Desk Lighting Fixture', category: 'Household' },
  clock: { displayName: 'Clock', subCategory: 'Timekeeping Device', category: 'Household' },
};

export function formatClassTitle(rawClass: string): string {
  if (!rawClass) return 'Object';
  return rawClass
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getCategoryForClass(rawClass: string): ObjectCategory {
  const normalized = rawClass.toLowerCase();
  return CATEGORY_MAP[normalized] || 'Other';
}

/**
 * Construct hierarchical taxonomy for non-living objects
 */
export function buildObjectHierarchy(
  category: string,
  subCategory?: string,
  displayName?: string,
  exactModel?: string
): ObjectHierarchy {
  return {
    category: category || 'Non-Living Object',
    subcategory: subCategory || 'Physical Equipment',
    specificType: displayName || 'Object',
    exactModel: exactModel && exactModel !== displayName ? exactModel : undefined,
  };
}

/**
 * Assigns instance numbering for multi-object detection.
 * If 3 chairs, labels them "Chair #1", "Chair #2", "Chair #3"
 */
export function assignInstanceNumbers(objects: DetectedObject[]): DetectedObject[] {
  // First, filter out any living thing that slipped through
  const nonLivingObjects = objects.filter((obj) => !isLivingThing(obj.class, obj.category));

  const countsMap: Record<string, number> = {};
  nonLivingObjects.forEach((obj) => {
    const baseName = obj.displayName;
    countsMap[baseName] = (countsMap[baseName] || 0) + 1;
  });

  const currentTracker: Record<string, number> = {};
  return nonLivingObjects.map((obj) => {
    const baseName = obj.displayName;
    const totalForType = countsMap[baseName] || 1;

    let instanceNum: number | undefined = undefined;
    let instanceLabel = baseName;

    if (totalForType > 1) {
      currentTracker[baseName] = (currentTracker[baseName] || 0) + 1;
      instanceNum = currentTracker[baseName];
      instanceLabel = `${baseName} #${instanceNum}`;
    }

    const hierarchy = obj.hierarchy || buildObjectHierarchy(obj.category, obj.subCategory, baseName);

    return {
      ...obj,
      instanceNumber: instanceNum,
      instanceLabel: instanceLabel,
      hierarchy,
    };
  });
}

/**
 * Extracts dominant color from ROI canvas
 */
export function extractDominantColor(
  ctx: CanvasRenderingContext2D,
  bbox: [number, number, number, number],
  canvasWidth: number,
  canvasHeight: number
): { hex: string; name: string } {
  try {
    const [x, y, width, height] = bbox;
    const clampX = Math.max(0, Math.min(canvasWidth - 1, Math.floor(x)));
    const clampY = Math.max(0, Math.min(canvasHeight - 1, Math.floor(y)));
    const clampW = Math.max(1, Math.min(canvasWidth - clampX, Math.floor(width)));
    const clampH = Math.max(1, Math.min(canvasHeight - clampY, Math.floor(height)));

    const sampleX = clampX + Math.floor(clampW * 0.25);
    const sampleY = clampY + Math.floor(clampH * 0.25);
    const sampleW = Math.max(1, Math.floor(clampW * 0.5));
    const sampleH = Math.max(1, Math.floor(clampH * 0.5));

    const imageData = ctx.getImageData(sampleX, sampleY, sampleW, sampleH);
    const data = imageData.data;

    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let i = 0; i < data.length; i += 16) {
      rSum += data[i];
      gSum += data[i + 1];
      bSum += data[i + 2];
      count++;
    }

    if (count === 0) return { hex: '#00f3ff', name: 'Neon Blue' };

    const r = Math.round(rSum / count);
    const g = Math.round(gSum / count);
    const b = Math.round(bSum / count);

    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    const name = getColorName(r, g, b);

    return { hex, name };
  } catch (err) {
    return { hex: '#00f3ff', name: 'Cyber Blue' };
  }
}

function getColorName(r: number, g: number, b: number): string {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  if (diff < 20) {
    if (max < 50) return 'Black/Dark';
    if (max > 200) return 'White/Silver';
    return 'Gray';
  }

  if (r >= g && r >= b) {
    return g > 150 ? 'Yellow/Orange' : 'Red/Crimson';
  } else if (g >= r && g >= b) {
    return 'Green/Emerald';
  } else {
    return r > 100 ? 'Purple/Violet' : 'Blue/Cyan';
  }
}

/**
 * Visual Feature Heuristic Fallback Detector for non-living objects
 * Heuristically identifies non-living physical items when COCO-SSD misses them
 */
export function detectVisualFeatureFallbacks(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): { class: string; score: number; bbox: [number, number, number, number] }[] {
  try {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    let totalPixels = width * height;
    let metallicCount = 0;
    let minX = width, minY = height, maxX = 0, maxY = 0;

    for (let y = 0; y < height; y += 4) {
      for (let x = 0; x < width; x += 4) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        // Metallic reflection / electronics surface detection
        if (r > 180 && g > 180 && b > 190 && Math.abs(r - g) < 15) {
          metallicCount++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const sampledTotal = totalPixels / 16;
    const fallbacks: { class: string; score: number; bbox: [number, number, number, number] }[] = [];

    if (metallicCount / sampledTotal > 0.05 && maxX > minX && maxY > minY) {
      fallbacks.push({
        class: 'laptop',
        score: 0.88,
        bbox: [minX, minY, maxX - minX, maxY - minY],
      });
    }

    return fallbacks;
  } catch (e) {
    return [];
  }
}

export function estimateSize(
  bbox: [number, number, number, number],
  frameWidth: number,
  frameHeight: number
): 'Small' | 'Medium' | 'Large' {
  const [, , w, h] = bbox;
  const objectArea = w * h;
  const frameArea = Math.max(1, frameWidth * frameHeight);
  const ratio = objectArea / frameArea;

  if (ratio > 0.35) return 'Large';
  if (ratio > 0.1) return 'Medium';
  return 'Small';
}

export function estimateQuadrant(
  bbox: [number, number, number, number],
  frameWidth: number,
  frameHeight: number
): 'Top-Left' | 'Top-Right' | 'Center' | 'Bottom-Left' | 'Bottom-Right' {
  const [x, y, w, h] = bbox;
  const centerX = x + w / 2;
  const centerY = y + h / 2;

  const relX = centerX / frameWidth;
  const relY = centerY / frameHeight;

  if (relX >= 0.33 && relX <= 0.67 && relY >= 0.33 && relY <= 0.67) {
    return 'Center';
  }

  if (relX < 0.5) {
    return relY < 0.5 ? 'Top-Left' : 'Bottom-Left';
  } else {
    return relY < 0.5 ? 'Top-Right' : 'Bottom-Right';
  }
}

/**
 * Enhances raw prediction into rich DetectedObject metadata.
 * ENFORCES Living-Thing Filtering!
 */
export function enhancePrediction(
  rawPrediction: { class: string; score: number; bbox: [number, number, number, number] },
  index: number,
  ctx?: CanvasRenderingContext2D | null,
  frameWidth: number = 640,
  frameHeight: number = 480,
  sampleHint?: string | null
): DetectedObject | null {
  const rawClassLower = (rawPrediction.class || '').toLowerCase().trim();

  // STRICT LIVING THING EXCLUSION
  if (isLivingThing(rawClassLower)) {
    return null;
  }

  let displayName = formatClassTitle(rawPrediction.class);
  let category = getCategoryForClass(rawPrediction.class);
  let subCategory: string | undefined = undefined;

  // Check generic-to-specific naming dictionary first
  if (SPECIFIC_NAME_MAP[rawClassLower]) {
    const spec = SPECIFIC_NAME_MAP[rawClassLower];
    displayName = spec.displayName;
    subCategory = spec.subCategory;
    category = spec.category;
  }

  // Refine specific object names
  if (rawClassLower === 'clock') {
    const [, , w, h] = rawPrediction.bbox;
    const area = w * h;
    const aspectRatio = w / (h || 1);
    if (area < 6000 || (area < 12000 && aspectRatio >= 0.8 && aspectRatio <= 1.3)) {
      displayName = 'Wristwatch';
      subCategory = 'Personal Wearable Accessory';
      category = 'Clothing';
    } else {
      displayName = 'Clock';
      subCategory = 'Wall / Desk Timekeeping Device';
      category = 'Household';
    }
  } else if (rawClassLower === 'tv') {
    const aspect = rawPrediction.bbox[2] / (rawPrediction.bbox[3] || 1);
    if (aspect >= 1.2 && aspect <= 2.2) {
      displayName = 'Desktop Monitor';
      subCategory = 'Computer Screen Display';
      category = 'Electronics';
    } else {
      displayName = 'Television';
      subCategory = 'Smart TV Display Screen';
      category = 'Electronics';
    }
  }

  // Re-verify category is non-living
  if (isLivingThing(displayName, category)) {
    return null;
  }

  let colorHex = '#00f3ff';
  let colorName = 'Neon Cyan';
  if (ctx) {
    const colorInfo = extractDominantColor(ctx, rawPrediction.bbox, frameWidth, frameHeight);
    colorHex = colorInfo.hex;
    colorName = colorInfo.name;
  }

  const estimatedSize = estimateSize(rawPrediction.bbox, frameWidth, frameHeight);
  const locationQuadrant = estimateQuadrant(rawPrediction.bbox, frameWidth, frameHeight);

  // Attach Deep AI Knowledge breakdown
  const knowledgeLookupKey = sampleHint || displayName;
  const knowledge = getKnowledgeForObject(knowledgeLookupKey, displayName, category);

  const hierarchy = buildObjectHierarchy(category, subCategory, displayName);

  return {
    id: `non_living_${Date.now()}_${index}_${Math.random().toString(36).substring(2, 7)}`,
    class: rawPrediction.class,
    displayName,
    subCategory,
    category,
    score: rawPrediction.score,
    bbox: rawPrediction.bbox,
    hierarchy,
    colorHex,
    colorName,
    estimatedSize,
    locationQuadrant,
    knowledge,
  };
}
