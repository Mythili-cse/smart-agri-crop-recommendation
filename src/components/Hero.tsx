import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sprout,
  Thermometer,
  Droplets,
  CloudRain,
  FlaskConical,
  Brain,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const parameterBadges = [
    { label: 'Soil Nutrients', detail: 'N: 90 | P: 42 | K: 43', icon: Sprout, color: 'from-amber-500 to-emerald-500' },
    { label: 'Temperature', detail: '25.4 °C Optimal', icon: Thermometer, color: 'from-orange-500 to-amber-500' },
    { label: 'Humidity', detail: '80% Rel. Humidity', icon: Droplets, color: 'from-cyan-500 to-blue-500' },
    { label: 'Rainfall', detail: '202 mm Season', icon: CloudRain, color: 'from-blue-500 to-indigo-500' },
    { label: 'Soil pH', detail: '6.5 Balanced', icon: FlaskConical, color: 'from-purple-500 to-pink-500' },
    { label: 'AI Prediction', detail: 'Optimal Match', icon: Brain, color: 'from-emerald-400 to-teal-300' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      
      {/* High-quality Agricultural Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          alt="Agriculture Field Smart Farming"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        />
        {/* Layered Gradient Overlay for Text Contrast & Modern Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        
        {/* Subtle glowing orb backgrounds */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Tagline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI-POWERED AGRICULTURE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Smart Crop Recommendations <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                for Better Farming
              </span>
            </h1>

            {/* Supporting Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-wide">
              Better Data. Smarter Decisions. Healthier Harvests.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              An intelligent crop recommendation system that analyzes soil chemistry (N-P-K, pH) and atmospheric microclimate parameters to identify optimal crops for cultivation.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigate('/recommend')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Get Crop Recommendation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <span>Explore System</span>
              </button>
            </div>

            {/* Key Academic Specs */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>7 Parameter Matrix</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>18 Crop Profiles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Flask ML Architecture Ready</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Layout with Farmer visual + floating AI/Data cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Card Frame */}
            <div className="relative rounded-3xl p-6 bg-slate-900/85 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Live Analytical Matrix
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">CSE Mini-Project</span>
              </div>

              {/* Farmer / Field Visual Overlay inside Graphic */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-slate-700/80">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
                  alt="Farmer inspecting field"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <Sprout className="w-4 h-4" /> Soil & Microclimate Sensor Ingestion
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                    7/7 ACTIVE
                  </span>
                </div>
              </div>

              {/* Grid of Parameter Visual Indicators */}
              <div className="grid grid-cols-2 gap-3">
                {parameterBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.08 }}
                      className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${badge.color} text-slate-950 font-bold shadow-md group-hover:scale-110 transition-transform shrink-0`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-slate-200">
                            {badge.label}
                          </p>
                          <p className="text-[10px] font-mono text-emerald-400 font-medium">
                            {badge.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Central AI Prediction Banner */}
              <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">AI ENGINE STATUS</span>
                    <span className="text-xs font-bold text-white">Algorithm Ready • Multi-Crop Scoring</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-semibold">
                  Ready
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
