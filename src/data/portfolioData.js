export const personalInfo = {
  name: "Bishal Kumar",
  title: "Full-Stack Developer | Backend Engineering | Generative AI & Agentic AI",
  email: "bishalkumar773568@gmail.com",
  phone: "+91 7735687076",
  location: "Siwan, Bihar, India",
  summary:
    "Software Development Engineer intern who cares about the craft: clean, tested code shipped to production. Built 4 production microservices (Node.js, Express.js, PostgreSQL, Redis, Kafka, Docker) in a live commercial product, backed by 150+ DSA problems solved in Python. Experienced in REST API design, code reviews, debugging, and Agile collaboration with frontend, Android, and backend teams. Passionate about building developer-focused tools and AI-powered products.",
  github: "https://github.com/Bk123singh",
  linkedin: "https://www.linkedin.com/in/bishal-kumar-b8a7b4272",
  leetcode: "https://leetcode.com/u/heykumar/",
  resumeUrl: "/assets/Bishal_Kumar_Resume.pdf",
  avatarUrl: "/assets/profile.jpg",
  highlights: [
    { label: "Production Microservices", value: "4 Shipped", detail: "Auth, Loan, Fraud & Notifications at ShriNeo Vittiyam" },
    { label: "Cache Optimization", value: "~40%", detail: "Database lookup reduction via Redis caching" },
    { label: "Kafka Event Pipeline", value: "500+", detail: "Events processed with zero loss for fraud & alerts" },
    { label: "API Latency", value: "120ms", detail: "Sustained average response time under Postman load" },
    { label: "DSA Problems Solved", value: "150+", detail: "Algorithmic mastery in Python on LeetCode" },
    { label: "Docker Setup Time", value: "< 10 min", detail: "Reduced developer onboarding from 30 min" }
  ]
};

export const professionalInterests = [
  "Full-stack web application development",
  "Backend engineering & robust RESTful API design",
  "System design & event-driven microservices",
  "Generative AI & LLM application workflows",
  "Agentic AI & autonomous multi-agent orchestration",
  "Retrieval-Augmented Generation (RAG) & vector retrieval",
  "AI-powered automation & intelligent developer tools",
  "Product thinking & translating business needs into technical architectures"
];

export const experience = [
  {
    role: "Backend Software Engineer Intern",
    company: "ShriNeo Vittiyam Pvt. Ltd.",
    type: "Internship",
    duration: "Mar 2026 – Present",
    location: "Fintech Platform",
    context:
      "Core backend engineering for a commercial digital lending and financial services platform, architecting isolated microservices to support loan-origination workflows and real-time fraud monitoring.",
    responsibilities: [
      "Designed and shipped 4 production-grade microservices (Authentication, Loan Application, Fraud Detection, Notification) with Node.js, Express.js, PostgreSQL, and Redis, following Clean Architecture.",
      "Built the Authentication Service with JWT, RBAC, and OTP verification; measured and analyzed API performance with Postman, sustaining a 120ms average API response time.",
      "Cut repeated database lookups by ~40% by implementing Redis caching layers for token and session validation.",
      "Built the Loan Application Service (PostgreSQL, Prisma ORM, Redis); tested and debugged against 100+ test loan applications.",
      "Developed Kafka-based event pipelines for fraud detection and notifications, processing 500+ events with zero failures.",
      "Hardened REST APIs with request validation, rate limiting, token blacklisting, and structured error handling.",
      "Cut local setup time from 30 min to under 10 min with Docker Compose on Linux; wrote comprehensive technical documentation for APIs and setup.",
      "Took ownership of services end to end and raised issues early, collaborating with frontend, Android, and backend engineers through API design discussions, code reviews, and Agile sprint planning."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Apache Kafka",
      "Docker Compose",
      "JWT",
      "RBAC",
      "Postman",
      "Linux CLI"
    ],
    metrics: [
      { label: "Microservices Shipped", value: "4" },
      { label: "DB Lookups Avoided", value: "40%" },
      { label: "Kafka Event Uptime", value: "100%" },
      { label: "Avg Response Time", value: "120ms" }
    ]
  }
];

