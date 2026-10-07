import React from 'react';
import { motion } from 'framer-motion';
import {
  Sprout,
  FlaskConical,
  Sliders,
  TestTube,
  Thermometer,
  Droplets,
  CloudRain,
  CheckCircle2,
} from 'lucide-react';

export const ParametersSection: React.FC = () => {
  const soilParameters = [
    {
      name: 'Nitrogen (N)',
      symbol: 'N',
      unit: 'mg/kg',
      role: 'Drives leafy vegetative growth, stem tillering, and chlorophyll synthesis.',
      icon: Sprout,
      color: 'from-emerald-500 to-teal-700',
      bgLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      name: 'Phosphorus (P)',
      symbol: 'P',
      unit: 'mg/kg',
      role: 'Stimulates root expansion, early seed germination, and flower bud blooming.',
      icon: FlaskConical,
      color: 'from-amber-500 to-yellow-700',
      bgLight: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      name: 'Potassium (K)',
      symbol: 'K',
      unit: 'mg/kg',
      role: 'Enhances drought resistance, disease immunity, fruit sugar, and starch weight.',
      icon: Sliders,
      color: 'from-purple-500 to-indigo-700',
      bgLight: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      name: 'Soil pH',
      symbol: 'pH',
      unit: 'pH scale (0-14)',
      role: 'Measures soil acidity or alkalinity governing root nutrient bioavailability.',
      icon: TestTube,
      color: 'from-pink-500 to-rose-700',
      bgLight: 'bg-pink-50 text-pink-700 border-pink-200',
    },
  ];

  const environmentalParameters = [
    {
      name: 'Temperature',
      symbol: 'Temp',
      unit: '°C',
      role: 'Thermal regulator governing rate of crop respiration, flowering, and ripening.',
      icon: Thermometer,
      color: 'from-orange-500 to-red-700',
      bgLight: 'bg-orange-50 text-orange-700 border-orange-200',
    },
    {
      name: 'Humidity',
      symbol: 'Hum',
      unit: '% (Relative)',
      role: 'Atmospheric moisture level regulating leaf stomatal transpiration and water stress.',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-700',
      bgLight: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
    {
      name: 'Rainfall',
      symbol: 'Rain',
      unit: 'mm / season',
      role: 'Hydrological precipitation supplying natural seasonal water requirements.',
      icon: CloudRain,
      color: 'from-blue-500 to-indigo-700',
      bgLight: 'bg-blue-50 text-blue-700 border-blue-200',
    },
  ];

  return (
    <section id="parameters" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-emerald-600" />
            <span>7 Core Input Variables</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Agricultural Parameters Evaluated
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Our Machine Learning model analyzes 4 soil chemistry metrics and 3 microclimate metrics to calculate multi-crop compatibility scores.
          </p>
        </div>

        {/* Group 1: SOIL PARAMETERS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="p-2.5 rounded-xl bg-emerald-700 text-white shadow-md">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                SOIL PARAMETERS
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Soil N-P-K nutrient profile and acidity/alkalinity measurement
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {soilParameters.map((param, idx) => {
              const Icon = param.icon;
              return (
                <motion.div
                  key={param.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl ${param.bgLight} border font-bold shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {param.unit}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {param.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {param.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-700">
                    <span>Feature Vector</span>
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Soil Metric
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group 2: ENVIRONMENTAL PARAMETERS */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="p-2.5 rounded-xl bg-teal-700 text-white shadow-md">
              <Thermometer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                ENVIRONMENTAL PARAMETERS
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Atmospheric microclimate weather, moisture, and rainfall parameters
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {environmentalParameters.map((param, idx) => {
              const Icon = param.icon;
              return (
                <motion.div
                  key={param.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl ${param.bgLight} border font-bold shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {param.unit}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {param.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {param.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-teal-700">
                    <span>Feature Vector</span>
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Climate Metric
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
