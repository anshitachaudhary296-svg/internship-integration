const INTERNSHIPS_DATA = [
  {
    id: "web-01",
    title: "Frontend Engineering Intern (React/TS)",
    company: "CloudScale Systems",
    domain: "Web Development",
    domainKey: "web",
    location: "San Francisco, CA (Remote)",
    workType: "Remote",
    stipend: "$1,800/month",
    stipendAmount: 1800,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 1,
    deadline: "May 15, 2025",
    logoBg: "linear-gradient(135deg, #2563eb, #38bdf8)",
    logoInitial: "CS",
    tags: ["React", "TypeScript", "CSS3", "REST APIs"],
    description: "Collaborate with senior frontend engineers to build high-performance client dashboards and micro-frontends with modern Web standards.",
    responsibilities: [
      "Develop reusable and accessible UI components in TypeScript and React.",
      "Optimize web application performance, Core Web Vitals, and load times.",
      "Collaborate with product designers to implement pixel-perfect Figma designs.",
      "Write comprehensive unit tests using modern JavaScript testing libraries."
    ],
    requirements: [
      "Proficient in HTML5, CSS3, ES6+ JavaScript, and React fundamentals.",
      "Understanding of asynchronous JavaScript, RESTful APIs, and Git version control.",
      "Passion for user experience, accessibility standards (WCAG), and responsive layouts.",
      "Currently pursuing a degree in Computer Science, Software Engineering, or self-taught equivalent."
    ],
    perks: ["Mentorship from Staff Engineers", "Flexible working hours", "Full-time PPO conversion opportunity", "Home office stipend"]
  },
  {
    id: "web-02",
    title: "Backend Services Intern (Node.js/Go)",
    company: "Veloce Systems",
    domain: "Web Development",
    domainKey: "web",
    location: "Austin, TX (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,650/month",
    stipendAmount: 1650,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 3,
    deadline: "May 22, 2025",
    logoBg: "linear-gradient(135deg, #0284c7, #06b6d4)",
    logoInitial: "VS",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    description: "Design and implement scalable REST and gRPC microservices handling millions of transactional events across distributed cloud services.",
    responsibilities: [
      "Build modular API endpoints with Node.js, Express, and PostgreSQL.",
      "Implement rate-limiting, authentication tokens, and caching layers with Redis.",
      "Assist in writing CI/CD pipeline automation scripts and Docker containerization.",
      "Document API specifications following OpenAPI / Swagger standards."
    ],
    requirements: [
      "Solid foundation in data structures, algorithms, and relational databases (SQL).",
      "Hands-on experience with Node.js or Golang for backend scripting.",
      "Familiarity with cloud platforms (AWS, GCP) and containerization basics."
    ],
    perks: ["1-on-1 mentorship", "Weekly lunch stipends", "Cloud certification reimbursement"]
  },
  {
    id: "web-03",
    title: "Full Stack Web Developer Intern",
    company: "DevPulse Interactive",
    domain: "Web Development",
    domainKey: "web",
    location: "Bengaluru, India (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,200/month",
    stipendAmount: 1200,
    duration: "6 Months",
    durationMonths: 6,
    postedDaysAgo: 5,
    deadline: "June 01, 2025",
    logoBg: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
    logoInitial: "DP",
    tags: ["Full Stack", "JavaScript", "MongoDB", "Express"],
    description: "Join our core developer product team to build end-to-end features, from intuitive UI widgets to high-throughput backend APIs.",
    responsibilities: [
      "Develop end-to-end features across the entire web application stack.",
      "Integrate 3rd-party webhook services and payment processing workflows.",
      "Debug cross-browser compatibility issues and profile client memory consumption."
    ],
    requirements: [
      "Strong understanding of JavaScript/TypeScript, Document DBs, and modern CSS.",
      "Ability to troubleshoot and debug complex client-server interactions.",
      "Strong team communication skills and curiosity to learn."
    ],
    perks: ["Bi-weekly tech talks", "Hackathon participation", "Intern project showcase"]
  },
  {
    id: "web-04",
    title: "Next.js Web Applications Intern",
    company: "Apex Web Labs",
    domain: "Web Development",
    domainKey: "web",
    location: "New York, NY (Remote)",
    workType: "Remote",
    stipend: "$2,000/month",
    stipendAmount: 2000,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 2,
    deadline: "May 30, 2025",
    logoBg: "linear-gradient(135deg, #0f172a, #334155)",
    logoInitial: "AW",
    tags: ["Next.js", "React", "Tailwind", "GraphQL"],
    description: "Build server-rendered, ultra-fast web experiences for top-tier ecommerce and SaaS client accounts using Next.js & Edge workers.",
    responsibilities: [
      "Implement server-side rendering (SSR) and static generation (SSG) patterns.",
      "Construct GraphQL queries and handle optimistic UI updates.",
      "Implement automated Lighthouse SEO and performance audit testing."
    ],
    requirements: [
      "Experience with Next.js or React framework architectures.",
      "Good grasp of web performance metrics, asset optimization, and SEO best practices.",
      "Portfolio of deployed personal or open-source web projects."
    ],
    perks: ["Competitive stipend", "Remote hardware allowance", "Fast-track interview for full-time"]
  },

  // --- Data Science ---
  {
    id: "data-01",
    title: "Data Science & Analytics Intern",
    company: "DataVibe Analytics",
    domain: "Data Science",
    domainKey: "data",
    location: "Chicago, IL (Remote)",
    workType: "Remote",
    stipend: "$1,750/month",
    stipendAmount: 1750,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 1,
    deadline: "May 18, 2025",
    logoBg: "linear-gradient(135deg, #7c3aed, #a855f7)",
    logoInitial: "DV",
    tags: ["Python", "Pandas", "SQL", "Tableau"],
    description: "Extract actionable insights from multi-terabyte datasets to influence strategic product roadmaps and customer growth decisions.",
    responsibilities: [
      "Perform exploratory data analysis (EDA) and synthesize business metric insights.",
      "Construct robust SQL data pipelines, ETL schemas, and transformation jobs.",
      "Design interactive executive dashboards and KPI summaries using Tableau and Plotly."
    ],
    requirements: [
      "Strong proficiency in Python (Pandas, NumPy, Matplotlib/Seaborn) and SQL.",
      "Solid grounding in descriptive statistics, hypothesis testing, and regression analysis.",
      "Demonstrated ability to convey data findings to both technical and non-technical stakeholders."
    ],
    perks: ["Real-world petabyte-scale data exposure", "Dedicated mentor", "Publication support"]
  },
  {
    id: "data-02",
    title: "Quantitative Research Intern",
    company: "Apex Capital Labs",
    domain: "Data Science",
    domainKey: "data",
    location: "New York, NY (On-Site)",
    workType: "On-Site",
    stipend: "$2,400/month",
    stipendAmount: 2400,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 4,
    deadline: "May 25, 2025",
    logoBg: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
    logoInitial: "AC",
    tags: ["Python", "Time Series", "NumPy", "Statistics"],
    description: "Apply advanced mathematical modeling and time-series forecasting techniques to financial and alternative market datasets.",
    responsibilities: [
      "Backtest algorithmic trading signals and statistical arbitrage models.",
      "Cleanse, normalize, and analyze high-frequency market tick data.",
      "Present research findings during weekly quantitative review roundtables."
    ],
    requirements: [
      "Background in Mathematics, Statistics, Quantitative Finance, or Computer Science.",
      "High proficiency in vectorized scientific computing with NumPy and Scipy.",
      "Familiarity with stochastic calculus or time-series modeling (ARIMA, GARCH)."
    ],
    perks: ["Highest tier stipend", "Downtown Manhattan office perks", "Direct interaction with partners"]
  },
  {
    id: "data-03",
    title: "Predictive Analytics & BI Intern",
    company: "HealthMatrix Data",
    domain: "Data Science",
    domainKey: "data",
    location: "Boston, MA (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,600/month",
    stipendAmount: 1600,
    duration: "6 Months",
    durationMonths: 6,
    postedDaysAgo: 6,
    deadline: "June 05, 2025",
    logoBg: "linear-gradient(135deg, #5b21b6, #c084fc)",
    logoInitial: "HM",
    tags: ["R", "Python", "PowerBI", "Healthcare Data"],
    description: "Help clinical health organizations make data-driven decisions by analyzing patient outcomes, clinical trial trends, and resource loads.",
    responsibilities: [
      "Process and anonymize healthcare registry data following HIPAA regulations.",
      "Build predictive models for patient stay duration and equipment allocation.",
      "Generate automated clinical reporting summaries for healthcare directors."
    ],
    requirements: [
      "Knowledge of Python or R for statistical programming.",
      "Familiarity with relational data modeling, joins, and aggregating large tables.",
      "Strong interest in healthcare technology and bio-statistical analysis."
    ],
    perks: ["Impactful healthcare mission", "Flexible hybrid schedule", "Tuition assistance grant"]
  },
  {
    id: "data-04",
    title: "Analytics Engineer Intern",
    company: "InsightFlow Technologies",
    domain: "Data Science",
    domainKey: "data",
    location: "Seattle, WA (Remote)",
    workType: "Remote",
    stipend: "$1,850/month",
    stipendAmount: 1850,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 2,
    deadline: "May 28, 2025",
    logoBg: "linear-gradient(135deg, #4c1d95, #9333ea)",
    logoInitial: "IF",
    tags: ["dbt", "Snowflake", "SQL", "Airflow"],
    description: "Bridge the gap between raw data engineering and business analytics by developing modular data transformation models with dbt and Snowflake.",
    responsibilities: [
      "Author version-controlled dbt models and documentation for cross-functional teams.",
      "Orchestrate batch ETL pipelines with Apache Airflow.",
      "Implement data testing suites to enforce schema validity and prevent regression."
    ],
    requirements: [
      "Expertise in modern SQL (CTEs, Window Functions, Partitioning).",
      "Familiarity with cloud data warehouses like Snowflake, BigQuery, or Redshift.",
      "Basic scripting knowledge in Python for automation tasks."
    ],
    perks: ["Modern Data Stack hands-on", "Remote stipends", "Conference pass"]
  },


  {
    id: "ai-01",
    title: "Generative AI & LLM Engineering Intern",
    company: "NeuralCore AI",
    domain: "AI/ML",
    domainKey: "ai",
    location: "San Francisco, CA (Remote)",
    workType: "Remote",
    stipend: "$2,200/month",
    stipendAmount: 2200,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 1,
    deadline: "May 12, 2025",
    logoBg: "linear-gradient(135deg, #4338ca, #6366f1)",
    logoInitial: "NC",
    tags: ["PyTorch", "LLMs", "LangChain", "Vector DBs"],
    description: "Work on cutting-edge Retrieval-Augmented Generation (RAG) pipelines, model fine-tuning (LoRA/PEFT), and enterprise AI agent orchestration.",
    responsibilities: [
      "Evaluate and benchmark open-source Foundation models (Llama 3, Mistral).",
      "Build context-aware RAG architectures integrating vector databases (Pinecone, Qdrant).",
      "Fine-tune smaller domain-specific models using LoRA and quantized weights.",
      "Build safety guardrails and evaluation metrics for hallucination reduction."
    ],
    requirements: [
      "Solid proficiency in Python, PyTorch, Hugging Face Transformers, and LangChain.",
      "Understanding of Transformer architectures, attention mechanisms, and embeddings.",
      "Prior project showcasing LLM application building or academic paper exploration."
    ],
    perks: ["Cloud GPU compute budget (H100/A100 clusters)", "Direct co-authorship on tech papers", "Top-tier stipend"]
  },
  {
    id: "ai-02",
    title: "Computer Vision Research Intern",
    company: "VisionMatrix Systems",
    domain: "AI/ML",
    domainKey: "ai",
    location: "San Jose, CA (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,900/month",
    stipendAmount: 1900,
    duration: "6 Months",
    durationMonths: 6,
    postedDaysAgo: 4,
    deadline: "May 20, 2025",
    logoBg: "linear-gradient(135deg, #3730a3, #4f46e5)",
    logoInitial: "VM",
    tags: ["OpenCV", "PyTorch", "YOLO", "CNNs"],
    description: "Develop real-time object detection, image segmentation, and edge-inferencing models for autonomous robotics and smart cameras.",
    responsibilities: [
      "Train and optimize convolutional neural networks and Vision Transformers.",
      "Conduct data augmentation, synthetic dataset generation, and annotation validation.",
      "Convert models to TensorRT and ONNX formats for edge-device acceleration."
    ],
    requirements: [
      "Solid experience with Python, OpenCV, and deep learning frameworks (PyTorch).",
      "Knowledge of object detection frameworks (YOLOv8, Faster R-CNN, Segment Anything).",
      "Understanding of linear algebra, matrix operations, and optimization techniques."
    ],
    perks: ["Cutting-edge hardware lab access", "Patenting incentives", "Hybrid flexibility"]
  },
  {
    id: "ai-03",
    title: "Machine Learning & MLOps Intern",
    company: "TensorStack Technologies",
    domain: "AI/ML",
    domainKey: "ai",
    location: "Austin, TX (Remote)",
    workType: "Remote",
    stipend: "$1,750/month",
    stipendAmount: 1750,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 5,
    deadline: "June 02, 2025",
    logoBg: "linear-gradient(135deg, #312e81, #6366f1)",
    logoInitial: "TS",
    tags: ["MLflow", "Kubernetes", "Docker", "Python"],
    description: "Help deploy, monitor, and scale machine learning models in production using automated CI/CD pipelines, feature stores, and drift monitoring.",
    responsibilities: [
      "Package ML inference services into containerized microservices.",
      "Configure model experiment tracking and artifact registry with MLflow.",
      "Monitor production prediction latency and detect concept/data drift."
    ],
    requirements: [
      "Python scripting along with Docker container fundamentals.",
      "Familiarity with standard Scikit-Learn workflows and deployment techniques.",
      "Excitement to bridge the gap between Data Science and Cloud Infrastructure."
    ],
    perks: ["DevOps & MLOps mentorship", "Home workstation budget", "PPO consideration"]
  },
  {
    id: "ai-04",
    title: "NLP & Conversational AI Intern",
    company: "OmniVoice Labs",
    domain: "AI/ML",
    domainKey: "ai",
    location: "Toronto, Canada (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,600/month",
    stipendAmount: 1600,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 3,
    deadline: "May 29, 2025",
    logoBg: "linear-gradient(135deg, #4338ca, #818cf8)",
    logoInitial: "OV",
    tags: ["NLP", "NLTK", "Speech AI", "Python"],
    description: "Train conversational dialogue models, speech-to-text classifiers, and sentiment analysis tools for multi-lingual customer support bots.",
    responsibilities: [
      "Preprocess multi-language conversational text corpora.",
      "Train sentiment and intent classification models with high precision.",
      "Collaborate on speech recognition transcription benchmarking."
    ],
    requirements: [
      "Experience with Natural Language Processing libraries (Spacy, HuggingFace, NLTK).",
      "Python programming competence and mathematical mindset.",
      "Interest in phonetic alignment, voice interfaces, or text summarization."
    ],
    perks: ["International project exposure", "Comprehensive healthcare package", "Flexible PTO"]
  },


  {
    id: "ui-01",
    title: "Product Design Intern (UI/UX)",
    company: "PixelCraft Studio",
    domain: "UI/UX",
    domainKey: "ui",
    location: "New York, NY (Remote)",
    workType: "Remote",
    stipend: "$1,500/month",
    stipendAmount: 1500,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 2,
    deadline: "May 19, 2025",
    logoBg: "linear-gradient(135deg, #be185d, #ec4899)",
    logoInitial: "PC",
    tags: ["Figma", "User Research", "Prototyping", "Wireframing"],
    description: "Create sleek user interfaces, conduct user journey mapping, and build interactive high-fidelity clickable prototypes in Figma.",
    responsibilities: [
      "Craft high-fidelity wireframes, UI components, and mockups in Figma.",
      "Conduct user testing interviews and distill qualitative feedback into iterations.",
      "Collaborate tightly with frontend developers during handoff to ensure fidelity."
    ],
    requirements: [
      "Strong portfolio demonstrating user-centered design processes and visual craft.",
      "Deep familiarity with Figma (auto-layout, components, variables, tokens).",
      "Understanding of interaction design principles, visual hierarchy, and accessibility."
    ],
    perks: ["Figma professional license covered", "Design critiquing with industry veterans", "Portfolio polish workshop"]
  },
  {
    id: "ui-02",
    title: "Design Systems & Interaction Intern",
    company: "CraftUI Labs",
    domain: "UI/UX",
    domainKey: "ui",
    location: "Los Angeles, CA (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,450/month",
    stipendAmount: 1450,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 4,
    deadline: "May 26, 2025",
    logoBg: "linear-gradient(135deg, #db2777, #f472b6)",
    logoInitial: "CU",
    tags: ["Design Systems", "Figma", "Tokens", "Micro-interactions"],
    description: "Help build and maintain an enterprise design system token library used by over 80+ designers and developers across the enterprise.",
    responsibilities: [
      "Audit existing component variants for consistency and WCAG AAA compliance.",
      "Document component usage guidelines, states, and responsive behavior.",
      "Design subtle micro-interactions and motion curves in Principle / ProtoPie."
    ],
    requirements: [
      "Passion for typography, spacing scales, atomic design, and color accessibility.",
      "Knowledge of how design tokens translate into CSS variables and UI libraries.",
      "Exceptional eye for detail and consistency."
    ],
    perks: ["Access to top-tier design conferences", "Mentorship from Principal Designer", "Remote equipment budget"]
  },
  {
    id: "ui-03",
    title: "Mobile App UX Research Intern",
    company: "Aura Mobile Systems",
    domain: "UI/UX",
    domainKey: "ui",
    location: "Denver, CO (Remote)",
    workType: "Remote",
    stipend: "$1,400/month",
    stipendAmount: 1400,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 6,
    deadline: "June 04, 2025",
    logoBg: "linear-gradient(135deg, #9d174d, #f43f5e)",
    logoInitial: "AM",
    tags: ["UX Research", "Usability Testing", "Personas", "Figma"],
    description: "Uncover user behavior and mobile friction points through moderated usability testing, card sorting, and competitive benchmarks.",
    responsibilities: [
      "Plan and moderate user interviews for iOS and Android application beta testers.",
      "Synthesize feedback into user journey maps, empathy maps, and feature matrices.",
      "Partner with product managers to validate hypotheses prior to sprint kickoff."
    ],
    requirements: [
      "Demonstrated experience in qualitative and quantitative UX research methodologies.",
      "Excellent active listening and communication skills.",
      "Familiarity with remote testing tools (Maze, UserTesting, Dovetail)."
    ],
    perks: ["Direct product impact", "Flexible schedule", "Letter of recommendation"]
  },
  {
    id: "ui-04",
    title: "UI Designer & Visual Brand Intern",
    company: "Studio Lumina",
    domain: "UI/UX",
    domainKey: "ui",
    location: "London, UK (Remote)",
    workType: "Remote",
    stipend: "$1,600/month",
    stipendAmount: 1600,
    duration: "5 Months",
    durationMonths: 5,
    postedDaysAgo: 3,
    deadline: "May 31, 2025",
    logoBg: "linear-gradient(135deg, #831843, #f472b6)",
    logoInitial: "SL",
    tags: ["Visual UI", "Illustration", "Iconography", "Branding"],
    description: "Design memorable landing page layouts, marketing visuals, custom icon sets, and vector illustrations for tech brands.",
    responsibilities: [
      "Create high-conversion marketing page designs and product showcase graphics.",
      "Design bespoke vector iconography sets in SVG format.",
      "Collaborate with web engineers to ensure SVG responsiveness and asset delivery."
    ],
    requirements: [
      "Impressive portfolio showcasing layout, typography, and illustration skills.",
      "Proficient in Figma, Adobe Illustrator, or complementary design tools.",
      "Understanding of modern web design trends (bento grids, glassmorphism, minimalism)."
    ],
    perks: ["International client exposure", "Software licenses provided", "Flexible hours"]
  },


  {
    id: "cyber-01",
    title: "Security Operations Center (SOC) Intern",
    company: "CyberShield Defense",
    domain: "Cybersecurity",
    domainKey: "cyber",
    location: "Washington, DC (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,900/month",
    stipendAmount: 1900,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 1,
    deadline: "May 14, 2025",
    logoBg: "linear-gradient(135deg, #059669, #10b981)",
    logoInitial: "CD",
    tags: ["SIEM", "Splunk", "Incident Response", "Network Security"],
    description: "Monitor real-time security alerts, investigate anomalous network behavior, and assist senior analysts in triage and mitigation.",
    responsibilities: [
      "Triage security alerts generated by SIEM (Splunk, Elastic Security) tools.",
      "Analyze malicious email phishing attempts and payload sandboxing logs.",
      "Document incident response tickets and contribute to mitigation playbooks."
    ],
    requirements: [
      "Basic understanding of TCP/IP, OSI model, firewalls, DNS, and HTTP protocols.",
      "Familiarity with common cyber threats (Malware, Phishing, Ransomware, DDoS).",
      "Pursuing relevant certifications (CompTIA Security+, Network+, or CEH) or CS degree."
    ],
    perks: ["Security+ exam voucher covered", "Live SOC lab simulations", "Clear conversion path"]
  },
  {
    id: "cyber-02",
    title: "Application Security & Pentesting Intern",
    company: "BreachForge Labs",
    domain: "Cybersecurity",
    domainKey: "cyber",
    location: "Dallas, TX (Remote)",
    workType: "Remote",
    stipend: "$2,100/month",
    stipendAmount: 2100,
    duration: "4 Months",
    durationMonths: 4,
    postedDaysAgo: 2,
    deadline: "May 24, 2025",
    logoBg: "linear-gradient(135deg, #047857, #34d399)",
    logoInitial: "BF",
    tags: ["OWASP Top 10", "Burp Suite", "AppSec", "Python"],
    description: "Conduct vulnerability assessments on web applications and APIs, identify security loopholes, and write remediation reports.",
    responsibilities: [
      "Audit web applications against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF).",
      "Perform automated and manual web vulnerability scans using Burp Suite Pro.",
      "Write concise proof-of-concept reports and assist developer remediation."
    ],
    requirements: [
      "Hands-on experience with Burp Suite, Wireshark, or Kali Linux tools.",
      "Experience solving CTF challenges (TryHackMe, HackTheBox) is a big plus.",
      "Working knowledge of Web protocols and source code vulnerability reviews."
    ],
    perks: ["Competitive stipend", "HTB VIP subscription provided", "1-on-1 hacker mentorship"]
  },
  {
    id: "cyber-03",
    title: "Cloud Security & DevSecOps Intern",
    company: "Sentinel Cloud Systems",
    domain: "Cybersecurity",
    domainKey: "cyber",
    location: "Seattle, WA (Remote)",
    workType: "Remote",
    stipend: "$2,000/month",
    stipendAmount: 2000,
    duration: "3 Months",
    durationMonths: 3,
    postedDaysAgo: 4,
    deadline: "June 02, 2025",
    logoBg: "linear-gradient(135deg, #065f46, #059669)",
    logoInitial: "SC",
    tags: ["AWS Security", "Terraform", "IAM", "Trivy"],
    description: "Automate security scanning inside CI/CD pipelines and ensure Infrastructure as Code (IaC) complies with cloud security benchmarks.",
    responsibilities: [
      "Integrate static vulnerability scanners (Trivy, Snyk) into GitHub Actions.",
      "Audit AWS IAM policies to enforce the Principle of Least Privilege.",
      "Scan Terraform and Kubernetes manifests for misconfigurations."
    ],
    requirements: [
      "Foundational understanding of Cloud providers (AWS, Azure, or GCP).",
      "Knowledge of Git, CI/CD pipelines, and basic Linux command-line tools.",
      "Eagerness to build secure, automated developer environments."
    ],
    perks: ["AWS Certified Security prep support", "Remote setup budget", "High stipend"]
  },
  {
    id: "cyber-04",
    title: "Threat Intelligence & Forensics Intern",
    company: "SecureSphere Global",
    domain: "Cybersecurity",
    domainKey: "cyber",
    location: "Atlanta, GA (Hybrid)",
    workType: "Hybrid",
    stipend: "$1,700/month",
    stipendAmount: 1700,
    duration: "6 Months",
    durationMonths: 6,
    postedDaysAgo: 7,
    deadline: "May 27, 2025",
    logoBg: "linear-gradient(135deg, #064e3b, #10b981)",
    logoInitial: "SG",
    tags: ["OSINT", "YARA", "MITRE ATT&CK", "Forensics"],
    description: "Track advanced persistent threat (APT) actor campaigns, map tactical indicators to MITRE ATT&CK, and parse memory forensics artifacts.",
    responsibilities: [
      "Track and report on emerging ransomware indicators of compromise (IoCs).",
      "Write YARA rules for custom malware family detection.",
      "Assist forensic examiners in analyzing disk and memory dumps."
    ],
    requirements: [
      "Familiarity with the MITRE ATT&CK framework and Cyber Kill Chain.",
      "Knowledge of Python or Bash for OSINT data scraping and automation.",
      "High ethical standards and curiosity about defensive cybersecurity."
    ],
    perks: ["Industry intelligence briefings", "Hybrid work flexibility", "Networking events"]
  }
];


