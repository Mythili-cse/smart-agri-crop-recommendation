import type { CropInputParameters, PredictionResult, CropDetails } from '../types';
import { cropDataset, fallbackCrop } from '../data/cropData';

interface ScoredCrop {
  crop: CropDetails;
  score: number;
  paramScores: Record<string, { subScore: number; status: 'Suitable' | 'Near Suitable' | 'Outside Preferred Range'; note: string }>;
}

/**
 * Calculates deterministic agronomic compatibility score for all crops in dataset.
 * Evaluates Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Soil pH, and Rainfall.
 */
export function calculateCropRecommendations(
  input: CropInputParameters,
  backendConnected: boolean = false
): PredictionResult {
  const scoredCrops: ScoredCrop[] = cropDataset.map((crop) => {
    const cond = crop.idealConditions;

    // 1. Calculate continuous sub-scores (0.0 to 1.0) for 7 parameters
    const n = calculateSubScore(input.nitrogen, cond.nRange, 50, 'mg/kg');
    const p = calculateSubScore(input.phosphorus, cond.pRange, 40, 'mg/kg');
    const k = calculateSubScore(input.potassium, cond.kRange, 40, 'mg/kg');
    const temp = calculateSubScore(input.temperature, cond.tempRange, 12, '°C');
    const hum = calculateSubScore(input.humidity, cond.humidityRange, 25, '%');
    const ph = calculateSubScore(input.ph, cond.phRange, 2.0, 'pH');
    const rain = calculateSubScore(input.rainfall, cond.rainfallRange, 100, 'mm');

    // 2. Weighted overall compatibility percentage
    // Weights: Rainfall 20%, Temp 15%, N 15%, P 15%, K 15%, Humidity 10%, pH 10%
    const totalWeighted =
      (n.subScore * 0.15) +
      (p.subScore * 0.15) +
      (k.subScore * 0.15) +
      (temp.subScore * 0.15) +
      (hum.subScore * 0.10) +
      (ph.subScore * 0.10) +
      (rain.subScore * 0.20);

    const scorePercentage = Math.min(Math.max(Math.round(totalWeighted * 100), 12), 99);

    return {
      crop,
      score: scorePercentage,
      paramScores: {
        nitrogen: n,
        phosphorus: p,
        potassium: k,
        temperature: temp,
        humidity: hum,
        ph: ph,
        rainfall: rain,
      },
    };
  });

  // Sort descending by score
  scoredCrops.sort((a, b) => b.score - a.score);

  const bestMatch = scoredCrops[0] || { crop: fallbackCrop, score: 85, paramScores: {} };
  const topCrops = scoredCrops.slice(0, 3).map((item) => ({
    crop: item.crop,
    score: item.score,
  }));

  const recommendedCrop = bestMatch.crop;
  const cond = recommendedCrop.idealConditions;

  // Parameter analysis breakdown for table/cards
  const parameterAnalysis = [
    {
      parameter: 'Nitrogen (N)',
      value: input.nitrogen,
      unit: 'mg/kg',
      idealRange: `${cond.nRange[0]} - ${cond.nRange[1]} mg/kg`,
      status: bestMatch.paramScores.nitrogen?.status || 'Suitable',
      notes: bestMatch.paramScores.nitrogen?.note || 'Within optimal threshold.',
    },
    {
      parameter: 'Phosphorus (P)',
      value: input.phosphorus,
      unit: 'mg/kg',
      idealRange: `${cond.pRange[0]} - ${cond.pRange[1]} mg/kg`,
      status: bestMatch.paramScores.phosphorus?.status || 'Suitable',
      notes: bestMatch.paramScores.phosphorus?.note || 'Within optimal threshold.',
    },
    {
      parameter: 'Potassium (K)',
      value: input.potassium,
      unit: 'mg/kg',
      idealRange: `${cond.kRange[0]} - ${cond.kRange[1]} mg/kg`,
      status: bestMatch.paramScores.potassium?.status || 'Suitable',
      notes: bestMatch.paramScores.potassium?.note || 'Within optimal threshold.',
    },
    {
      parameter: 'Temperature',
      value: input.temperature,
      unit: '°C',
      idealRange: `${cond.tempRange[0]} - ${cond.tempRange[1]} °C`,
      status: bestMatch.paramScores.temperature?.status || 'Suitable',
      notes: bestMatch.paramScores.temperature?.note || 'Within optimal thermal range.',
    },
    {
      parameter: 'Humidity',
      value: input.humidity,
      unit: '%',
      idealRange: `${cond.humidityRange[0]} - ${cond.humidityRange[1]} %`,
      status: bestMatch.paramScores.humidity?.status || 'Suitable',
      notes: bestMatch.paramScores.humidity?.note || 'Within preferred humidity range.',
    },
    {
      parameter: 'Soil pH',
      value: input.ph,
      unit: 'pH',
      idealRange: `${cond.phRange[0]} - ${cond.phRange[1]} pH`,
      status: bestMatch.paramScores.ph?.status || 'Suitable',
      notes: bestMatch.paramScores.ph?.note || 'Favorable soil acidity/alkalinity level.',
    },
    {
      parameter: 'Rainfall',
      value: input.rainfall,
      unit: 'mm',
      idealRange: `${cond.rainfallRange[0]} - ${cond.rainfallRange[1]} mm`,
      status: bestMatch.paramScores.rainfall?.status || 'Suitable',
      notes: bestMatch.paramScores.rainfall?.note || 'Precipitation matches moisture demands.',
    },
  ];

  // Dynamic rationale generation based on strongest matching attributes
  const whyThisRecommendation = generateDynamicWhyCards(recommendedCrop, input);

  return {
    recommendedCrop,
    confidenceScore: bestMatch.score,
    topCrops,
    explanation: `Based on your submitted soil chemistry (N: ${input.nitrogen}, P: ${input.phosphorus}, K: ${input.potassium}, pH: ${input.ph}) and climatic conditions (${input.temperature}°C, ${input.humidity}% humidity, ${input.rainfall}mm rainfall), ${recommendedCrop.name} achieved the highest compatibility score of ${bestMatch.score}%.`,
    parameterAnalysis,
    whyThisRecommendation,
    inputs: input,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    backendConnected,
  };
}

