import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, ShieldCheck, Mail, MapPin, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  const techKeywords = ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'];
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = techKeywords[keywordIndex];
    let timer;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setKeywordIndex((prev) => (prev + 1) % techKeywords.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, keywordIndex]);

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col justify-center overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="ambient-orb-1 top-20 -left-20"></div>
      <div className="ambient-orb-2 top-40 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-lg max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono-code font-medium text-slate-300 truncate">
                {PERSONAL_INFO.freelanceStatus} for full-time & freelance roles
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5 sm:space-y-2 w-full">
              <h2 className="text-slate-400 text-sm sm:text-lg font-medium tracking-wide">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none break-words">
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>

              {/* Dynamic Typing Subtitle */}
              <div className="min-h-[2rem] sm:min-h-[2.5rem] flex flex-wrap items-center text-base sm:text-2xl font-bold text-slate-300 leading-snug">
                <span>Specialized in &nbsp;</span>
                <span className="text-indigo-400 font-mono-code underline decoration-cyan-400/50 underline-offset-4 break-all">
                  {displayText}
                </span>
                <span className="w-0.5 h-5 sm:h-6 bg-indigo-400 inline-block ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-400 text-xs sm:text-base max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-white/10 hover:border-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Micro Details Badge Strip */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400 font-mono-code w-full">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Fullstack Engineer @ ZSI.AI</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>3 Years Exp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card & Quick Stats Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4 mt-2 lg:mt-0">
            
            {/* Developer Card Showcase */}
            <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden group border border-indigo-500/20">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-20 h-20 sm:w-28 sm:h-28 text-indigo-400" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/30 shrink-0">
                  <div className="w-full h-full bg-[#0b0f17] rounded-[14px] flex items-center justify-center text-sm sm:text-lg font-bold font-mono-code text-cyan-300">
                    SH
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-[11px] font-mono-code text-indigo-400">{PERSONAL_INFO.role}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 break-all">slsuyel@gmail.com</p>
                </div>
              </div>

              {/* Code Snippet Simulation */}
              <div className="bg-[#070a12] rounded-xl p-3 border border-white/5 font-mono-code text-[11px] space-y-0.5 text-slate-300 leading-relaxed overflow-hidden">
                <div className="text-slate-500">// Stack Config</div>
                <div><span className="text-purple-400">const</span> dev = &#123;</div>
                <div className="pl-3"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,</div>
                <div className="pl-3"><span className="text-cyan-400">role</span>: <span className="text-emerald-300">"Fullstack"</span>,</div>
                <div className="pl-3"><span className="text-cyan-400">company</span>: <span className="text-emerald-300">"ZSI.AI"</span>,</div>
                <div className="pl-3 break-all"><span className="text-cyan-400">stack</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node"</span>],</div>
                <div className="pl-3"><span className="text-cyan-400">status</span>: <span className="text-indigo-400">"Available"</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {QUICK_STATS.map((stat, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3 border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="text-lg sm:text-2xl font-extrabold text-white font-mono-code gradient-text">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium leading-tight">
                    {stat.label}
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
