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
      title: "TerbitTravel - Travel Booking Platform",
      description: "Comprehensive travel booking platform developed using Agile Scrum methodology with Google OAuth integration and Midtrans payment gateway for seamless user experience.",
      image: "/projects/travel.svg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Google Auth", "Midtrans"],
      features: [
        "Google OAuth authentication system",
        "Midtrans payment gateway integration",
        "Real-time booking and reservation system",
        "Agile Scrum development methodology",
        "Responsive component-based architecture",
        "Modern UI with Shadcn/ui components"
      ],
      liveUrl: "https://terbit-travel.vercel.app",
      githubUrl: "https://github.com/deskastudio/TerbitTravel",
      status: "Completed",
      category: "Travel & Booking"
    },
    {
      id: 2,
      title: "StayHub - Hotel Booking Frontend",
      description: "Modern hotel booking frontend application with intuitive user interface, advanced search filtering, and seamless booking experience built with React and TypeScript.",
      image: "/projects/hotel.svg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "React Router", "Axios", "React Hook Form"],
      features: [
        "Advanced hotel search and filtering",
        "Interactive booking interface",
        "Responsive design for all devices",
        "Real-time availability checking",
        "User-friendly booking flow",
        "Modern UI/UX design"
      ],
      liveUrl: "https://stayhub-frontend.vercel.app",
      githubUrl: "https://github.com/deskastudio/stayhub-frontend",
      status: "Completed",
      category: "Hospitality"
    },
    {
      id: 3,
      title: "Blanzaa - E-Commerce Platform",
      description: "Full-featured e-commerce platform with modern design, product management, shopping cart functionality, and optimized user experience for online retail.",
      image: "/projects/ecommerce.svg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Lucide React"],
      features: [
        "Complete product catalog management",
        "Shopping cart with state persistence",
        "Advanced product search and filtering",
        "Responsive e-commerce design",
        "Smooth animations and transitions",
        "SEO optimized product pages"
      ],
      liveUrl: "https://blanzaa-ecommerce.vercel.app",
      githubUrl: "https://github.com/deskastudio/blanzaa-ecommerce",
      status: "Completed",
      category: "E-Commerce"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills, built with Next.js 15, featuring dark mode, WhatsApp integration, and modern responsive design.",
      image: "/projects/portfolio.svg",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      features: [
        "Server-side rendering with Next.js 15",
        "Dark/Light mode toggle with system preference",
        "WhatsApp integration for direct contact",
        "Responsive design across all devices",
        "Smooth animations with Framer Motion",
        "SEO optimized with comprehensive metadata"
      ],
      liveUrl: "https://deskamulyana.vercel.app",
      githubUrl: "https://github.com/deskastudio/portfolio-website",
      status: "Completed",
      category: "Portfolio"
    },
    {
      id: 5,
      title: "NeedSkincare.id - Skincare Consultation",
      description: "Skincare consultation and product recommendation platform helping users find the right skincare routine based on their skin type and concerns.",
      image: "/projects/skincare.svg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Personalized skincare consultation",
        "Product recommendation system",
        "Skin analysis and assessment",
        "User profile and history tracking",
        "Responsive web application",
        "Modern skincare-focused design"
      ],
      liveUrl: "https://needskincareid.vercel.app",
      githubUrl: "https://github.com/deskastudio/needskincareid",
      status: "Completed",
      category: "Health & Beauty"
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