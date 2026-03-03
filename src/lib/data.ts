export const personalInfo = {
  name: "Deska Mulyana",
  title: "Software Engineer & AI Engineer",
  subtitle: "Software Engineer | Full-Stack | AI/LLM",
  description: "Software Engineer & AI Engineer with experience building and maintaining production-grade systems end-to-end. Experienced in developing scalable web applications, designing RESTful APIs, managing relational databases, and deploying containerized services using Docker and CI/CD in cloud environments. Built LLM-based AI systems using a Retrieval-Augmented Generation (RAG) approach with vector databases to support automation and assessment workflows.",
  email: "mulyanadeska85@gmail.com",
  phone: "+6281316195586",
  location: "Tangerang, Indonesia",
  linkedin: "https://www.linkedin.com/in/deskamulyana/",
  github: "https://github.com/deskastudio",
  portfolio: "https://deskastudio.online",
  gpa: "3.77",
  university: "Gunadarma University",
  graduated: "2025"
};

export const skillCategories = [
  {
    id: "languages",
    label: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Golang", "Java"]
  },
  {
    id: "backend",
    label: "Backend & API Development",
    skills: ["Node.js (Express.js)", "NestJS", "Flask", "REST API Design", "Authentication (JWT, OAuth)", "API Documentation (Swagger)"]
  },
  {
    id: "frontend",
    label: "Frontend Development",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn/ui"]
  },
  {
    id: "database",
    label: "Database & Data Engineering",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Schema Design", "Query Optimization", "Relational Modeling"]
  },
  {
    id: "ai",
    label: "AI & System Integration",
    skills: ["LLM Integration", "Retrieval-Augmented Generation (RAG)", "Vector Database", "Prompt Engineering"]
  },
  {
    id: "devops",
    label: "DevOps & Infrastructure",
    skills: ["Docker", "CI/CD (GitHub Actions)", "Linux", "SSH", "VPS Management", "Deployment Automation", "Railway", "Vercel"]
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    skills: ["Git", "Agile/Scrum", "Jest", "WebSocket Integration"]
  }
];

