import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplet, Globe, Cpu, type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconType: 'growth' | 'resource' | 'sustainable' | 'data';
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconType, index }) => {
  const getIcon = (): LucideIcon => {
    switch (iconType) {
      case 'growth':
        return Sprout;
      case 'resource':
        return Droplet;
      case 'sustainable':
        return Globe;
      case 'data':
        return Cpu;
      default:
        return Sprout;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-6 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:shadow-emerald-900/10 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top accent bar on hover */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
        <span>Academic Advantage</span>
        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};
