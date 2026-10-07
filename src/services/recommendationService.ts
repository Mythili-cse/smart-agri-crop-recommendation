import type { CropInputParameters, PredictionResult } from '../types';
import { calculateCropRecommendations } from '../utils/recommendationEngine';

const FLASK_API_URL = 'http://127.0.0.1:5000/api/predict';

/**
 * Predicts suitable crop recommendations based on submitted soil and microclimate vector.
 * First attempts to connect to Python Flask ML REST API at http://127.0.0.1:5000/api/predict.
 * If unreachable or offline, falls back seamlessly to the agronomic scoring engine.
 */
export async function predictCrop(input: CropInputParameters): Promise<PredictionResult> {
  // Simulate brief processing delay for smooth UI transition
  const minDelay = new Promise((resolve) => setTimeout(resolve, 900));

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout for Flask API check

    const response = await fetch(FLASK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nitrogen: input.nitrogen,
        phosphorus: input.phosphorus,
        potassium: input.potassium,
        temperature: input.temperature,
        humidity: input.humidity,
        ph: input.ph,
        rainfall: input.rainfall,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      await minDelay;
      if (data && data.crop) {
        return calculateCropRecommendations(input, true, String(data.crop));
      }
    }
  } catch (error) {
    // Flask backend offline or unreachable - standard prototype fallback mode
    console.info('Flask ML API unreachable. Running dynamic agronomic recommendation engine.', error);
  }

  await minDelay;
  return calculateCropRecommendations(input, false);
}