const AppState = {
  allInternships: [],
  filteredInternships: [],
  bookmarks: new Set(),
  appliedIds: new Set(),
  isLoading: false,
  isError: false,
  simulateErrorNext: false,


  filters: {
    search: "",
    domain: "all",
    workType: "all",
    sortBy: "newest",
    onlyBookmarked: false
  }
};


const API_CONFIG = {
  // Use relative path if loaded on port 5000, otherwise target http://localhost:5000
  BASE_URL: window.API_BASE_URL || (window.location.port === "5000" ? "" : "http://localhost:5000")
};

const DOM = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
  bookmarkedFilterBtn: document.getElementById("bookmarked-filter-btn"),
  bookmarkBadge: document.getElementById("bookmark-badge"),
  activeJobsCount: document.getElementById("active-jobs-count"),
  toggleErrorBtn: document.getElementById("toggle-simulated-error-btn"),

  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  domainFilters: document.getElementById("domain-filters"),
  domainTabs: document.querySelectorAll(".domain-tab"),
  workTypeFilter: document.getElementById("work-type-filter"),
  sortBySelect: document.getElementById("sort-by-select"),
  resultsCount: document.getElementById("results-count"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  activeChipsContainer: document.getElementById("active-chips-container"),
  chipsList: document.getElementById("chips-list"),

  countAll: document.getElementById("count-all"),
  countWeb: document.getElementById("count-web"),
  countData: document.getElementById("count-data"),
  countAi: document.getElementById("count-ai"),
  countUi: document.getElementById("count-ui"),
  countCyber: document.getElementById("count-cyber"),

  skeletonLoader: document.getElementById("skeleton-loader"),
  internshipsGrid: document.getElementById("internships-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),
  errorState: document.getElementById("error-state"),
  errorMessage: document.getElementById("error-message"),
  retryBtn: document.getElementById("retry-btn"),

  modal: document.getElementById("internship-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalCancelBtn: document.getElementById("modal-cancel-btn"),
  modalCompanyLogo: document.getElementById("modal-company-logo"),
  modalTitle: document.getElementById("modal-title"),
  modalCompanyName: document.getElementById("modal-company-name"),
  modalDomain: document.getElementById("modal-domain"),
  modalLocation: document.getElementById("modal-location"),
  modalStipend: document.getElementById("modal-stipend"),
  modalDuration: document.getElementById("modal-duration"),
  modalDescription: document.getElementById("modal-description"),
  modalResponsibilities: document.getElementById("modal-responsibilities"),
  modalRequirements: document.getElementById("modal-requirements"),
  modalTags: document.getElementById("modal-tags"),
  quickApplyForm: document.getElementById("quick-apply-form"),
  submitAppBtn: document.getElementById("submit-application-btn"),
  submitSpinner: document.getElementById("submit-spinner"),
  submitBtnText: document.getElementById("submit-btn-text"),
  applicantInternshipId: document.getElementById("applicant-internship-id"),
  applyingIdDisplay: document.getElementById("applying-internship-id-display"),
  formStatusAlert: document.getElementById("form-status-alert"),

  toastContainer: document.getElementById("toast-container"),

  footerDomainBtns: document.querySelectorAll("[data-footer-domain]")
};


const Storage = {
  BOOKMARKS_KEY: "internpulse_bookmarks_v1",
  THEME_KEY: "internpulse_theme_v1",
  APPLIED_KEY: "internpulse_applied_v1",

  loadBookmarks() {
    try {
      const saved = localStorage.getItem(this.BOOKMARKS_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.warn("Could not read bookmarks from localStorage", e);
      return new Set();
    }
  },

  saveBookmarks(bookmarksSet) {
    try {
      localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify([...bookmarksSet]));
    } catch (e) {
      console.warn("Could not save bookmarks to localStorage", e);
    }
  },

  loadTheme() {
    try {
      const saved = localStorage.getItem(this.THEME_KEY);
      if (saved) return saved;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  },

  saveTheme(theme) {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
      console.warn("Could not save theme to localStorage", e);
    }
  },

  loadApplied() {
    try {
      const saved = localStorage.getItem(this.APPLIED_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  },

  saveApplied(appliedSet) {
    try {
      localStorage.setItem(this.APPLIED_KEY, JSON.stringify([...appliedSet]));
    } catch (e) {
      console.warn("Could not save applications to localStorage", e);
    }
  }
};


function showToast(message, type = "info", duration = 3500) {
  if (!DOM.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `${iconSvg}<span>${escapeHtml(message)}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hiding");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, duration);
}


function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}


/**
 * Normalize raw backend internship record to client board schema
 */
function normalizeInternshipRecord(job) {
  const domainText = (job.domain || "").toLowerCase();
  let domainKey = "web";
  if (domainText.includes("data")) domainKey = "data";
  else if (domainText.includes("ai") || domainText.includes("intelligence") || domainText.includes("learning")) domainKey = "ai";
  else if (domainText.includes("design") || domainText.includes("ui") || domainText.includes("ux")) domainKey = "ui";
  else if (domainText.includes("cyber") || domainText.includes("security")) domainKey = "cyber";
  else if (domainText.includes("web") || domainText.includes("frontend") || domainText.includes("backend")) domainKey = "web";

  // Parse skills into array of tags
  let tags = [];
  if (Array.isArray(job.tags) && job.tags.length > 0) {
    tags = job.tags;
  } else if (typeof job.skills === "string" && job.skills.trim()) {
    tags = job.skills.split(",").map((s) => s.trim()).filter(Boolean);
  } else {
    tags = ["Engineering", "Technology"];
  }

  // Generate initials & palette gradient
  const company = job.company || "Company";
  const initials = company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || "IP";

  const palette = [
    "linear-gradient(135deg, #2563eb, #38bdf8)",
    "linear-gradient(135deg, #7c3aed, #a855f7)",
    "linear-gradient(135deg, #4f46e5, #818cf8)",
    "linear-gradient(135deg, #059669, #34d399)",
    "linear-gradient(135deg, #db2777, #f472b6)",
    "linear-gradient(135deg, #d97706, #fbbf24)"
  ];
  const charCodeSum = company.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const logoBg = job.logoBg || palette[charCodeSum % palette.length];

  const stipendNum = Number(job.stipend) || 0;
  let formattedStipend = "Stipend Provided";
  if (job.stipend !== undefined && job.stipend !== null) {
    if (stipendNum > 0) {
      formattedStipend = stipendNum >= 5000
        ? `₹${stipendNum.toLocaleString("en-IN")}/mo`
        : `$${stipendNum.toLocaleString("en-US")}/mo`;
    } else {
      formattedStipend = String(job.stipend);
    }
  }

  const durationText = job.duration || "3 Months";
  const durationNum = parseInt(durationText, 10) || 3;

  // Responsibilities
  const responsibilities = Array.isArray(job.responsibilities) && job.responsibilities.length > 0
    ? job.responsibilities
    : [
        `Collaborate closely with core engineering and product teams at ${company}.`,
        `Apply ${tags.slice(0, 3).join(", ")} best practices in production workflows.`,
        `Participate in code reviews, daily standups, and architectural design discussions.`,
        `Deliver maintainable, well-documented code with comprehensive test coverage.`
      ];

  // Requirements
  const requirements = Array.isArray(job.requirements) && job.requirements.length > 0
    ? job.requirements
    : [
        `Demonstrated interest and hands-on projects in ${job.domain || 'Software Development'}.`,
        `Proficiency or foundational knowledge in ${tags.join(", ")}.`,
        `Strong problem-solving mindset and drive to learn new technologies quickly.`,
        `Clear written and verbal communication skills.`
      ];

  const workType = job.workType || job.type || "Remote";

  return {
    id: job.id,
    title: job.title || "Software Engineering Intern",
    company,
    domain: job.domain || "Web Development",
    domainKey,
    location: job.location || "Remote",
    workType,
    stipend: formattedStipend,
    stipendAmount: stipendNum,
    duration: durationText,
    durationMonths: durationNum,
    postedDaysAgo: job.postedDaysAgo || 2,
    deadline: job.deadline || "Open until filled",
    logoBg,
    logoInitial: job.logoInitial || initials,
    tags,
    description: job.description || "Exciting internship opportunity in an active engineering environment.",
    responsibilities,
    requirements
  };
}

async function fetchInternships(simulateError = false) {
  AppState.isLoading = true;
  AppState.isError = false;
  renderUiState();

  if (simulateError) {
    setTimeout(() => {
      AppState.isLoading = false;
      AppState.isError = true;
      if (DOM.errorMessage) {
        DOM.errorMessage.textContent = "Simulated network failure (503 Service Unavailable). Click 'Retry Now' to reconnect to the live API.";
      }
      renderUiState();
      showToast("Simulated network failure triggered", "error");
    }, 350);
    return;
  }

  try {
    const endpoint = `${API_CONFIG.BASE_URL}/api/internships?limit=100`;
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status} (${response.statusText || 'Error'})`);
    }

    const result = await response.json();
    if (!result.success || !Array.isArray(result.data)) {
      throw new Error("Invalid response format received from REST API.");
    }

    const normalizedRecords = result.data.map(normalizeInternshipRecord);

    AppState.allInternships = normalizedRecords;
    AppState.isLoading = false;
    AppState.isError = false;

    if (DOM.activeJobsCount) {
      DOM.activeJobsCount.textContent = `${AppState.allInternships.length} Active Openings`;
    }

    updateDomainCounts();
    applyFilters();
    renderUiState();
  } catch (error) {
    console.warn("API request failed:", error.message);
    AppState.isLoading = false;
    AppState.isError = true;
    if (DOM.errorMessage) {
      DOM.errorMessage.textContent = `Failed to connect to REST API (${error.message}). Please make sure the backend server is running on ${API_CONFIG.BASE_URL} and click 'Retry Now'.`;
    }
    renderUiState();
    showToast(`Failed to load internships: ${error.message}`, "error");
  }
}

function applyFilters() {
  if (AppState.isError || AppState.isLoading) return;

  const { search, domain, workType, sortBy, onlyBookmarked } = AppState.filters;
  const query = search.trim().toLowerCase();

  let results = AppState.allInternships.filter((job) => {

    if (query) {
      const matchTitle = job.title.toLowerCase().includes(query);
      const matchCompany = job.company.toLowerCase().includes(query);
      const matchLocation = job.location.toLowerCase().includes(query);
      const matchDesc = job.description.toLowerCase().includes(query);
      const matchTags = job.tags.some((tag) => tag.toLowerCase().includes(query));

      if (!matchTitle && !matchCompany && !matchLocation && !matchDesc && !matchTags) {
        return false;
      }
    }


    if (domain !== "all") {
      const cleanDomain = domain.toLowerCase().replace(/[^a-z]/g, "");
      const cleanJobDomain = job.domain.toLowerCase().replace(/[^a-z]/g, "");
      if (cleanDomain !== cleanJobDomain) {
        return false;
      }
    }


    if (workType !== "all" && job.workType !== workType) {
      return false;
    }


    if (onlyBookmarked && !AppState.bookmarks.has(job.id)) {
      return false;
    }

    return true;
  });


  results.sort((a, b) => {
    switch (sortBy) {
      case "stipend-high":
        return b.stipendAmount - a.stipendAmount;
      case "stipend-low":
        return a.stipendAmount - b.stipendAmount;
      case "company-az":
        return a.company.localeCompare(b.company);
      case "duration":
        return a.durationMonths - b.durationMonths;
      case "newest":
      default:
        return a.postedDaysAgo - b.postedDaysAgo;
    }
  });

  AppState.filteredInternships = results;
  renderCards(results);
  renderActiveChips();
  updateResultsCount(results.length);
  renderUiState();
}

function updateDomainCounts() {
  const all = AppState.allInternships.length;
  const web = AppState.allInternships.filter((j) => j.domainKey === "web").length;
  const data = AppState.allInternships.filter((j) => j.domainKey === "data").length;
  const ai = AppState.allInternships.filter((j) => j.domainKey === "ai").length;
  const ui = AppState.allInternships.filter((j) => j.domainKey === "ui").length;
  const cyber = AppState.allInternships.filter((j) => j.domainKey === "cyber").length;

  if (DOM.countAll) DOM.countAll.textContent = all;
  if (DOM.countWeb) DOM.countWeb.textContent = web;
  if (DOM.countData) DOM.countData.textContent = data;
  if (DOM.countAi) DOM.countAi.textContent = ai;
  if (DOM.countUi) DOM.countUi.textContent = ui;
  if (DOM.countCyber) DOM.countCyber.textContent = cyber;
}

function updateResultsCount(count) {
  if (!DOM.resultsCount) return;

  if (AppState.isLoading) {
    DOM.resultsCount.textContent = "Loading opportunities...";
    return;
  }

  const { search, domain, workType, onlyBookmarked } = AppState.filters;
  const hasActiveFilters = search || domain !== "all" || workType !== "all" || onlyBookmarked;

  if (count === 1) {
    DOM.resultsCount.textContent = `Showing 1 internship`;
  } else {
    DOM.resultsCount.textContent = `Showing ${count} internships`;
  }


  if (DOM.resetFiltersBtn) {
    DOM.resetFiltersBtn.classList.toggle("hidden", !hasActiveFilters);
  }
}

function renderActiveChips() {
  if (!DOM.activeChipsContainer || !DOM.chipsList) return;

  const { search, domain, workType, onlyBookmarked } = AppState.filters;
  const chips = [];

  if (search.trim()) {
    chips.push({
      type: "search",
      label: `Search: "${search.trim()}"`
    });
  }

  if (domain !== "all") {
    chips.push({
      type: "domain",
      label: `Domain: ${domain}`
    });
  }

  if (workType !== "all") {
    chips.push({
      type: "workType",
      label: `Type: ${workType}`
    });
  }

  if (onlyBookmarked) {
    chips.push({
      type: "bookmark",
      label: `Saved Only`
    });
  }

  if (chips.length === 0) {
    DOM.activeChipsContainer.classList.add("hidden");
    DOM.chipsList.innerHTML = "";
    return;
  }

  DOM.activeChipsContainer.classList.remove("hidden");
  DOM.chipsList.innerHTML = chips
    .map(
      (chip) => `
    <span class="filter-chip">
      <span>${escapeHtml(chip.label)}</span>
      <button type="button" class="chip-remove-btn" data-chip-type="${chip.type}" aria-label="Remove ${escapeHtml(chip.label)} filter">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </span>
  `
    )
    .join("");


  DOM.chipsList.querySelectorAll(".chip-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.chipType;
      removeFilterByType(type);
    });
  });
}

