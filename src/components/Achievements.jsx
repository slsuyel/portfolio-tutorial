import React from 'react';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="awards" className="py-10 sm:py-16 relative z-10 bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>RECOGNITIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            Honored for engineering excellence, rapid delivery, and database architecture achievements.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mt-2.5"></div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 sm:w-32 sm:h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>

              <div>
                <div className="flex items-center justify-between gap-2.5 mb-4">
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-indigo-500/20 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.year}
                  </span>
                </div>

                <div className="text-[11px] font-mono-code font-semibold text-cyan-400 mb-0.5">
                  {item.organization}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono-code bg-indigo-500/20 text-indigo-300 mb-2.5 border border-indigo-500/30">
                  {item.badge}
                </span>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="w-full h-1 bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-indigo-500 rounded-full mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
