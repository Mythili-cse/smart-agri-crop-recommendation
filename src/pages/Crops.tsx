import React from 'react';
import { SupportedCropsShowcase } from '../components/SupportedCropsShowcase';
import { Sprout, Database, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const CropsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-28 pb-20 text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>Agronomic Crop Library</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Explore Supported Crops
          </h1>

          {/* Hero Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Discover the crops supported by our intelligent recommendation system and learn about their suitable growing conditions.
          </p>

          {/* Feature Highlights Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>23 ML Trained Crops</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Cpu className="w-4 h-4 text-teal-400" />
              <span>Optimal N-P-K Ranges</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Verified Agronomic Rules</span>
            </div>
          </div>
        </motion.div>

        {/* Divider & Sub-Section Label */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sprout className="w-6 h-6 text-emerald-400" />
              Supported Crop Library
            </h2>
            <p className="text-xs text-slate-400">
              Filter by category or search by specific crop names and microclimate requirements.
            </p>
          </div>
        </div>

        {/* Crops Showcase Component */}
        <SupportedCropsShowcase />

      </div>
    </div>
  );
};