function calculateSubScore(
  val: number,
  range: [number, number],
  tolerance: number,
  unit: string
): { subScore: number; status: 'Suitable' | 'Near Suitable' | 'Outside Preferred Range'; note: string } {
  const [min, max] = range;

  if (val >= min && val <= max) {
    return {
      subScore: 1.0,
      status: 'Suitable',
      note: `Optimal (${val} ${unit} falls inside preferred range ${min}-${max} ${unit}).`,
    };
  }

  const dist = val < min ? min - val : val - max;
  const ratio = dist / tolerance;

  if (ratio <= 0.4) {
    return {
      subScore: Math.max(0.6, 1.0 - ratio),
      status: 'Near Suitable',
      note: val < min ? `Slightly below preferred minimum (${min} ${unit}).` : `Slightly above preferred maximum (${max} ${unit}).`,
    };
  } else {
    return {
      subScore: Math.max(0.1, 1.0 - ratio),
      status: 'Outside Preferred Range',
      note: val < min ? `Below threshold (${min} ${unit}).` : `Exceeds threshold (${max} ${unit}).`,
    };
  }
}

function generateDynamicWhyCards(
  crop: CropDetails,
  input: CropInputParameters
) {
  const cond = crop.idealConditions;
  const cards = [];

  // Card 1: Soil Nutrients
  const nOptimal = input.nitrogen >= cond.nRange[0] && input.nitrogen <= cond.nRange[1];
  const pOptimal = input.phosphorus >= cond.pRange[0] && input.phosphorus <= cond.pRange[1];
  const kOptimal = input.potassium >= cond.kRange[0] && input.potassium <= cond.kRange[1];

  if (nOptimal && pOptimal && kOptimal) {
    cards.push({
      title: 'Optimal Soil Nutrient Balance',
      description: `Your Nitrogen (${input.nitrogen}), Phosphorus (${input.phosphorus}), and Potassium (${input.potassium}) levels perfectly align with ${crop.name}'s preferred N-P-K nutrient ratio.`,
      icon: 'FlaskConical',
    });
  } else {
    cards.push({
      title: 'Soil Nutrient Alignment',
      description: `Your soil N-P-K values provide an effective nutrient foundation compatible with ${crop.name}'s crop feeding requirements.`,
      icon: 'FlaskConical',
    });
  }

  // Card 2: Climate & Temperature
  if (input.temperature >= cond.tempRange[0] && input.temperature <= cond.tempRange[1]) {
    cards.push({
      title: 'Favorable Thermal Climate',
      description: `Ambient temperature of ${input.temperature}°C falls directly into ${crop.name}'s ideal thermal growing window (${cond.tempRange[0]}°C - ${cond.tempRange[1]}°C).`,
      icon: 'ThermometerSun',
    });
  } else {
    cards.push({
      title: 'Microclimate Adaptability',
      description: `Temperature of ${input.temperature}°C and humidity of ${input.humidity}% support steady vegetative growth for ${crop.name}.`,
      icon: 'ThermometerSun',
    });
  }

  // Card 3: Soil pH
  if (input.ph >= cond.phRange[0] && input.ph <= cond.phRange[1]) {
    cards.push({
      title: 'Ideal Soil Bioavailability',
      description: `Soil acidity/alkalinity level of pH ${input.ph} falls inside the optimal ${cond.phRange[0]}-${cond.phRange[1]} pH zone for maximum root nutrient absorption.`,
      icon: 'TestTube',
    });
  } else {
    cards.push({
      title: 'Acceptable Soil pH Range',
      description: `Soil pH of ${input.ph} permits adequate macro and micronutrient uptake for ${crop.name}.`,
      icon: 'TestTube',
    });
  }

  // Card 4: Precipitation & Water
  if (input.rainfall >= cond.rainfallRange[0] && input.rainfall <= cond.rainfallRange[1]) {
    cards.push({
      title: 'Matching Water Supply',
      description: `Annual rainfall of ${input.rainfall} mm matches ${crop.name}'s ${crop.waterRequirement.toLowerCase()} water requirement without moisture deficit or root suffocation.`,
      icon: 'CloudRain',
    });
  } else {
    cards.push({
      title: 'Precipitation Compatibility',
      description: `Rainfall of ${input.rainfall} mm supports ${crop.name}'s ${crop.waterRequirement.toLowerCase()} water demand under standard field management.`,
      icon: 'CloudRain',
    });
  }

  return cards;
}
