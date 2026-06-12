import React, { useState } from 'react';
import { HelpCircle, X, Award, MapPin, DollarSign, ArrowRight } from 'lucide-react';

const careersData = [
  {
    id: 'data-analyst',
    emoji: '📊',
    title: 'Data Analyst',
    description: 'Transform raw datasets into actionable insights using queries, visualization panels, and statistical models.',
    tags: ['High Demand', 'Remote-Friendly'],
    overview: 'Data Analysts bridge the gap between business queries and data insights. They clean, analyze, and present datasets to help companies make critical decisions. This is an ideal path for those who enjoy working with spreadsheets, databases, and reporting frameworks.',
    skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python', 'Statistics', 'Data Warehousing'],
    salary: {
      india: '₹4.5 – 9.0 LPA',
      global: '$65,000 – $90,000'
    },
    roadmap: [
      'Master Advanced Microsoft Excel formulas and pivot tables',
      'Learn SQL to write queries, aggregate functions, and multi-table joins',
      'Acquire basic statistics and descriptive mathematics foundation',
      'Learn Python libraries like Pandas, Numpy, and Matplotlib for script analysis',
      'Build dashboards with Power BI or Tableau to visualize trends',
      'Create 3+ personal projects (e.g., sales analysis, market trends) for a portfolio',
      'Apply for entry-level internships or junior analyst roles'
    ],
    certifications: [
      'Google Data Analytics Professional Certificate',
      'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      'IBM Data Analyst Professional Certificate'
    ]
  },
  {
    id: 'data-scientist',
    emoji: '🧪',
    title: 'Data Scientist',
    description: 'Leverage predictive modeling, statistics, and machine learning to build solutions from massive data pipelines.',
    tags: ['Lucrative', 'Analytical'],
    overview: 'Data Scientists combine programming, mathematical algorithms, and business domain expertise to extract complex patterns. They formulate predictive models, perform regression analyses, and design pipelines that automate insights.',
    skills: ['Python', 'R', 'Machine Learning', 'Linear Algebra', 'SQL', 'Hadoop/Spark', 'Data Storytelling'],
    salary: {
      india: '₹6.0 – 14.0 LPA',
      global: '$85,000 – $120,000'
    },
    roadmap: [
      'Acquire strong Python programming skills (OOP & Data Structures)',
      'Deepen knowledge of Math (Probability, Linear Algebra, and Calculus)',
      'Study SQL and relational database schemas',
      'Master Scikit-Learn library for Supervised & Unsupervised Machine Learning',
      'Learn data engineering basics (Hadoop, Apache Spark, Cloud APIs)',
      'Build end-to-end predictive pipelines with model validation',
      'Deploy ML models as APIs or simple web apps'
    ],
    certifications: [
      'IBM Data Science Professional Certificate',
      'Google Cloud Professional Data Engineer',
      'Microsoft Certified: Azure Data Scientist Associate'
    ]
  },
  {
    id: 'software-engineer',
    emoji: '💻',
    title: 'Software Engineer',
    description: 'Develop, debug, and ship scalable web apps, APIs, systems, and enterprise services.',
    tags: ['Core tech', 'Flexible'],
    overview: 'Software Engineers write, test, and debug code for applications. They collaborate on system designs, configure relational or non-relational database connections, and ensure their platforms execute reliably. A highly versatile career path.',
    skills: ['JavaScript/TypeScript', 'Java/C++', 'DSA', 'Databases', 'Web Frameworks', 'Git & CI/CD', 'API Design'],
    salary: {
      india: '₹5.0 – 12.0 LPA',
      global: '$75,000 – $110,000'
    },
    roadmap: [
      'Learn a foundational language (JavaScript, Python, or Java)',
      'Study Data Structures & Algorithms (DSA) for optimization',
      'Understand Object-Oriented Programming (OOP) principles',
      'Learn Relational and NoSQL Databases (PostgreSQL, MongoDB)',
      'Master a modern web framework (React, Node.js, Spring Boot)',
      'Understand Git, GitHub workflow, and CI/CD pipelines',
      'Build, deploy, and document RESTful API applications'
    ],
    certifications: [
      'AWS Certified Developer - Associate',
      'Meta Front-End or Back-End Developer Certificate',
      'Oracle Certified Associate Java Programmer'
    ]
  },
  {
    id: 'ai-engineer',
    emoji: '🤖',
    title: 'AI Engineer',
    description: 'Design and deploy deep learning models, natural language pipelines, and generative AI agents.',
    tags: ['Cutting-Edge', 'Hyper-Growth'],
    overview: 'AI Engineers specialize in building models that replicate cognitive processes. They leverage neural networks for computer vision, process text data using Large Language Models (LLMs), and deploy fine-tuned open-source frameworks to serve real-world needs.',
    skills: ['Python', 'Deep Learning', 'PyTorch/TensorFlow', 'LLMs & RAG', 'API Integrations', 'MLOps', 'Vector DBs'],
    salary: {
      india: '₹7.0 – 16.0 LPA',
      global: '$95,000 – $140,000'
    },
    roadmap: [
      'Establish exceptional Python programming skills',
      'Learn Applied Math (Linear Algebra, Multivariate Calculus, Statistics)',
      'Study Machine Learning fundamentals (Regression, Trees, Validation)',
      'Master PyTorch or TensorFlow for Neural Network architectures',
      'Explore NLP, Computer Vision, Transformers, and LLM orchestration (LangChain, LlamaIndex)',
      'Learn to containerize and deploy models (Docker, FastAPI, MLOps tools)',
      'Build a Capstone application using Vector Databases and AI agents'
    ],
    certifications: [
      'DeepLearning.AI AI Developer Certifications',
      'Google Cloud Professional Machine Learning Engineer',
      'AWS Certified Machine Learning - Specialty'
    ]
  },
  {
    id: 'cybersecurity-analyst',
    emoji: '🔒',
    title: 'Cybersecurity Analyst',
    description: 'Protect enterprise infrastructure, networks, and software applications from cyber threats and breach leaks.',
    tags: ['Critical Role', 'Steady Market'],
    overview: 'Cybersecurity Analysts secure an organization\'s digital assets. They monitor network traffic, perform vulnerability tests, implement identity and access controls, and respond immediately to security incidents or system breaches.',
    skills: ['Network Security', 'Linux OS', 'Penetration Testing', 'SIEM Tools', 'Cryptography', 'IAM Policies', 'Risk Audit'],
    salary: {
      india: '₹4.5 – 10.0 LPA',
      global: '$70,000 – $98,000'
    },
    roadmap: [
      'Learn Computer Networking concepts (TCP/IP, routing protocols, DNS)',
      'Become proficient with the Linux Operating System command line',
      'Understand security policies, access controls, and firewall configurations',
      'Learn vulnerability scanning tools (Nmap, Wireshark, Metasploit)',
      'Master log analysis and Security Information & Event Management (SIEM) tools',
      'Practice penetration testing in sandboxed labs (TryHackMe, HackTheBox)',
      'Study regulatory compliance guidelines (GDPR, ISO 27001)'
    ],
    certifications: [
      'CompTIA Security+',
      'Certified Ethical Hacker (CEH)',
      'Google Cybersecurity Professional Certificate'
    ]
  },
  {
    id: 'cloud-engineer',
    emoji: '☁️',
    title: 'Cloud Engineer',
    description: 'Design, deploy, and scale high-availability cloud infrastructure and serverless workloads.',
    tags: ['DevOps focus', 'High Pay'],
    overview: 'Cloud Engineers configure and maintain virtual infrastructure. They deploy server instances, set up virtual networks, automate code pipelines, and monitor performance scaling across platforms like AWS, Azure, or GCP.',
    skills: ['AWS/Azure/GCP', 'Linux Shell', 'Docker/Kubernetes', 'IaC (Terraform)', 'CI/CD Pipelines', 'Networking', 'Monitoring'],
    salary: {
      india: '₹5.0 – 11.5 LPA',
      global: '$78,000 – $105,000'
    },
    roadmap: [
      'Understand cloud computing models (IaaS, PaaS, SaaS) and standard providers',
      'Master Linux command line navigation and bash scripting',
      'Learn cloud networking fundamentals (VPC, Subnets, Security Groups, DNS)',
      'Get certified in entry-level cloud administration (AWS Cloud Practitioner or AZ-900)',
      'Learn containerization with Docker and orchestration with Kubernetes',
      'Study Infrastructure as Code (IaC) using Terraform',
      'Build automated CI/CD deployment pipelines to deploy microservices'
    ],
    certifications: [
      'AWS Certified Solutions Architect - Associate',
      'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      'Google Cloud Associate Cloud Engineer'
    ]
  },
  {
    id: 'business-analyst',
    emoji: '📈',
    title: 'Business Analyst',
    description: 'Analyze business workflows, define project requirements, and bridge the gap with technical builders.',
    tags: ['Low-Coding', 'Communication'],
    overview: 'Business Analysts evaluate operations to define product requirements. They write documentation, map workflows, align stakeholders, and use reporting dashboards to ensure IT output addresses core corporate goals.',
    skills: ['Requirement Gathering', 'Agile/Scrum', 'Excel', 'SQL', 'Jira/Confluence', 'User Stories', 'Process Mapping'],
    salary: {
      india: '₹4.0 – 8.5 LPA',
      global: '$62,000 – $85,000'
    },
    roadmap: [
      'Develop strong communication, presentation, and document design skills',
      'Learn standard business analysis techniques (SWOT, GAP, MoSCoW prioritization)',
      'Master spreadsheet tools for process modelling and cost-benefit forecasts',
      'Learn basic SQL to retrieve validation data independently',
      'Study Agile Scrum development frameworks and Jira ticket workflows',
      'Practice writing structured User Stories and PRD documents',
      'Participate in mock business case studies and presentations'
    ],
    certifications: [
      'ECBA (Entry Certificate in Business Analysis)',
      'Google Project Management Professional Certificate',
      'Certified Scrum Product Owner (CSPO)'
    ]
  },
  {
    id: 'web-developer',
    emoji: '🎨',
    title: 'Web Developer',
    description: 'Create responsive, visually appealing frontends and lightweight server integrations.',
    tags: ['Creative', 'Startup-Ready'],
    overview: 'Web Developers specialize in building interactive web experiences. They write clean HTML/CSS, structure logic in modern JavaScript, optimize load speeds, and integrate interfaces with backend endpoints and third-party tools.',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React / Vue', 'Responsive Design', 'Tailwind CSS', 'Git', 'Webpack/Vite'],
    salary: {
      india: '₹3.5 – 8.0 LPA',
      global: '$55,000 – $80,000'
    },
    roadmap: [
      'Learn semantic HTML5 and CSS3 styling layouts (Flexbox, Grid)',
      'Master modern vanilla JavaScript (closures, promises, async/await)',
      'Learn responsive web layouts, cross-browser compatibility, and accessibility standards',
      'Learn Git version control and deploying to Vercel/Netlify',
      'Master React framework and its hook ecosystems (useState, useEffect, useContext)',
      'Configure styles using utility libraries like Tailwind CSS',
      'Build 4+ real-world interactive frontend projects connecting to public APIs'
    ],
    certifications: [
      'Meta Front-End Developer Professional Certificate',
      'freeCodeCamp Responsive Web Design Certification',
      'Google UX Design Professional Certificate'
    ]
  }
];

