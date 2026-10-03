import React from 'react';
import type { CropInputParameters } from '../types';
import { Sparkles } from 'lucide-react';

interface PresetSelectorProps {
  onSelectPreset: (params: CropInputParameters) => void;
}

export const presetSamples = [
  {
    name: '🌾 Rice Paddy Sample',
    expectedCrop: 'Rice',
    params: {
      nitrogen: 90,
      phosphorus: 42,
      potassium: 43,
      temperature: 23.6,
      humidity: 82.0,
      ph: 6.5,
      rainfall: 202.9,
    },
  },
  {
    name: '🍎 Apple Orchard Sample',
    expectedCrop: 'Apple',
    params: {
      nitrogen: 24,
      phosphorus: 134,
      potassium: 199,
      temperature: 22.1,
      humidity: 92.4,
      ph: 5.9,
      rainfall: 110.2,
    },
  },
  {
    name: '🍇 Grapes Vineyard Sample',
    expectedCrop: 'Grapes',
    params: {
      nitrogen: 15,
      phosphorus: 130,
      potassium: 200,
      temperature: 16.0,
      humidity: 80.0,
      ph: 6.0,
      rainfall: 75.0,
    },
  },
  {
    name: '🌴 Coconut Palm Sample',
    expectedCrop: 'Coconut',
    params: {
      nitrogen: 25,
      phosphorus: 20,
      potassium: 30,
      temperature: 28.0,
      humidity: 95.0,
      ph: 6.0,
      rainfall: 240.0,
    },
  },
  {
    name: '🍉 Watermelon Patch Sample',
    expectedCrop: 'Watermelon',
    params: {
      nitrogen: 98,
      phosphorus: 18,
      potassium: 50,
      temperature: 26.0,
      humidity: 85.0,
      ph: 6.4,
      rainfall: 50.0,
    },
  },
  {
    name: '🧆 Chickpea Field Sample',
    expectedCrop: 'Chickpea',
    params: {
      nitrogen: 30,
      phosphorus: 65,
      potassium: 78,
      temperature: 18.0,
      humidity: 20.0,
      ph: 6.8,
      rainfall: 65.0,
    },
  },
];

export const PresetSelector: React.FC<PresetSelectorProps> = ({ onSelectPreset }) => {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 shadow-xl mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-emerald-400" />
        <h3 className="text-base font-bold text-white tracking-wide">
          Interactive Viva Test Presets (Click to Auto-fill)
        </h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        Click any pre-configured agricultural sample to populate the 7 parameters and verify that different inputs dynamically yield different crop recommendations, scores, and crop photos.
      </p>

      <div className="flex flex-wrap gap-2.5">
        {presetSamples.map((sample) => (
          <button
            key={sample.name}
            type="button"
            onClick={() => onSelectPreset(sample.params)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-950 border border-slate-700 hover:border-emerald-500/60 text-slate-200 hover:text-emerald-300 text-xs font-semibold transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>{sample.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
