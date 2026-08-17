import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MessageSquare, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#05070d] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center font-mono-code font-bold text-cyan-400 text-xs">
                  SH
                </div>
              </div>
              <span className="font-bold text-white text-lg">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Fullstack Web Developer specializing in React, Next.js, Node.js, and high-performance frontend interfaces.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono-code text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#philosophy" className="hover:text-indigo-400 transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#awards" className="hover:text-indigo-400 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-white/5 transition-all"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:scale-110 transition-transform"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
