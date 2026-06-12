// CareerPath Hub — Master JavaScript Application

// ==========================================
// 1. DATA STORE: CAREER PATH DETAILS
// ==========================================
const CAREERS_DATA = {
  "data-analyst": {
    title: "Data Analyst",
    category: "technology",
    eyebrow: "DATA & ANALYTICS",
    summary: "Translate numbers into actionable business stories. You will query databases, clean raw data, and build reports that guide executive decisions.",
    difficulty: 2,
    salary: "$65,000 - $95,000",
    description: "Data Analysts are the translators between technical databases and business strategy. In this role, you won't just run numbers; you will discover patterns that prevent losses, uncover new customer behaviors, and forecast sales trends. You will work closely with database systems, visualization tools, and department heads to turn messy inputs into clean, understandable dashboards.",
    stats: {
      salary: "$82,000 avg",
      growth: "+23% (Much faster than average)",
      difficulty: "Medium (2/5)",
      type: "Hybrid / Remote Friendly"
    },
    skills: [
      { name: "Microsoft Excel", type: "Tool", importance: 95 },
      { name: "SQL (Structured Query Language)", type: "Language", importance: 90 },
      { name: "Power BI & Tableau", type: "Tool", importance: 85 },
      { name: "Python (pandas & numpy)", type: "Language", importance: 70 },
      { name: "Statistical Methods", type: "Concept", importance: 65 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Advanced Excel", time: "2-3 Weeks", hint: "Master VLOOKUP, INDEX-MATCH, Pivot Tables, and logical formulas." },
      { step: "02", phase: "Foundation", name: "SQL Databases", time: "4 Weeks", hint: "Learn SELECT queries, JOINs, groupings, subqueries, and window functions." },
      { step: "03", phase: "Intermediate", name: "Data Visualization", time: "3 Weeks", hint: "Learn Power BI or Tableau. Understand dashboard design principles." },
      { step: "04", phase: "Intermediate", name: "Python Basics", time: "4-5 Weeks", hint: "Familiarize yourself with Pandas, Numpy, and Matplotlib libraries." },
      { step: "05", phase: "Advanced", name: "Statistics", time: "3 Weeks", hint: "Study probability, hypothesis testing, A/B tests, and regressions." },
      { step: "06", phase: "Advanced", name: "Capstone Projects", time: "4 Weeks", hint: "Build 3 end-to-end projects cleaning, analyzing, and presenting insights." }
    ],
    certs: [
      { name: "Google Data Analytics Professional", issuer: "Google", duration: "3-6 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { name: "IBM Data Analyst Professional", issuer: "IBM", duration: "3-4 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/ibm-data-analyst" }
    ],
    growth: [
      { stage: "Junior Analyst", exp: "0-2 Years", salary: "$60k - $72k" },
      { stage: "Data Analyst", exp: "2-4 Years", salary: "$75k - $95k" },
      { stage: "Senior Analyst", exp: "4-6 Years", salary: "$100k - $125k" },
      { stage: "Analytics Manager", exp: "6+ Years", salary: "$130k+" }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    category: "technology",
    eyebrow: "DATA & ANALYTICS",
    summary: "Build predictive models and machine learning pipelines. You'll use statistics and coding to extract deep insights and forecast outcomes.",
    difficulty: 4,
    salary: "$95,000 - $140,000",
    description: "Data Scientists combine mathematical theory, statistical coding, and domain expertise to build predictive systems. Rather than summarizing historical metrics, you will develop models that predict user churn, optimize logistics, or customize recommendations. This path requires a strong mathematical foundation and fluent programming capabilities.",
    stats: {
      salary: "$125,000 avg",
      growth: "+35% (Extremely Fast)",
      difficulty: "Hard (4/5)",
      type: "Remote / Hybrid"
    },
    skills: [
      { name: "Python Programming", type: "Language", importance: 95 },
      { name: "Machine Learning (Scikit-Learn)", type: "Concept", importance: 90 },
      { name: "Statistics & Probability", type: "Concept", importance: 85 },
      { name: "SQL & Big Data Tools", type: "Language", importance: 75 },
      { name: "Deep Learning (PyTorch/Tensorflow)", type: "Tool", importance: 60 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Python & SQL", time: "4 Weeks", hint: "Build scripts and perform complex queries on structured databases." },
      { step: "02", phase: "Foundation", name: "Linear Algebra & Stats", time: "4 Weeks", hint: "Understand matrix arithmetic, probabilities, distributions." },
      { step: "03", phase: "Intermediate", name: "Feature Engineering", time: "3 Weeks", hint: "Handling missing values, normalizing inputs, encoding variables." },
      { step: "04", phase: "Intermediate", name: "Supervised Learning", time: "4 Weeks", hint: "Train linear models, decision trees, random forests, and evaluation metrics." },
      { step: "05", phase: "Advanced", name: "Unsupervised & Deep Learning", time: "4 Weeks", hint: "Explore clustering (K-Means) and neural network architectures." },
      { step: "06", phase: "Advanced", name: "Deployment", time: "3 Weeks", hint: "Package models into APIs using FastAPI or Flask, deploying to cloud spaces." }
    ],
    certs: [
      { name: "Google Advanced Data Analytics", issuer: "Google", duration: "4-6 Months", diff: "Intermediate", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/google-advanced-data-analytics" },
      { name: "IBM Data Science Professional", issuer: "IBM", duration: "5-7 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/ibm-data-science" }
    ],
    growth: [
      { stage: "Junior Scientist", exp: "0-2 Years", salary: "$85k - $98k" },
      { stage: "Data Scientist", exp: "2-5 Years", salary: "$110k - $140k" },
      { stage: "Senior Scientist", exp: "5-7 Years", salary: "$150k - $185k" },
      { stage: "Principal Scientist", exp: "8+ Years", salary: "$200k+" }
    ]
  },
  "software-engineer": {
    title: "Software Engineer",
    category: "technology",
    eyebrow: "ENGINEERING",
    summary: "Design, build, and maintain functional software architectures. You will write code for web applications, APIs, or system backends.",
    difficulty: 3,
    salary: "$80,000 - $130,000",
    description: "Software Engineers construct the digital systems that run our world. As a general developer, you will specialize in converting specifications into clean, scalable, and secure code. Whether building interactive React frontends, robust Node.js backends, or desktop applications, you will solve computational problems daily and review architectures for performance.",
    stats: {
      salary: "$115,000 avg",
      growth: "+25% (Very Fast)",
      difficulty: "Medium-Hard (3/5)",
      type: "Remote / Office"
    },
    skills: [
      { name: "JavaScript / TypeScript", type: "Language", importance: 95 },
      { name: "Data Structures & Algorithms", type: "Concept", importance: 85 },
      { name: "React or Vue.js", type: "Tool", importance: 80 },
      { name: "Node.js (Express)", type: "Tool", importance: 75 },
      { name: "Git Version Control", type: "Tool", importance: 90 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Programming Core", time: "4 Weeks", hint: "Learn syntax, control flow, functions, and OOP in JavaScript or Python." },
      { step: "02", phase: "Foundation", name: "Web Fundamentals", time: "3 Weeks", hint: "Understand HTML semantics, modern CSS layouts, and DOM manipulation." },
      { step: "03", phase: "Intermediate", name: "Version Control & Git", time: "2 Weeks", hint: "Master staging, committing, branch management, and pull requests." },
      { step: "04", phase: "Intermediate", name: "Frontend Library", time: "4 Weeks", hint: "Learn React, state management, components lifecycle, and hook systems." },
      { step: "05", phase: "Advanced", name: "Backend APIs", time: "4 Weeks", hint: "Design Express servers, connect relational databases, implement JSON Web Tokens." },
      { step: "06", phase: "Advanced", name: "System Design basics", time: "3 Weeks", hint: "Study horizontal scaling, caching strategies, and database indexing." }
    ],
    certs: [
      { name: "Meta Front-End Developer", issuer: "Meta", duration: "4-6 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
      { name: "Meta Back-End Developer", issuer: "Meta", duration: "4-6 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/meta-back-end-developer" }
    ],
    growth: [
      { stage: "Associate Dev", exp: "0-2 Years", salary: "$70k - $90k" },
      { stage: "Software Engineer", exp: "2-5 Years", salary: "$100k - $130k" },
      { stage: "Senior Engineer", exp: "5-8 Years", salary: "$145k - $180k" },
      { stage: "Staff Engineer / Architect", exp: "8+ Years", salary: "$190k+" }
    ]
  },
  "ai-engineer": {
    title: "AI Engineer",
    category: "technology",
    eyebrow: "EMERGING TECH",
    summary: "Integrate LLMs, train custom neural networks, and deploy AI models. You will bridge the gap between AI research and production code.",
    difficulty: 4,
    salary: "$110,000 - $170,000",
    description: "AI Engineers construct and deploy intelligent systems utilizing modern generative models and custom architectures. You will integrate large language models (LLMs) into standard applications, manage vector databases for retrieval-augmented generation (RAG), and set up neural training sequences. This path balances modern software engineering with practical AI implementation.",
    stats: {
      salary: "$145,000 avg",
      growth: "+40% (Explosive)",
      difficulty: "Hard (4/5)",
      type: "Remote / Hybrid"
    },
    skills: [
      { name: "Python / PyTorch", type: "Language", importance: 95 },
      { name: "API Integrations (OpenAI, Anthropic)", type: "Tool", importance: 90 },
      { name: "Vector Databases (Pinecone/Chroma)", type: "Tool", importance: 85 },
      { name: "RAG & Agent Architectures", type: "Concept", importance: 80 },
      { name: "Model Fine-tuning (HuggingFace)", type: "Concept", importance: 70 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Python & LangChain", time: "4 Weeks", hint: "Learn Python script control and orchestrating LLM queries using templates." },
      { step: "02", phase: "Foundation", name: "APIs & Prompt Engineering", time: "2 Weeks", hint: "Understand system prompts, token limits, structured outputs." },
      { step: "03", phase: "Intermediate", name: "Vector Search & RAG", time: "4 Weeks", hint: "Implement chunking strategies, create embeddings, load Pinecone databases." },
      { step: "04", phase: "Intermediate", name: "AI Agent Workflows", time: "3 Weeks", hint: "Design memory structures, tool access patterns, multi-agent frameworks." },
      { step: "05", phase: "Advanced", name: "Fine-Tuning Models", time: "4 Weeks", hint: "Prepare training datasets, run LoRA parameters, evaluate loss calculations." },
      { step: "06", phase: "Advanced", name: "GPU Infrastructure", time: "3 Weeks", hint: "Configure CUDA, deploy weights using vLLM, benchmark performance outputs." }
    ],
    certs: [
      { name: "IBM Applied AI Professional", issuer: "IBM", duration: "3-5 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/ibm-applied-ai" },
      { name: "Microsoft Certified: Azure AI Engineer", issuer: "Microsoft", duration: "1-2 Months", diff: "Intermediate", cost: "Paid ($165)", link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer-associate/" }
    ],
    growth: [
      { stage: "AI Application Developer", exp: "0-2 Years", salary: "$95k - $115k" },
      { stage: "AI Engineer", exp: "2-5 Years", salary: "$130k - $165k" },
      { stage: "Senior AI Engineer", exp: "5-7 Years", salary: "$180k - $220k" },
      { stage: "Director of AI Systems", exp: "7+ Years", salary: "$240k+" }
    ]
  },
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    category: "technology",
    eyebrow: "SECURITY",
    summary: "Protect networks, monitor threats, and respond to incidents. You will act as the digital defense shield for an organization's resources.",
    difficulty: 3,
    salary: "$75,000 - $115,000",
    description: "Cybersecurity Analysts stand on the front lines of digital protection. You will continually monitor enterprise networks for unauthorized activity, investigate threat indicators, configure firewalls, and execute incident response plans. The role involves combining tactical computer knowledge with operational awareness.",
    stats: {
      salary: "$95,000 avg",
      growth: "+32% (Very Fast)",
      difficulty: "Medium-Hard (3/5)",
      type: "Hybrid / On-site Required"
    },
    skills: [
      { name: "Networking Fundamentals", type: "Concept", importance: 95 },
      { name: "SIEM Tools (Splunk / Sentinel)", type: "Tool", importance: 90 },
      { name: "Linux System Administration", type: "Tool", importance: 80 },
      { name: "Incident Response Playbooks", type: "Concept", importance: 75 },
      { name: "Python scripting", type: "Language", importance: 60 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Network Infrastructure", time: "4 Weeks", hint: "Study TCP/IP protocols, DNS configurations, subnets, and routing maps." },
      { step: "02", phase: "Foundation", name: "Linux Core Commands", time: "2 Weeks", hint: "Familiarize yourself with CLI navigation, permissions, cron tasks, logs." },
      { step: "03", phase: "Intermediate", name: "Threat Profiles", time: "3 Weeks", hint: "Learn common exploit patterns: SQL injections, Phishing, Ransomware vectors." },
      { step: "04", phase: "Intermediate", name: "SIEM Alert Pipelines", time: "4 Weeks", hint: "Set up queries, interpret packet traces, identify abnormal activities." },
      { step: "05", phase: "Advanced", name: "Access & Identity", type: "Concept", time: "3 Weeks", hint: "Implement multi-factor permissions, role definitions, directory groups." },
      { step: "06", phase: "Advanced", name: "Defensive Scenarios", time: "4 Weeks", hint: "Perform tabletop disaster exercises, outline response steps, mitigate damage." }
    ],
    certs: [
      { name: "CompTIA Security+", issuer: "CompTIA", duration: "1-2 Months", diff: "Beginner", cost: "Paid ($392)", link: "https://www.comptia.org/certifications/security" },
      { name: "Google Cybersecurity Professional", issuer: "Google", duration: "3-5 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/google-cybersecurity" }
    ],
    growth: [
      { stage: "SOC Analyst L1", exp: "0-2 Years", salary: "$65k - $78k" },
      { stage: "Security Analyst L2", exp: "2-4 Years", salary: "$85k - $110k" },
      { stage: "Senior Security Engineer", exp: "4-7 Years", salary: "$125k - $155k" },
      { stage: "CISO (Chief Security Officer)", exp: "8+ Years", salary: "$180k+" }
    ]
  },
  "cloud-engineer": {
    title: "Cloud Engineer",
    category: "technology",
    eyebrow: "INFRASTRUCTURE",
    summary: "Orchestrate cloud networks, configure servers, and implement IAC. You will construct the virtual platforms where applications reside.",
    difficulty: 3,
    salary: "$85,000 - $135,000",
    description: "Cloud Engineers build and manage virtualized network structures, compute platforms, and storage buckets across cloud platforms like AWS, Azure, or GCP. You will program Infrastructure as Code (IaC), deploy continuous delivery pipelines, and monitor availability metrics to ensure seamless operations.",
    stats: {
      salary: "$110,000 avg",
      growth: "+27% (Very Fast)",
      difficulty: "Medium-Hard (3/5)",
      type: "Remote / Hybrid"
    },
    skills: [
      { name: "AWS, Azure or GCP Platforms", type: "Tool", importance: 95 },
      { name: "Docker Containerization", type: "Tool", importance: 90 },
      { name: "Terraform (IaC)", type: "Tool", importance: 85 },
      { name: "Linux System Ops", type: "Concept", importance: 80 },
      { name: "CI/CD (GitHub Actions / GitLab)", type: "Concept", importance: 75 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Cloud Core Concepts", time: "3 Weeks", hint: "Understand VMs, virtual networks (VPCs), storage arrays, permission models." },
      { step: "02", phase: "Foundation", name: "Linux System Basics", time: "3 Weeks", hint: "Study system scripting, daemon control, logging frameworks." },
      { step: "03", phase: "Intermediate", name: "Containers & Docker", time: "3 Weeks", hint: "Write Dockerfiles, build images, run local microservice environments." },
      { step: "04", phase: "Intermediate", name: "Cloud CLI Tools", time: "3 Weeks", hint: "Deploy infrastructure via terminal scripts, manage policies." },
      { step: "05", phase: "Advanced", name: "Terraform Infrastructure", time: "4 Weeks", hint: "Program infrastructure architectures, version control configurations." },
      { step: "06", phase: "Advanced", name: "CI/CD & Kubernetes", time: "5 Weeks", hint: "Automate build scripts, deploy clusters, maintain pod availability." }
    ],
    certs: [
      { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", duration: "2-3 Months", diff: "Intermediate", cost: "Paid ($150)", link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "Microsoft Certified: Azure Administrator", issuer: "Microsoft", duration: "2 Months", diff: "Intermediate", cost: "Paid ($165)", link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" }
    ],
    growth: [
      { stage: "Junior Cloud Dev", exp: "0-2 Years", salary: "$75k - $90k" },
      { stage: "Cloud Engineer", exp: "2-5 Years", salary: "$105k - $130k" },
      { stage: "Senior Cloud Architect", exp: "5-7 Years", salary: "$150k - $185k" },
      { stage: "Director of Infrastructure", exp: "8+ Years", salary: "$200k+" }
    ]
  },
  "business-analyst": {
    title: "Business Analyst",
    category: "business",
    eyebrow: "BUSINESS & STRATEGY",
    summary: "Bridge technical divisions and business metrics. You will write requirement specs, model user flows, and optimize operations.",
    difficulty: 2,
    salary: "$65,000 - $95,000",
    description: "Business Analysts evaluate organizational systems and design process transformations. In this role, you will act as the essential bridge between commercial operations and technical software engineering divisions. You will research current workflows, build process flowcharts, draft functional specification requirements, and analyze cost benefits.",
    stats: {
      salary: "$84,000 avg",
      growth: "+11% (Average)",
      difficulty: "Easy-Medium (2/5)",
      type: "Office / Hybrid"
    },
    skills: [
      { name: "Process Mapping (BPMN / Visio)", type: "Tool", importance: 95 },
      { name: "Agile Methodologies (Jira)", type: "Concept", importance: 90 },
      { name: "Requirements Elicitation", type: "Concept", importance: 85 },
      { name: "SQL & Excel Data Checks", type: "Tool", importance: 70 },
      { name: "Financial Modeling", type: "Concept", importance: 60 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Excel & SQL Basics", time: "3 Weeks", hint: "Learn data filtering, lookups, and basic SELECT checks." },
      { step: "02", phase: "Foundation", name: "Requirements Elicitation", time: "3 Weeks", hint: "Study interview formats, workshop design, and survey methodology." },
      { step: "03", phase: "Intermediate", name: "Process Modeling", time: "3 Weeks", hint: "Draw sequence diagrams, capture business activities using swimlanes." },
      { step: "04", phase: "Intermediate", name: "Agile framework & Jira", time: "2 Weeks", hint: "Learn epic configurations, sprint cycles, and ticket drafting." },
      { step: "05", phase: "Advanced", name: "User Acceptance Testing (UAT)", time: "3 Weeks", hint: "Define test plans, capture feedback parameters, validate compliance." },
      { step: "06", phase: "Advanced", name: "Product Delivery", time: "4 Weeks", hint: "Present business cases to executives, monitor launch performance metrics." }
    ],
    certs: [
      { name: "Entry Certificate in Business Analysis (ECBA)", issuer: "IIBA", duration: "1-2 Months", diff: "Beginner", cost: "Paid ($350)", link: "https://www.iiba.org/business-analysis-certifications/ecba/" },
      { name: "PMI Professional in Business Analysis (PBA)", issuer: "PMI", duration: "2-3 Months", diff: "Advanced", cost: "Paid ($555)", link: "https://www.pmi.org/certifications/business-analysis-pba" }
    ],
    growth: [
      { stage: "Junior Business Analyst", exp: "0-2 Years", salary: "$60k - $70k" },
      { stage: "Business Analyst", exp: "2-5 Years", salary: "$78k - $95k" },
      { stage: "Senior Analyst", exp: "5-7 Years", salary: "$110k - $130k" },
      { stage: "Business Architect", exp: "7+ Years", salary: "$145k+" }
    ]
  },
  "product-manager": {
    title: "Product Manager",
    category: "business",
    eyebrow: "BUSINESS & STRATEGY",
    summary: "Define product vision, set roadmaps, and direct cross-functional teams. You are the champion of user value and business metrics.",
    difficulty: 3,
    salary: "$85,000 - $145,000",
    description: "Product Managers own the strategic direction of software applications. You will discover user pain points, build multi-quarter feature roadmaps, define release criteria, and coordinate engineers, designers, and marketing teams to bring products to market successfully.",
    stats: {
      salary: "$118,000 avg",
      growth: "+18% (Faster than average)",
      difficulty: "Medium-Hard (3/5)",
      type: "Hybrid / Remote"
    },
    skills: [
      { name: "Product Strategy & Mapping", type: "Concept", importance: 95 },
      { name: "User Research & Interviews", type: "Concept", importance: 90 },
      { name: "Agile Development Cycles", type: "Concept", importance: 80 },
      { name: "Data Analytics (Mixpanel/Amplitude)", type: "Tool", importance: 75 },
      { name: "UI/UX Design Basics", type: "Concept", importance: 70 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Product Life Cycle", time: "3 Weeks", hint: "Study discovery, launch, maturity, and sunset frameworks." },
      { step: "02", phase: "Foundation", name: "User Interviewing", time: "3 Weeks", hint: "Draft surveys, conduct focus groups, structure open-ended questions." },
      { step: "03", phase: "Intermediate", name: "Feature Prioritization", time: "3 Weeks", hint: "Use RICE, MoSCoW, or Kano prioritization models." },
      { step: "04", phase: "Intermediate", name: "Roadmap Architecture", time: "2 Weeks", hint: "Orchestrate release tracks, build timelines in product software." },
      { step: "05", phase: "Advanced", name: "Analytics & Funnels", time: "4 Weeks", hint: "Measure retention loops, track usage funnels, run A/B test experiments." },
      { step: "06", phase: "Advanced", name: "Go-To-Market Plans", time: "4 Weeks", hint: "Coordinate release copy, train sales divisions, monitor signup curves." }
    ],
    certs: [
      { name: "Product Management Certificate", issuer: "Product School", duration: "2 Months", diff: "Intermediate", cost: "Paid ($4499)", link: "https://productschool.com/" },
      { name: "OneWeek PM Certification", issuer: "Product Manager HQ", duration: "1 Week", diff: "Beginner", cost: "Paid ($397)", link: "https://productmanagerhq.com/" }
    ],
    growth: [
      { stage: "Associate PM", exp: "0-2 Years", salary: "$75k - $90k" },
      { stage: "Product Manager", exp: "2-5 Years", salary: "$105k - $140k" },
      { stage: "Senior PM", exp: "5-8 Years", salary: "$150k - $190k" },
      { stage: "VP of Product", exp: "8+ Years", salary: "$220k+" }
    ]
  },
  "digital-marketer": {
    title: "Digital Marketer",
    category: "business",
    eyebrow: "BUSINESS & STRATEGY",
    summary: "Drive user acquisition, structure campaigns, and manage content logic. You will handle advertising funnels and brand messaging.",
    difficulty: 2,
    salary: "$55,000 - $85,000",
    description: "Digital Marketers plan and deploy online outreach programs. You will coordinate paid search advertisements, optimize site structure for SEO search listings, produce email follow-up sequences, and evaluate funnel metrics to maximize acquisition ROI.",
    stats: {
      salary: "$72,000 avg",
      growth: "+10% (Average)",
      difficulty: "Easy (2/5)",
      type: "Remote / Hybrid"
    },
    skills: [
      { name: "Google Ads & Meta Ads Managers", type: "Tool", importance: 95 },
      { name: "SEO (Search Engine Optimization)", type: "Concept", importance: 90 },
      { name: "Copywriting & Content Creation", type: "Concept", importance: 80 },
      { name: "Google Analytics 4", type: "Tool", importance: 85 },
      { name: "Email Automations (Klaviyo)", type: "Tool", importance: 70 }
    ],
    roadmap: [
      { step: "01", phase: "Foundation", name: "Marketing Funnels", time: "2 Weeks", hint: "Understand Awareness, Consideration, Conversion, and Loyalty stages." },
      { step: "02", phase: "Foundation", name: "Persuasive Copywriting", time: "3 Weeks", hint: "Write headers, value proposals, and call-to-actions that convert." },
      { step: "03", phase: "Intermediate", name: "Search Engine Optimization", time: "4 Weeks", hint: "Learn keyword queries, on-page optimization, and backlink strategies." },
      { step: "04", phase: "Intermediate", name: "Paid Ads Engine", time: "4 Weeks", hint: "Set up Facebook Pixel, create search ad assets, configure target budgets." },
      { step: "05", phase: "Advanced", name: "Analytics & Attribution", time: "3 Weeks", hint: "Analyze UTM parameters, assign multi-touch attribution points, configure GA4." },
      { step: "06", phase: "Advanced", name: "Email Lifecycles", time: "3 Weeks", hint: "Design trigger-based welcome campaigns, calculate click-through levels." }
    ],
    certs: [
      { name: "Google Digital Marketing Professional", issuer: "Google", duration: "3-6 Months", diff: "Beginner", cost: "Paid ($39/mo)", link: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce" },
      { name: "HubSpot Inbound Marketing Certification", issuer: "HubSpot", duration: "4-5 Hours", diff: "Beginner", cost: "Free", link: "https://academy.hubspot.com/courses/inbound-marketing" }
    ],
    growth: [
      { stage: "Marketing Specialist", exp: "0-2 Years", salary: "$48k - $60k" },
      { stage: "Digital Marketer", exp: "2-4 Years", salary: "$65k - $85k" },
      { stage: "Senior Growth Marketer", exp: "4-6 Years", salary: "$95k - $120k" },
      { stage: "Director of Acquisition", exp: "6+ Years", salary: "$135k+" }
    ]
  }
};

// ==========================================
// 2. SPA ROUTER
// ==========================================
function initRouter() {
  const pages = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function handleRoute() {
    let rawHash = window.location.hash || '#home';
    let cleanHash = rawHash.split('?')[0];

    // Determine target page container
    let targetPageId = cleanHash.substring(1);
    
    // Check if target is career detail subroute
    let activePage = null;
    let queryRole = null;

    if (targetPageId.startsWith('career-detail-')) {
      queryRole = targetPageId.replace('career-detail-', '');
      targetPageId = 'career-detail';
    }

    // Update active visual state for sections
    pages.forEach(page => {
      if (page.id === 'page-' + targetPageId) {
        page.style.display = 'block';
        activePage = page;
        setTimeout(() => {
          page.classList.add('active');
        }, 50);
      } else {
        page.classList.remove('active');
        page.style.display = 'none';
      }
    });

    // Populate Dynamic Career Detail page if applicable
    if (targetPageId === 'career-detail' && queryRole) {
      renderCareerDetails(queryRole);
      // Track in localStorage as recently viewed
      trackRecentlyViewed(queryRole);
    }

    // Update Nav bar highlights
    navLinks.forEach(link => {
      const linkHash = link.getAttribute('href').split('?')[0];
      // Match top level categories
      if (linkHash === cleanHash || 
          (targetPageId === 'career-detail' && linkHash === '#careers')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Scroll window to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Collapse mobile menu if visible
    const navBarList = document.querySelector('.nav-links');
    if (navBarList) {
      navBarList.classList.remove('active');
    }
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);
}

// ==========================================
// 3. DYNAMIC CAREER DETAIL GENERATOR
// ==========================================
function renderCareerDetails(roleKey) {
  const data = CAREERS_DATA[roleKey];
  if (!data) return;

  // Breadcrumbs text
  const bcActive = document.getElementById('bc-active');
  if (bcActive) bcActive.textContent = data.title;

  // Hero section info
  const detailTitle = document.getElementById('detail-title');
  const detailEyebrow = document.getElementById('detail-eyebrow');
  const detailDescHero = document.getElementById('detail-desc-hero');

  if (detailTitle) detailTitle.textContent = data.title;
  if (detailEyebrow) detailEyebrow.textContent = data.eyebrow;
  if (detailDescHero) detailDescHero.textContent = data.summary;

  // Overview content
  const overviewText = document.getElementById('overview-text');
  if (overviewText) overviewText.textContent = data.description;

  // Quick stats panel
  const statSalary = document.getElementById('stat-salary');
  const statGrowth = document.getElementById('stat-growth');
  const statDiff = document.getElementById('stat-diff');
  const statType = document.getElementById('stat-type');

  if (statSalary) statSalary.textContent = data.stats.salary;
  if (statGrowth) statGrowth.textContent = data.stats.growth;
  if (statDiff) statDiff.textContent = data.stats.difficulty;
  if (statType) statType.textContent = data.stats.type;

  // Required Skills Matrix
  const skillsContainer = document.getElementById('skills-matrix-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
      const row = document.createElement('div');
      row.className = 'skill-matrix-row';
      row.innerHTML = `
        <div class="skill-matrix-name">${skill.name}</div>
        <div><span class="skill-matrix-type">${skill.type}</span></div>
        <div class="skill-matrix-bar-wrap">
          <div class="skill-matrix-bar" data-width="${skill.importance}%"></div>
        </div>
      `;
      skillsContainer.appendChild(row);
    });

    // Trigger skills bar animations since they are newly inserted
    setTimeout(() => {
      const bars = skillsContainer.querySelectorAll('.skill-matrix-bar');
      bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }, 100);
  }

  // Learning Roadmap Timeline
  const roadmapContainer = document.getElementById('roadmap-timeline-container');
  if (roadmapContainer) {
    roadmapContainer.innerHTML = '';
    data.roadmap.forEach((step, idx) => {
      const isFirst = idx === 0;
      const isSecond = idx === 1;
      const cardClass = isFirst ? 'active' : (isSecond ? 'completed' : '');
      const card = document.createElement('div');
      card.className = `roadmap-step-card ${cardClass}`;
      card.innerHTML = `
        <div class="roadmap-step-dot">
          <span>${step.step}</span>
        </div>
        <div class="roadmap-step-header">
          <span class="mono-label" style="font-size: 10px; color: ${isFirst ? 'var(--accent-violet)' : 'var(--accent-amber)'}">${step.phase}</span>
          <span class="roadmap-step-time">${step.time}</span>
        </div>
        <h4 style="margin-bottom: 0.5rem;">${step.name}</h4>
        <p class="roadmap-step-hint">${step.hint}</p>
      `;
      roadmapContainer.appendChild(card);
    });
  }

  // Certifications grid
  const certsContainer = document.getElementById('detail-certs-container');
  if (certsContainer) {
    certsContainer.innerHTML = '';
    data.certs.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      const initials = cert.issuer.substring(0, 2).toUpperCase();
      const logoClass = cert.issuer.toLowerCase().includes('google') ? 'google' : 
                        (cert.issuer.toLowerCase().includes('ibm') ? 'ibm' : 
                        (cert.issuer.toLowerCase().includes('amazon') || cert.issuer.toLowerCase().includes('aws') ? 'aws' : 'azure'));
      card.innerHTML = `
        <div>
          <div class="cert-card-header">
            <div class="cert-logo-placeholder ${logoClass}">${initials}</div>
            <div class="cert-meta-info">
              <h4>${cert.name}</h4>
              <span class="cert-issuer">${cert.issuer}</span>
            </div>
          </div>
          <div class="cert-badges">
            <span class="cert-badge level">${cert.diff}</span>
            <span class="cert-badge cost">${cert.cost}</span>
          </div>
        </div>
        <div class="cert-card-footer">
          <span class="cert-duration">${cert.duration}</span>
          <a href="${cert.link}" target="_blank" class="cert-link">View Cert →</a>
        </div>
      `;
      certsContainer.appendChild(card);
    });
  }

  // Career Growth Progression Track
  const growthContainer = document.getElementById('growth-track-container');
  if (growthContainer) {
    growthContainer.innerHTML = '';
    data.growth.forEach((stage, idx) => {
      const isCurrent = idx === 1; // Mark second stage as active to show progression
      const div = document.createElement('div');
      div.className = `growth-stage ${isCurrent ? 'active' : ''}`;
      div.innerHTML = `
        <div class="growth-node"></div>
        <span class="growth-exp">${stage.exp}</span>
        <h4>${stage.stage}</h4>
        <span class="growth-salary">${stage.salary}</span>
      `;
      growthContainer.appendChild(div);
    });
  }
}

// Sticky side navigation selector updates
function initDetailSubNav() {
  const sidenavLinks = document.querySelectorAll('.sidenav-link');
  sidenavLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidenavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// 4. LOCALSTORAGE: RECENTLY VIEWED CAREERS
// ==========================================
function trackRecentlyViewed(roleKey) {
  let list = JSON.parse(localStorage.getItem('recently_viewed')) || [];
  
  // Remove duplicate if exists
  list = list.filter(item => item !== roleKey);
  
  // Insert at front
  list.unshift(roleKey);
  
  // Cap at 3 items
  if (list.length > 3) list.pop();
  
  localStorage.setItem('recently_viewed', JSON.stringify(list));
  renderRecentlyViewedWidget();
}

function renderRecentlyViewedWidget() {
  const container = document.getElementById('recently-viewed-container');
  const section = document.getElementById('recently-viewed-section');
  if (!container || !section) return;

  const list = JSON.parse(localStorage.getItem('recently_viewed')) || [];
  if (list.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  container.innerHTML = '';
  
  list.forEach(roleKey => {
    const data = CAREERS_DATA[roleKey];
    if (!data) return;

    const card = document.createElement('div');
    card.className = 'career-card grid-item-4';
    card.style.minHeight = '220px';
    card.style.padding = '2rem';
    
    // Capitalize eyebrow
    card.innerHTML = `
      <div class="career-card-content">
        <span class="mono-label" style="font-size: 10px; margin-bottom: 0.5rem;">${data.eyebrow}</span>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">${data.title}</h3>
        <p style="font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.4;">${data.summary}</p>
      </div>
      <div class="career-card-meta" style="padding-top: 1rem;">
        <span class="salary-badge" style="font-size: 11px;">${data.stats.salary.split(' ')[0]}</span>
        <a href="#career-detail-${roleKey}" class="card-link" style="font-size: 13px;">Resume Path →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// 5. CAREER CONSTELLATION ANIMATION
// ==========================================
function initConstellation() {
  const canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Handle Resize
  function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Nodes (Careers represented in spaces)
  const nodeLabels = ["AI Engineer", "Software Dev", "Data Scientist", "Product Manager", "Cybersecurity", "Cloud Arch", "Business Analyst", "Data Analyst", "Digital Marketer"];
  const nodes = [];
  const numNodes = nodeLabels.length;

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 4 + 4,
      label: nodeLabels[i],
      pulseOffset: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.01
    });
  }

  // Mouse interactivity
  let mouse = { x: null, y: null, active: false };
  const parentContainer = canvas.parentElement;
  
  parentContainer.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  parentContainer.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
    mouse.active = false;
  });

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update positions and pulse values
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      node.pulseOffset += node.pulseSpeed;

      // Wrap boundaries
      if (node.x < 0) node.x = canvas.width;
      if (node.x > canvas.width) node.x = 0;
      if (node.y < 0) node.y = canvas.height;
      if (node.y > canvas.height) node.y = 0;

      // Mouse interactive force
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          // Subtly push away or pull towards cursor
          node.x -= (dx / dist) * force * 0.8;
          node.y -= (dy / dist) * force * 0.8;
        }
      }
    });

    // Draw connecting paths (dashed style lines)
    ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Reset dash for labels and nodes
    ctx.setLineDash([]);

    // Draw nodes and labels
    nodes.forEach(node => {
      const pulseRadius = node.radius + Math.sin(node.pulseOffset) * 2;
      
      // Node Outer Glow Ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.fill();

      // Node core
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 158, 11, 0.95)'; // Amber highlight core
      ctx.fill();

      // Label styling
      ctx.fillStyle = '#8892A4';
      ctx.font = '10px "JetBrains Mono"';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + pulseRadius + 16);
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 6. SCROLL OBSERVERS (FADE IN EFFECTS)
// ==========================================
function initScrollObserver() {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If skill bars block is targeted, animate widths
        const bars = entry.target.querySelectorAll('.skill-matrix-bar');
        bars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          bar.style.width = targetWidth;
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Bind to fade elements and dynamic metrics triggers
  const fadeElements = document.querySelectorAll('.fade-in-up, .skills-matrix, .growth-track, .reasons-timeline');
  fadeElements.forEach(el => observer.observe(el));
}

// ==========================================
// 7. CATEGORY FILTERS
// ==========================================
function initFilters() {
  // Page 2: Career Path Category Tabs
  const careerTabs = document.querySelectorAll('.career-hero .filter-tab');
  const careerCards = document.querySelectorAll('#careers-grid-container .detail-card');

  careerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      careerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      careerCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Page 5: Certifications Page Category Tabs
  const certTabs = document.querySelectorAll('.certs-hero .filter-tab');
  const certCards = document.querySelectorAll('#certs-grid-container .cert-card');

  certTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      certTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      certCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 8. INTERVIEW PREP SIDEBAR NAVIGATION & ACCORDIONS
// ==========================================
function initInterviewPrep() {
  const sideLinks = document.querySelectorAll('.interview-layout .sidenav-link');
  const accordionGroups = document.querySelectorAll('.accordion-group');

  // Switch category
  sideLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetCat = link.getAttribute('data-category');
      accordionGroups.forEach(group => {
        if (group.id === 'group-' + targetCat) {
          group.style.display = 'flex';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // Accordion Expand/Collapse
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      
      const isActive = item.classList.contains('active');

      // Close other accordions inside the current visible group
      const activeGroup = item.parentElement;
      activeGroup.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// ==========================================
// 9. RESUME TIPS ACTION & HOVERS
// ==========================================
function initResumeTips() {
  const structureItems = document.querySelectorAll('.structure-item');
  const resumePaper = document.querySelector('.resume-paper');
  if (!resumePaper) return;

  const sectionMappings = {
    "1": ".resume-paper-header",
    "2": ".sec-summary",
    "3": ".sec-exp",
    "4": ".sec-skills",
    "5": ".sec-edu"
  };

  structureItems.forEach(item => {
    const num = item.getAttribute('data-section');
    const selector = sectionMappings[num];
    const resumeSection = resumePaper.querySelector(selector);

    if (resumeSection) {
      item.addEventListener('mouseenter', () => {
        resumeSection.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
        resumeSection.style.transition = 'background-color 0.3s ease';
      });

      item.addEventListener('mouseleave', () => {
        resumeSection.style.backgroundColor = 'transparent';
      });
    }
  });
}

// ==========================================
// 10. APP INITIALIZER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initDetailSubNav();
  initConstellation();
  initScrollObserver();
  initFilters();
  initInterviewPrep();
  initResumeTips();
  renderRecentlyViewedWidget();

  // Scroll navbar theme change hook
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navBarList = document.querySelector('.nav-links');
  if (navToggle && navBarList) {
    navToggle.addEventListener('click', () => {
      navBarList.classList.toggle('active');
    });
  }
});
