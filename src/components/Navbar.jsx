import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explorer', label: 'Career Explorer' },
    { id: 'roadmaps', label: 'Skill Roadmaps' },
    { id: 'prep', label: 'Interview Prep' },
    { id: 'resume', label: 'Resume Tips' },
    { id: 'certs', label: 'Certifications' },
    { id: 'quiz', label: 'Career Quiz' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartChatting = () => {
    setActivePage('home');
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById('chat-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border z-40 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-95 cursor-pointer text-left"
          >
            <div className="p-1.5 bg-blue-50 text-primary rounded-lg">
              <Sparkles className="w-5 h-5 fill-primary" />
            </div>
            <span className="font-extrabold text-secondary text-lg font-display tracking-tight">
              CareerPath <span className="text-primary">AI</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  activePage === link.id
                    ? 'text-primary bg-blue-50/50'
                    : 'text-muted hover:text-secondary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={handleStartChatting}
              className="px-5 py-2.5 bg-primary hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Start Chatting
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-muted hover:text-secondary transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-fadeIn">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold block transition-colors ${
                  activePage === link.id
                    ? 'text-primary bg-blue-50'
                    : 'text-muted hover:text-secondary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border">
              <button
                onClick={handleStartChatting}
                className="w-full text-center px-4 py-3 bg-primary hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
              >
                Start Chatting
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
