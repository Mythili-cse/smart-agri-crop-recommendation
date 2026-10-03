import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { HowItWorks } from '../components/HowItWorks';
import { SupportedCropsShowcase } from '../components/SupportedCropsShowcase';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sprout,
  Thermometer,
  Droplets,
  CloudRain,
  FlaskConical,
  Sliders,
  Brain,
  Database,
  ArrowRight,
  Cpu,
} from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const whySmartAgriCards = [
    {
      title: 'Data-Driven Decisions',
      description: 'Replace guesswork and legacy trial-and-error with empirical soil chemistry and microclimate dataset analytics.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Soil-Aware Recommendations',
      description: 'Analyze precise Nitrogen, Phosphorus, Potassium ratios and soil pH to maintain long-term ground fertility.',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Climate-Aware Analysis',
      description: 'Evaluate ambient temperature, humidity, and annual rainfall metrics to ensure microclimate compatibility.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Easy Decision Support',
      description: 'Deliver actionable crop rankings, confidence scores, and agronomic guidelines in a clean web dashboard.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const parameters = [
    { name: 'Nitrogen (N)', unit: 'mg/kg', role: 'Drives leafy vegetative growth and chlorophyll synthesis', icon: Sprout, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Phosphorus (P)', unit: 'mg/kg', role: 'Stimulates root expansion, early seed formation & flowering', icon: FlaskConical, color: 'text-amber-600 bg-amber-50' },
    { name: 'Potassium (K)', unit: 'mg/kg', role: 'Enhances drought tolerance, disease immunity & fruit sugar', icon: Sliders, color: 'text-purple-600 bg-purple-50' },
    { name: 'Soil pH', unit: 'pH (0-14)', role: 'Measures soil acidity/alkalinity for root nutrient assimilation', icon: FlaskConical, color: 'text-pink-600 bg-pink-50' },
    { name: 'Temperature', unit: '°C', role: 'Thermal regulator governing crop respiration & growth rate', icon: Thermometer, color: 'text-orange-600 bg-orange-50' },
    { name: 'Humidity', unit: 'Relative %', role: 'Atmospheric moisture level influencing leaf transpiration', icon: Droplets, color: 'text-cyan-600 bg-cyan-50' },
    { name: 'Rainfall', unit: 'mm / season', role: 'Hydrological precipitation satisfying seasonal water demand', icon: CloudRain, color: 'text-blue-600 bg-blue-50' },
  ];

  const features = [
    {
      title: 'Increase Crop Yield',
      description: 'Match soil N-P-K nutrient composition with target crop nutritional demands to maximize harvest volume and agricultural output.',
      iconType: 'growth' as const,
    },
    {
      title: 'Optimize Resource Use',
      description: 'Prevent fertilizer over-application and wasteful irrigation by identifying crops suited to your microclimate rainfall and soil pH.',
      iconType: 'resource' as const,
    },
    {
      title: 'Support Sustainable Farming',
      description: 'Promote long-term soil health and biodiversity by choosing crops aligned with natural agro-ecological carrying capacities.',
      iconType: 'sustainable' as const,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Replace subjective farming choices with machine learning classification algorithms trained on empirical field measurements.',
      iconType: 'data' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHY SMART AGRICULTURE SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Agricultural Problem & Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Smart Agriculture?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering modern farming with empirical soil chemistry analysis and precision microclimate analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whySmartAgriCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-emerald-700">
                  <span>Decision Support</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* 4. AGRICULTURAL PARAMETERS SECTION */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Feature Vector Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              7 Core Agricultural Parameters Evaluated
            </h2>
            <p className="text-slate-600 text-base">
              The recommendation engine analyzes soil chemistry and environmental microclimate attributes to score crop suitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parameters.map((param) => {
              const Icon = param.icon;
              return (
                <div
                  key={param.name}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl ${param.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{param.name}</h3>
                    <span className="text-xs font-mono text-emerald-600 font-bold">{param.unit}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
                    {param.role}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. KEY FEATURES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Academic & Agricultural Excellence
          </h2>
          <p className="text-slate-600 text-base">
            Structured frontend architecture built with React, TypeScript, and Flask API integration hooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              iconType={feature.iconType}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* 6. PROJECT METHODOLOGY FLOW DIAGRAM SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Data Science Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Project Methodology Flow Diagram
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              End-to-end flow from agricultural input ingestion to compatibility score generation.
            </p>
          </div>

          {/* AI/Data-Science Style Flow Diagram */}
          <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center">
              
              <div className="flex-1 p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 w-full">
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">1. Input Data</h4>
                <p className="text-[11px] text-slate-400 font-mono">N, P, K, Temp, Humidity, pH, Rainfall</p>
              </div>

              <ArrowRight className="w-6 h-6 text-emerald-400 shrink-0 rotate-90 lg:rotate-0" />

              <div className="flex-1 p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 w-full">
                <div className="w-10 h-10 mx-auto rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">2. Data Processing</h4>
                <p className="text-[11px] text-slate-400 font-mono">Range Normalization & Validation</p>
              </div>

              <ArrowRight className="w-6 h-6 text-emerald-400 shrink-0 rotate-90 lg:rotate-0" />

              <div className="flex-1 p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 w-full">
                <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">3. Feature Analysis</h4>
                <p className="text-[11px] text-slate-400 font-mono">Distance Scoring vs 18 Crops</p>
              </div>

              <ArrowRight className="w-6 h-6 text-emerald-400 shrink-0 rotate-90 lg:rotate-0" />

              <div className="flex-1 p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 w-full">
                <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">4. Crop Model</h4>
                <p className="text-[11px] text-slate-400 font-mono">Scikit-learn / Agro Rules Engine</p>
              </div>

              <ArrowRight className="w-6 h-6 text-emerald-400 shrink-0 rotate-90 lg:rotate-0" />

              <div className="flex-1 p-4 rounded-2xl bg-slate-900 border border-emerald-500/50 space-y-2 w-full">
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                  <Sprout className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-emerald-400">5. Recommended Crop</h4>
                <p className="text-[11px] text-slate-300 font-mono">Top 3 Crops + Compatibility %</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. SUPPORTED CROPS SHOWCASE */}
      <SupportedCropsShowcase />

      {/* 8. ACADEMIC MINI-PROJECT CALL TO ACTION */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-emerald-800/60 shadow-2xl backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>College Mini-Project Demonstration</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Department of Computer Science & Engineering
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Experience the interactive crop recommendation system. Enter soil parameters or click test presets to see the recommendation, score, crop photo, and top 3 rankings adapt in real time.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block">Dataset Size</span>
                    <span className="text-sm font-bold text-emerald-400">18 Crop Profiles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block">Feature Vector</span>
                    <span className="text-sm font-bold text-emerald-400">7 Parameters</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block">Top Rankings</span>
                    <span className="text-sm font-bold text-emerald-400">Top 3 Crops</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center space-y-4">
                <button
                  onClick={() => navigate('/recommend')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all text-center cursor-pointer"
                >
                  Start Recommendation →
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 text-center cursor-pointer"
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
