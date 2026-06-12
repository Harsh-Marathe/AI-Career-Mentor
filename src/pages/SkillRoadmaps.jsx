import React, { useState } from 'react';
import { Calendar, ChevronDown, CheckCircle } from 'lucide-react';

const roadmapsData = {
  'data-analyst': {
    title: 'Data Analyst Roadmap',
    steps: [
      { name: 'Excel Foundations', desc: 'Master formulas, VLOOKUP/XLOOKUP, pivot tables, clean data inputs, and visual charting.', time: '2 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'SQL & Relational Databases', desc: 'Write structured queries, JOIN tables, aggregate statistics, and filter databases.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Statistics & Math', desc: 'Understand standard distributions, variance, hypothesis testing, and correlation metrics.', time: '2 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Python Analytics libraries', desc: 'Write automation scripts using Pandas for manipulation and Matplotlib/Seaborn for charts.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Power BI / Tableau Dashboarding', desc: 'Model data relationships, create DAX parameters, and build interactive corporate reporting panels.', time: '2 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Portfolio Projects', desc: 'Assemble 3 distinct raw datasets, clean with Python, store in SQL, and build public dashboards.', time: '3 Weeks', phase: 4, phaseName: 'Real World' },
      { name: 'Internship & Job Hunting', desc: 'Prepare SQL whiteboard case studies, format resume bullet points, and apply for junior roles.', time: '2 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  },
  'software-engineer': {
    title: 'Software Engineer Roadmap',
    steps: [
      { name: 'Programming Basics', desc: 'Learn variables, logical controls, loops, and functional scoping in Python, Java, or JavaScript.', time: '3 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'Data Structures & Algorithms', desc: 'Study computational efficiency (Big O), lists, stacks, trees, sorting, and recursion patterns.', time: '4 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Object-Oriented Programming', desc: 'Understand classes, objects, inheritance, encapsulation, polymorphism, and modular architectures.', time: '2 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Relational & Document Databases', desc: 'Learn SQL schema design, normalization, indexing, database connections, and basic NoSQL.', time: '2 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Web Frameworks (React & Node)', desc: 'Build reactive UI frontends, structure REST API backends, and connect routers.', time: '4 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'System Design Basics', desc: 'Understand horizontal/vertical scaling, load balancers, caching strategies, and CDN networks.', time: '2 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Real World Capstone Projects', desc: 'Design, write, unit test, containerize, and deploy a full-stack web application on Github.', time: '4 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  },
  'ai-engineer': {
    title: 'AI Engineer Roadmap',
    steps: [
      { name: 'Python & Software Best Practices', desc: 'Master clean coding, packaging, virtual environments, and algorithmic scripting in Python.', time: '2 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'Mathematics for Machine Learning', desc: 'Acquire strong foundations in Linear Algebra, Vector Calculus, and Probability.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Machine Learning Foundations', desc: 'Implement regression, decision trees, clustering algorithms, and model evaluation techniques.', time: '4 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Deep Learning & Neural Networks', desc: 'Build MLPs, CNNs, RNNs, and optimizers using PyTorch or TensorFlow framework.', time: '4 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'NLP & Computer Vision Integration', desc: 'Work with transformers, tokenizers, image feature extraction, and pre-trained models.', time: '3 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'MLOps Pipeline Deployment', desc: 'Build APIs, manage Docker containers, track experiments, and deploy models to cloud endpoints.', time: '3 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Generative AI Capstone Project', desc: 'Build a production-ready RAG application using Vector Databases and LLM orchestration tools.', time: '3 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  },
  'web-developer': {
    title: 'Web Developer Roadmap',
    steps: [
      { name: 'HTML & CSS Layout Design', desc: 'Write structural markup, style responsive pages using Flexbox/Grid, and practice responsive designs.', time: '2 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'Vanilla JavaScript Programming', desc: 'Learn DOM manipulation, event handlers, JSON APIs, fetch requests, and asynchronous flow patterns.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Git & Command Line Basics', desc: 'Manage project versions, push to GitHub repositories, write bash commands, and configure deployment sites.', time: '1 Week', phase: 1, phaseName: 'Foundation' },
      { name: 'Tailwind CSS & Styling Frameworks', desc: 'Speed up styling utilizing utility-first CSS directives and responsive modifiers.', time: '1 Week', phase: 2, phaseName: 'Core Skills' },
      { name: 'React Component Engineering', desc: 'Structure modular frontends, manage state, fetch endpoint data, and handle lifecycle hooks.', time: '4 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Frontend State & Routings', desc: 'Implement client routing, global state managers, user authentications, and input validatings.', time: '2 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Freelance & Business Portfolios', desc: 'Build 4+ fast responsive sites, optimize SEO metadata, and deploy to Vercel/Netlify.', time: '3 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  },
  'cloud-engineer': {
    title: 'Cloud Engineer Roadmap',
    steps: [
      { name: 'Networking & Linux Shell Basics', desc: 'Learn IP subnets, routing protocols, DNS configs, and bash shell utilities.', time: '2 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'Cloud Core Services (AWS/Azure/GCP)', desc: 'Understand virtual machines, cloud storage buckets, IAM permissions, and server instances.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Docker Containers', desc: 'Learn container virtualization, write clean Dockerfiles, and bundle application environments.', time: '2 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Kubernetes Container Orchestration', desc: 'Understand Pods, Services, Deployments, ingress configurations, and scale management.', time: '3 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Infrastructure as Code (Terraform)', desc: 'Write cloud templates to automate infrastructure creations and verify plan steps.', time: '2 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'CI/CD Pipelines (Github Actions)', desc: 'Automate build testing, Docker image building, registry pushes, and direct cloud deploys.', time: '3 Weeks', phase: 4, phaseName: 'Real World' },
      { name: 'Cloud Operations & Monitoring', desc: 'Configure logging, set dashboards (Prometheus/Grafana), and scale virtual servers.', time: '2 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  },
  'data-scientist': {
    title: 'Data Scientist Roadmap',
    steps: [
      { name: 'Advanced Python Scripting', desc: 'Write clean reusable scripts, manage exceptions, and handle data files easily.', time: '2 Weeks', phase: 1, phaseName: 'Foundation' },
      { name: 'Data Wrangling & Databases', desc: 'Query data via SQL, join schemas, clean records, and aggregate statistics.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Statistics & Experimental Designs', desc: 'Master distributions, sampling biases, A/B testing, and correlation analyses.', time: '3 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Machine Learning Models', desc: 'Develop linear/logistic regression, SVMs, decision trees, random forests, and validation processes.', time: '4 Weeks', phase: 2, phaseName: 'Core Skills' },
      { name: 'Natural Language & Deep Nets', desc: 'Understand tokenizers, NLP libraries, RNN/CNN structures, and vector embeddings.', time: '3 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Data Visual Storytelling', desc: 'Create reports, communicate analytical results to business leaders, and design slides.', time: '2 Weeks', phase: 3, phaseName: 'Advanced' },
      { name: 'Enterprise Analytics Capstone', desc: 'Acquire raw web data, clean, analyze, run ML predictions, and deploy as web service APIs.', time: '4 Weeks', phase: 4, phaseName: 'Real World' }
    ]
  }
};

const tabs = [
  { id: 'data-analyst', label: 'Data Analyst' },
  { id: 'software-engineer', label: 'Software Engineer' },
  { id: 'ai-engineer', label: 'AI Engineer' },
  { id: 'web-developer', label: 'Web Developer' },
  { id: 'cloud-engineer', label: 'Cloud Engineer' },
  { id: 'data-scientist', label: 'Data Scientist' }
];

function SkillRoadmaps() {
  const [activeTab, setActiveTab] = useState('data-analyst');
  const activeRoadmap = roadmapsData[activeTab];

  const getBorderColor = (phase) => {
    switch (phase) {
      case 1: return 'border-l-4 border-l-blue-500'; // Foundation
      case 2: return 'border-l-4 border-l-purple-500'; // Core Skills
      case 3: return 'border-l-4 border-l-emerald-500'; // Advanced
      case 4: return 'border-l-4 border-l-orange-500'; // Real World
      default: return 'border-l-4 border-l-slate-300';
    }
  };

  const getPhaseBadge = (phase) => {
    switch (phase) {
      case 1: return 'bg-blue-50 text-blue-700 border-blue-100';
      case 2: return 'bg-purple-50 text-purple-700 border-purple-100';
      case 3: return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 4: return 'bg-orange-50 text-orange-700 border-orange-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">
          Visual Skill Roadmaps
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto font-sans">
          Select a domain and follow the step-by-step path to move from foundational basics to industry readiness.
        </p>
      </div>

      {/* Tab Selector */}
      <div className="flex overflow-x-auto pb-3 mb-12 border-b border-border gap-2 scrollbar-thin scrollbar-thumb-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-secondary text-white shadow-sm'
                : 'text-muted hover:text-secondary hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline Layout */}
      <div className="relative pl-6 md:pl-10 text-left border-l-2 border-dashed border-slate-200">
        
        {activeRoadmap.steps.map((step, idx) => {
          const isLast = idx === activeRoadmap.steps.length - 1;
          
          return (
            <div key={idx} className="relative mb-10 last:mb-0">
              
              {/* Connector Point */}
              <span className="absolute -left-[35px] md:-left-[49px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 border-primary/40 flex items-center justify-center text-primary font-mono text-[10px] md:text-xs font-extrabold shadow-sm z-10">
                {idx + 1}
              </span>

              {/* Step Card */}
              <div className={`bg-white rounded-xl shadow-premium border border-border p-5 md:p-6 transition-all duration-200 shadow-premium-hover ${getBorderColor(step.phase)}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-secondary">{step.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold border ${getPhaseBadge(step.phase)}`}>
                      {step.phaseName}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {step.time}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {/* Vertical connector down-arrow decoration */}
              {!isLast && (
                <div className="absolute -left-[28px] md:-left-[40px] -bottom-[20px] text-slate-300 pointer-events-none hidden md:block">
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Roadmap Bottom CTA */}
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <h4 className="text-base font-bold text-secondary mb-1.5">Ready to begin your journey?</h4>
        <p className="text-xs text-muted mb-4 max-w-md mx-auto">Build these skills systematically. Use our checklist templates and certification guides to validate your skills.</p>
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-primary hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
        >
          <span>Get Free Resources</span>
        </button>
      </div>

    </div>
  );
}

export default SkillRoadmaps;
