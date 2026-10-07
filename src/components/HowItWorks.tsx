import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, Brain, Sprout, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Field Conditions',
      subtitle: 'Soil & Climate Input',
      description: 'Input Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, Soil pH, and Rainfall values.',
      icon: Sliders,
      badge: 'Step 01',
    },
    {
      number: '02',
      title: 'Analyze Soil & Climate',
      subtitle: 'Feature Vector Evaluation',
      description: 'The system validates parameters and normalizes physical measurements against ideal agronomic thresholds.',
      icon: Cpu,
      badge: 'Step 02',
    },
    {
      number: '03',
      title: 'Run ML Prediction',
      subtitle: 'Random Forest Inference',
      description: 'Input data passes through the Random Forest Classifier ML model (or Flask REST API endpoint).',
      icon: Brain,
      badge: 'Step 03',
    },
    {
      number: '04',
      title: 'Get Crop Recommendation',
      subtitle: 'Dynamic Decision Result',
      description: 'Receive the top recommended crop, compatibility score %, parameter breakdown, and cultivation advice.',
      icon: Sprout,
      badge: 'Step 04',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            4-Step Analytics Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From field condition measurements to AI-powered crop recommendation in four simple steps.
          </p>
        </div>

        {/* Process Flow Timeline Ribbon */}
        <div className="mb-14 hidden lg:flex items-center justify-between p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 max-w-5xl mx-auto text-xs font-bold font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">1</span>
            <span>Enter Field Conditions</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">2</span>
            <span>Analyze Soil & Climate</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">3</span>
            <span>Run ML Prediction</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center">4</span>
            <span>Get Crop Recommendation</span>
          </div>
        </div>

        {/* 4 Cards Process Grid */}
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
                className="relative bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 hover:border-emerald-500/60 hover:bg-slate-800 transition-all group flex flex-col justify-between shadow-xl"
              >
                {/* Step Number Background */}
                <div className="absolute top-4 right-4 text-4xl font-extrabold text-slate-700/40 font-mono group-hover:text-emerald-500/30 transition-colors">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-700 text-emerald-400 text-[11px] font-mono font-bold mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-extrabold text-white mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-400 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
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

