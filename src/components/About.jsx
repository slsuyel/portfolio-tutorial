import React from 'react';
import { User, GraduationCap, Globe, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_TIMELINE } from '../data/portfolioData';

export default function About() {
  const personalDetails = [
    { label: "Nationality", value: PERSONAL_INFO.nationality, icon: Globe },
    { label: "Freelance", value: PERSONAL_INFO.freelanceStatus, icon: CheckCircle2, highlight: true },
    { label: "Phone", value: PERSONAL_INFO.phone, icon: Phone },
    { label: "Email", value: PERSONAL_INFO.email, icon: Mail, breakWord: true },
    { label: "Experience", value: PERSONAL_INFO.experienceYears, icon: Clock },
    { label: "Languages", value: PERSONAL_INFO.languages.join(", "), icon: User }
  ];

  return (
    <section id="about" className="py-10 sm:py-16 relative z-10 bg-[#070a12]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code mb-2">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Suyel Haque</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2.5"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Narrative Bio & Personal Specs */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex flex-wrap items-center gap-2">
                <span>Passionate Fullstack Developer</span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Fullstack Specialist
                </span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Hi, my name is <strong className="text-white">Suyel Haque</strong> and I’m a skilled Fullstack Developer with a passion for building high-performance, user-friendly web applications.
              </p>
              
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                With deep expertise in modern JavaScript frameworks and robust backend servers, I create dynamic, responsive websites that deliver exceptional user experiences. I balance rigorous technical architecture with refined frontend aesthetics.
              </p>

              {/* Personal Details Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                {personalDetails.map((detail, idx) => {
                  const Icon = detail.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-white/5 overflow-hidden">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider">{detail.label}</div>
                        <div className={`text-xs font-semibold ${detail.highlight ? 'text-emerald-400' : 'text-slate-200'} ${detail.breakWord ? 'break-all' : 'truncate'}`}>
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Education Timeline</h3>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 sm:before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-cyan-500/30">
              {EDUCATION_TIMELINE.map((edu, index) => (
                <div key={index} className="relative pl-7 sm:pl-9 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#070a12] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                    <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 inline-block mb-1.5">
                      {edu.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{edu.degree}</h4>
                    <p className="text-[11px] font-mono-code text-cyan-400 mb-1.5">{edu.institution}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
