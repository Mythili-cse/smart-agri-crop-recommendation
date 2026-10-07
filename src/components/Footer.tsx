import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Cpu, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Project Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  🌱 SmartAgri
                </span>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Crop Recommendation System
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              An AI/ML-based crop recommendation system that analyzes soil and environmental conditions to support smarter crop selection.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-xs font-medium">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Machine Learning Decision Support System</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/recommend" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  Crop Recommendation
                </Link>
              </li>
              <li>
                <Link to="/crops" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  Supported Crops
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between py-1 border-b border-slate-800/50">
                <span>Soil N-P-K Nutrients</span>
                <span className="text-emerald-400 font-mono">4 Metrics</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-800/50">
                <span>Climate & Rainfall</span>
                <span className="text-emerald-400 font-mono">3 Metrics</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-800/50">
                <span>Supported Crop Dataset</span>
                <span className="text-emerald-400 font-mono">23 Crops</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-800/50">
                <span>Ranking Output</span>
                <span className="text-emerald-400 font-mono">Top 3 Crops</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Smart Agri – Crop Recommendation System. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Agronomic Decision Support Prototype
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
