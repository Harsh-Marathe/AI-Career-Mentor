import React from 'react';
import { Sparkles } from 'lucide-react';

function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-slate-300 border-t border-white/5 py-12 px-4 text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Column 1: Branding */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white/5 text-primary rounded">
              <Sparkles className="w-5 h-5 fill-primary" />
            </div>
            <span className="font-extrabold text-white text-lg font-display tracking-tight">
              CareerPath <span className="text-primary">AI</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Your first step to a great career. Personalized AI mentorship, skill mappings, resumes advice, and mock test hubs.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 hover:text-white rounded-lg transition-all" aria-label="LinkedIn Profile">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 hover:text-white rounded-lg transition-all" aria-label="Twitter Profile">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 hover:text-white rounded-lg transition-all" aria-label="GitHub Repository">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick('explorer')} className="hover:text-white transition-colors cursor-pointer">
                Career Explorer
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('roadmaps')} className="hover:text-white transition-colors cursor-pointer">
                Skill Roadmaps
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('quiz')} className="hover:text-white transition-colors cursor-pointer">
                Career Recommendation Quiz
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick('prep')} className="hover:text-white transition-colors cursor-pointer">
                Interview Prep Hub
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('resume')} className="hover:text-white transition-colors cursor-pointer">
                Resume Tips
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('certs')} className="hover:text-white transition-colors cursor-pointer">
                Certifications
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2025 CareerPath AI. All rights reserved.</p>
        <p className="font-mono">Empowering builders with ✦ code & algorithms</p>
      </div>
    </footer>
  );
}

export default Footer;
