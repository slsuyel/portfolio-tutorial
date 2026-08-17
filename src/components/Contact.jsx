import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onCopyEmail, onTriggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast("Message sent successfully! Suyel will respond shortly.");
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 relative z-10 bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-2">
            Have a project in mind or looking for a fullstack developer to join your team? Send a message and let's discuss!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2.5"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Direct Info & Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out via email, phone, or WhatsApp. I respond within 24 hours.
              </p>

              <div className="space-y-2.5 pt-1">
                
                {/* Email Item */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 group hover:border-indigo-500/30 transition-all gap-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono-code text-slate-400 uppercase">Direct Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-white break-all">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={onCopyEmail}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors shrink-0 ml-auto sm:ml-0"
                    title="Copy Email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Phone Item */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 group hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-code text-slate-400 uppercase">Phone & WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-code text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.nationality}</div>
                  </div>
                </div>

              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Currently open for new freelance projects & full-time roles.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Send A Message</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4">Fill in the fields below to start a conversation.</p>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Message Delivered!</h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                    Thank you for reaching out, {formData.name || 'there'}. I will review your message and reply via email shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono-code text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-code text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Suyel, I would like to discuss a project..."
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
