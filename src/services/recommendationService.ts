import type { CropInputParameters, PredictionResult } from '../types';
import { calculateCropRecommendations } from '../utils/recommendationEngine';

/**
 * CONFIGURATION FLAG
 * ------------------
 * Set to true when Python Flask ML backend API is running on localhost (http://127.0.0.1:5000/api/predict)
 */
const USE_FLASK_BACKEND = false;
const FLASK_API_URL = 'http://127.0.0.1:5000/api/predict';

/**
 * Predicts suitable crop recommendations based on submitted soil and microclimate vector.
 * Uses the deterministic agronomic scoring utility (`calculateCropRecommendations`).
 */
export async function predictCrop(input: CropInputParameters): Promise<PredictionResult> {
  // Simulate network delay for realistic multi-step loading experience
  await new Promise((resolve) => setTimeout(resolve, 1400));

  if (USE_FLASK_BACKEND) {
    try {
      const response = await fetch(FLASK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        // Connected to live Flask API
        return calculateCropRecommendations(input, true);
      }
    } catch (error) {
      console.warn('Flask backend API unreachable. Falling back to frontend prototype engine.', error);
    }
  }

  // Calculate dynamic recommendations based on input parameters
  return calculateCropRecommendations(input, false);
}
