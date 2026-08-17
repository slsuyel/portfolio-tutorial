import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, BookOpen } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Full-Stack', 'Frontend', 'APIs & Tools'];

  const filteredProjects = activeTab === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-10 sm:py-16 relative z-10 bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            Real-world fullstack platforms, real-time workspace tools, and performant user interfaces built by Suyel Haque.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2.5"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2.5 mb-6 sm:mb-8 max-w-full justify-start sm:justify-center items-center gap-2 no-scrollbar px-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold font-mono-code shrink-0 transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative h-44 sm:h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-[#070a12]/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Quick Link Targets */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900/90 text-slate-200 hover:text-white hover:bg-indigo-600 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900/90 text-slate-200 hover:text-white hover:bg-cyan-600 transition-colors"
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-400 shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono-code border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold font-mono-code text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400 group-hover/btn:scale-110 transition-transform shrink-0" />
                    <span>View Case Study</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-mono-code"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
