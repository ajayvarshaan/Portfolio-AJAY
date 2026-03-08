import { GitHub, LinkedIn, Email } from '@mui/icons-material';

import profilePic from '../assets/me.jpg'; 

import internImg from '../assets/intern.png';
import da1 from '../assets/da-1.png';
import da2 from '../assets/da-2.png';
import da3 from '../assets/da-3.png';
import da4 from '../assets/da-4.png';
import web1 from '../assets/web-1.png';
import web2 from '../assets/web-2.png';
import web3 from '../assets/web-3.png';
import web4 from '../assets/web-4.png';
import web5 from '../assets/web-5.png';
import web6 from '../assets/web-6.png';
import web7 from '../assets/web-7.png';
import web8 from '../assets/web-8.png';

import blinkitImg from '../assets/blinkit-dashboard.png';
import pizzaImg from '../assets/pizza 1.png'; 
import metaImg from '../assets/fb.png';
import hrImg from '../assets/hr.png';
import hospitalImg from '../assets/1.jpg';
import ecomImg from '../assets/mini.png';
import productReviewImg from '../assets/write-product-reviews.webp';
import wellnessVideo from '../assets/Screen Recording 2026-03-08 181806.mp4';

export const resumeData = {
  personal: {
    name: "Ajay Varshaan",
    role: "Web Developer & Data Analyst",
    location: "Coimbatore, Tamil Nadu",
    email: "ajayvarshaan.2253006@srec.ac.in",
    phone: "+91 9791324929", 
    summary: "A passionate and driven individual with strong fundamentals in computer science, specializing in frontend web development and data analytics. Skilled in building responsive web applications, creating compelling UI/UX interfaces, and deriving insights from data.",
    profileImage: profilePic, 
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/ajayvarshaan", icon: LinkedIn },
      { name: "GitHub", url: "https://github.com/ajayvarshaan", icon: GitHub },
      { name: "Email", url: "mailto:ajayvarshaan.2253006@srec.ac.in", icon: Email }
    ]
  },

  education: [
    {
      degree: "M.Tech Computer Science and Engineering",
      institution: "Sri Ramakrishna Engineering College, Coimbatore",
      period: "2022 – Present",
      score: "CGPA: 7.45"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Glazebrook Matriculation Higher Secondary School, Salem",
      period: "2022",
      score: "Percentage: 80%"
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Holy Cross Matriculation Higher Secondary School, Salem",
      period: "2020",
      score: "Percentage: 78%"
    }
  ],

  certifications: [
    {
      name: "Frontend Developer Internship",
      issuer: "Maarrs Consulting",
      date: "Dec 2025",
      image: internImg, 
      category: "Internship"
    },
    {
      name: "Maiyyam Daya Analytics Traineeship",
      issuer: "Maiyyam",
      date: "2024",
      image: da1, 
      category: "Data Analytics"
    },
    {
      name: "Letter of Recommendation - Data Analyst(Maiyyam)",
      issuer: "Maiyyam",
      date: "2024",
      image: da2,
      category: "Data Analytics"
    },
    {
      name: "Learning Power Bi Desktop",
      issuer: "LinkedIn Learning",
      date: "2024",
      image: da3,
      category: "Data Analytics"
    },
    {
      name: "Complete Data Analytics Bootcamp From Basic to Advanced",
      issuer: "Udemy",
      date: "2026",
      image: da4,
      category: "Data Analytics"
    },
    {
      name: "Frontend Development using React",
      issuer: "Sri Ramakrishna Engineering College",
      date: "2024",
      image: web1,
      category: "Web Development"
    },
    {
      name: "HTML Essentials Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      image: web2,
      category: "Web Development"
    },
    {
      name: "JavaScript Essentials Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      image: web3,
      category: "Web Development"
    },
    {
      name: "Learning the JavaScript Language",
      issuer: "LinkedIn Learning",
      date: "2024",
      image: web4,
      category: "Web Development"
    },
    {
      name: " CSS Essentials Training",
      issuer: "Udemy",
      date: "2025",
      image: web5,
      category: "Web Development"
    },
    {
      name: "Complete Web & Mobile Designer : UI/UX, Figma, +more",
      issuer: "Udemy",
      date: "2024",
      image: web6,
      category: "Web Development"
    },
    {
      name: "React Bootcamp",
      issuer: "Lets Upgrade",
      date: "2024",
      image: web7,
      category: "Web Development"
    },
    {
      name: "Full Stack(MERN) Web Development",
      issuer: "Maiyyam",
      date: "2025",
      image: web8,
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
      description: "Analyzed sales performance and delivery efficiency. Created DAX measures for profitability and frequency.",
      internalLink: "/projects/blinkit",
      image: blinkitImg 
    },
    {
      title: "Pizza Sales Analytics",
      tech: ["Power BI", "SQL", "Python"],
      description: "Performed EDA to uncover peak order times and best sellers. Created interactive dashboard with slicers.",
      internalLink: "/projects/pizza",
      image: pizzaImg
    },
    {
      title: "Meta Ads Dashboard",
      tech: ["Power BI", "DAX"],
      description: "Analytical dashboard for evaluating ad campaigns. Computed KPIs like CTR, CPC, and ROAS.",
      internalLink: "/projects/meta-ads",
      image: metaImg
    },
    {
      title: "HR Landing Page",
      tech: ["React (TS)", "MUI", "SCSS"],
      description: "Designed a modern HR landing page with animated layouts and onboarding visuals.",
      internalLink: "/projects/hr-platform",
      image: hrImg,
      externalLink: ""
    },
    {
      title: "Hospital Management System",
      tech: ["HTML/CSS", "JavaScript", "PHP"],
      description: "Developed a responsive frontend with mobile-friendly layouts. Integrated backend using PHP.",
      internalLink: "/projects/hospital",
      image: hospitalImg,
      externalLink: ""
    },
    {
      title: "Mini E-Commerce Platform",
      tech: ["React.js", "MongoDB", "Node.js"],
      description: "Implemented product listing, cart management, and responsive UI.",
      internalLink: "/projects/ecommerce",
      image: ecomImg,
      externalLink: ""
    },
    {
      title: "Product Review System",
      tech: ["MERN STACK"],
      description: "Interactive product review platform with real-time ratings, user feedback management, and responsive design.",
      internalLink: "/projects/product-review",
      image: productReviewImg,
      video: wellnessVideo
    }
  ],
  skills: {
    "Web Development": [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "MUI",
      "SCSS",
      "Flutter",
      "Figma",
      "MERN"
    ],
    "Programming Languages": [
      "Java",
      "Python"
    ],
    "Data Analytics": [
      "Power BI",
      "Tableau",
      "SQL",
      "Excel",
      "DAX"
    ]
  },

  activities: [
    {
      role: "React.js Bootcamp Participant",
      organization: "Sri Ramakrishna Engineering College", 
      period: "2023",
      description: "Completed an intensive 3-day bootcamp focusing on modern React patterns."
    },
    {
      role: "Workshop Trainee (AI & Power BI)",
      organization: "Be10x",
      period: "2024",
      description: "Gained hands-on experience in generative AI tools for workflow automation and Power BI."
    },
    {
      role: "Frontend Development Learner",
      organization: "Scrimba",
      period: "2023 - Present",
      description: "Actively pursuing advanced interactive coding modules."
    },
    {
      role: "Web Development Workshop",
      organization: "Technical Workshop",
      period: "2023",
      description: "Strengthened foundational skills in HTML5, CSS3, and JavaScript."
    }
  ]
};