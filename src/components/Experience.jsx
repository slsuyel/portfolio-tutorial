import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { CAREER_TIMELINE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-16 relative z-10 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-code mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            Over 3 years of building fullstack architectures, integrating microservice APIs, and optimizing web performance.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-2.5"></div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 sm:space-y-10 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-ml-0.5 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500 before:to-transparent">
          {CAREER_TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative flex flex-col sm:flex-row items-center group">
                
                {/* Center Timeline Node */}
                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#070a12] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400"></div>
                </div>

                {/* Timeline Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-9 sm:pl-0 ${isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'}`}>
                  <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all text-left">
                    
                    {/* Header Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] sm:text-xs font-mono-code font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono-code px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>{item.role}</span>
                    </h3>

                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono-code text-xs sm:text-sm font-semibold mb-2.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.company}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Key Contributions List */}
                    <div className="space-y-1.5 mb-4 pt-2.5 border-t border-white/5">
                      <div className="text-[10px] font-mono-code text-indigo-300 uppercase tracking-wider font-semibold mb-1.5">
                        Key Contributions:
                      </div>
                      {item.keyContributions.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono-code border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
