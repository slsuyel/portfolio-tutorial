export const PERSONAL_INFO = {
  name: "Suyel Haque",
  role: "Fullstack Web Developer",
  tagline: "Building high-performance, user-friendly web applications",
  bio: "I’m a skilled Fullstack Developer with a passion for building high-performance, user-friendly web applications. With deep expertise in modern JavaScript frameworks and robust backend servers, I create dynamic, responsive websites that deliver exceptional user experiences. I balance rigorous technical architecture with refined frontend aesthetics.",
  location: "Bangladesh",
  nationality: "Bangladeshi",
  freelanceStatus: "Available",
  phone: "+880 1722-597565",
  email: "slsuyel@gmail.com",
  experienceYears: "3 Years",
  languages: ["English", "Bengali"],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/8801722597565"
  }
};

export const QUICK_STATS = [
  { label: "Years Experience", value: "3+", suffix: "" },
  { label: "Current Role", value: "ZSI.AI", suffix: "" },
  { label: "Awards & Recognitions", value: "3", suffix: "x" },
  { label: "Mobile Readiness Check", value: "100", suffix: "%" }
];

export const EDUCATION_TIMELINE = [
  {
    period: "2020 - 2021",
    degree: "BA in English",
    institution: "Titumir Govt College",
    description: "Developed strong communication and critical thinking skills while studying English literature and linguistics. Engaged in various research and writing projects, focusing on literary analysis and effective expression."
  },
  {
    period: "2018 - 2020",
    degree: "Higher Secondary Certificate",
    institution: "Debiganj Govt College",
    description: "Focused on completing coursework in science and humanities, gaining a broad foundation in subjects like mathematics, literature, and social studies. Developed a keen interest in research and analytical thinking during this period."
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: "performance",
    title: "Performance First",
    iconName: "Zap",
    badge: "01",
    description: "Delivering fast application loads using advanced lazy-loading, image compressions, and smart edge-caching configurations."
  },
  {
    id: "pixel-perfection",
    title: "Pixel Perfection",
    iconName: "Layout",
    badge: "02",
    description: "Structuring layouts with surgical typographic choices, responsive flexibilities, and cohesive spacing variables."
  },
  {
    id: "architecture",
    title: "Scalable Architecture",
    iconName: "Cpu",
    badge: "03",
    description: "Enforcing DRY code patterns, modular atomic components, and robust database indexing schemas for sustainable growth."
  },
  {
    id: "motion",
    title: "Aesthetic Motion",
    iconName: "Sparkles",
    badge: "04",
    description: "Adding micro-animations and physics-based motion profiles to keep layouts dynamic, responsive, and delightful."
  }
];

export const SKILLS_MATRIX = {
  frontend: {
    category: "Frontend Engineering",
    iconName: "Code2",
    description: "Building responsive, modern, & performant client interfaces",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "WordPress", "Shopify"]
  },
  backend: {
    category: "Backend & APIs",
    iconName: "Server",
    description: "Designing scalable server systems, controllers, & authentication",
    skills: ["Node.js", "Express.js", "REST API", "JWT"]
  },
  database: {
    category: "Database & ORM",
    iconName: "Database",
    description: "Data normalization, querying, and real-time data storage",
    skills: ["MongoDB", "Mongoose", "Supabase"]
  },
  tools: {
    category: "Real-Time & Developer Tools",
    iconName: "Wrench",
    description: "Real-time communication, cloud deployment, and design systems",
    skills: ["Figma", "Socket.io", "Git", "Postman", "Vercel"]
  }
};

