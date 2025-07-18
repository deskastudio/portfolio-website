export const personalInfo = {
    name: "Deska Mulyana",
    title: "Frontend Developer",
    subtitle: "React.js | Next.js | TypeScript",
    description: "Mahasiswa Sistem Informasi semester 8 yang berfokus pada Frontend Development dengan portofolio proyek solid menggunakan React.js, Next.js, dan TypeScript.",
    email: "mulyanadeska85@gmail.com",
    phone: "+6281316195586",
    location: "Tangerang, Indonesia",
    linkedin: "https://www.linkedin.com/in/deskamulyana/",
    github: "https://github.com/deskastudio",
    gpa: "3.75",
    university: "Universitas Gunadarma",
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
      { name: "Google OAuth", icon: "🔐", level: 85 },
      { name: "Midtrans", icon: "💳", level: 80 },
      { name: "Agile Scrum", icon: "🏃", level: 85 }
    ]
  };
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Electronic Exclusive",
      description: "Modern e-commerce platform built with Next.js and TypeScript featuring responsive design, server-side rendering, and smooth user experience with advanced product filtering.",
      image: "/projects/ecommerce.jpg", // Add your project images to public/projects/
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Redux", "Vercel"],
      features: [
        "Server-side rendering for optimal performance",
        "Advanced product filtering and search",
        "Shopping cart with Redux state management",
        "Responsive design across all devices",
        "90+ Lighthouse performance score"
      ],
      liveUrl: "#", // Add your live URL
      githubUrl: "#", // Add your GitHub URL
      status: "Completed",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "Final project travel booking system developed using Agile Scrum methodology with Google OAuth integration and Midtrans payment gateway for seamless user experience.",
      image: "/projects/travel.jpg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Google Auth", "Midtrans"],
      features: [
        "Google OAuth authentication",
        "Midtrans payment integration",
        "Real-time booking system",
        "Agile Scrum development process",
        "Component-based architecture"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
      category: "Travel & Booking"
    },
    {
      id: 3,
      title: "Sports Reservation System",
      description: "Full-stack application for badminton and futsal field reservation with real-time booking system, conflict prevention, and intuitive user interface.",
      image: "/projects/sports.jpg",
      technologies: ["Flask", "Python", "MongoDB", "Material-UI", "Tailwind CSS", "JavaScript"],
      features: [
        "Real-time field availability",
        "Booking conflict prevention",
        "User dashboard and history",
        "Admin panel for management",
        "Responsive mobile interface"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      category: "Booking System"
    },
    {
      id: 4,
      title: "Kampus Merdeka Projects",
      description: "Multiple development projects including full-stack web applications with Flask Python backend, React frontend with TypeScript, and complex state management using Redux.",
      image: "/projects/kampus-merdeka.jpg",
      technologies: ["React.js", "TypeScript", "Flask", "Express.js", "Redux", "JIRA"],
      features: [
        "Multiple technology stacks",
        "Agile project management with JIRA",
        "TypeScript integration",
        "Redux state management",
        "Deployment on multiple platforms"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      category: "Academic"
    }
  ];
  
  export const experience = [
    {
      id: 1,
      title: "Asisten Laboratorium",
      company: "Universitas Gunadarma",
      period: "Oktober 2023 - Sekarang",
      description: "Membimbing 30+ mahasiswa dalam praktikum pemrograman dan database",
      responsibilities: [
        "Mengajar Java Programming, MySQL Database, dan Golang",
        "Memberikan panduan pengembangan aplikasi backend",
        "Pelatihan best practices database design dan query optimization",
        "Meningkatkan tingkat penyelesaian laboratorium hingga 25%"
      ],
      type: "part-time"
    },
    {
      id: 2,
      title: "Pengawas Ujian CAT",
      company: "Universitas Gunadarma", 
      period: "2024 - Sekarang",
      description: "Menangani troubleshooting teknis dan memastikan kompatibilitas sistem ujian",
      responsibilities: [
        "Troubleshooting teknis dengan respons cepat",
        "Memastikan kompatibilitas aplikasi web di berbagai browser",
        "Dokumentasi masalah dan solusi",
        "Mempertahankan uptime sistem 100% selama ujian"
      ],
      type: "part-time"
    }
  ];
  
  export const education = {
    degree: "Sarjana Sistem Informasi",
    university: "Universitas Gunadarma",
    period: "2021 - 2025",
    gpa: "3.75/4.00",
    semester: "8",
    finalProject: "Pengembangan Website Travel menggunakan Metodologi Agile Scrum",
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
    { label: "Projects Completed", value: "4+" },
    { label: "GPA", value: "3.75" },
    { label: "Technologies", value: "10+" },
    { label: "Expected Graduation", value: "2025" }
  ];