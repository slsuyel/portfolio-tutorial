import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import TerminalWidget from './components/TerminalWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { PERSONAL_INFO } from './data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active section scroll detection
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    triggerToast(`Copied email (${PERSONAL_INFO.email}) to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 relative">
      
      {/* Futuristic Custom Neon Cursor */}
      <CustomCursor />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 sm:bottom-6 sm:right-20 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/95 text-white text-xs font-mono-code border border-indigo-500/40 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} onCopyEmail={handleCopyEmail} />

      {/* Main Single Page Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <About />
        <Philosophy />
        <Skills />
        <Experience />
        <Achievements />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <TerminalWidget />
        <Contact onCopyEmail={handleCopyEmail} onTriggerToast={triggerToast} />
      </main>

      {/* Case Study Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