function CareerExplorer() {
  const [selectedCareer, setSelectedCareer] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">
          Explore Career Paths
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto font-sans">
          Select a high-demand tech path to discover roles, roadmaps, salaries, and key certifications.
        </p>
      </div>

      {/* Grid of Careers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {careersData.map((career) => (
          <div 
            key={career.id} 
            className="bg-white border border-border p-6 rounded-xl shadow-premium hover:shadow-lg transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <div className="text-4xl mb-4" role="img" aria-label={career.title}>
                {career.emoji}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {career.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {career.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {career.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] px-2.5 py-0.5 font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedCareer(career)}
              className="w-full text-center px-4 py-2.5 bg-slate-50 hover:bg-primary hover:text-white text-primary text-sm font-semibold rounded-lg border border-slate-200 hover:border-primary transition-all duration-200"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCareer && (
        <div className="fixed inset-0 bg-secondary/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative border border-border text-left">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={selectedCareer.title}>{selectedCareer.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-secondary">{selectedCareer.title}</h3>
                  <div className="flex gap-1.5 mt-0.5">
                    {selectedCareer.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.25 font-semibold bg-blue-50 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCareer(null)}
                className="p-1.5 hover:bg-slate-100 rounded-full text-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Role Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">Role Overview</h4>
                <p className="text-sm text-secondary leading-relaxed bg-slate-50 p-4 rounded-lg border border-border/50">
                  {selectedCareer.overview}
                </p>
              </div>

              {/* Salary Ranges */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2.5">Entry-Level Salary Range</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-border/60 p-3 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted font-semibold uppercase">India Reference</p>
                      <p className="text-sm font-bold text-secondary">{selectedCareer.salary.india}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-border/60 p-3 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-accent rounded-lg">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted font-semibold uppercase">Global Reference</p>
                      <p className="text-sm font-bold text-secondary">{selectedCareer.salary.global}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCareer.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 font-mono font-medium bg-indigo-50 text-indigo-700 rounded border border-indigo-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roadmap step-list */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-3">Roadmap Steps</h4>
                <ol className="space-y-3">
                  {selectedCareer.roadmap.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-secondary leading-relaxed">
                      <span className="w-5.5 h-5.5 rounded-full bg-blue-50 text-primary font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-3.5">Recommended Certifications</h4>
                <ul className="space-y-2">
                  {selectedCareer.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-secondary font-medium">
                      <Award className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer (Ask AI CTA) */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-border p-4 flex items-center justify-center z-10">
              <div className="relative group w-full">
                <button
                  type="button"
                  className="w-full py-3 px-6 bg-accent hover:bg-emerald-600 text-secondary font-bold rounded-lg shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>💬 Ask AI Mentor about {selectedCareer.title}</span>
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-secondary text-white text-xs px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap z-30 pointer-events-none transition-opacity duration-150">
                  AI chat coming soon
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default CareerExplorer;
