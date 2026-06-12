import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certsData = [
  {
    provider: "IBM",
    badgeColor: "bg-blue-600 text-white border-blue-600",
    badgeLabel: "IBM Certified",
    certs: [
      {
        name: "Data Analyst Professional Certificate",
        level: "Beginner",
        cost: "Subscription ($39/mo)",
        time: "3-4 Months",
        url: "#",
        desc: "Learn core data analytics processes, SQL scripting, Python basics, and build custom dashboards."
      },
      {
        name: "AI Fundamentals Certificate",
        level: "Beginner",
        cost: "Free Learning Track",
        time: "1-2 Weeks",
        url: "#",
        desc: "Understand neural architectures, generative models, large language frameworks, and ethics in AI."
      }
    ]
  },
  {
    provider: "Google",
    badgeColor: "bg-red-500 text-white border-red-500",
    badgeLabel: "Google Partner",
    certs: [
      {
        name: "Data Analytics Professional Certificate",
        level: "Beginner",
        cost: "Subscription ($39/mo)",
        time: "4-6 Months",
        url: "#",
        desc: "Comprehensive foundation covering spreadsheets, SQL, R programming, and data presentation methods."
      },
      {
        name: "IT Support Professional Certificate",
        level: "Beginner",
        cost: "Subscription ($39/mo)",
        time: "3 Months",
        url: "#",
        desc: "Master operating systems, computer networking protocols, security policies, and debugging systems."
      },
      {
        name: "UX Design Professional Certificate",
        level: "Beginner",
        cost: "Subscription ($39/mo)",
        time: "5 Months",
        url: "#",
        desc: "Learn wireframing, UX research, Figma design layouts, prototype testing, and portfolio design."
      }
    ]
  },
  {
    provider: "Microsoft",
    badgeColor: "bg-teal-600 text-white border-teal-600",
    badgeLabel: "Microsoft Cert",
    certs: [
      {
        name: "Azure Fundamentals (AZ-900)",
        level: "Beginner",
        cost: "Exam fee (~$99)",
        time: "2-3 Weeks",
        url: "#",
        desc: "Validate cloud architecture basics, core Azure services, identity management, and security policies."
      },
      {
        name: "Power BI Data Analyst (PL-300)",
        level: "Intermediate",
        cost: "Exam fee (~$165)",
        time: "1-2 Months",
        url: "#",
        desc: "Demonstrate skills in data cleaning, modeling relationships, writing DAX expressions, and sharing reports."
      }
    ]
  },
  {
    provider: "AWS",
    badgeColor: "bg-amber-600 text-white border-amber-600",
    badgeLabel: "AWS Academy",
    certs: [
      {
        name: "Cloud Practitioner (CLF-C02)",
        level: "Beginner",
        cost: "Exam fee (~$100)",
        time: "2-4 Weeks",
        url: "#",
        desc: "Gain a broad overview of AWS infrastructure, key services, pricing tiers, and shared security models."
      },
      {
        name: "Solutions Architect Associate (SAA-C03)",
        level: "Intermediate",
        cost: "Exam fee (~$150)",
        time: "2-3 Months",
        url: "#",
        desc: "Master designing high-availability, secure, scalable, and cost-optimized distributed systems on AWS."
      }
    ]
  }
];

function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">
          Top Certifications for Freshers
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto font-sans">
          Accelerate your resume screening ratios with verified industry credentials from leading technology providers.
        </p>
      </div>

      {/* Provider Sections */}
      <div className="space-y-12">
        {certsData.map((section, idx) => (
          <div key={idx} className="space-y-5 text-left">
            {/* Provider Header */}
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <span className={`text-xs px-3 py-1 font-bold rounded-full uppercase ${section.badgeColor}`}>
                {section.provider}
              </span>
              <h2 className="text-xl font-bold text-secondary font-display">
                Featured {section.provider} Credentials
              </h2>
            </div>

            {/* Cert Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.certs.map((cert, certIdx) => (
                <div 
                  key={certIdx} 
                  className="bg-white border border-border rounded-xl p-5 shadow-premium hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {cert.level}
                      </span>
                    </div>

                    <h3 className="font-bold text-secondary text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                      {cert.name}
                    </h3>
                    
                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                      <div>
                        <span className="block text-[9px] uppercase font-bold text-slate-400">Est. Cost</span>
                        <span className="font-medium text-slate-700">{cert.cost}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase font-bold text-slate-400">Time Commit</span>
                        <span className="font-medium text-slate-700">{cert.time}</span>
                      </div>
                    </div>

                    <a
                      href={cert.url}
                      className="w-full py-2 bg-slate-50 hover:bg-primary hover:text-white text-primary text-xs font-semibold rounded-lg border border-slate-200 hover:border-primary transition-all duration-150 flex items-center justify-center gap-1.5"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certification Guidelines strip */}
      <div className="mt-14 bg-slate-50 border border-border rounded-xl p-6 md:p-8 text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4">
          <div className="p-3 bg-emerald-50 text-accent rounded-xl shrink-0 hidden sm:block">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-base font-bold text-secondary mb-1">CareerPath Tip: Don't over-collect badges</h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
              Employers value practical projects more than certificates alone. Aim to earn 1 core credential for foundational theory, then build 2-3 advanced projects to show you can implement those lessons.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Certifications;
