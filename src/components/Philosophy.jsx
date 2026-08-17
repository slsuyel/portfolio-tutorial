import React from 'react';
import { Zap, Layout, Cpu, Sparkles, Compass } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/portfolioData';

export default function Philosophy() {
  const iconMap = {
    Zap: Zap,
    Layout: Layout,
    Cpu: Cpu,
    Sparkles: Sparkles
  };

  return (
    <section id="philosophy" className="py-10 sm:py-16 relative z-10 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-code mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>MY CODING PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Principles <span className="gradient-text">I Stand By</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            Architecting modern web applications requires a balance between technical execution and visual art.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-2.5"></div>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || Zap;
            return (
              <div
                key={pillar.id}
                className="glass-card p-4 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                {/* Background Large Number Watermark */}
                <span className="absolute -top-2 -right-1 text-5xl sm:text-6xl font-extrabold font-mono-code text-white/[0.04] group-hover:text-indigo-500/10 transition-colors pointer-events-none select-none">
                  {pillar.badge}
                </span>

                <div>
                  {/* Icon Badge */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="w-full h-1 bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-500 rounded-full mt-4 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
