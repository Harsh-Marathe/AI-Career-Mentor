import React, { useState } from 'react';
import { Sparkles, Target, Map, Briefcase, FileText, BarChart2, Code, Cpu, Server, Send, HelpCircle } from 'lucide-react';

function Home({ setActivePage, setQuizFinished }) {
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    "How do I become a Data Analyst?",
    "What skills does an AI Engineer need?",
    "Help me prep for a Software Engineer interview.",
    "How do I build a strong resume?"
  ];

  const popularCareers = [
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      icon: BarChart2,
      color: 'text-blue-600 bg-blue-50',
      description: 'Analyze data to extract insights, create visualizations, and drive business decision-making.'
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      icon: Code,
      color: 'text-indigo-600 bg-indigo-50',
      description: 'Design, build, test, and maintain modern web applications and system software structures.'
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      icon: Cpu,
      color: 'text-purple-600 bg-purple-50',
      description: 'Build machine learning models, neural networks, and integrate cognitive services into applications.'
    },
    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      icon: Server,
      color: 'text-emerald-600 bg-emerald-50',
      description: 'Architect, manage, and maintain cloud infrastructure deployments using modern DevOps pipelines.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 px-4 overflow-hidden bg-dot-grid">
        {/* Soft glowing circles for premium background effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-300 mb-6 border border-white/5 animate-pulse-ring">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Empowering the next generation of builders</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-display">
            Your Personal <span className="text-blue-500">AI Career Mentor</span>
          </h1>
          <p className="text-lg md:text-xl text-muted/80 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Get personalized career guidance, visual skill roadmaps, comprehensive interview preparation, and ATS resume advice — instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#chat-section"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-emerald-600 text-secondary font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/10 transition-all duration-200 text-center"
            >
              Start Chatting
            </a>
            <button 
              onClick={() => setActivePage('explorer')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-200 text-center"
            >
              Explore Careers
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-border py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="p-2.5 bg-blue-50 rounded-lg text-primary">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary text-sm md:text-base">Personalized Guidance</h3>
                <p className="text-xs text-muted">AI-tailored direction</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="p-2.5 bg-purple-50 rounded-lg text-purple-600">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary text-sm md:text-base">Skill Roadmaps</h3>
                <p className="text-xs text-muted">Step-by-step tracks</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="p-2.5 bg-emerald-50 rounded-lg text-accent">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary text-sm md:text-base">Interview Prep</h3>
                <p className="text-xs text-muted">Practice core answers</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="p-2.5 bg-orange-50 rounded-lg text-orange-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary text-sm md:text-base">Resume Tips</h3>
                <p className="text-xs text-muted">Beat the ATS scans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chatbot Section */}
      <section id="chat-section" className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary mb-3">Ask Your AI Career Mentor</h2>
          <p className="text-muted max-w-xl mx-auto">
            Powered by advanced models. Select an example prompt or type custom queries below.
          </p>
        </div>

        {/* Chat Widget Container */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-premium border border-border overflow-hidden flex flex-col h-[520px] relative">
          {/* Header */}
          <div className="bg-secondary px-5 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-base">
                ✦
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white leading-tight">CareerPath AI</h3>
                <p className="text-xs text-slate-400">Freshers Career Mentor</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-xs text-accent">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse-green"></span>
              <span className="font-medium text-accent">AI Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
            {/* AI message */}
            <div className="flex gap-3 max-w-[85%] text-left">
              <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-secondary shrink-0">
                AI
              </div>
              <div className="bg-white border border-border p-3.5 rounded-xl rounded-tl-none shadow-sm text-sm text-secondary leading-relaxed">
                👋 Hi! I'm your CareerPath AI Mentor. Ask me anything about careers, skills, interviews, or resumes!
              </div>
            </div>

            {/* User message */}
            <div className="flex gap-3 max-w-[85%] justify-end ml-auto text-right">
              <div className="bg-primary text-white p-3.5 rounded-xl rounded-tr-none shadow-sm text-sm text-left leading-relaxed">
                How do I become a Data Analyst?
              </div>
            </div>

            {/* AI message */}
            <div className="flex gap-3 max-w-[85%] text-left">
              <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-secondary shrink-0">
                AI
              </div>
              <div className="bg-white border border-border p-3.5 rounded-xl rounded-tl-none shadow-sm text-sm text-secondary leading-relaxed space-y-2">
                <p>Great choice! Here's a quick roadmap:</p>
                <ol className="list-decimal list-inside space-y-1 font-mono text-xs text-indigo-900 bg-slate-100/60 p-2 rounded border border-slate-100">
                  <li>Learn Excel & SQL</li>
                  <li>Study Statistics</li>
                  <li>Learn Python</li>
                  <li>Master Power BI</li>
                  <li>Build Projects</li>
                </ol>
                <p>Want the full detailed roadmap?</p>
              </div>
            </div>
          </div>

          {/* Non-functional Input Bar */}
          <div className="p-4 border-t border-border bg-white space-y-2">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-lg px-4 py-2.5 text-sm outline-none transition-all pr-10"
              />
              <button 
                type="button"
                className="px-4 py-2.5 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm group"
                title="AI integration coming soon"
              >
                <Send className="w-4 h-4" />
                <span className="absolute right-12 top-1/2 -translate-y-1/2 hidden group-hover:block bg-secondary text-white text-xs px-2.5 py-1 rounded shadow-md pointer-events-none whitespace-nowrap z-30">
                  AI coming soon
                </span>
              </button>
            </div>
            
            {/* Banner */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
                Full AI integration coming soon
              </span>
            </div>
          </div>
        </div>

        {/* Example Prompt Chips */}
        <div className="max-w-xl mx-auto mt-6 flex flex-wrap gap-2.5 justify-center">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setInputText(prompt)}
              className="text-xs px-3.5 py-2 bg-white hover:bg-slate-100 text-secondary border border-border rounded-full shadow-sm hover:shadow transition-all duration-150 font-medium text-left"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </section>

      {/* Popular Career Paths */}
      <section className="py-20 px-4 bg-white border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-secondary mb-3">Popular Career Paths</h2>
            <p className="text-muted max-w-xl mx-auto">Explore high-demand career trajectories for technology freshers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCareers.map((career) => {
              const IconComponent = career.icon;
              return (
                <div 
                  key={career.id} 
                  className="bg-white border border-border p-6 rounded-xl hover:border-blue-200 transition-all duration-200 flex flex-col items-start text-left shadow-premium hover:shadow-lg group"
                >
                  <div className={`p-3 rounded-lg mb-5 ${career.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {career.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                    {career.description}
                  </p>
                  <button
                    onClick={() => setActivePage('explorer')}
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Explore <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-secondary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-6 md:pt-0">
              <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2 font-display">10,000+</p>
              <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Careers Guided</p>
            </div>
            <div className="pt-6 md:pt-0">
              <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2 font-display">50+</p>
              <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Skill Roadmaps</p>
            </div>
            <div className="pt-6 md:pt-0">
              <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2 font-display">500+</p>
              <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Interview Questions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