export const projects = [
  {
    id: 1,
    title: "KampusGratis - Education & LMS Platform",
    description: "Production-grade educational platform (kampusgratis.id) and multi-client SaaS LMS on AWS infrastructure. Features Docker-based containerization, CI/CD pipelines, and PostgreSQL database optimization for scalable multi-client architecture.",
    image: "/projects/education.svg",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS", "CI/CD"],
    features: [
      "Multi-client SaaS LMS architecture on AWS",
      "Docker containerization with CI/CD pipelines (GitHub Actions)",
      "PostgreSQL schema design for scalable multi-client systems",
      "LLM-based AI chatbot with RAG approach",
      "Production monitoring and issue resolution"
    ],
    liveUrl: "https://kampusgratis.id",
    githubUrl: "#",
    status: "Production",
    category: "Enterprise"
  },
  {
    id: 2,
    title: "AI Chatbot Multi-Tenant",
    description: "Production-ready AI chatbot backend with RAG (Retrieval-Augmented Generation) supporting multiple platforms. Multi-tenant architecture with Qdrant vector database, local LLM via Ollama (DeepSeek, LLaMA, Qwen), and a Next.js dashboard for managing tenants and conversations.",
    image: "/projects/ai-chatbot.svg",
    technologies: ["Python", "FastAPI", "Qdrant", "Ollama", "Next.js", "TypeScript", "Docker"],
    features: [
      "Multi-tenant architecture for multiple platform support",
      "RAG implementation with Qdrant vector database",
      "Local LLM integration via Ollama (DeepSeek, LLaMA, Qwen)",
      "FAQ knowledge base with semantic search per tenant",
      "Dashboard for tenant management and conversation tracking"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/deskastudio/backend-ai-chatbot",
    status: "Completed",
    category: "AI & LLM"
  },
  {
    id: 3,
    title: "Bermoela - Psychotest Assessment Platform",
    description: "Web-based psychological test platform with dynamic question management, assessment categorization, and automated scoring logic. Integrated LLM-based AI using RAG approach with vector database for automation and assessment workflows.",
    image: "/projects/psikotes.svg",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "OpenAI API", "Vector Database"],
    features: [
      "Dynamic question management and assessment categorization",
      "Automated scoring logic with detailed result reports",
      "LLM-based AI chatbot with RAG and vector database",
      "User authentication and session management",
      "Responsive and accessible interface"
    ],
    liveUrl: "https://bermoela.vercel.app",
    githubUrl: "https://github.com/Menara-Pengetahuan-Indonesia/fe-psikotes",
    status: "Production",
    category: "AI & Assessment"
  },
  {
    id: 4,
    title: "PaketCGratis - Education Platform",
    description: "Monorepo education platform (paketcgratis.id) with Nx workspace containing backend API, user-facing frontend, and admin dashboard. Full-stack system for PKBM (community learning center) with end-to-end testing.",
    image: "/projects/education.svg",
    technologies: ["Next.js", "Express.js", "TypeScript", "Nx Monorepo", "Tailwind CSS"],
    features: [
      "Nx monorepo with backend, frontend user, and admin dashboard",
      "User-facing platform at paketcgratis.id",
      "Admin dashboard for content and user management",
      "End-to-end testing for both frontend apps",
      "Scalable monorepo architecture"
    ],
    liveUrl: "https://paketcgratis.id",
    githubUrl: "#",
    status: "Production",
    category: "Enterprise"
  },
  {
    id: 5,
    title: "KerjaDiLuar - Job Platform",
    description: "Job listing and recruitment platform (kerjadiluar.id) built with Nx monorepo architecture and Docker containerization. Connects job seekers with outdoor and field-based employment opportunities.",
    image: "/projects/job-platform.svg",
    technologies: ["Next.js", "TypeScript", "Nx Monorepo", "Tailwind CSS", "Docker"],
    features: [
      "Job listing and search functionality",
      "Nx monorepo architecture for scalability",
      "Docker containerization for deployment",
      "Responsive design for mobile job seekers",
      "Production deployment at kerjadiluar.id"
    ],
    liveUrl: "https://kerjadiluar.id",
    githubUrl: "#",
    status: "Production",
    category: "Full-Stack"
  },
  {
    id: 6,
    title: "Travedia - Travel Booking System",
    description: "End-to-end travel booking system with REST APIs for user management, bookings, and transactions. Features Google OAuth authentication, Midtrans payment gateway, and VPS-based deployment with CI/CD pipelines.",
    image: "/projects/travel.svg",
    technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Google OAuth", "Midtrans"],
    features: [
      "Full-stack travel booking system built end-to-end",
      "REST API design for users, bookings, and transactions",
      "Google OAuth authentication and Midtrans payment gateway",
      "VPS deployment with CI/CD automated build and release",
      "Production monitoring and issue resolution"
    ],
    liveUrl: "https://frontend-murex-theta-45.vercel.app/",
    githubUrl: "https://github.com/deskastudio/TerbitTravel",
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 7,
    title: "Pemesanan Menu - UMKM Food Ordering",
    description: "Full-stack food ordering and production monitoring system for UMKM culinary businesses. Go backend with PostgreSQL and React TypeScript frontend featuring cashier dashboard, order management, and table management.",
    image: "/projects/food-ordering.svg",
    technologies: ["React", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS", "Shadcn/ui"],
    features: [
      "Order management and cashier dashboard",
      "Production monitoring for kitchen workflow",
      "Table management with QR code support",
      "JWT authentication and role-based access",
      "Go REST API with Swagger documentation"
    ],
    liveUrl: "https://caffe.tetangga.me",
    githubUrl: "https://github.com/deskastudio/fe-pemesanan-menu",
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 8,
    title: "Nova Trading Platform",
    description: "Production-grade trading platform with real-time market data streaming via WebSocket. Optimized frontend performance to maintain memory usage below 500MB in production with focus on system stability.",
    image: "/projects/trading.svg",
    technologies: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS", "REST API"],
    features: [
      "Real-time market data streaming via WebSocket",
      "Memory optimization below 500MB in production",
      "Debugging and root cause analysis on critical issues",
      "REST API integration for real-time data synchronization"
    ],
    liveUrl: "https://nova.trade",
    githubUrl: "#",
    status: "Completed",
    category: "FinTech"
  },
  {
    id: 9,
    title: "StayHub - Property Platform",
    description: "Property and accommodation management platform built with React and TypeScript. Features property listings, booking management, and user dashboard with a comprehensive frontend architecture.",
    image: "/projects/property.svg",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST API"],
    features: [
      "Property listing and search functionality",
      "Booking management system",
      "User dashboard and profile management",
      "Responsive design for all devices",
      "REST API integration"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/deskastudio/stayhub-frontend",
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 10,
    title: "Kasir UMKM - POS System",
    description: "Point of Sale (POS) system designed for Indonesian small businesses (UMKM). Streamlines transaction processing, inventory tracking, and sales reporting for micro and small enterprises.",
    image: "/projects/pos.svg",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST API"],
    features: [
      "Transaction processing and receipt generation",
      "Product and inventory management",
      "Sales reporting and analytics",
      "User-friendly cashier interface",
      "Designed for UMKM business needs"
    ],
    liveUrl: "https://kasir-hilyas.tech",
    githubUrl: "https://github.com/deskastudio/fe-kasir-umkm",
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 11,
    title: "E-Commerce Electronic",
    description: "E-commerce platform for electronic products built with Next.js. Features product catalog, shopping cart, and checkout flow with modern UI design.",
    image: "/projects/ecommerce.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    features: [
      "Product catalog with search and filtering",
      "Shopping cart and checkout flow",
      "Responsive e-commerce interface",
      "Product detail pages with image gallery"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/deskastudio/e-commerce-electronic",
    status: "Completed",
    category: "E-Commerce"
  }
];

export const experience = [
  {
    id: 1,
    title: "Web Programmer & AI Engineer",
    company: "M-Knows Consulting & Kampus Gratis",
    period: "November 2025 - Present",
    description: "Developing and maintaining production applications including kampusgratis.id and multi-client SaaS LMS platforms on AWS infrastructure",
    responsibilities: [
      "Developed and maintained production applications including kampusgratis.id and multi-client SaaS Learning Management System (LMS) platforms on AWS infrastructure",
      "Managed Docker-based containerization and implemented CI/CD pipelines (GitHub Actions) for automated build, testing, and deployment",
      "Designed and optimized PostgreSQL database schemas to support scalable and multi-client system architecture",
      "Built a web-based psychotest platform with dynamic question management, assessment categorization, and automated scoring logic",
      "Integrated an LLM-based AI chatbot using a Retrieval-Augmented Generation (RAG) approach with vector database implementation",
      "Performed monitoring, debugging, and production issue resolution to maintain system stability and performance",
      "Owned features end-to-end, from technical design through development and production deployment"
    ],
    technologies: ["Next.js", "NestJS/Express.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "GitHub Actions", "OpenAI API", "Vector Database"],
    type: "full-time"
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Nova Development / Trader",
    period: "August - October 2025",
    description: "Developed and maintained a production-grade trading platform with focus on system stability and performance",
    responsibilities: [
      "Developed and maintained a production-grade trading platform with a strong focus on system stability and performance",
      "Integrated WebSocket on the frontend to handle real-time market data streaming and transaction updates",
      "Optimized application performance to maintain memory usage below 500MB in production",
      "Performed debugging and root cause analysis on critical issues to reduce production bugs",
      "Collaborated with backend engineers to integrate REST APIs and ensure reliable real-time data synchronization"
    ],
    technologies: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS", "REST API"],
    type: "contract"
  },
  {
    id: 3,
    title: "Fullstack Web Developer",
    company: "Travedia Terbit Semesta",
    period: "January - June 2025",
    description: "Developed and maintained the travel booking system end-to-end through production deployment",
    responsibilities: [
      "Developed and maintained the travel booking system end-to-end through production deployment",
      "Designed and implemented REST APIs for user management, bookings, and transactions",
      "Integrated authentication (Google OAuth) and payment gateway (Midtrans) to support secure transaction flows",
      "Managed VPS-based deployment and implemented CI/CD pipelines for automated build and release processes",
      "Performed monitoring, debugging, and production issue resolution to ensure system stability and performance"
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Google OAuth", "Midtrans"],
    type: "contract"
  },
  {
    id: 4,
    title: "Independent Infrastructure & Production Systems",
    company: "Self-Managed",
    period: "Ongoing",
    description: "Designing and managing VPS-based application deployments and containerized services",
    responsibilities: [
      "Designed and managed VPS-based application deployments through production",
      "Managed containerized services using Docker in Linux environments",
      "Configured reverse proxy and SSL to ensure system security and availability",
      "Performed monitoring and incident resolution across production systems independently"
    ],
    technologies: ["Docker", "Linux", "SSH", "Nginx", "SSL", "VPS Management"],
    type: "independent"
  }
];

export const education = {
  degree: "Bachelor of Information Systems",
  university: "Gunadarma University",
  period: "2021 - 2025",
  gpa: "3.77/4.00",
  status: "Graduated",
  finalProject: "Travel Website Development Using Agile Scrum Methodology",
  relevantCourses: [
    "Web Programming & Development",
    "Database Management Systems",
    "Software Engineering"
  ]
};

export const certifications = [
  {
    title: "Fullstack Software Developer",
    issuer: "Kampus Merdeka x Productzilla"
  },
  {
    title: "Fullstack Web Developer",
    issuer: "Kampus Merdeka x LearningX"
  },
  {
    title: "Junior Web Programming",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)"
  },
  {
    title: "Project Management Course",
    issuer: "MySkill"
  },
  {
    title: "Fundamental Front End Developer & Laravel 9",
    issuer: "Coding Studio"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/deskamulyana/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/deskastudio",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:mulyanadeska85@gmail.com",
    icon: "email"
  }
];

export const stats = [
  { label: "Projects Delivered", value: "11+" },
  { label: "GitHub Repositories", value: "15+" },
  { label: "Technologies Used", value: "25+" },
  { label: "Years of Experience", value: "2+" }
];