function removeFilterByType(type) {
  if (type === "search") {
    AppState.filters.search = "";
    if (DOM.searchInput) DOM.searchInput.value = "";
    if (DOM.clearSearchBtn) DOM.clearSearchBtn.classList.add("hidden");
  } else if (type === "domain") {
    AppState.filters.domain = "all";
    updateActiveDomainTab("all");
  } else if (type === "workType") {
    AppState.filters.workType = "all";
    if (DOM.workTypeFilter) DOM.workTypeFilter.value = "all";
  } else if (type === "bookmark") {
    AppState.filters.onlyBookmarked = false;
    if (DOM.bookmarkedFilterBtn) {
      DOM.bookmarkedFilterBtn.setAttribute("aria-pressed", "false");
    }
  }
  applyFilters();
}

function resetAllFilters() {
  AppState.filters.search = "";
  AppState.filters.domain = "all";
  AppState.filters.workType = "all";
  AppState.filters.sortBy = "newest";
  AppState.filters.onlyBookmarked = false;

  if (DOM.searchInput) DOM.searchInput.value = "";
  if (DOM.clearSearchBtn) DOM.clearSearchBtn.classList.add("hidden");
  if (DOM.workTypeFilter) DOM.workTypeFilter.value = "all";
  if (DOM.sortBySelect) DOM.sortBySelect.value = "newest";
  if (DOM.bookmarkedFilterBtn) DOM.bookmarkedFilterBtn.setAttribute("aria-pressed", "false");

  updateActiveDomainTab("all");
  applyFilters();
  showToast("All filters have been reset", "info");
}

