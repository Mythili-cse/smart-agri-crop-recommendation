export interface CropInputParameters {
  nitrogen: number;      // N (mg/kg)
  phosphorus: number;    // P (mg/kg)
  potassium: number;     // K (mg/kg)
  temperature: number;   // Temperature (°C)
  humidity: number;      // Humidity (%)
  ph: number;            // Soil pH
  rainfall: number;      // Rainfall (mm)
}

export interface CropDetails {
  id: string;
  name: string;
  scientificName: string;
  category: 'Cereal' | 'Pulse' | 'Fruit' | 'Cash Crop' | 'Fiber' | 'Plantation';
  image: string;
  description: string;
  growingPeriodDays: string;
  waterRequirement: 'Low' | 'Moderate' | 'High' | 'Very High';
  idealConditions: {
    nRange: [number, number];
    pRange: [number, number];
    kRange: [number, number];
    tempRange: [number, number];
    humidityRange: [number, number];
    phRange: [number, number];
    rainfallRange: [number, number];
  };
  keyNutrientRole: string;
  agronomicTips: string[];
}

export interface PredictionResult {
  recommendedCrop: CropDetails;
  confidenceScore: number;
  topCrops: {
    crop: CropDetails;
    score: number;
  }[];
  explanation: string;
  parameterAnalysis: {
    parameter: string;
    value: number;
    unit: string;
    idealRange: string;
    status: 'Suitable' | 'Near Suitable' | 'Outside Preferred Range' | 'Optimal' | 'Sub-optimal' | 'Extreme';
    notes: string;
  }[];
  whyThisRecommendation: {
    title: string;
    description: string;
    icon: string;
  }[];
  inputs: CropInputParameters;
  timestamp: string;
  backendConnected: boolean;
}

export interface TeamMember {
  name: string;
  registerNumber: string;
  department: string;
  role: string;
  initials: string;
  avatarBg: string;
  contribution: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ProjectObjective {
  title: string;
  description: string;
  icon: string;
}

export interface TechStackItem {
  name: string;
  category: 'Backend ML' | 'Frontend UI' | 'Data Processing' | 'Tools & Versioning';
  description: string;
  iconName: string;
  isIntegratedNow: boolean;
}