export const aiShowcaseProjects = [
  {
    id: "jobpilot-ai",
    title: "JobPilot AI: Agentic Job Discovery & ATS Matching Platform",
    tagline: "Autonomous career co-pilot with deterministic 5-pillar matching and recruiter Kanban",
    badge: "Full-Stack + Agentic AI",
    liveUrl: "https://job-pilot-ai-rho.vercel.app/",
    githubUrl: "https://github.com/Bk123singh/JobPilotAi",
    problem:
      "Traditional job boards subject candidates to repetitive manual searches and opaque rejection algorithms with zero actionable feedback. Recruiters drown in unstructured resumes without standardized evaluation criteria.",
    architecture:
      "Engineered as a modular monolith with three role-based experiences (Job Seeker, Recruiter, Admin). An autonomous Agentic Perception-Reasoning-Action Loop continuously ingests postings, extracts candidate competencies, and runs deterministic 5-pillar evaluations.",
    agenticWorkflow: [
      {
        step: "Perception & Ingestion",
        desc: "Ingests candidate profiles, parsed multi-version resumes via Cloudinary/pdf-parse, and active job postings."
      },
      {
        step: "Normalization & Reasoning",
        desc: "Tech synonym normalizer aligns varied phrasing (e.g., 'react.js' -> 'react'). 5-pillar engine calculates deterministic 0-100% compatibility scores."
      },
      {
        step: "Skill Gap & Uplift Prediction",
        desc: "Predicts actionable match score boosts (e.g. '+8% match by adding Docker') and classifies applicants into qualification tiers."
      },
      {
        step: "Autonomous Execution",
        desc: "Automated Resend alerts notify candidates when openings exceed match thresholds; Recruiter co-pilot auto-organizes applicants across 6-stage Kanban and coordinates Google Meet interviews."
      }
    ],
    fivePillars: [
      { name: "Required & Nice-to-Have Skills", weight: "40%", detail: "Normalized technical skill overlap" },
      { name: "Experience Level", weight: "20%", detail: "Candidate seniority matched against role specifications" },
      { name: "Semantic & Title Alignment", weight: "20%", detail: "Profile headline aligned with target job designations" },
      { name: "Practical Projects & Portfolio", weight: "10%", detail: "Hands-on project work demonstrating required technologies" },
      { name: "Workplace Career Preferences", weight: "10%", detail: "Remote/Hybrid/Onsite alignment and salary match" }
    ],
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Resend",
      "Cloudinary",
      "Google OAuth",
      "JWT (Access + Refresh)",
      "Zod"
    ],
    outcomes: [
      "Three distinct role portals (Job Seeker, Recruiter, Admin) with granular RBAC",
      "Deterministic ATS scoring with real-time skill-gap uplift predictions",
      "Integrated automated email notifications via Resend for high-fit job alerts",
      "Production deployment on Vercel with responsive, mobile-first design"
    ]
  },
  {
    id: "multi-agent-studio",
    title: "Multi-Agent Research Studio",
    tagline: "Autonomous multi-agent research pipeline with real-time web gathering and critique loops",
    badge: "Agentic AI & Orchestration",
    liveUrl: "https://multi-agent-research-studio-x5m9jwxn7v6v4evwikyucw.streamlit.app/",
    githubUrl: "https://github.com/Bk123singh/Multi-Agent-Research-Studio",
    problem:
      "Single-prompt LLM interactions frequently suffer from hallucinations, outdated parametric knowledge, and lack of self-verification when researching complex technical or market queries.",
    architecture:
      "A specialized multi-agent pipeline where tasks are decomposed into autonomous subtasks, combining tool calling (Tavily search API and web scraping) with Groq/OpenAI LLM inference, followed by a dedicated critique and refinement agent.",
    agenticWorkflow: [
      {
        step: "Query Decomposition",
        desc: "Planning agent breaks complex user inquiries into targeted, orthogonal research sub-questions."
      },
      {
        step: "Tool-Assisted Web Gathering",
        desc: "Autonomous research agents query the Tavily API and scrape target web pages to collect raw external evidence."
      },
      {
        step: "Information Synthesis",
        desc: "Synthesizer agent condenses unstructured multi-source search data into a cohesive, structured report."
      },
      {
        step: "Critique & Verification Loop",
        desc: "Dedicated Critic Agent reviews synthesized findings for factual grounding, logical consistency, and missing perspectives."
      }
    ],
    technologies: [
      "Python 3.10+",
      "LangChain",
      "Groq API",
      "OpenAI API",
      "Tavily Search API",
      "BeautifulSoup4",
      "Streamlit",
      "Prompt Engineering"
    ],
    outcomes: [
      "Real-time interactive Streamlit interface tracking agent execution state",
      "Separation of concerns between web discovery, content synthesis, and quality critique",
      "Grounded structured reports with transparent live web citations"
    ]
  },
  {
    id: "document-rag-assistant",
    title: "Document RAG Assistant (Chat with Multiple PDFs)",
    tagline: "End-to-end semantic retrieval and grounded response generation over document corpuses",
    badge: "Retrieval-Augmented Generation (RAG)",
    liveUrl: null,
    githubUrl: "https://github.com/Bk123singh",
    verifiedCodePath: "c:/Users/nabin/OneDrive/Desktop/Chat_with_multiple pdf",
    problem:
      "Querying dense multi-page documentation or financial PDFs using vanilla LLMs exceeds context limits and causes hallucinations. Organizations require exact source grounding with verifiable citations.",
    architecture:
      "A complete verified RAG pipeline implementing document parsing, overlap chunking, high-dimensional vector embeddings, fast in-memory similarity search with FAISS, and grounded conversational response generation.",
    ragPipelineSteps: [
      {
        stage: "1. Document Ingestion",
        tech: "PyPDF2",
        detail: "Extracts raw text streams across multiple uploaded PDF files page by page."
      },
      {
        stage: "2. Text Chunking",
        tech: "RecursiveCharacterTextSplitter",
        detail: "Splits extracted text into 1,000-character segments with 200-character sliding overlap to maintain semantic continuity."
      },
      {
        stage: "3. Vector Embeddings",
        tech: "MistralAIEmbeddings (mistral-embed)",
        detail: "Transforms textual chunks into dense semantic embedding vectors via Mistral AI."
      },
      {
        stage: "4. Vector Indexing",
        tech: "FAISS Vector Store",
        detail: "Constructs an optimized similarity search index over all document embeddings for ultra-low latency lookups."
      },
      {
        stage: "5. Semantic Retrieval",
        tech: "Top-k Similarity Search (k=3)",
        detail: "Executes cosine/L2 vector distance matching against user queries to extract the most relevant passage chunks."
      },
      {
        stage: "6. Grounded Generation",
        tech: "ChatMistralAI / LangChain Core",
        detail: "Assembles retrieved context into a strict grounded prompt, preventing hallucination and maintaining multi-turn dialogue history."
      }
    ],
    technologies: [
      "Python",
      "LangChain Community",
      "FAISS",
      "Mistral AI Embeddings",
      "ChatMistralAI",
      "PyPDF2",
      "Streamlit",
      "Vector Similarity Search"
    ],
    outcomes: [
      "Verified local implementation executing complete 6-stage RAG architecture",
      "Zero-hallucination grounded responses restricted strictly to uploaded document contents",
      "Multi-document interactive chat interface with persistent conversation memory"
    ]
  },
  {
    id: "ai-blog-platform",
    title: "AI Blog Platform",
    tagline: "Full-stack MERN content management system with automated AI drafting and role controls",
    badge: "Full-Stack MERN",
    liveUrl: null,
    githubUrl: "https://github.com/Bk123singh/AI-Blog-Platform-",
    problem:
      "Modern content creators struggle with writer's block and fragmented tools for ideation, draft authoring, categorizing, and publishing.",
    architecture:
      "Full-stack MERN application integrating generative AI endpoints for dynamic article drafting, paired with a secure RESTful API, MongoDB schema modeling, and an administrative control panel.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Framer Motion",
      "JWT Authentication",
      "AI API Integration"
    ],
    outcomes: [
      "RESTful API architecture with centralized error handling and request validation",
      "Category-based blog filtering and responsive editorial UI",
      "Admin dashboard for user moderation and blog publishing workflows"
    ]
  }
];

