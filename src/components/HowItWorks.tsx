import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, Brain, Sprout, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Data',
      subtitle: 'Soil & Microclimate',
      description: 'Input Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, Soil pH, and Rainfall.',
      icon: Sliders,
      badge: 'Step 1',
    },
    {
      number: '02',
      title: 'Analyze Conditions',
      subtitle: 'Feature Vector Normalization',
      description: 'The platform normalizes physical inputs against standard agronomic ranges and threshold matrices.',
      icon: Cpu,
      badge: 'Step 2',
    },
    {
      number: '03',
      title: 'ML Prediction',
      subtitle: 'Model Evaluation',
      description: 'Input parameters pass through trained classification rules (Random Forest / Decision Tree model).',
      icon: Brain,
      badge: 'Step 3',
    },
    {
      number: '04',
      title: 'Crop Recommendation',
      subtitle: 'Actionable Advice',
      description: 'Receive the primary recommended crop along with confidence score and agronomic cultivation guidelines.',
      icon: Sprout,
      badge: 'Step 4',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            System Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-slate-400 text-base">
            From raw soil chemistry values to precision crop recommendations in four streamlined steps.
          </p>
        </div>

        {/* Process Flow Badge Ribbon */}
        <div className="mb-12 hidden lg:flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 max-w-4xl mx-auto text-sm font-semibold">
          <span className="text-emerald-400">1. Enter Data</span>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <span className="text-emerald-400">2. Analyze Conditions</span>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <span className="text-emerald-400">3. ML Prediction</span>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <span className="text-emerald-400">4. Crop Recommendation</span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group flex flex-col justify-between"
              >
                {/* Step Number Background */}
                <div className="absolute top-4 right-4 text-4xl font-extrabold text-slate-700/40 font-mono group-hover:text-emerald-500/20 transition-colors">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-700 text-emerald-400 text-[11px] font-mono font-semibold mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-medium text-emerald-400 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