function updateActiveDomainTab(domain) {
  DOM.domainTabs.forEach((tab) => {
    const isSelected = tab.dataset.domain.toLowerCase() === domain.toLowerCase();
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", isSelected ? "true" : "false");
  });
}


function renderCards(internships) {
  if (!DOM.internshipsGrid) return;
  DOM.internshipsGrid.innerHTML = "";

  if (!internships || internships.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  internships.forEach((job) => {
    const isBookmarked = AppState.bookmarks.has(job.id);
    const isApplied = AppState.appliedIds.has(job.id);

    const card = document.createElement("article");
    card.className = "internship-card";
    card.dataset.id = job.id;
    card.setAttribute("aria-labelledby", `card-title-${job.id}`);


    const domainClass = `badge-${job.domainKey}`;


    const tagsHtml = job.tags
      .slice(0, 4)
      .map((tag) => `<span class="tech-pill">${escapeHtml(tag)}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-header">
        <div class="card-company-wrapper">
          <div class="company-logo" style="background: ${job.logoBg};" aria-hidden="true">
            ${escapeHtml(job.logoInitial)}
          </div>
          <div class="company-meta">
            <span class="company-name">${escapeHtml(job.company)}</span>
            <span class="posting-date">${job.postedDaysAgo === 1 ? "1 day ago" : `${job.postedDaysAgo} days ago`}</span>
          </div>
        </div>
        <button 
          type="button" 
          class="card-bookmark-btn" 
          data-id="${job.id}" 
          aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark this internship'}" 
          aria-pressed="${isBookmarked}"
          title="${isBookmarked ? 'Saved' : 'Save opportunity'}"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      <span class="card-domain-badge ${domainClass}">
        ${escapeHtml(job.domain)}
      </span>

      <h3 id="card-title-${job.id}" class="card-title">
        ${escapeHtml(job.title)}
      </h3>

      <p class="card-description">
        ${escapeHtml(job.description)}
      </p>

      <div class="card-meta-row" role="list" aria-label="Key internship details">
        <span class="meta-chip meta-stipend" role="listitem">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          ${escapeHtml(job.stipend)}
        </span>
        <span class="meta-chip" role="listitem">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${escapeHtml(job.duration)}
        </span>
        <span class="meta-chip" role="listitem">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${escapeHtml(job.location)}
        </span>
      </div>

      <div class="card-tags" aria-label="Required skills">
        ${tagsHtml}
      </div>

      <div class="card-actions">
        <button type="button" class="btn-details" data-id="${job.id}">
          View Details
        </button>
        <button 
          type="button" 
          class="btn-apply ${isApplied ? 'applied' : ''}" 
          data-id="${job.id}" 
          ${isApplied ? 'disabled aria-disabled="true"' : ''}
        >
          ${isApplied ? '✓ Applied' : 'Apply Now'}
        </button>
      </div>
    `;

    fragment.appendChild(card);
  });

  DOM.internshipsGrid.appendChild(fragment);
  attachCardListeners();
}

function attachCardListeners() {

  document.querySelectorAll(".card-bookmark-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const jobId = btn.dataset.id;
      toggleBookmark(jobId, btn);
    });
  });


  document.querySelectorAll(".btn-details").forEach((btn) => {
    btn.addEventListener("click", () => {
      const jobId = btn.dataset.id;
      openModal(jobId);
    });
  });


  document.querySelectorAll(".btn-apply").forEach((btn) => {
    btn.addEventListener("click", () => {
      const jobId = btn.dataset.id;
      if (!AppState.appliedIds.has(jobId)) {
        openModal(jobId, true);
      }
    });
  });
}

