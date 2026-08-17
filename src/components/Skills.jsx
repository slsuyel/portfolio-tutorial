import React, { useState } from 'react';
import { Wrench, Code2, Server, Database, CheckCircle } from 'lucide-react';
import { SKILLS_MATRIX } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'database', label: 'Database & ORM' },
    { key: 'tools', label: 'Real-Time & Tools' }
  ];

  const categoryIconMap = {
    frontend: Code2,
    backend: Server,
    database: Database,
    tools: Wrench
  };

  return (
    <section id="skills" className="py-10 sm:py-16 relative z-10 bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>MY TOOLBOX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technical Capabilities</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            A professional mapping of my engineering technologies, library ecosystems, database architectures, and real-time developer tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2.5"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto pb-2.5 mb-6 sm:mb-8 max-w-full justify-start sm:justify-center items-center gap-2 no-scrollbar px-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold font-mono-code shrink-0 transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(SKILLS_MATRIX).map(([key, data]) => {
            if (activeCategory !== 'all' && activeCategory !== key) return null;
            const CategoryIcon = categoryIconMap[key] || Code2;

            return (
              <div
                key={key}
                className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform shrink-0">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{data.category}</h3>
                    <p className="text-xs text-slate-400">{data.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {data.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-medium text-slate-200 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800 transition-all group/pill"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 group-hover/pill:scale-110 transition-transform shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
