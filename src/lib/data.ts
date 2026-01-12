export const personalInfo = {
    name: "Deska Mulyana",
    title: "Frontend Developer",
    subtitle: "React.js | Next.js | TypeScript",
    description: "Frontend Developer specializing in Web3 blockchain platforms and modern web applications using React.js, Next.js, and TypeScript.",
    email: "mulyanadeska85@gmail.com",
    phone: "+6281316195586",
    location: "Tangerang, Indonesia",
    linkedin: "https://www.linkedin.com/in/deskamulyana/",
    github: "https://github.com/deskastudio",
    gpa: "3.75",
    university: "Gunadarma University",
    expectedGraduation: "2025"
  };
  
  export const skills = {
    frontend: [
      { name: "React.js", icon: "⚛️", level: 90 },
      { name: "Next.js", icon: "▲", level: 85 },
      { name: "TypeScript", icon: "📘", level: 80 },
      { name: "JavaScript", icon: "💛", level: 90 },
      { name: "HTML5", icon: "🧡", level: 95 },
      { name: "CSS3", icon: "💙", level: 90 }
    ],
    styling: [
      { name: "Tailwind CSS", icon: "🎨", level: 90 },
      { name: "Material-UI", icon: "🎭", level: 85 },
      { name: "Shadcn/ui", icon: "🎪", level: 80 },
      { name: "Bootstrap", icon: "🅱️", level: 85 }
    ],
    backend: [
      { name: "Flask", icon: "🐍", level: 75 },
      { name: "Express.js", icon: "🚀", level: 70 },
      { name: "Laravel", icon: "🔴", level: 65 }
    ],
    database: [
      { name: "MongoDB", icon: "🍃", level: 80 },
      { name: "MySQL", icon: "🐬", level: 85 }
    ],
    tools: [
      { name: "Git", icon: "📚", level: 85 },
      { name: "GitHub", icon: "🐙", level: 90 },
      { name: "JIRA", icon: "🎯", level: 75 },
      { name: "Figma", icon: "🎨", level: 80 },
      { name: "Postman", icon: "📮", level: 80 }
    ],
    other: [
      { name: "Redux", icon: "🔄", level: 80 },
      { name: "Solana", icon: "🟣", level: 75 },
      { name: "Web3", icon: "🔗", level: 70 },
      { name: "Google OAuth", icon: "🔐", level: 85 },
      { name: "Midtrans", icon: "💳", level: 80 },
      { name: "Agile Scrum", icon: "🏃", level: 85 }
    ]
  };
  
  export const projects = [
    {
      id: 1,
      title: "KampusGratis - Free Education Platform",
      description: "Comprehensive educational platform providing free courses and learning resources for students. Built with modern web technologies and featuring user authentication and course management.",
      image: "/projects/education.svg",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript", "JWT"],
      features: [
        "Free course catalog and management",
        "User authentication and profiles",
        "Interactive learning modules",
        "Progress tracking system",
        "Responsive educational interface",
        "Community learning features"
      ],
      liveUrl: "https://kampusgratis.id",
      githubUrl: "https://github.com/murid-bang-riski/kampus-gratis",
      status: "Completed",
      category: "Academic"
    },
    {
      id: 2,
      title: "PaketCGratis - Free Package Platform",
      description: "Platform offering various free packages and services to users. Features modern design with comprehensive package management and user-friendly interface.",
      image: "/projects/package.svg",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript", "API Integration"],
      features: [
        "Free package catalog browsing",
        "Advanced search and filtering",
        "User account management",
        "Package request system",
        "Responsive design interface",
        "Real-time package availability"
      ],
      liveUrl: "https://paketcgratis.id",
      githubUrl: "https://github.com/deskastudio/paketcgratis",
      status: "Completed",
      category: "Academic"
    },
    {
      id: 3,
      title: "Hyundai M-Knows - Automotive Platform",
      description: "Automotive knowledge and service platform for Hyundai vehicles. Features comprehensive vehicle information, service booking, and customer support system.",
      image: "/projects/automotive.svg",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript", "API Integration"],
      features: [
        "Vehicle information database",
        "Service booking system",
        "Customer support integration",
        "Automotive knowledge base",
        "Responsive automotive interface",
        "Real-time service updates"
      ],
      liveUrl: "https://hyundai.m-knows.com",
      githubUrl: "https://github.com/deskastudio/hyundai-mknows",
      status: "Completed",
      category: "Automotive"
    },
    {
      id: 4,
      title: "Bosowa Insurance - Frontend Application",
      description: "Modern insurance frontend application with comprehensive policy management, claims processing, and user dashboard. Built with React and modern UI components.",
      image: "/projects/insurance.svg",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript", "Shadcn/ui"],
      features: [
        "Insurance policy management",
        "Claims submission and tracking",
        "User dashboard and profiles",
        "Policy comparison tools",
        "Responsive insurance interface",
        "Modern UI/UX design"
      ],
      liveUrl: "https://fe-insurance-bosowa.vercel.app",
      githubUrl: "https://github.com/deskastudio/fe-insurance-bosowa",
      status: "In Progress",
      category: "Insurance"
    }
  ];
  
  export const experience = [
    {
      id: 1,
      title: "Front End Developer",
      company: "Nova Development",
      period: "August 2025 - Present",
      description: "Developing and maintaining user interfaces for blockchain-based Web3 trading platform",
      responsibilities: [
        "Develop and maintain user interfaces for Web3 blockchain trading platform, ensuring optimal functionality and user experience",
        "Improve application stability by performing root cause analysis and fixing critical system bugs",
        "Implement dynamic page customization features, allowing users to adjust interface layout according to preferences to increase engagement",
        "Collaborate effectively with backend teams and designers to ensure smooth integration of new features according to design specifications"
      ],
      technologies: ["Next.js", "Solana", "TypeScript", "React.js", "Tailwind CSS"],
      type: "full-time"
    },
    {
      id: 2,
      title: "Frontend Developer (Final Project)",
      company: "Travedia Terbit Semesta",
      period: "February 2025 - July 2025",
      description: "Leading frontend development in Scrum team for travel booking system",
      responsibilities: [
        "Lead frontend development in Scrum team to build travel booking system, implementing Agile methodology from sprint planning to retrospectives",
        "Design reusable and type-safe component library architecture using React.js and TypeScript, accelerating development process by 30%",
        "Integrate secure user authentication through Google OAuth and Midtrans payment gateway for reliable transactions"
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Google Auth", "Midtrans", "Git"],
      type: "project"
    },
    {
      id: 3,
      title: "Laboratory Assistant",
      company: "Gunadarma University",
      period: "October 2023 - Present",
      description: "Guiding 30+ students per session in programming practicum",
      responsibilities: [
        "Guide more than 30 students per session in programming practicum, improving their understanding of Java, MySQL, and Golang",
        "Deliver materials and provide guidance in application development, focusing on best practices in database design and query optimization"
      ],
      technologies: ["Java", "MySQL", "Golang", "Database Design"],
      type: "part-time"
    },
    {
      id: 4,
      title: "CAT Exam Supervisor",
      company: "Gunadarma University",
      period: "2025",
      description: "Maintaining 100% system uptime during exam periods",
      responsibilities: [
        "Maintain 100% system uptime during exam periods by performing quick and efficient technical troubleshooting",
        "Ensure exam application compatibility across various browsers and document every solution for future reference"
      ],
      technologies: ["System Administration", "Browser Compatibility", "Technical Support"],
      type: "part-time"
    }
  ];
  
  export const education = {
    degree: "Bachelor of Information Systems",
    university: "Gunadarma University",
    period: "2021 - 2025",
    gpa: "3.75/4.00",
    semester: "8th",
    finalProject: "Travel Website Development using Agile Scrum Methodology",
    relevantCourses: [
      "Web Programming & Development",
      "Database Management Systems", 
      "Software Engineering",
      "Human Computer Interaction",
      "System Analysis and Design"
    ]
  };
  
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
    { label: "Projects Completed", value: "5+" },
    { label: "GitHub Repositories", value: "15+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "Years Experience", value: "2+" }
  ];