function toggleBookmark(jobId, btnElement) {
  const isCurrentlyBookmarked = AppState.bookmarks.has(jobId);
  const job = AppState.allInternships.find((j) => j.id === jobId);

  if (isCurrentlyBookmarked) {
    AppState.bookmarks.delete(jobId);
    showToast(`Removed "${job ? job.company : 'Job'}" from bookmarks`, "info");
  } else {
    AppState.bookmarks.add(jobId);
    showToast(`Saved "${job ? job.company : 'Job'}" to bookmarks`, "success");
  }

  Storage.saveBookmarks(AppState.bookmarks);
  updateBookmarkBadge();

  if (btnElement) {
    const isNowBookmarked = AppState.bookmarks.has(jobId);
    btnElement.setAttribute("aria-pressed", isNowBookmarked ? "true" : "false");
    btnElement.setAttribute("aria-label", isNowBookmarked ? "Remove bookmark" : "Bookmark this internship");
    btnElement.title = isNowBookmarked ? "Saved" : "Save opportunity";
    const svg = btnElement.querySelector("svg");
    if (svg) {
      svg.setAttribute("fill", isNowBookmarked ? "currentColor" : "none");
    }
  }


  if (AppState.filters.onlyBookmarked) {
    applyFilters();
  }
}

function updateBookmarkBadge() {
  const count = AppState.bookmarks.size;
  if (DOM.bookmarkBadge) {
    DOM.bookmarkBadge.textContent = count;
  }
}


