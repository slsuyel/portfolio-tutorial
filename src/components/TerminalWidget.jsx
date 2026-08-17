import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, CAREER_TIMELINE, ACHIEVEMENTS } from '../data/portfolioData';

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Suyel Haque\'s Interactive Developer CLI v1.0.0' },
    { type: 'system', content: 'Type "help" or click one of the quick command buttons below.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickCommands = [
    { label: 'bio', cmd: 'about' },
    { label: 'skills', cmd: 'skills' },
    { label: 'experience', cmd: 'experience' },
    { label: 'awards', cmd: 'awards' },
    { label: 'contact', cmd: 'contact' },
    { label: 'clear', cmd: 'clear' }
  ];

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', content: `$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: 'Available commands: [about, skills, experience, awards, contact, clear, help]'
        });
        break;
      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          content: `NAME: ${PERSONAL_INFO.name}\nROLE: ${PERSONAL_INFO.role}\nLOCATION: ${PERSONAL_INFO.location}\nEXPERIENCE: ${PERSONAL_INFO.experienceYears}\nSTATUS: ${PERSONAL_INFO.freelanceStatus}`
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          content: 'FRONTEND: React.js, Next.js, TypeScript, Tailwind CSS, Redux\nBACKEND: Node.js, Express.js, REST API, JWT\nDATABASE: MongoDB, Mongoose, Supabase\nTOOLS: Socket.io, Git, Postman, Vercel'
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'output',
          content: CAREER_TIMELINE.map(c => `• ${c.company} (${c.period}): ${c.role}`).join('\n')
        });
        break;
      case 'awards':
        newHistory.push({
          type: 'output',
          content: ACHIEVEMENTS.map(a => `🏆 ${a.year} - ${a.organization}: ${a.title}`).join('\n')
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          content: `EMAIL: ${PERSONAL_INFO.email}\nPHONE: ${PERSONAL_INFO.phone}\nSTATUS: Open for opportunities`
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'output',
          content: `zsh: command not found: ${trimmed}. Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section className="py-8 sm:py-12 relative z-10 bg-[#0b0f17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Window Header */}
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Terminal Window Controls Bar */}
          <div className="px-4 py-2.5 bg-[#070a12] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              <span className="text-[11px] sm:text-xs font-mono-code text-slate-400 ml-1.5 truncate max-w-[160px] xs:max-w-none">
                suyel@dev-terminal:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono-code">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="hidden xs:inline">Interactive CLI</span>
            </div>
          </div>

          {/* Quick Buttons Bar */}
          <div className="px-3.5 py-1.5 bg-slate-900/60 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-mono-code">
            <span className="text-slate-500 mr-1 shrink-0 text-[11px]">Run:</span>
            {quickCommands.map((btn) => (
              <button
                key={btn.label}
                onClick={() => handleCommand(btn.cmd)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/20 transition-all text-[11px] shrink-0"
              >
                ${btn.label}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div className="p-4 bg-[#070a12] font-mono-code text-xs sm:text-sm text-slate-300 min-h-[160px] max-h-[260px] overflow-y-auto space-y-1.5">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'user' && (
                  <div className="text-indigo-400 font-semibold">{item.content}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-cyan-400">{item.content}</div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-sans text-xs leading-relaxed pt-1">
                    {item.content}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={onSubmitForm} className="px-3.5 py-2 bg-[#0a0f1d] border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-mono-code font-bold text-xs shrink-0">➜</span>
            <span className="text-indigo-400 font-mono-code text-[11px] sm:text-xs shrink-0">suyel.dev</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'skills')..."
              className="flex-1 bg-transparent font-mono-code text-xs text-white focus:outline-none placeholder:text-slate-600 min-w-0"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono-code flex items-center gap-1 transition-colors shrink-0"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
