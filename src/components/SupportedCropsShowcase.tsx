import React, { useState } from 'react';
import { cropDataset } from '../data/cropData';
import { motion } from 'framer-motion';
import { Sprout, Thermometer, CloudRain, CheckCircle2 } from 'lucide-react';

export const SupportedCropsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Cereal', 'Pulse', 'Fruit', 'Fiber', 'Plantation'];

  const filteredCrops = selectedCategory === 'All'
    ? cropDataset
    : cropDataset.filter((c) => c.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Agronomic Database
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Supported Crops & Conditions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Our decision system maps soil and microclimate inputs against 18 agronomic crop models.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat} {cat === 'All' ? `(${cropDataset.length})` : ''}
            </button>
          ))}
        </div>

        {/* Crop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCrops.map((crop, idx) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-950/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Crop Image Container with Fallback */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  {!imgErrors[crop.id] ? (
                    <img
                      src={crop.image}
                      alt={crop.name}
                      onError={() => handleImageError(crop.id)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-teal-950 flex flex-col items-center justify-center text-center p-4">
                      <Sprout className="w-10 h-10 text-emerald-400 mb-2" />
                      <span className="text-sm font-bold text-white">{crop.name}</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    {crop.category}
                  </span>

                  <span className="absolute bottom-3 left-3 text-xs font-serif italic text-slate-300">
                    {crop.scientificName}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {crop.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {crop.description}
                  </p>

                  {/* Micro Quick Stats */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 border-t border-slate-700/60">
                    <div className="flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{crop.idealConditions.tempRange[0]}-{crop.idealConditions.tempRange[1]}°C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CloudRain className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{crop.idealConditions.rainfallRange[0]}-{crop.idealConditions.rainfallRange[1]}mm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Water: {crop.waterRequirement}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Model Ready
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