function renderUiState() {
  if (AppState.isLoading) {

    DOM.skeletonLoader.classList.remove("hidden");
    DOM.internshipsGrid.classList.add("hidden");
    DOM.emptyState.classList.add("hidden");
    DOM.errorState.classList.add("hidden");
    return;
  }

  DOM.skeletonLoader.classList.add("hidden");

  if (AppState.isError) {

    DOM.errorState.classList.remove("hidden");
    DOM.internshipsGrid.classList.add("hidden");
    DOM.emptyState.classList.add("hidden");
    return;
  }

  DOM.errorState.classList.add("hidden");

  if (AppState.filteredInternships.length === 0) {

    DOM.emptyState.classList.remove("hidden");
    DOM.internshipsGrid.classList.add("hidden");
  } else {

    DOM.emptyState.classList.add("hidden");
    DOM.internshipsGrid.classList.remove("hidden");
  }
}


let lastFocusedElement = null;
let currentModalJobId = null;
let isSubmittingApplication = false;

function showFormAlert(message, type = "error") {
  if (!DOM.formStatusAlert) return;
  DOM.formStatusAlert.className = `form-status-alert alert-${type}`;
  DOM.formStatusAlert.textContent = message;
  DOM.formStatusAlert.classList.remove("hidden");
}

function hideFormAlert() {
  if (!DOM.formStatusAlert) return;
  DOM.formStatusAlert.className = "form-status-alert hidden";
  DOM.formStatusAlert.textContent = "";
}

