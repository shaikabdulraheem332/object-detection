export type ObjectCategory =
  | 'Electronics'
  | 'Furniture'
  | 'Stationery'
  | 'Clothing'
  | 'Kitchen'
  | 'Household'
  | 'Tool'
  | 'Vehicle'
  | 'Building'
  | 'Outdoor'
  | 'Sports'
  | 'Eyewear'
  | 'Toy'
  | 'Other';

export interface ObjectHierarchy {
  category: string; // e.g. "Electronics"
  subcategory: string; // e.g. "Computer"
  specificType: string; // e.g. "Laptop"
  exactModel?: string; // e.g. "Apple MacBook Pro"
}

export interface PersonProfile {
  fullName: string;
  profession: string;
  nationality: string;
  birthDate?: string;
  deathDate?: string;
  birthPlace?: string;
  majorContributions: string[];
  famousDiscoveries?: string[];
  awards?: string[];
  historicalImportance: string;
  timeline?: string[];
  interestingFacts: string[];
  booksOrWorks?: string[];
  relatedPeople?: string[];
}

export interface LandmarkProfile {
  placeName: string;
  city: string;
  stateProvince?: string;
  country: string;
  builtYear?: string;
  architect?: string;
  heightOrSize?: string;
  unescoStatus?: string;
  history: string;
  tourismInfo?: string;
  interestingFacts: string[];
  locationOnMap?: string;
}

export interface VehicleProfile {
  brand: string;
  model: string;
  vehicleType: string;
  manufacturer: string;
  engine?: string;
  fuelType?: string;
  approximatePrice?: string;
  country: string;
  features: string[];
}

export interface MobilePhoneProfile {
  brand: string;
  model: string;
  operatingSystem: string;
  processor?: string;
  ram?: string;
  storage?: string;
  camera?: string;
  battery?: string;
  screenSize?: string;
  releaseYear?: string;
  approximatePrice?: string;
  features: string[];
}

export interface WeaponProfile {
  name: string;
  type: string;
  manufacturer?: string;
  countryOfOrigin: string;
  yearIntroduced?: string;
  specifications: string[];
  historicalBackground: string;
  countriesThatOperateIt?: string[];
}

export interface BuildingProfile {
  name: string;
  purpose: string;
  city: string;
  country: string;
  height?: string;
  floors?: string;
  architect?: string;
  constructionYear?: string;
  history: string;
}

export interface FurnitureProfile {
  objectName: string;
  material: string[];
  uses: string[];
  commonLocations: string[];
  maintenanceTips?: string[];
}

export interface ClothingProfile {
  name: string;
  category: string;
  material?: string[];
  uses: string[];
  popularBrands?: string[];
}

export interface AnimalProfile {
  name: string;
  scientificName: string;
  habitat: string;
  diet: string;
  lifespan?: string;
  conservationStatus?: string;
  interestingFacts: string[];
}

export interface PlantProfile {
  name: string;
  scientificName: string;
  uses: string[];
  medicinalBenefits?: string[];
  waterRequirement?: string;
  sunlightRequirement?: string;
}

export interface AIKnowledgeExplanation {
  scientificOrTechName: string;
  primaryUses: string;
  specifications: string[];
  keyFeatures: string[];
  humanDetails?: string;
  safetyAndLegalStatus: string;
  funFact: string;
  // Extended profiles
  personProfile?: PersonProfile;
  landmarkProfile?: LandmarkProfile;
  vehicleProfile?: VehicleProfile;
  mobilePhoneProfile?: MobilePhoneProfile;
  weaponProfile?: WeaponProfile;
  buildingProfile?: BuildingProfile;
  furnitureProfile?: FurnitureProfile;
  clothingProfile?: ClothingProfile;
  animalProfile?: AnimalProfile;
  plantProfile?: PlantProfile;
}

export interface DetectedObject {
  id: string;
  class: string; // Raw label from model e.g. "chair", "cell phone"
  displayName: string; // Specific accurate name e.g. "Office Chair", "Mobile Phone", "Water Bottle"
  subCategory?: string; // Subcategory e.g. "Ergonomic Seating", "Touchscreen Device"
  category: ObjectCategory;
  score: number; // Confidence 0.0 - 1.0 (e.g. 0.98)
  bbox: [number, number, number, number]; // [x, y, width, height]
  instanceNumber?: number; // e.g. 1 for Chair #1, 2 for Chair #2
  instanceLabel?: string; // e.g. "Chair #1", "Bottle #2"
  hierarchy?: ObjectHierarchy; // Taxonomy breakdown
  colorHex?: string;
  colorName?: string;
  estimatedSize?: 'Small' | 'Medium' | 'Large';
  locationQuadrant?: 'Top-Left' | 'Top-Right' | 'Center' | 'Bottom-Left' | 'Bottom-Right';
  knowledge?: AIKnowledgeExplanation;
}

export interface DetectionResult {
  id: string;
  timestamp: number;
  sourceType: 'camera' | 'image' | 'video' | 'live';
  thumbnailUrl?: string; // base64 or object URL
  objects: DetectedObject[];
  inferenceTimeMs: number;
  totalObjectsCount: number;
}

export interface DetectionSettings {
  confidenceThreshold: number; // e.g. 0.5 (50%)
  boxColorTheme: 'cyan' | 'purple' | 'emerald' | 'amber' | 'pink';
  soundEnabled: boolean;
  speechEnabled: boolean;
  cameraResolution: '720p' | '1080p' | 'auto';
  inferenceSpeed: 'fast' | 'balanced' | 'accurate';
  customApiKey?: string;
}

export interface SystemStats {
  totalScans: number;
  totalObjectsDetected: number;
  mostDetectedObject: string;
  averageConfidence: number;
  todayScansCount: number;
}