export const technicalSkillsCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL"]
  },
  {
    category: "Frontend Engineering",
    icon: "Layout",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Responsive UI Development",
      "React Router"
    ]
  },
  {
    category: "Backend Engineering",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "Clean Architecture",
      "Modular Backend Design",
      "JWT (Access & Refresh)",
      "Role-Based Access Control (RBAC)",
      "API Validation & Structured Error Handling",
      "Rate Limiting Middleware",
      "Secure Session Management"
    ]
  },
  {
    category: "Databases & Data Management",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis (Caching & Token Blacklisting)",
      "Prisma ORM",
      "Mongoose",
      "Relational Schema Design",
      "Data Modeling"
    ]
  },
  {
    category: "Distributed Systems & Infrastructure",
    icon: "Network",
    skills: [
      "Microservices Architecture",
      "Apache Kafka (Event-Driven)",
      "Docker",
      "Docker Compose",
      "Linux CLI",
      "Git & GitHub",
      "Environment Configuration",
      "API Performance & Latency Benchmarking"
    ]
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    skills: [
      "LLM Application Development",
      "LLM API Integration (Groq, OpenAI, Mistral)",
      "Prompt Engineering",
      "Structured AI Outputs",
      "AI-Assisted Content Generation",
      "Tool Calling & Function Execution",
      "Context Assembly & Grounding"
    ]
  },
  {
    category: "Agentic AI",
    icon: "Bot",
    skills: [
      "Autonomous AI Agents",
      "Multi-Agent Task Orchestration",
      "Research & Scraping Agents",
      "Query Decomposition",
      "Critique & Refinement Loops",
      "Perception-Reasoning-Action Loops",
      "Autonomous Matching & Alerts"
    ]
  },
  {
    category: "Retrieval-Augmented Generation (RAG)",
    icon: "FileSearch",
    skills: [
      "Document Ingestion & Text Extraction (PyPDF2)",
      "Semantic Text Chunking (RecursiveCharacterTextSplitter)",
      "Dense Vector Embeddings (MistralAIEmbeddings)",
      "Vector Stores & Indexing (FAISS)",
      "Top-k Similarity Search",
      "Context Construction & Prompt Grounding",
      "Conversational Memory in RAG"
    ]
  },
  {
    category: "AI & Developer Tools",
    icon: "Wrench",
    skills: [
      "LangChain",
      "Groq API",
      "Tavily Search API",
      "Streamlit",
      "Claude Code",
      "GitHub Copilot",
      "Postman",
      "Cloudinary",
      "Resend",
      "Vercel",
      "Render"
    ]
  },
  {
    category: "Engineering Practices",
    icon: "ShieldCheck",
    skills: [
      "Clean Code & Separation of Concerns",
      "Root-Cause Debugging & Analysis",
      "API Documentation & Contracts",
      "Code Reviews & Git Pull-Request Workflows",
      "Secure Coding Fundamentals",
      "Performance Benchmarking & Caching",
      "Agile Collaboration & Sprint Planning"
    ]
  }
];

