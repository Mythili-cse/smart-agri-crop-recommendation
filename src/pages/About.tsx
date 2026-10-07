import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Cpu, 
  FlaskConical, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  ThermometerSun,
  CloudRain,
  Droplets,
  Activity,
  User,
  Layout,
  Server,
  BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const parameters = [
    { name: 'Nitrogen (N)', desc: 'Primary macronutrient essential for vegetative tillering and foliage development.', icon: FlaskConical, color: 'text-emerald-400' },
    { name: 'Phosphorus (P)', desc: 'Critical nutrient for early root establishment, flowering, and seed set.', icon: FlaskConical, color: 'text-teal-400' },
    { name: 'Potassium (K)', desc: 'Regulates plant water pressure, stomatal conductance, and stress resistance.', icon: FlaskConical, color: 'text-indigo-400' },
    { name: 'Temperature', desc: 'Controls metabolic enzymatic activity and thermal crop development stages.', icon: ThermometerSun, color: 'text-amber-400' },
    { name: 'Humidity', desc: 'Influences atmospheric vapor pressure deficit and transpirational leaf cooling.', icon: Droplets, color: 'text-cyan-400' },
    { name: 'Soil pH', desc: 'Determines soil chemical acidity/alkalinity and nutrient bio-availability.', icon: Activity, color: 'text-rose-400' },
    { name: 'Rainfall', desc: 'Provides natural seasonal moisture for root hydration and canopy growth.', icon: CloudRain, color: 'text-blue-400' },
  ];

  const workflowSteps = [
    { step: '01', title: 'User Input', desc: 'Soil & microclimate parameters entered by user or loaded via field preset.' },
    { step: '02', title: 'Soil & Climate Analysis', desc: 'Parameters validated against optimal agronomic range boundaries.' },
    { step: '03', title: 'Machine Learning Model', desc: 'Random Forest multi-class decision tree algorithm evaluates compatibility.' },
    { step: '04', title: 'Crop Prediction', desc: 'Model identifies top crop candidates and calculates confidence scores.' },
    { step: '05', title: 'Recommendation Result', desc: 'Actionable crop profile and complete parameter breakdown displayed.' },
  ];

  const flowSteps = [
    { title: 'User', sub: 'Inputs soil & climate values', icon: User, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { title: 'Frontend Interface', sub: 'Validates & sends input payload', icon: Layout, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { title: 'Backend REST API', sub: 'Receives request at /api/predict', icon: Server, color: 'text-teal-400 bg-teal-500/10 border-teal-500/30' },
    { title: 'Random Forest ML Model', sub: 'Evaluates 7-parameter vector', icon: Cpu, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
    { title: 'Crop Recommendation', sub: 'Calculates top crop matches', icon: BrainCircuit, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
    { title: 'Recommendation Result', sub: 'Displays dynamic crop profile', icon: Sprout, color: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/50' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-28 pb-20 text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* 1. Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>Project Methodology & Overview</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            About Smart Agri
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Using soil and environmental data to support smarter crop selection.
          </p>
        </motion.div>

        {/* 2. Project Overview - What is Smart Agri? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                What is Smart Agri?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Data-Driven Agriculture Decision-Support Prototype
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Smart Agri-Crop Recommendation System is a web-based AI/ML decision-support system that analyzes soil and environmental conditions and recommends suitable crops for cultivation.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The prototype evaluates 7 key agricultural variables to determine soil-crop compatibility, empowering farmers and agronomic researchers with intelligent, data-backed recommendations.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>Evaluated Soil & Climate Parameters</span>
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {parameters.map((p) => (
                  <div key={p.name} className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center gap-2">
                    <p.icon className={`w-3.5 h-3.5 ${p.color} shrink-0`} />
                    <span className="truncate">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. Why This Project? & Project Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Why This Project?</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Crop selection depends on several interrelated factors such as soil nutrients (N, P, K), soil pH, ambient temperature, humidity, and annual rainfall.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Choosing a crop without considering these underlying conditions can lead to poor yields, excessive nutrient depletion, and unsuitable crop selection. This project provides data-driven recommendations instead of relying solely on traditional guesswork.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Project Objective</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The primary objective is to build a reliable decision-support system that evaluates complex soil chemistry and microclimate metrics to suggest optimal crops.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Designed as a modern decision-support system, it demonstrates the seamless integration of user interfaces, backend APIs, and Machine Learning algorithms for real-world agricultural problem-solving.
            </p>
          </div>
        </motion.div>

        {/* 4. Our Solution & Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Recommendation Workflow
            </span>
            <h2 className="text-3xl font-bold text-white">Our Solution</h2>
            <p className="text-slate-300 text-sm">
              The system accepts soil and environmental parameters from the user, processes the values through a Machine Learning-based recommendation system, and produces a suitable crop recommendation.
            </p>
          </div>

          {/* Workflow Pipeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((ws, i) => (
              <div
                key={ws.step}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/70 space-y-2 relative group hover:border-emerald-500/60 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                    {ws.step}
                  </span>
                  {i < workflowSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {ws.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. End-to-End System Processing Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl space-y-6"
        >
          <div className="text-center space-y-1">
            <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider block">
              Processing Pipeline
            </span>
            <h3 className="text-2xl font-bold text-white">
              System Execution Flow
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
        </motion.div>

        {/* 6. Machine Learning Behind the Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Predictive Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Machine Learning Behind the Recommendation
              </h2>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              Random Forest Classifier
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Ensemble Model Concept
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uses an ensemble Random Forest decision tree classifier to map continuous 7-variable input feature vectors to predicted crop targets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Feature Selection
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluates Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Soil pH, and Rainfall to model non-linear agricultural boundaries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                API Integration Architecture
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exposes a structured JSON REST API endpoint (<code className="text-emerald-400 font-mono">POST /api/predict</code>) to deliver real-time predictions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/40 text-center space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Test the Recommendation System?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Input custom soil and weather metrics or select a field preset to evaluate the recommendation output.
          </p>
          <div className="pt-2">
            <Link
              to="/recommend"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <span>Get Crop Recommendation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
