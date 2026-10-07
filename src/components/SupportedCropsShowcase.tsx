import React, { useState, useMemo } from 'react';
import { cropDataset } from '../data/cropData';
import type { CropDetails } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Sprout, 
  ThermometerSun, 
  CloudRain, 
  Droplets, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { CropDetailModal } from './CropDetailModal';
import { CropImage } from './CropImage';

export const SupportedCropsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<CropDetails | null>(null);

  const categories = ['All', 'Cereal', 'Pulse', 'Fruit', 'Commercial Crop'];

  // Count helper per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: cropDataset.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = cropDataset.filter((c) => c.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered dataset
  const filteredCrops = useMemo(() => {
    return cropDataset.filter((crop) => {
      const matchesCategory =
        selectedCategory === 'All' || crop.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        crop.name.toLowerCase().includes(q) ||
        crop.scientificName.toLowerCase().includes(q) ||
        crop.category.toLowerCase().includes(q) ||
        crop.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-12 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Category Filter Controls */}
        <div className="space-y-6 bg-slate-800/60 p-6 rounded-3xl border border-slate-700/80 backdrop-blur-md">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crops by name, scientific name..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>
                Showing <strong className="text-emerald-400">{filteredCrops.length}</strong> of {cropDataset.length} Supported Crops
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    selectedCategory === cat
                      ? 'bg-emerald-950 text-emerald-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Crop Grid (Desktop: 3 per row, Tablet: 2 per row, Mobile: 1 per row) */}
        {filteredCrops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredCrops.map((crop, idx) => (
                <motion.div
                  key={crop.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => setSelectedCrop(crop)}
                  className="group bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-950/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Consistent Aspect Ratio Image Container (220px height) */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                      <CropImage
                        src={crop.image}
                        alt={crop.name}
                        cropName={crop.name}
                        className="group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                      />

                      {/* Top Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                      {/* Category Badge Top Left */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30">
                        {crop.category}
                      </span>

                      {/* Water Demand Badge Top Right */}
                      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-300 text-[11px] font-mono border border-slate-700 flex items-center gap-1">
                        <Droplets className="w-3 h-3 text-blue-400" />
                        {crop.waterRequirement}
                      </span>

                      {/* Scientific Name Overlay Bottom Left */}
                      <span className="absolute bottom-3 left-4 text-xs font-serif italic text-emerald-300">
                        {crop.scientificName}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {crop.name}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {crop.description}
                      </p>

                      {/* Metrics Summary Row */}
                      <div className="pt-3 grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 border-t border-slate-700/60">
                        <div className="flex items-center gap-1.5">
                          <ThermometerSun className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{crop.idealConditions.tempRange[0]}–{crop.idealConditions.tempRange[1]}°C</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CloudRain className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{crop.idealConditions.rainfallRange[0]}–{crop.idealConditions.rainfallRange[1]}mm</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 py-4 bg-slate-900/70 border-t border-slate-700/60 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:bg-emerald-950/40 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      View Agronomic Profile
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center bg-slate-800/40 rounded-3xl border border-slate-700/80 space-y-4">
            <Sprout className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">No matching crops found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              We couldn't find any crop matching "{searchQuery}" under category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Modal render */}
        <CropDetailModal crop={selectedCrop} onClose={() => setSelectedCrop(null)} />

      </div>
    </section>
  );
};