export const softSkills = [
  {
    title: "Leadership & Ownership",
    icon: "Compass",
    principles: [
      "Taking end-to-end accountability for assigned microservices from database schema to deployment.",
      "Proactively identifying architectural bottlenecks and raising risks early during sprint planning.",
      "Driving developer experience improvements, such as cutting onboarding setup time from 30 min to under 10 min with Docker Compose.",
      "Aligning engineering implementation directly with business and product objectives."
    ]
  },
  {
    title: "Problem Solving & Analysis",
    icon: "Cpu",
    principles: [
      "Deconstructing complex software requirements into manageable, testable components.",
      "Conducting methodical root-cause debugging using Postman benchmarks, logging, and structured error diagnostics.",
      "Evaluating engineering trade-offs (e.g., synchronous REST vs. asynchronous Kafka event streaming; in-memory caching vs. persistent store).",
      "Prioritizing high-availability, data integrity, and low-latency response times (sustaining 120ms average API response)."
    ]
  },
  {
    title: "Product Requirement Analysis",
    icon: "Target",
    principles: [
      "Deeply understanding end-user pain points (e.g. opaque job rejection filters or slow loan-processing cycles).",
      "Clarifying functional constraints, edge cases, and role permissions prior to writing code.",
      "Translating user requirements into resilient data models, relational constraints, and unambiguous API contracts.",
      "Defining clear acceptance criteria and validating implementations against real business workflows."
    ]
  },
  {
    title: "Team Collaboration",
    icon: "Users",
    principles: [
      "Communicating API contracts and payload schemas clearly with frontend and Android client engineers.",
      "Actively participating in code reviews to uphold code quality, consistency, and security standards.",
      "Surfacing technical blockers transparently in daily standups and sprint retrospectives.",
      "Incorporating constructive feedback gracefully to iterate on architecture and implementation."
    ]
  },
  {
    title: "Ownership & Continuous Learning",
    icon: "BookOpen",
    principles: [
      "Maintaining high code standards with structured validation, error handling, and clean modular architecture.",
      "Rapidly adopting emerging paradigms through practical, production-level builds (Agentic AI, RAG, Kafka pipelines).",
      "Authoring thorough API documentation and deployment guides to empower team members.",
      "Sharpening algorithmic foundations continuously with 150+ DSA problems solved in Python on LeetCode."
    ]
  }
];

