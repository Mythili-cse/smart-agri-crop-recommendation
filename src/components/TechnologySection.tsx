import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Layout,
  Server,
  Cpu,
  Sprout,
  CheckCircle2,
  ArrowRight,
  Code2,
  FileCode2,
  Zap,
  Palette,
  Terminal,
  BrainCircuit,
  Table,
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techCategories = [
    {
      category: 'FRONTEND',
      description: 'Responsive user interface & interactive form logic',
      items: [
        { name: 'React', role: 'Component architecture & state management', icon: Code2 },
        { name: 'TypeScript', role: 'Static typing & interface contracts', icon: FileCode2 },
        { name: 'Vite', role: 'Build tool & fast developer HMR', icon: Zap },
        { name: 'CSS', role: 'Custom styling & responsive layouts', icon: Palette },
        { name: 'Lucide React', role: 'Modern UI icons & visual badges', icon: Code2 },
      ],
    },
    {
      category: 'BACKEND',
      description: 'RESTful server endpoints & API integration layer',
      items: [
        { name: 'Python', role: 'Runtime environment for backend logic', icon: Terminal },
        { name: 'Flask', role: 'Lightweight REST API framework', icon: Server },
        { name: 'Flask-CORS', role: 'Cross-origin resource sharing', icon: Server },
      ],
    },
    {
      category: 'MACHINE LEARNING',
      description: 'Agronomic model training & predictive analytics',
      items: [
        { name: 'Scikit-learn', role: 'Supervised ML model library', icon: BrainCircuit },
        { name: 'Random Forest Classifier', role: 'Ensemble decision tree model algorithm', icon: Cpu },
        { name: 'Pandas', role: 'Data manipulation & dataset operations', icon: Table },
        { name: 'NumPy', role: 'Numerical matrix & vector computations', icon: Table },
      ],
    },
  ];

  const flowSteps = [
    { title: 'User', sub: 'Inputs soil & climate values', icon: User, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { title: 'React + TypeScript Frontend', sub: 'Validates & sends POST payload', icon: Layout, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { title: 'Flask Backend / API', sub: 'Receives request at /api/predict', icon: Server, color: 'text-teal-400 bg-teal-500/10 border-teal-500/30' },
    { title: 'Random Forest ML Model', sub: 'Evaluates 7-parameter vector', icon: Cpu, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
    { title: 'Crop Recommendation', sub: 'Calculates top crop matches', icon: BrainCircuit, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
    { title: 'Result', sub: 'Displays dynamic crop profile', icon: Sprout, color: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/50' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Application Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technology Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cleanly decoupled architecture connecting a responsive React UI with Python Flask and Scikit-learn Machine Learning components.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider block">
              Data Processing Pipeline
            </span>
            <h3 className="text-xl font-bold text-white">
              End-to-End System Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {flowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700/80 text-center w-full space-y-2 group hover:border-emerald-500/60 transition-all flex flex-col items-center justify-between h-full">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-emerald-400 hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Cards (3 Categories: FRONTEND, BACKEND, MACHINE LEARNING) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-white tracking-wider">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {group.items.length} Technologies
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  {group.description}
                </p>

                <div className="space-y-3 pt-2">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/70 hover:border-emerald-500/50 transition-all flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 truncate">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* REST API Interface Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              REST API Interface Endpoint
            </span>
            <h4 className="text-lg font-bold text-white">
              POST http://127.0.0.1:5000/api/predict
            </h4>
            <p className="text-xs text-slate-300">
              Payload: N, P, K, Temperature, Humidity, pH, Rainfall $\rightarrow$ JSON Response: &#123; "crop": "name", "score": 92 &#125;
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" /> Flask Integration Ready
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
