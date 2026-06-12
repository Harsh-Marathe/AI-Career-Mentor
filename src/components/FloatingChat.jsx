import React from 'react';
import { MessageSquare } from 'lucide-react';

function FloatingChat({ setActivePage }) {
  const handleClick = () => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('chat-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse ring decoration background */}
      <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring pointer-events-none"></div>
      
      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Chat with AI Mentor"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </button>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none transition-opacity duration-150 select-none z-50 border border-white/5">
        Chat with AI Mentor
      </div>
    </div>
  );
}

export default FloatingChat;
