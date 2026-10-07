import React, { useState, useEffect } from 'react';
import type { CropInputParameters } from '../types';
import { PresetSelector } from './PresetSelector';
import {
  Sprout,
  Thermometer,
  AlertCircle,
  Info,
  Sliders,
} from 'lucide-react';

interface ParameterInputProps {
  onSubmit: (params: CropInputParameters) => void;
  isLoading: boolean;
}

interface FormErrors {
  nitrogen?: string;
  phosphorus?: string;
  potassium?: string;
  temperature?: string;
  humidity?: string;
  ph?: string;
  rainfall?: string;
}

export const ParameterInput: React.FC<ParameterInputProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    nitrogen: '90',
    phosphorus: '42',
    potassium: '43',
    temperature: '25',
    humidity: '80',
    ph: '6.5',
    rainfall: '200',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    'Analyzing Soil Conditions...',
    'Evaluating Environmental Parameters...',
    'Finding Suitable Crops...',
  ];

  useEffect(() => {
    let interval: any;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < 2 ? prev + 1 : prev));
      }, 450);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSelectPreset = (presetParams: CropInputParameters) => {
    setFormData({
      nitrogen: String(presetParams.nitrogen),
      phosphorus: String(presetParams.phosphorus),
      potassium: String(presetParams.potassium),
      temperature: String(presetParams.temperature),
      humidity: String(presetParams.humidity),
      ph: String(presetParams.ph),
      rainfall: String(presetParams.rainfall),
    });
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const validateNum = (key: string, label: string, min: number, max: number, customMinMsg?: string, customMaxMsg?: string) => {
      const valStr = formData[key];
      if (!valStr || valStr.trim() === '') {
        newErrors[key as keyof FormErrors] = `Please enter ${label.toLowerCase()}.`;
        return;
      }
      const num = Number(valStr);
      if (isNaN(num)) {
        newErrors[key as keyof FormErrors] = `${label} must be a valid number.`;
        return;
      }
      if (num < min) {
        newErrors[key as keyof FormErrors] = customMinMsg || `${label} cannot be less than ${min}.`;
        return;
      }
      if (num > max) {
        newErrors[key as keyof FormErrors] = customMaxMsg || `${label} cannot exceed ${max}.`;
        return;
      }
    };

    validateNum('nitrogen', 'Nitrogen (N)', 0, 300, 'Nitrogen value cannot be negative.');
    validateNum('phosphorus', 'Phosphorus (P)', 0, 300, 'Phosphorus value cannot be negative.');
    validateNum('potassium', 'Potassium (K)', 0, 300, 'Potassium value cannot be negative.');
    validateNum('ph', 'Soil pH', 0, 14, 'Please enter a valid soil pH between 0 and 14.', 'Please enter a valid soil pH between 0 and 14.');
    validateNum('temperature', 'Temperature', -10, 60, 'Temperature cannot be below -10°C.');
    validateNum('humidity', 'Humidity', 0, 100, 'Humidity must be between 0% and 100%.', 'Humidity must be between 0% and 100%.');
    validateNum('rainfall', 'Rainfall', 0, 1000, 'Rainfall value cannot be negative.');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const parsed: CropInputParameters = {
      nitrogen: Number(formData.nitrogen),
      phosphorus: Number(formData.phosphorus),
      potassium: Number(formData.potassium),
      temperature: Number(formData.temperature),
      humidity: Number(formData.humidity),
      ph: Number(formData.ph),
      rainfall: Number(formData.rainfall),
    };

    onSubmit(parsed);
  };

  const tooltips: Record<string, string> = {
    nitrogen: 'Nitrogen (N) promotes leafy green growth and foliage development in crops.',
    phosphorus: 'Phosphorus (P) stimulates root growth, seed formation, and flower blooming.',
    potassium: 'Potassium (K) enhances drought resistance, disease immunity, and fruit sugar content.',
    ph: 'Soil pH measures acidity/alkalinity (0-14). 6.0-7.0 is ideal for most nutrient absorption.',
    temperature: 'Ambient mean temperature (°C) during the crop growing season.',
    humidity: 'Relative atmospheric humidity percentage (%). Affects transpiration rate.',
    rainfall: 'Average seasonal or annual rainfall (mm). Measures natural water availability.',
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Preset Selector */}
      <PresetSelector onSelectPreset={handleSelectPreset} />

      {/* Main Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl shadow-emerald-950/5 relative overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          
          {/* Section 1: SOIL HEALTH */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-wider">
                  SOIL HEALTH
                </h3>
                <p className="text-xs text-slate-500">
                  Nitrogen (N), Phosphorus (P), Potassium (K), and Soil pH
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Nitrogen */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="nitrogen" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nitrogen (N)
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'nitrogen' ? null : 'nitrogen')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'nitrogen' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.nitrogen}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="nitrogen"
                    type="number"
                    step="any"
                    placeholder="e.g. 90"
                    value={formData.nitrogen}
                    onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.nitrogen
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    mg/kg
                  </span>
                </div>
                {errors.nitrogen && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.nitrogen}</span>
                  </p>
                )}
              </div>

              {/* Phosphorus */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="phosphorus" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Phosphorus (P)
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'phosphorus' ? null : 'phosphorus')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'phosphorus' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.phosphorus}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="phosphorus"
                    type="number"
                    step="any"
                    placeholder="e.g. 42"
                    value={formData.phosphorus}
                    onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phosphorus
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    mg/kg
                  </span>
                </div>
                {errors.phosphorus && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phosphorus}</span>
                  </p>
                )}
              </div>

              {/* Potassium */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="potassium" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Potassium (K)
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'potassium' ? null : 'potassium')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'potassium' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.potassium}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="potassium"
                    type="number"
                    step="any"
                    placeholder="e.g. 43"
                    value={formData.potassium}
                    onChange={(e) => handleInputChange('potassium', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.potassium
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    mg/kg
                  </span>
                </div>
                {errors.potassium && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.potassium}</span>
                  </p>
                )}
              </div>

              {/* Soil pH */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="ph" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Soil pH
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'ph' ? null : 'ph')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'ph' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.ph}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="ph"
                    type="number"
                    step="0.1"
                    placeholder="e.g. 6.5"
                    value={formData.ph}
                    onChange={(e) => handleInputChange('ph', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.ph
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    pH
                  </span>
                </div>
                {errors.ph && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.ph}</span>
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Section 2: CLIMATE CONDITIONS */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="p-2 rounded-xl bg-teal-100 text-teal-700">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-wider">
                  CLIMATE CONDITIONS
                </h3>
                <p className="text-xs text-slate-500">
                  Temperature (°C), Humidity (%), and Rainfall (mm)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Temperature */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="temperature" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Temperature
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'temperature' ? null : 'temperature')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'temperature' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.temperature}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="temperature"
                    type="number"
                    step="any"
                    placeholder="e.g. 25"
                    value={formData.temperature}
                    onChange={(e) => handleInputChange('temperature', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.temperature
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    °C
                  </span>
                </div>
                {errors.temperature && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.temperature}</span>
                  </p>
                )}
              </div>

              {/* Humidity */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="humidity" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Humidity
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'humidity' ? null : 'humidity')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'humidity' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.humidity}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="humidity"
                    type="number"
                    step="any"
                    placeholder="e.g. 80"
                    value={formData.humidity}
                    onChange={(e) => handleInputChange('humidity', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.humidity
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    %
                  </span>
                </div>
                {errors.humidity && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.humidity}</span>
                  </p>
                )}
              </div>

              {/* Rainfall */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="rainfall" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Rainfall
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === 'rainfall' ? null : 'rainfall')}
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Toggle Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                {activeTooltip === 'rainfall' && (
                  <p className="text-[11px] bg-slate-800 text-slate-200 p-2 rounded-lg mb-2 leading-tight">
                    {tooltips.rainfall}
                  </p>
                )}
                <div className="relative">
                  <input
                    id="rainfall"
                    type="number"
                    step="any"
                    placeholder="e.g. 200"
                    value={formData.rainfall}
                    onChange={(e) => handleInputChange('rainfall', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-900 font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.rainfall
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                    mm
                  </span>
                </div>
                {errors.rainfall && (
                  <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.rainfall}</span>
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Form Submit Button with Animated Loading */}
          <div className="pt-4 border-t border-slate-200">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-lg shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-85 disabled:cursor-wait"
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                  <span className="text-base font-bold animate-pulse">
                    {loadingMessages[loadingStep]}
                  </span>
                </div>
              ) : (
                <>
                  <Sliders className="w-5 h-5 text-emerald-200" />
                  <span>Analyze & Recommend</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