export const CAREER_TIMELINE = [
  {
    id: "zsi",
    company: "ZSI.AI",
    role: "Fullstack Developer",
    period: "Mar 2024 - Present",
    status: "Current Role",
    summary: "Developing and maintaining responsive and user-friendly interfaces using modern JS technologies. Focused on delivering scalable and performant web applications.",
    keyContributions: [
      "Designed robust frontend architectures in React and Next.js, speeding up load times.",
      "Created scalable APIs and backend controllers to handle heavy, data-intensive client platforms.",
      "Spearheaded database modeling in MySQL and MongoDB, ensuring data normalization."
    ],
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "TypeScript", "REST API"]
  },
  {
    id: "softweb",
    company: "Softweb System Solution",
    role: "Frontend Developer",
    period: "Jan 2022 - Feb 2024",
    status: "2+ Years",
    summary: "Building dynamic and interactive web applications using React. Ensuring code quality, optimizing performance, and collaborating with backend teams to integrate APIs.",
    keyContributions: [
      "Collaborated closely with system backend developers to connect microservice REST APIs.",
      "Enforced responsive layout principles, resulting in a 100% mobile readiness check score.",
      "Reduced redundant render components using React's virtual hook dependencies."
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "REST API", "Git"]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "zsi-2025",
    year: "2025",
    organization: "ZSI.AI",
    title: "Employee of the Year",
    badge: "Top Contributor",
    description: "Recognized as the Best Employee for exceptional performance, dedication, and impactful contributions to the Saleo project."
  },
  {
    id: "zsi-2024",
    year: "2024",
    organization: "ZSI.AI",
    title: "Employee of the Year",
    badge: "Speed & Scale",
    description: "Recognized for exceptional contributions to development speed, codebase maintainability, and successfully launching multiple AI-driven client platforms."
  },
  {
    id: "ph-2023",
    year: "2023",
    organization: "Programming Hero",
    title: "Junior Web Developer Award",
    badge: "Top Tier Graduate",
    description: "Successfully completed intensive full-stack development training, graduating in the top tier and winning awards for outstanding database architecture."
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "saleo-ai",
    title: "Saleo AI - Client Analytics Platform",
    category: "Full-Stack",
    tagline: "AI-driven analytics dashboard built for real-time client data processing",
    description: "A high-performance web platform engineered during tenure at ZSI.AI. Features real-time charts, predictive insights, user role management, and optimized backend query pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://example.com/saleo",
    githubUrl: "https://github.com/slsuyel",
    caseStudy: {
      challenge: "Handling large data streams without causing frontend re-render lag across multi-tenant client dashboards.",
      solution: "Implemented virtualized list rendering, memoized hook selectors, and web socket event throttling.",
      outcome: "Decreased dashboard load time by 45% and achieved 100% mobile responsiveness."
    }
  },
  {
    id: "nexus-flow",
    title: "NexusFlow - Task & API Management",
    category: "Full-Stack",
    tagline: "Collaborative real-time workspace with JWT authentication and Socket.io integration",
    description: "Full-stack project management hub allowing team members to communicate via real-time websockets, manage tasks, and configure REST API webhooks seamlessly.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Socket.io", "Supabase"],
    liveUrl: "https://example.com/nexusflow",
    githubUrl: "https://github.com/slsuyel",
    caseStudy: {
      challenge: "Ensuring state synchronization across multiple concurrent user sessions without data conflict.",
      solution: "Designed optimistic UI updates paired with Socket.io backend validation middleware and Supabase real-time subscriptions.",
      outcome: "Zero latency feedback for end users and 99.9% uptime during team test simulations."
    }
  },
  {
    id: "omni-shop",
    title: "OmniCart - Headless E-Commerce Front",
    category: "Frontend",
    tagline: "Ultra-fast headless shopfront with custom cart hooks & dynamic animations",
    description: "A modern, high-converting e-commerce web application featuring micro-animations, instant instant filtering, and responsive shopping cart workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Shopify API"],
    liveUrl: "https://example.com/omnicart",
    githubUrl: "https://github.com/slsuyel",
    caseStudy: {
      challenge: "Maximizing lighthouse performance scores while rendering high-res product galleries and dynamic cart drawers.",
      solution: "Used Next.js image optimization, lazy loading non-critical routes, and CSS transform animations.",
      outcome: "Scored 98/100 on Google Lighthouse performance tests."
    }
  },
  {
    id: "express-auth-kit",
    title: "DevPulse - Real-time API Gateway & JWT Auth",
    category: "APIs & Tools",
    tagline: "Scalable backend authentication middleware & rate-limiting controller",
    description: "A developer tool & API service template providing secure JWT authentication, rate limiting, Mongoose schema validation, and structured error logging.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tech: ["Node.js", "Express.js", "JWT", "MongoDB", "Mongoose", "Postman"],
    liveUrl: "https://example.com/devpulse",
    githubUrl: "https://github.com/slsuyel",
    caseStudy: {
      challenge: "Preventing brute-force attacks while keeping JWT token refresh cycles smooth and seamless.",
      solution: "Constructed dual token rotation mechanisms (access & refresh tokens) with Redis-backed token revocation checks.",
      outcome: "Adopted across internal projects at Softweb System Solution for rapid API bootstrapping."
    }
  }
];
