import React from 'react';
import { projectInfo, projectObjectives, methodologySteps, techStackItems } from '../data/project';
import { motion } from 'framer-motion';
import {
  Brain,
  Sliders,
  Sprout,
  BarChart3,
  Layout,
  Database,
  Filter,
  CheckSquare,
  Cpu,
  Zap,
  Award,
  ArrowRight,
  Code2,
  FileCode2,
  Palette,
  Terminal,
  Server,
  BrainCircuit,
  Table,
  GitBranch,
  GraduationCap,
  Info,
  Sparkles,
  CloudSun,
} from 'lucide-react';

export const About: React.FC = () => {
  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Sliders':
        return Sliders;
      case 'Sprout':
        return Sprout;
      case 'BarChart3':
        return BarChart3;
      case 'Layout':
        return Layout;
      default:
        return Brain;
    }
  };

  const getMethodologyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return Database;
      case 'Filter':
        return Filter;
      case 'CheckSquare':
        return CheckSquare;
      case 'Cpu':
        return Cpu;
      case 'Zap':
        return Zap;
      case 'Award':
        return Award;
      default:
        return Cpu;
    }
  };

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'FileCode2':
        return FileCode2;
      case 'Palette':
        return Palette;
      case 'Terminal':
        return Terminal;
      case 'Server':
        return Server;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Table':
        return Table;
      case 'Zap':
        return Zap;
      case 'GitBranch':
        return GitBranch;
      default:
        return Code2;
    }
  };

  const futureEnhancements = [
    {
      title: 'Python Flask ML Backend Connection',
      description: 'Serve Scikit-learn trained Random Forest (.pkl) model via REST API POST endpoint (/api/predict).',
      icon: Server,
    },
    {
      title: 'IoT Soil Sensor Integration',
      description: 'Stream live N-P-K soil sensor measurements and pH probe telemetry directly into the recommendation engine.',
      icon: Cpu,
    },
    {
      title: 'Real-Time Weather API Ingestion',
      description: 'Fetch real-time microclimate temperature, relative humidity, and 7-day rainfall forecasts automatically.',
      icon: CloudSun,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span>Academic Project Specification</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About the Project
          </h1>

          <p className="text-lg sm:text-xl font-bold text-emerald-700">
            Using machine learning to support data-driven agricultural decisions.
          </p>

          <p className="text-slate-600 text-base leading-relaxed">
            A computer science mini-project addressing optimal crop selection by pairing artificial intelligence models with key soil and climatic measurements.
          </p>
        </div>

        {/* Section 1: Project Overview & Problem Being Addressed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-4 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Problem Statement
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">Agro-Ecological Context</span>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                {projectInfo.problemStatement}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
              CSE Mini-Project • Department of Computer Science & Engineering
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Proposed Solution
                  </h2>
                  <span className="text-xs text-emerald-400 font-mono">Precision Agriculture AI</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {projectInfo.summary}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-emerald-300 font-mono">
              7 Parameters Evaluated $\rightarrow$ 18 Crop Models Scored $\rightarrow$ Top 3 Ranked
            </div>
          </motion.div>

        </div>

        {/* Section 2: Objectives */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Project Objectives
            </h2>
            <p className="text-slate-600 text-sm">
              Core targets designed for the college mini-project implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectObjectives.map((obj, idx) => {
              const Icon = getObjectiveIcon(obj.icon);
              return (
                <motion.div
                  key={obj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {obj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-600 font-semibold">
                    Objective 0{idx + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Methodology (Visual Process Pipeline) */}
        <div className="space-y-8 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              System Pipeline
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Project Methodology & Workflow
            </h2>
            <p className="text-slate-400 text-sm">
              Sequential workflow for dataset ingestion, feature engineering, training, and web delivery
            </p>
          </div>

          {/* Visual Process Flow Horizontal/Vertical Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {methodologySteps.map((mStep, idx) => {
              const Icon = getMethodologyIcon(mStep.icon);
              return (
                <motion.div
                  key={mStep.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      Phase 0{mStep.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {mStep.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mStep.description}
                  </p>

                  <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400">
                    {mStep.details}
                  </div>

                  {idx < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Visual Methodology Flow Diagram Ribbon */}
          <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <p className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">
              Methodology Flow Diagram
            </p>
            <p className="text-xs text-slate-300">
              Data Collection → Data Preprocessing → Feature Selection → Model Training → Prediction → Crop Recommendation
            </p>
          </div>
        </div>

        {/* Section 4: Technologies Used */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Technologies Used
            </h2>
            <p className="text-slate-600 text-sm">
              Architecture tools, frontend libraries, and backend machine learning components
            </p>
          </div>

          {/* Explicit Integration Status Callout */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              <strong>Architecture Note for Faculty Review:</strong> Technologies marked as <span className="bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-bold">ACTIVE NOW</span> are fully operational in this React frontend web application. Technologies marked as <span className="bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-bold">BACKEND READY</span> represent the Python/Flask ML pipeline components ready to be connected via REST API.
            </p>
          </div>

          {/* Grid of Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStackItems.map((item) => {
              const Icon = getTechIcon(item.iconName);
              return (
                <div
                  key={item.name}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                          item.isIntegratedNow
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-slate-100 text-slate-700 border border-slate-300'
                        }`}
                      >
                        {item.isIntegratedNow ? 'ACTIVE NOW' : 'BACKEND READY'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 block mb-2">
                      {item.category}
                    </span>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Future Enhancements */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Future Enhancements
            </h2>
            <p className="text-slate-600 text-sm">
              Planned extensions for real-world IoT and cloud deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureEnhancements.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
