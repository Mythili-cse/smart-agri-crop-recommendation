import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhySmartAgri } from '../components/WhySmartAgri';
import { HowItWorks } from '../components/HowItWorks';
import { ParametersSection } from '../components/ParametersSection';
import { SupportedCropsShowcase } from '../components/SupportedCropsShowcase';
import { GraduationCap, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHY SMART AGRICULTURE SECTION */}
      <WhySmartAgri />

      {/* 3. HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* 4. AGRICULTURAL PARAMETERS SECTION */}
      <ParametersSection />

      {/* 5. SUPPORTED CROPS SHOWCASE SECTION */}
      <SupportedCropsShowcase />

      {/* 6. ACADEMIC MINI-PROJECT CALL TO ACTION */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/95 rounded-3xl p-8 sm:p-12 border border-emerald-800/60 shadow-2xl backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>College Mini-Project Demonstration</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Department of Computer Science & Engineering
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Experience the interactive crop recommendation system. Enter soil parameters or click test presets to see the recommendation, score, crop photo, and top 3 rankings adapt in real time.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[11px] text-slate-400 block font-mono">Dataset Scope</span>
                    <span className="text-sm font-extrabold text-emerald-400">23 Crop Profiles</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[11px] text-slate-400 block font-mono">Feature Vector</span>
                    <span className="text-sm font-extrabold text-emerald-400">7 Core Parameters</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[11px] text-slate-400 block font-mono">Ranking Output</span>
                    <span className="text-sm font-extrabold text-emerald-400">Top 3 Crops + Score</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center space-y-4">
                <button
                  onClick={() => navigate('/recommend')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Get Recommendation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 text-center cursor-pointer"
                >
                  Project Methodology
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
