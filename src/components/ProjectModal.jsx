import React, { useEffect } from "react";
import { X, ExternalLink, Github, Layers } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="glass-modal max-w-3xl w-full rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/60 gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono-code bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
              {project.category}
            </span>
            <h3 className="text-base sm:text-xl font-bold text-white truncate">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Banner Image */}
          <div className="relative rounded-xl overflow-hidden h-44 sm:h-72 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono-code font-semibold text-indigo-400 uppercase tracking-wider mb-1.5">
              Project Overview
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Case Study Details Grid */}
          {project.caseStudy && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="text-[11px] font-mono-code font-bold text-amber-400">
                  01. The Challenge
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="text-[11px] font-mono-code font-bold text-cyan-400">
                  02. Engineering Solution
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <div className="text-[11px] font-mono-code font-bold text-emerald-400">
                  03. Measurable Outcome
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.caseStudy.outcome}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono-code font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 text-[11px] sm:text-xs font-mono-code border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-900/60 flex flex-wrap sm:flex-nowrap items-center justify-end gap-2.5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
