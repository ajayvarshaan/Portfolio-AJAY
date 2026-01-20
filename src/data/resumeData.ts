import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export const resumeData = {
  personal: {
    name: "Ajay Varshaan",
    role: "Frontend Developer & Data Analyst",
    location: "Coimbatore, Tamil Nadu",
    email: "ajayvarshaan.2253006@srec.ac.in",
    phone: "+91 9791324929", 
    summary: "A passionate and driven individual with strong fundamentals in computer science, specializing in frontend web development and data analytics. Skilled in building responsive web applications, creating compelling UI/UX interfaces, and deriving insights from data. Eager to contribute to dynamic teams, create impactful user experiences, and deliver meaningful analytical insights.",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/ajayvarshaan", icon: LinkedIn },
      { name: "GitHub", url: "https://github.com/ajayvarshaan", icon: GitHub },
      { name: "Email", url: "mailto:ajayvarshaan.2253006@srec.ac.in", icon: Email }
    ]
  },
  certifications: [
    {
      name: "Frontend Developer Internship",
      issuer: "Maarrs Consulting",
      date: "Dec 2025",
      image: "/intern.png",
      category: "Internship"
    },
    {
      name: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      date: "2024",
      image: "/da-1.png", 
      category: "Data Analytics"
    },
    {
      name: "SQL Basic & Intermediate",
      issuer: "HackerRank",
      date: "2023",
      image: "/da-2.png",
      category: "Data Analytics"
    },
    {
      name: "Data Visualization with Tableau",
      issuer: "Coursera",
      date: "2023",
      image: "/da-3.png",
      category: "Data Analytics"
    },
    {
      name: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2023",
      image: "/da-4.png",
      category: "Data Analytics"
    },
    {
      name: "Frontend Development using React",
      issuer: "Infosys Springboard",
      date: "2023",
      image: "/web-1.png",
      category: "Web Development"
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "/web-2.png",
      category: "Web Development"
    },
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "/web-3.png",
      category: "Web Development"
    },
    {
      name: "Full Stack Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      image: "/web-4.png",
      category: "Web Development"
    },
    {
      name: "React Native Specialization",
      issuer: "Coursera",
      date: "2024",
      image: "/web-5.png",
      category: "Web Development"
    },
    {
      name: "Modern HTML & CSS From The Beginning",
      issuer: "Udemy",
      date: "2022",
      image: "/web-6.png",
      category: "Web Development"
    },
    {
      name: "TypeScript for Beginners",
      issuer: "Udemy",
      date: "2024",
      image: "/web-7.png",
      category: "Web Development"
    },
    {
      name: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2023",
      image: "/web-8.png",
      category: "Web Development"
    }
  ],
  experience: [
    {
      company: "Maarrs Consulting",
      role: "Frontend Developer Intern",
      duration: "June 11, 2025 – Dec 05, 2025",
      description: [
        "Worked on a real-time Wellness Project, developing responsive user interfaces using React, TypeScript, and MUI.",
        "Gained hands-on experience in API integration and real-time data handling to ensure seamless application performance.",
        "Strengthened technical skills, teamwork, and communication by collaborating effectively in a real-time development environment."
      ]
    }
  ],
  projects: [
    {
      title: "Blinkit Business Insights",
      tech: ["Power BI", "DAX"],
      description: "Analyzed sales performance and delivery efficiency. Created DAX measures for profitability and frequency. Identified delivery bottlenecks by comparing promised vs. actual times.",
      internalLink: "/projects/blinkit",
      image: "/blinkit-dashboard.png" 
    },
    {
      title: "Pizza Sales Analytics",
      tech: ["Power BI", "SQL", "Python"],
      description: "Performed EDA to uncover peak order times and best sellers. Created interactive dashboard with slicers. Queried and transformed raw order data using SQL and Python.",
      internalLink: "/projects/pizza",
      image: "/pizza 1.png"
    },
    {
      title: "Meta Ads Dashboard",
      tech: ["Power BI", "DAX"],
      description: "Analytical dashboard for evaluating ad campaigns. Computed KPIs like CTR, CPC, and ROAS. Used funnel charts and performed audience segmentation analysis.",
      internalLink: "/projects/meta-ads",
      image: "/fb.png"
    },
    {
      title: "HR Landing Page",
      tech: ["React (TS)", "MUI", "SCSS"],
      description: "Designed a modern HR landing page with animated layouts and onboarding visuals. Utilized TypeScript for type-safe reusable component development and enhanced engagement with smooth transitions.",
      internalLink: "/projects/hr-platform",
      image: "/hr.png",
      externalLink: ""
    },
    {
      title: "Hospital Management System",
      tech: ["HTML/CSS", "JavaScript", "PHP"],
      description: "Developed a responsive frontend with mobile-friendly layouts. Integrated backend using PHP for user data handling and created dashboards for doctors, staff, and patients.",
      internalLink: "/projects/hospital",
      image: "/1.jpg",
      externalLink: ""
    },
    {
      title: "Mini E-Commerce Platform",
      tech: ["React.js", "MongoDB", "Node.js"],
      description: "Implemented product listing, cart management, and responsive UI. Built seamless integration between frontend and backend using MongoDB for data storage.",
      internalLink: "/projects/ecommerce",
      image: "/mini.png",
      externalLink: ""
    }
  ],
  skills: {
    frontend: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "MUI", "SCSS", "Flutter"],
    data: ["Power BI", "Tableau", "SQL", "Python", "Excel", "DAX"]
  },
 activities: [
    {
      role: "React.js Bootcamp Participant",
      organization: "Sri Ramakrishna Engineering College", // Assuming college event, or change to specific organizer
      period: "2023",
      description: "Completed an intensive 3-day bootcamp focusing on modern React patterns. Mastered functional components, Hooks, and state management to build dynamic single-page applications."
    },
    {
      role: "Workshop Trainee (AI & Power BI)",
      organization: "Be10x",
      period: "2024",
      description: "Gained hands-on experience in generative AI tools for workflow automation and Power BI for business intelligence. Learned to create interactive dashboards and leverage AI for productivity."
    },
    {
      role: "Frontend Development Learner",
      organization: "Scrimba",
      period: "2023 - Present",
      description: "Actively pursuing advanced interactive coding modules. Focused on modern UI/UX implementation, reusable component architecture, and responsive design best practices."
    },
    {
      role: "Web Development Workshop",
      organization: "Technical Workshop",
      period: "2023",
      description: "Strengthened foundational skills in HTML5, CSS3, and JavaScript. Built responsive web layouts and learned DOM manipulation techniques for interactive interfaces."
    },
 
    {
      role: "Class Representative",
      organization: "Sri Ramakrishna Engineering College",
      period: "2022 - Present",
      description: "Acting as a liaison between students and faculty, organizing class schedules, and effectively managing academic resources and peer communications."
    }
  ]
};