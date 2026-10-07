import React from 'react';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  CloudSun,
  Brain,
  Database,
  Sprout,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export const WhySmartAgri: React.FC = () => {
  const whyCards = [
    {
      title: 'Soil Analysis',
      subtitle: 'Nutrient & pH Monitoring',
      description: 'Evaluates Nitrogen (N), Phosphorus (P), Potassium (K), and soil pH levels to identify underlying fertility and soil health parameters.',
      icon: FlaskConical,
      color: 'from-emerald-500 to-teal-700',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Climate Awareness',
      subtitle: 'Microclimate Tracking',
      description: 'Factoring ambient seasonal temperature (°C), relative atmospheric humidity (%), and annual rainfall (mm) into crop selection.',
      icon: CloudSun,
      color: 'from-amber-500 to-orange-700',
      badgeBg: 'bg-amber-100 text-amber-800',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'AI-Based Recommendation',
      subtitle: 'Random Forest Engine',
      description: 'Utilizes trained machine learning classification algorithms to match field parameters against multi-crop ideal thresholds.',
      icon: Brain,
      color: 'from-teal-500 to-cyan-700',
      badgeBg: 'bg-teal-100 text-teal-800',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Data-Driven Decisions',
      subtitle: 'Empirical Yield Support',
      description: 'Replaces legacy trial-and-error guesswork with empirical data analytics to maximize harvest yield and soil preservation.',
      icon: Database,
      color: 'from-indigo-500 to-purple-700',
      badgeBg: 'bg-indigo-100 text-indigo-800',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>Empirical Agricultural Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Better Decisions Start with Better Data
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Successful crop cultivation depends on seven vital soil and microclimate variables. Data-driven recommendation eliminates guesswork and aligns field parameters with target crop requirements.
          </p>
        </div>

        {/* 4 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`absolute bottom-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold font-mono ${card.badgeBg}`}>
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Decision Support
                  </span>
                  <TrendingUp className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 7 Parameter Explanation Ribbon */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800 text-center md:text-left">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Agronomic Carrying Capacity
              </span>
              <h3 className="text-xl font-bold text-white">
                How Parameter Alignment Supports Yield Stability
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              7/7 PARAMETER VECTOR
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center pt-2">
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">SOIL NUTRIENT</span>
              <span className="text-xs font-extrabold text-emerald-400">Nitrogen (N)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">SOIL NUTRIENT</span>
              <span className="text-xs font-extrabold text-emerald-400">Phosphorus (P)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">SOIL NUTRIENT</span>
              <span className="text-xs font-extrabold text-emerald-400">Potassium (K)</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">SOIL ACIDITY</span>
              <span className="text-xs font-extrabold text-emerald-400">Soil pH</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">CLIMATE</span>
              <span className="text-xs font-extrabold text-emerald-400">Temperature</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">CLIMATE</span>
              <span className="text-xs font-extrabold text-emerald-400">Humidity</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 block font-mono">CLIMATE</span>
              <span className="text-xs font-extrabold text-emerald-400">Rainfall</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
