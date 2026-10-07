import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CropDetails } from '../types';
import { 
  X, 
  Sprout, 
  ThermometerSun, 
  CloudRain, 
  Droplets, 
  Calendar, 
  FlaskConical, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import { CropImage } from './CropImage';

interface CropDetailModalProps {
  crop: CropDetails | null;
  onClose: () => void;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({ crop, onClose }) => {
  if (!crop) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
            <CropImage
              src={crop.image}
              alt={crop.name}
              cropName={crop.name}
              className="filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  {crop.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {crop.name}
                </h2>
                <p className="text-emerald-400 font-serif italic text-base">
                  {crop.scientificName}
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 text-xs font-mono text-slate-300">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span>Water Demand: <strong className="text-white">{crop.waterRequirement}</strong></span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto custom-scrollbar">
            
            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-400" />
                <span>Agronomic Summary</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {crop.description}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                <ThermometerSun className="w-5 h-5 text-amber-400 mx-auto" />
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Temperature</span>
                <span className="text-sm font-bold text-white">
                  {crop.idealConditions.tempRange[0]} – {crop.idealConditions.tempRange[1]}°C
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                <CloudRain className="w-5 h-5 text-blue-400 mx-auto" />
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Rainfall</span>
                <span className="text-sm font-bold text-white">
                  {crop.idealConditions.rainfallRange[0]} – {crop.idealConditions.rainfallRange[1]} mm
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                <Calendar className="w-5 h-5 text-emerald-400 mx-auto" />
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Growing Period</span>
                <span className="text-sm font-bold text-white">
                  {crop.growingPeriodDays}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                <Layers className="w-5 h-5 text-teal-400 mx-auto" />
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Ideal Soil pH</span>
                <span className="text-sm font-bold text-white">
                  {crop.idealConditions.phRange[0]} – {crop.idealConditions.phRange[1]}
                </span>
              </div>
            </div>

            {/* Ideal N-P-K Ranges */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>Optimal Soil Nutrient Ranges</span>
              </h4>
              <div className="grid grid-cols-3 gap-3 font-mono text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block text-sm">Nitrogen (N)</span>
                  <span className="text-slate-300">{crop.idealConditions.nRange[0]} – {crop.idealConditions.nRange[1]} mg/kg</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-teal-400 font-bold block text-sm">Phosphorus (P)</span>
                  <span className="text-slate-300">{crop.idealConditions.pRange[0]} – {crop.idealConditions.pRange[1]} mg/kg</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 font-bold block text-sm">Potassium (K)</span>
                  <span className="text-slate-300">{crop.idealConditions.kRange[0]} – {crop.idealConditions.kRange[1]} mg/kg</span>
                </div>
              </div>
            </div>

            {/* Nutrient Role */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Key Agronomic Role</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {crop.keyNutrientRole}
              </p>
            </div>

            {/* Agronomic Best Practices */}
            {crop.agronomicTips && crop.agronomicTips.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Agronomic Best Practices
                </h4>
                <ul className="space-y-2">
                  {crop.agronomicTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Close Profile
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
