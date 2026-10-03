import React from 'react';
import type { PredictionResult } from '../types';
import { motion } from 'framer-motion';
import {
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  FlaskConical,
  ThermometerSun,
  TestTube,
  CloudRain,
  Calendar,
  Droplet,
  Server,
  Info,
  Printer,
  Award,
  BarChart3,
  Sliders,
} from 'lucide-react';

interface ResultCardProps {
  result: PredictionResult;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const crop = result.recommendedCrop;

  const handlePrint = () => {
    window.print();
  };

  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return FlaskConical;
      case 'ThermometerSun':
        return ThermometerSun;
      case 'TestTube':
        return TestTube;
      case 'CloudRain':
        return CloudRain;
      default:
        return CheckCircle2;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Suitable':
      case 'Optimal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Suitable
          </span>
        );
      case 'Near Suitable':
      case 'Sub-optimal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Near Suitable
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300">
            <Info className="w-3.5 h-3.5 text-slate-500" />
            Outside Preferred Range
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 print:space-y-6">
      
      {/* Top Banner & Main Result Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden print:border-none print:shadow-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Crop High Quality Image Column */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[100%] overflow-hidden bg-slate-900">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/40" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30">
                {crop.category} Crop
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
                Scientific Classification
              </span>
              <p className="text-xl font-serif italic text-slate-200">
                {crop.scientificName}
              </p>
            </div>
          </div>

          {/* Main Recommended Crop Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider">
                  Primary Recommendation Output
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold shadow-md shadow-emerald-600/20">
                  {result.confidenceScore}% Compatibility Score
                </span>
              </div>

              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Recommended Crop
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight my-1">
                {crop.name}
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mt-3">
                {result.explanation}
              </p>

            </div>

            {/* Key Quick Attributes */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Growing Period</span>
                  <span className="text-xs font-bold text-slate-800">{crop.growingPeriodDays}</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-100 text-cyan-700">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Water Demand</span>
                  <span className="text-xs font-bold text-slate-800">{crop.waterRequirement}</span>
                </div>
              </div>
            </div>

            {/* System Status Banner */}
            <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {result.backendConnected
                    ? 'Prediction output from Python Flask ML API endpoint.'
                    : 'Score calculated via Prototype Agronomic Compatibility Algorithm.'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950 shrink-0">
                {result.backendConnected ? 'FLASK API' : 'ALGORITHM MATCH'}
              </span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Section 2: Top 3 Ranked Recommendations */}
      {result.topCrops && result.topCrops.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <h3 className="text-2xl font-bold text-slate-900">
              Top 3 Crop Recommendations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.topCrops.map((item, index) => (
              <div
                key={item.crop.id}
                className={`p-5 rounded-3xl border transition-all flex flex-col justify-between ${
                  index === 0
                    ? 'bg-gradient-to-b from-emerald-950 to-slate-900 text-white border-emerald-500/50 shadow-xl'
                    : 'bg-white text-slate-900 border-slate-200/90 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-7 h-7 rounded-full font-mono text-xs font-bold flex items-center justify-center ${
                        index === 0
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      #{index + 1}
                    </span>
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                        index === 0
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-100 text-emerald-700 font-mono'
                      }`}
                    >
                      {item.score}% Match
                    </span>
                  </div>

                  <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
                    <img
                      src={item.crop.image}
                      alt={item.crop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className={`text-lg font-bold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {item.crop.name}
                  </h4>
                  <span className={`text-xs font-serif italic block mb-2 ${index === 0 ? 'text-emerald-300' : 'text-slate-500'}`}>
                    {item.crop.scientificName}
                  </span>

                  <p className={`text-xs leading-relaxed line-clamp-2 ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.crop.description}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-mono ${index === 0 ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'}`}>
                  Category: {item.crop.category}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Section 3: Why This Crop? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-emerald-600" />
          <h3 className="text-2xl font-bold text-slate-900">
            Why This Crop?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.whyThisRecommendation.map((item, idx) => {
            const Icon = getReasonIcon(item.icon);
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:border-emerald-300 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Section 4: Input Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">
              Submitted Input Summary
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Analyzed at {result.timestamp}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Nitrogen (N)</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.nitrogen}</span>
            <span className="text-[10px] text-slate-500 block">mg/kg</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Phosphorus (P)</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.phosphorus}</span>
            <span className="text-[10px] text-slate-500 block">mg/kg</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Potassium (K)</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.potassium}</span>
            <span className="text-[10px] text-slate-500 block">mg/kg</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Soil pH</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.ph}</span>
            <span className="text-[10px] text-slate-500 block">pH</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Temperature</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.temperature}</span>
            <span className="text-[10px] text-slate-500 block">°C</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Humidity</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.humidity}</span>
            <span className="text-[10px] text-slate-500 block">%</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">Rainfall</span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">{result.inputs.rainfall}</span>
            <span className="text-[10px] text-slate-500 block">mm</span>
          </div>
        </div>
      </motion.div>

      {/* Section 5: Parameter Analysis Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Parameter Analysis Breakdown
            </h3>
            <p className="text-xs text-slate-500">
              Comparing submitted parameter values against {crop.name}'s preferred growing thresholds
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>7 Attributes Evaluated</span>
          </div>
        </div>

        {/* Input Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
                <th className="py-3.5 px-4 rounded-l-xl">Parameter</th>
                <th className="py-3.5 px-4">Your Value</th>
                <th className="py-3.5 px-4">Ideal Range for {crop.name}</th>
                <th className="py-3.5 px-4">Compatibility Status</th>
                <th className="py-3.5 px-4 rounded-r-xl">Agronomic Remark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {result.parameterAnalysis.map((row) => (
                <tr key={row.parameter} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {row.parameter}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                    {row.value} <span className="text-xs text-slate-500 font-normal">{row.unit}</span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-600">
                    {row.idealRange}
                  </td>
                  <td className="py-3.5 px-4">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 leading-relaxed">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Action Buttons: Download/Print & Try Again */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-extrabold text-base border border-slate-300 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Printer className="w-5 h-5 text-slate-600" />
          <span>Download / Print Result</span>
        </button>

        <button
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw className="w-5 h-5 text-white" />
          <span>Try Another Input</span>
        </button>
      </div>

    </div>
  );
};
