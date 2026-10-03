import React from 'react';
import { teamMembers } from '../data/team';
import { motion } from 'framer-motion';
import { GraduationCap, IdCard, Users } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-emerald-600" />
            <span>Mini-Project Development Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Team
          </h1>

          <p className="text-lg sm:text-xl font-bold text-emerald-700">
            Together we build smarter solutions for a better tomorrow.
          </p>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Department of Computer Science and Engineering project team members who contributed to dataset modeling, agronomic feature engineering, and application design.
          </p>
        </div>

        {/* Team Grid (4 Member Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.registerNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:h-2 transition-all" />

              <div>
                {/* Initials Avatar Box */}
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 rounded-3xl ${member.avatarBg} text-white flex items-center justify-center text-2xl font-extrabold shadow-lg shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                </div>

                {/* Member Name */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {member.name}
                  </h3>

                  {/* Register Number Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold border border-slate-200">
                    <IdCard className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{member.registerNumber}</span>
                  </div>
                </div>

                {/* Department */}
                <p className="text-xs text-slate-500 text-center font-medium mb-4 pb-4 border-b border-slate-100">
                  {member.department}
                </p>

                {/* Project Contribution */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Contribution
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {member.contribution}
                  </p>
                </div>
              </div>

              {/* Bottom Role Tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>CSE Mini-Project</span>
                <span className="text-emerald-600 font-semibold">2025-26</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Institutional Context Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Department of Computer Science & Engineering</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Mini Project Submission • 2025 - 2026
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Submitted in partial fulfillment for the academic course requirements of the Computer Science & Engineering department.
            </p>
          </div>

          <div className="shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              CSE-MINI-PROJECT-2026
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
