import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, FileText, Send, Eye } from 'lucide-react';

const resumeSections = [
  {
    title: "1. Resume Structure",
    tips: [
      "Keep it strictly to one single page. Hiring managers scan resumes in under 6 seconds, and multi-page layouts for freshers are ignored.",
      "Use clear, standardized headers: Contact Information, Professional Summary (optional), Education, Technical Skills, Projects, and Certifications.",
      "Structure your contact details clearly: Name, email address, phone number, location (City, Country), GitHub link, and LinkedIn profile URL.",
      "List items chronologically in reverse (most recent first) within your education and project experiences.",
      "Use clean, standard fonts like Arial, Calibri, or Inter. Keep margins around 0.5 to 1.0 inches for maximum readability."
    ]
  },
  {
    title: "2. ATS Optimization (Applicant Tracking Systems)",
    tips: [
      "Submit your resume in PDF format unless specifically requested otherwise. PDF maintains layout formatting across scanners.",
      "Do not use images, tables, logos, or icons in your main resume file. ATS parsers cannot read data wrapped in image elements.",
      "Align keywords directly with the target job description. If a job listing requests 'REST APIs' or 'Pandas', ensure those exact terms are written.",
      "Use standard section headers. Avoid creative titles like 'My Journey' or 'Coding Wizardry'; use 'Experience' or 'Skills' instead.",
      "Avoid multi-column templates. Most ATS systems parse files left-to-right, which merges columns into garbled, unreadable lines."
    ]
  },
  {
    title: "3. Writing Project Descriptions",
    tips: [
      "Use the STAR Method: Situation, Task, Action, Result. Highlight the problem, the technology stack you chose, and the performance outcome.",
      "Begin every bullet point with an Action Verb: 'Developed', 'Engineered', 'Optimized', 'Designed', 'Migrated', or 'Built'.",
      "Quantify your results wherever possible: 'Reduced query load times by 30%', 'Integrated 4 core APIs', or 'Automated scripts saving 5 hours weekly'.",
      "Specify your exact technology stack in the project header: e.g., 'E-Commerce App (React, Node.js, MongoDB)'.",
      "Focus on what YOU built, not general group work. State: 'Engineered backend authentication routers' instead of 'We helped build a site'."
    ]
  },
  {
    title: "4. Skills Section",
    tips: [
      "Group your skills by category (e.g., Programming Languages, Databases, Web Frameworks, Analytics Tools, Core Developer Utilities).",
      "Only list technologies you can confidently discuss or whiteboard in an interview. Don't add languages you used for only one homework task.",
      "List high-impact skills first. If you're applying for front-end roles, put React, JavaScript, and HTML/CSS ahead of basic Python.",
      "Avoid listing soft skills as bullet points. Show communication, collaboration, and learning speed through your project descriptions instead.",
      "Skip listing obsolete tools or basic software (e.g., Notepad++, Internet Explorer, Windows OS) to keep focus on advanced tools."
    ]
  },
  {
    title: "5. Common Mistakes",
    tips: [
      "Typographical errors and grammar slip-ups suggest poor attention to detail. Proofread your file 3 times or use tools like Grammarly.",
      "Avoid writing in the first person. Do not use 'I', 'me', 'my', or 'we' in resume bullet points; start with action verbs instead.",
      "Excluding links to active projects. If you build web apps, provide a link to the live deployment on Vercel or your GitHub source repository.",
      "Writing generic, buzzword-heavy summaries like 'Hardworking individual seeking opportunities'. Keep it focused on technical skills.",
      "Using visual skill level sliders or percentage bars (e.g., 'React: 80%'). These are arbitrary, confuse recruiters, and parse poorly in ATS systems."
    ]
  }
];

function ResumeTips() {
  const [expandedSection, setExpandedSection] = useState(0);
  const [inputText, setInputText] = useState('');

  const toggleSection = (idx) => {
    setExpandedSection(expandedSection === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">
          Build a Resume That Gets You Hired
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto font-sans">
          Follow structured, ATS-compliant guidelines to pass initial recruiter screenings and secure interviews.
        </p>
      </div>

      {/* Grid: Instructions left, accordion right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Visual card summary */}
        <div className="space-y-6">
          <div className="bg-white border border-border p-6 rounded-xl shadow-premium">
            <div className="p-3 bg-blue-50 text-primary rounded-xl inline-block mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-secondary text-lg mb-2">The Golden Rules</h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Strictly 1-page layout</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>No tables, columns, or profile pictures</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Quantify project results (STAR method)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Inject exact keywords from target descriptions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 border border-border/80 p-5 rounded-xl text-xs space-y-2">
            <p className="font-bold text-secondary">Why ATS Matters:</p>
            <p className="text-slate-600 leading-relaxed">
              Over 75% of large companies use Applicant Tracking Systems (ATS) to filter resumes. Resumes containing images, creative layouts, or columns often parse into garbage strings, leading to immediate automated rejections before human eyes ever see them.
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="md:col-span-2 space-y-4">
          {resumeSections.map((sect, idx) => {
            const isOpen = expandedSection === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-border rounded-xl shadow-premium overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-secondary text-base">{sect.title}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-muted" /> : <ChevronDown className="w-5 h-5 text-muted" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-50 bg-slate-50/20">
                    <ul className="space-y-3.5 mt-3">
                      {sect.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary/40 mt-1.5 shrink-0"></span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Input bar section */}
      <div className="mt-14 bg-secondary text-white p-6 md:p-8 rounded-xl text-left bg-dot-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-2xl space-y-4">
          <h3 className="text-lg md:text-xl font-bold font-display">Need custom resume feedback?</h3>
          <p className="text-xs text-slate-400">
            Paste a draft bullet point or ask how to align your resume section for a specific junior role.
          </p>

          <div className="flex gap-2 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask: How do I improve my resume for a Data Analyst role?"
              className="flex-1 border border-white/10 bg-white/5 focus:bg-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-1 focus:ring-primary/20"
            />
            <div className="relative group">
              <button
                type="button"
                className="px-5 py-3 bg-accent hover:bg-emerald-600 text-secondary font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Analyze</span>
              </button>
              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none z-30">
                AI coming soon
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ResumeTips;