export const productWorkflowSteps = [
  {
    step: "01",
    title: "Understand the User Problem & Business Objective",
    description:
      "Pinpoint what friction users face and what measurable business value the software must deliver before touching code.",
    caseStudy:
      "In ShriNeo Vittiyam, recognized that manual loan origination created bottlenecks, while in JobPilot AI, recognized that candidates faced silent rejections from rigid ATS filters."
  },
  {
    step: "02",
    title: "Gather Requirements, Constraints & Edge Cases",
    description:
      "Clarify user roles, regulatory boundaries, rate limit requirements, security considerations, and failure modes.",
    caseStudy:
      "Defined 3 strict roles (Job Seeker, Recruiter, Admin) with RBAC; scoped loan validation rules and token-blacklisting edge cases on logout."
  },
  {
    step: "03",
    title: "Define Data Models, APIs, Architecture & Integrations",
    description:
      "Draft clean schemas, HTTP endpoints, authentication boundaries, and third-party API contracts.",
    caseStudy:
      "Designed PostgreSQL relational schemas with Prisma ORM; drafted Kafka event contracts for async fraud processing; selected Redis for hot session lookups."
  },
  {
    step: "04",
    title: "Break Solution into Implementable Tasks",
    description:
      "Decompose features into modular sprint tickets with clear dependencies, unit boundaries, and integration touchpoints.",
    caseStudy:
      "Decoupled ShriNeo Vittiyam into 4 microservices (Auth, Loan, Fraud, Notification); isolated JobPilot AI's 5-pillar engine into a testable standalone service."
  },
  {
    step: "05",
    title: "Build, Integrate & Validate Functionality",
    description:
      "Develop clean, modular code with strict input validation, unified error responses, and integrated testing.",
    caseStudy:
      "Implemented JWT auth with OTP verification; simulated and tested the loan service against 100+ loan applications with edge-case payloads."
  },
  {
    step: "06",
    title: "Review Reliability, Security, Performance & Usability",
    description:
      "Benchmark latency, harden endpoints with rate-limiting, eliminate redundant queries, and polish user interactions.",
    caseStudy:
      "Added Redis caching to reduce database lookups by ~40%; sustained 120ms average API response time; added token blacklisting and rate limiting."
  },
  {
    step: "07",
    title: "Document Implementation & Communicate Progress",
    description:
      "Write comprehensive setup guides, API contracts, and architecture diagrams; align teams through regular sprint updates.",
    caseStudy:
      "Created containerized Docker Compose setup with full documentation, reducing local engineer setup from 30 min to under 10 min."
  }
];

export const educationAndAchievements = {
  education: {
    institution: "Vivekananda Global University",
    degree: "B.Tech in Computer Science Engineering",
    cgpa: "7.20",
    period: "Aug 2023 – May 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "System Design",
      "Distributed Systems"
    ]
  },
  achievements: [
    {
      title: "150+ DSA Problems Solved in Python",
      platform: "LeetCode",
      url: "https://leetcode.com/u/heykumar/",
      detail: "Consistent problem-solving and algorithmic fluency covering dynamic programming, graphs, trees, and system design patterns."
    },
    {
      title: "Shipped 4 Production Microservices",
      platform: "Commercial Product",
      url: null,
      detail: "Engineered and deployed live backend services handling digital loan operations, Kafka fraud pipelines, and secure authentication."
    }
  ],
  certifications: [
    {
      title: "Machine Learning",
      issuer: "Coursera",
      status: "Certified"
    },
    {
      title: "Software Product Management",
      issuer: "Coursera",
      status: "Certified"
    }
  ]
};