function openModal(jobId, scrollToApply = false) {
  const job = AppState.allInternships.find((j) => String(j.id) === String(jobId));
  if (!job || !DOM.modal) return;

  currentModalJobId = jobId;
  lastFocusedElement = document.activeElement;

  DOM.modalTitle.textContent = job.title;
  DOM.modalCompanyName.textContent = job.company;
  DOM.modalCompanyLogo.style.background = job.logoBg;
  DOM.modalCompanyLogo.textContent = job.logoInitial;

  DOM.modalDomain.textContent = job.domain;
  DOM.modalLocation.textContent = job.location;
  DOM.modalStipend.textContent = job.stipend;
  DOM.modalDuration.textContent = job.duration;

  DOM.modalDescription.textContent = job.description;

  DOM.modalResponsibilities.innerHTML = job.responsibilities
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  DOM.modalRequirements.innerHTML = job.requirements
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  DOM.modalTags.innerHTML = job.tags
    .map((t) => `<span class="tech-pill">${escapeHtml(t)}</span>`)
    .join("");

  // Update hidden internship_id input and visible badge
  if (DOM.applicantInternshipId) {
    DOM.applicantInternshipId.value = jobId;
  }
  if (DOM.applyingIdDisplay) {
    DOM.applyingIdDisplay.textContent = `#${jobId}`;
  }

  // Clear previous alerts and errors
  hideFormAlert();
  resetFormErrors();

  const isApplied = AppState.appliedIds.has(String(jobId)) || AppState.appliedIds.has(Number(jobId));
  const applyBtn = DOM.submitAppBtn;
  if (applyBtn) {
    if (isApplied) {
      applyBtn.disabled = true;
      if (DOM.submitSpinner) DOM.submitSpinner.classList.add("hidden");
      if (DOM.submitBtnText) DOM.submitBtnText.textContent = "✓ Already Applied";
      applyBtn.classList.add("applied");
    } else {
      applyBtn.disabled = false;
      if (DOM.submitSpinner) DOM.submitSpinner.classList.add("hidden");
      if (DOM.submitBtnText) DOM.submitBtnText.textContent = "Submit Application";
      applyBtn.classList.remove("applied");
    }
  }

  if (typeof DOM.modal.showModal === "function") {
    DOM.modal.showModal();
  } else {
    DOM.modal.setAttribute("open", "");
  }

  if (scrollToApply) {
    const applySection = document.getElementById("apply-section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("applicant-name");
      if (nameInput) setTimeout(() => nameInput.focus(), 300);
    }
  } else {
    DOM.modalCloseBtn.focus();
  }
}

function closeModal() {
  if (!DOM.modal) return;

  hideFormAlert();
  resetFormErrors();

  if (typeof DOM.modal.close === "function") {
    DOM.modal.close();
  } else {
    DOM.modal.removeAttribute("open");
  }

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function resetFormErrors() {
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("has-error");
  });
}

