import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';
import { calculateCropRecommendations } from '../utils/recommendationEngine';
import type { PredictionResult } from '../types';

/**
 * Standalone Result Page (/result)
 * Renders sample recommendation dashboard if navigated to directly,
 * allowing instant review during presentations or direct URL navigation.
 */
export const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<PredictionResult | null>(null);

  useEffect(() => {
    // Generate sample baseline calculation for direct view
    const defaultVector = {
      nitrogen: 90,
      phosphorus: 42,
      potassium: 43,
      temperature: 25,
      humidity: 80,
      ph: 6.5,
      rainfall: 200,
    };
    const pred = calculateCropRecommendations(defaultVector, false);
    setResult(pred);
  }, []);

  const handleReset = () => {
    navigate('/recommend');
  };

  if (!result) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Recommendation Dashboard
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Crop Suitability Analysis Output
          </h1>
        </div>

        <ResultCard result={result} onReset={handleReset} />
      </div>
    </div>
  );
};

