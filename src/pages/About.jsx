import React from 'react';
import { Cpu, Target, Award, Users, Shield, Zap } from 'lucide-react';

function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "AI-Powered Guidance",
      desc: "Instant mock responses, tailored learning pathways, and resume optimizations using intelligent schemas.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Zap,
      title: "Free for All Freshers",
      desc: "Completely open access to roadmaps, questionnaires, and certification directories without paywalls.",
      color: "text-amber-600 bg-amber-50"
    },
    {
      icon: Target,
      title: "Built for Early Careers",
      desc: "Tailored specifically for college students, new graduates, and junior engineers entering the tech market.",
      color: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
        
        {/* Left Column: Information */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-full text-xs font-semibold text-primary border border-blue-100">
            <span>Our Mission</span>
          </div>
          
          <h1 className="text-4xl font-extrabold text-secondary tracking-tight leading-tight font-display">
            About CareerPath AI
          </h1>
          
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            CareerPath AI is an intelligent career mentoring platform built for students and freshers. Whether you're choosing your first career path, preparing for interviews, or writing your resume — we give you the tools and guidance to move forward with confidence.
          </p>

          <div className="pt-4 space-y-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-4 bg-white border border-border rounded-xl shadow-premium">
                  <div className={`p-2.5 rounded-lg shrink-0 ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Decorative Graphics Grid */}
        <div className="relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl blur-3xl pointer-events-none"></div>
          
          <div className="relative bg-white border border-border rounded-2xl p-8 shadow-premium grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="p-6 bg-slate-50 border border-border/50 rounded-xl space-y-3 hover:border-blue-100 transition-colors">
              <div className="p-2.5 bg-blue-100/50 text-primary rounded-lg inline-block">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm">Empathetic</h4>
                <p className="text-[11px] text-muted leading-relaxed">Built around unique student struggles.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-border/50 rounded-xl space-y-3 hover:border-emerald-100 transition-colors">
              <div className="p-2.5 bg-emerald-100/50 text-accent rounded-lg inline-block">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm">Safe & ATS</h4>
                <p className="text-[11px] text-muted leading-relaxed">Standards matching HR tracking scanners.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-border/50 rounded-xl space-y-3 hover:border-purple-100 transition-colors">
              <div className="p-2.5 bg-purple-100/50 text-purple-600 rounded-lg inline-block">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm">Automated</h4>
                <p className="text-[11px] text-muted leading-relaxed">Instant evaluation recommendations.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-border/50 rounded-xl space-y-3 hover:border-orange-100 transition-colors">
              <div className="p-2.5 bg-orange-100/50 text-orange-600 rounded-lg inline-block">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm">Structured</h4>
                <p className="text-[11px] text-muted leading-relaxed">Step timeline learning roadmaps.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