async function handleApplicationSubmit(e) {
  e.preventDefault();
  if (!currentModalJobId) return;

  // Prevent duplicate submissions while in-flight
  if (isSubmittingApplication) return;

  const nameInput = document.getElementById("applicant-name");
  const emailInput = document.getElementById("applicant-email");
  const phoneInput = document.getElementById("applicant-phone");
  const resumeInput = document.getElementById("applicant-resume");
  const coverInput = document.getElementById("applicant-cover-message");

  resetFormErrors();
  hideFormAlert();

  let hasErrors = false;
  let firstErrorElem = null;

  // 1. Full Name Validation
  const fullName = nameInput ? nameInput.value.trim() : "";
  if (!fullName || fullName.length < 2) {
    const group = document.getElementById("group-name");
    if (group) group.classList.add("has-error");
    hasErrors = true;
    if (!firstErrorElem) firstErrorElem = nameInput;
  }

  // 2. Email Validation
  const email = emailInput ? emailInput.value.trim() : "";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailPattern.test(email)) {
    const group = document.getElementById("group-email");
    if (group) group.classList.add("has-error");
    hasErrors = true;
    if (!firstErrorElem) firstErrorElem = emailInput;
  }

  // 3. Phone Validation
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");
  const phonePattern = /^\+?[0-9\s\-().]{7,25}$/;
  if (!phone || !phonePattern.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    const group = document.getElementById("group-phone");
    if (group) group.classList.add("has-error");
    hasErrors = true;
    if (!firstErrorElem) firstErrorElem = phoneInput;
  }

  // 4. Resume URL Validation
  const resumeUrl = resumeInput ? resumeInput.value.trim() : "";
  let isUrlValid = false;
  try {
    const parsedUrl = new URL(resumeUrl);
    isUrlValid = parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    isUrlValid = false;
  }
  if (!resumeUrl || !isUrlValid) {
    const group = document.getElementById("group-resume");
    if (group) group.classList.add("has-error");
    hasErrors = true;
    if (!firstErrorElem) firstErrorElem = resumeInput;
  }

  // 5. Cover Message Validation (optional max 3000)
  const coverMessage = coverInput ? coverInput.value.trim() : "";
  if (coverMessage && coverMessage.length > 3000) {
    const group = document.getElementById("group-cover");
    if (group) group.classList.add("has-error");
    hasErrors = true;
    if (!firstErrorElem) firstErrorElem = coverInput;
  }

  if (hasErrors) {
    showFormAlert("Please correct the highlighted fields before submitting.", "error");
    if (firstErrorElem) firstErrorElem.focus();
    return;
  }

  // Lock submission state
  isSubmittingApplication = true;
  if (DOM.submitAppBtn) {
    DOM.submitAppBtn.disabled = true;
  }
  if (DOM.submitSpinner) {
    DOM.submitSpinner.classList.remove("hidden");
  }
  if (DOM.submitBtnText) {
    DOM.submitBtnText.textContent = "Submitting Application...";
  }

  const payload = {
    internship_id: Number(currentModalJobId),
    full_name: fullName,
    email: email,
    phone: phone,
    resume_url: resumeUrl,
    cover_message: coverMessage
  };

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/api/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (response.status === 201 && result.success) {
      // Mark as applied
      AppState.appliedIds.add(String(currentModalJobId));
      Storage.saveApplied(AppState.appliedIds);

      // Success UI update
      if (DOM.submitSpinner) DOM.submitSpinner.classList.add("hidden");
      if (DOM.submitBtnText) DOM.submitBtnText.textContent = "✓ Application Submitted";
      if (DOM.submitAppBtn) {
        DOM.submitAppBtn.classList.add("applied");
        DOM.submitAppBtn.disabled = true;
      }

      showFormAlert(
        `🎉 Success! Your application has been submitted (ID #${result.data?.id}). We'll be in touch soon.`,
        "success"
      );
      showToast("Application submitted successfully!", "success", 4000);

      // Update card on board grid
      const cardApplyBtn = document.querySelector(
        `.internship-card[data-id="${currentModalJobId}"] .btn-apply`
      );
      if (cardApplyBtn) {
        cardApplyBtn.disabled = true;
        cardApplyBtn.setAttribute("aria-disabled", "true");
        cardApplyBtn.classList.add("applied");
        cardApplyBtn.textContent = "✓ Applied";
      }

      // Clear input fields
      if (nameInput) nameInput.value = "";
      if (emailInput) emailInput.value = "";
      if (phoneInput) phoneInput.value = "";
      if (resumeInput) resumeInput.value = "";
      if (coverInput) coverInput.value = "";

    } else {
      let errMsg = result.message || "Failed to submit application. Please check your data and retry.";
      if (Array.isArray(result.errors) && result.errors.length > 0) {
        errMsg = result.errors.map((e) => e.message).join(" • ");
      }
      showFormAlert(errMsg, "error");
      showToast(errMsg, "error", 4500);

      // Re-enable button for user retry
      if (DOM.submitSpinner) DOM.submitSpinner.classList.add("hidden");
      if (DOM.submitBtnText) DOM.submitBtnText.textContent = "Submit Application";
      if (DOM.submitAppBtn) DOM.submitAppBtn.disabled = false;
    }
  } catch (err) {
    console.error("Application submission error:", err);
    const networkErrMsg = "Network error. Please verify the API server is reachable and try again.";
    showFormAlert(networkErrMsg, "error");
    showToast(networkErrMsg, "error", 4500);

    // Re-enable button
    if (DOM.submitSpinner) DOM.submitSpinner.classList.add("hidden");
    if (DOM.submitBtnText) DOM.submitBtnText.textContent = "Submit Application";
    if (DOM.submitAppBtn) DOM.submitAppBtn.disabled = false;
  } finally {
    isSubmittingApplication = false;
  }
}


function initTheme() {
  const currentTheme = Storage.loadTheme();
  DOM.html.setAttribute("data-theme", currentTheme);
}

function toggleTheme() {
  const current = DOM.html.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  DOM.html.setAttribute("data-theme", next);
  Storage.saveTheme(next);
  showToast(`Switched to ${next} theme`, "info", 1800);
}


function setupEventListeners() {

  if (DOM.themeToggleBtn) {
    DOM.themeToggleBtn.addEventListener("click", toggleTheme);
  }


  if (DOM.bookmarkedFilterBtn) {
    DOM.bookmarkedFilterBtn.addEventListener("click", () => {
      const nextState = !AppState.filters.onlyBookmarked;
      AppState.filters.onlyBookmarked = nextState;
      DOM.bookmarkedFilterBtn.setAttribute("aria-pressed", nextState ? "true" : "false");
      applyFilters();
      if (nextState) {
        showToast("Filtering saved bookmarks only", "info");
      }
    });
  }


  if (DOM.searchInput) {
    const debouncedFilter = debounce(() => {
      AppState.filters.search = DOM.searchInput.value;
      applyFilters();
    }, 250);

    DOM.searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (DOM.clearSearchBtn) {
        DOM.clearSearchBtn.classList.toggle("hidden", val.length === 0);
      }
      debouncedFilter();
    });

    DOM.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        DOM.searchInput.value = "";
        AppState.filters.search = "";
        if (DOM.clearSearchBtn) DOM.clearSearchBtn.classList.add("hidden");
        applyFilters();
      }
    });
  }

  if (DOM.clearSearchBtn) {
    DOM.clearSearchBtn.addEventListener("click", () => {
      if (DOM.searchInput) {
        DOM.searchInput.value = "";
        DOM.searchInput.focus();
      }
      AppState.filters.search = "";
      DOM.clearSearchBtn.classList.add("hidden");
      applyFilters();
    });
  }


  DOM.domainTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedDomain = tab.dataset.domain;
      AppState.filters.domain = selectedDomain;
      updateActiveDomainTab(selectedDomain);
      applyFilters();
    });
  });


  DOM.footerDomainBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const domain = btn.dataset.footerDomain;
      AppState.filters.domain = domain;
      updateActiveDomainTab(domain);
      applyFilters();
      window.scrollTo({ top: 350, behavior: "smooth" });
    });
  });


  if (DOM.workTypeFilter) {
    DOM.workTypeFilter.addEventListener("change", (e) => {
      AppState.filters.workType = e.target.value;
      applyFilters();
    });
  }

  if (DOM.sortBySelect) {
    DOM.sortBySelect.addEventListener("change", (e) => {
      AppState.filters.sortBy = e.target.value;
      applyFilters();
    });
  }


  if (DOM.resetFiltersBtn) {
    DOM.resetFiltersBtn.addEventListener("click", resetAllFilters);
  }
  if (DOM.emptyResetBtn) {
    DOM.emptyResetBtn.addEventListener("click", resetAllFilters);
  }


  if (DOM.retryBtn) {
    DOM.retryBtn.addEventListener("click", () => {
      showToast("Retrying connection...", "info");
      fetchInternships(false);
    });
  }


  if (DOM.toggleErrorBtn) {
    DOM.toggleErrorBtn.addEventListener("click", () => {
      showToast("Simulating network failure...", "error");
      fetchInternships(true);
    });
  }


  if (DOM.modalCloseBtn) {
    DOM.modalCloseBtn.addEventListener("click", closeModal);
  }
  if (DOM.modalCancelBtn) {
    DOM.modalCancelBtn.addEventListener("click", closeModal);
  }


  if (DOM.modal) {
    DOM.modal.addEventListener("click", (e) => {
      const rect = DOM.modal.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        closeModal();
      }
    });


    DOM.modal.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeModal();
    });
  }


  if (DOM.quickApplyForm) {
    DOM.quickApplyForm.addEventListener("submit", handleApplicationSubmit);
  }


  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  AppState.bookmarks = Storage.loadBookmarks();
  AppState.appliedIds = Storage.loadApplied();
  updateBookmarkBadge();
  setupEventListeners();


  fetchInternships(false);
});
