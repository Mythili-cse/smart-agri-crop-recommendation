import React, { useState } from 'react';
import type { CropInputParameters, PredictionResult } from '../types';
import { ParameterInput } from '../components/ParameterInput';
import { ResultCard } from '../components/ResultCard';
import { predictCrop } from '../services/recommendationService';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Recommendation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleFormSubmit = async (params: CropInputParameters) => {
    setIsLoading(true);
    try {
      const prediction = await predictCrop(params);
      setResult(prediction);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Failed to generate recommendation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>AI Analytical Module</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {result ? 'Crop Recommendation Result' : 'Find the Right Crop for Your Field'}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg">
            {result
              ? 'Comprehensive agricultural compatibility analysis based on your submitted soil and environmental parameters.'
              : 'Enter soil chemistry and climate measurements below to run multi-crop suitability scoring.'}
          </p>
        </div>

        {/* Dynamic Render: Input Form OR Result Card */}
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Form Column */}
              <div className="lg:col-span-8">
                <ParameterInput onSubmit={handleFormSubmit} isLoading={isLoading} />
              </div>

              {/* Visual Side Panel Column */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Visual Side Card 1: Soil Photo + Badges */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl overflow-hidden relative">
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-slate-700">
                    <img
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800"
                      alt="Rich fertile soil examination"
                      className="w-full h-full object-cover filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30">
                      7 Parameters Analyzed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    Multi-Attribute Evaluation
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    The recommendation engine compares Nitrogen, Phosphorus, Potassium, Soil pH, Temperature, Humidity, and Rainfall against optimal crop growth ranges.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>4 Soil Parameters (N, P, K, pH)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>3 Environmental Parameters (Temp, Humidity, Rain)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Compatibility Score Percentage Output</span>
                    </div>
                  </div>
                </div>

                {/* Visual Side Card 2: Academic Mini Project Notice */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Academic Project Specification</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">
                    Department of Computer Science & Engineering
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    Designed for student presentations, faculty review, and viva demonstrations. Select test presets or type custom values to observe real-time dynamic output changes.
                  </p>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ResultCard result={result} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
