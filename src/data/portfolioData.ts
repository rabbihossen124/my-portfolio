/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Instructions:
 * Replace the bracketed placeholders below (e.g., [Your Name], [your.email@example.com])
 * with your actual personal details.
 * 
 * If you do not have certain links or sections, you can leave them empty or update them
 * when ready. All content updates here will automatically reflect across the entire site.
 */

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor?: string;
  status?: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Frameworks & Libraries" | "Tools & Workflow";
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    shortBio: string;
    location: string;
    email: string;
    availability: {
      isAvailable: boolean;
      statusText: string;
      helperNote: string;
    };
    socialLinks: {
      github: string;
      linkedin: string;
      twitter?: string;
      email: string;
    };
  };
  about: {
    introHeading: string;
    bioParagraphs: string[];
    quickStats: { label: string; value: string }[];
    details: {
      location: string;
      education: string;
      careerGoals: string;
      languages: string;
    };
    principles: { title: string; description: string }[];
  };
  skills: {
    categories: ("Frontend" | "Frameworks & Libraries" | "Tools & Workflow")[];
    items: SkillItem[];
  };
  projects: ProjectItem[];
  resume: {
    /**
     * File path for your resume PDF.
     * Place your actual resume PDF inside the "public" directory (e.g., public/resume.pdf)
     * and ensure `hasResumePdf` is set to true.
     */
    pdfPath: string;
    hasResumePdf: boolean;
    summary: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    certifications?: CertificationItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    location: string;
    formNotice: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    // REPLACE WITH YOUR FULL NAME
    name: "Rabbi",
    // YOUR PRIMARY PROFESSIONAL TITLE
    role: "Web Developer",
    // HERO HEADLINE
    headline: "Building modern, responsive, and performance-driven web experiences.",
    // CONCISE ELEVATOR PITCH
    shortBio:
      "Passionate about turning complex requirements into elegant, accessible, and fast web applications. Focused on modern JavaScript, React, Next.js, and clean software architecture.",
    // YOUR LOCATION (e.g., San Francisco, CA / London, UK / Remote)
    location: "Jashore, Khulna, Bangladesh",
    // YOUR PROFESSIONAL CONTACT EMAIL
    email: "mrrabbi522@gmail.com",
    // AVAILABILITY BADGE (Set `isAvailable` to false when you're not accepting new work)
    availability: {
      isAvailable: true,
      statusText: "Available for select opportunities",
      helperNote: "Editable in portfolioData.ts: set isAvailable to false if currently booked",
    },
    // YOUR ACTUAL SOCIAL AND REPOSITORY PROFILES
    socialLinks: {
      github: "https://github.com/rabbihossen124",
      linkedin: "https://linkedin.com/in/rabbi124",
      twitter: "https://x.com/Rabbi397131",
      email: "mailto:mrrabbi522@gmail.com",
    },
  },

  about: {
    introHeading: "Focused on crafting high-quality web solutions with precision & care.",
    bioParagraphs: [
      "Hi! I'm Rabbi, a Web Developer dedicated to engineering reliable, accessible, and visually refined web interfaces. I bridge the gap between design vision and technical implementation, ensuring every product feels responsive and seamless.",
      "My development workflow emphasizes clean component architecture, semantic HTML, modern CSS practices, and robust TypeScript code. I value writing maintainable code that scales gracefully as projects grow.",
      "Whether developing customer-facing interfaces, optimizing Core Web Vitals, or integrating full-stack APIs, I love building applications that deliver real value to users.",
    ],
    quickStats: [
      { label: "Core Focus", value: "Modern Web & UI" },
      { label: "Code Standard", value: "TypeScript & Semantic HTML" },
      { label: "Design System", value: "Tailored & Accessible" },
      { label: "Status", value: "Open to Collaborations" },
    ],
    details: {
      location: "Jashore, Khulna, Bangladesh",
      education: "Computer Science & Technology Student at Satkhira Polytechnic Institute",
      careerGoals: "Seeking entry-level Web Developer opportunities and collaborations",
      languages: "Bengali, English",
    },
    principles: [
      {
        title: "Clean & Maintainable Code",
        description:
          "Well-structured, self-documenting code with clear typing, predictable state management, and separation of concerns.",
      },
      {
        title: "Accessibility & Semantics",
        description:
          "Built from the ground up with semantic HTML, keyboard-friendly navigation, and WCAG AA contrast compliance.",
      },
      {
        title: "Performance by Default",
        description:
          "Optimized assets, minimal bundle footprint, and efficient rendering cycles to ensure lightning-fast load times.",
      },
      {
        title: "Thoughtful User Experience",
        description:
          "Purposeful micro-interactions, responsive fluidity across all screens, and polished visual hierarchy.",
      },
    ],
  },

  skills: {
    categories: ["Frontend", "Frameworks & Libraries", "Tools & Workflow"],
    // NOTE: In accordance with professional standards, we do NOT display arbitrary percentage bars.
    items: [
      // Frontend
      { name: "HTML5", category: "Frontend", highlight: true },
      { name: "CSS3", category: "Frontend", highlight: true },
      { name: "JavaScript (ES6+)", category: "Frontend", highlight: true },
      { name: "TypeScript", category: "Frontend", highlight: true },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Responsive Design", category: "Frontend" },
      { name: "CSS Modules", category: "Frontend" },
      { name: "Web Accessibility (a11y)", category: "Frontend" },

      // Frameworks & Libraries
      { name: "React", category: "Frameworks & Libraries", highlight: true },
      { name: "Next.js (App Router)", category: "Frameworks & Libraries", highlight: true },
      { name: "State Management", category: "Frameworks & Libraries" },
      { name: "Component-Driven Dev", category: "Frameworks & Libraries" },

      // Tools & Workflow
      { name: "Git", category: "Tools & Workflow", highlight: true },
      { name: "GitHub", category: "Tools & Workflow", highlight: true },
      { name: "REST APIs", category: "Tools & Workflow", highlight: true },
      { name: "Vite / Turbopack", category: "Tools & Workflow" },
      { name: "VS Code", category: "Tools & Workflow" },
      { name: "Browser DevTools", category: "Tools & Workflow" },
      { name: "npm / package management", category: "Tools & Workflow" },
      { name: "Vercel Deployment", category: "Tools & Workflow" },
    ],
  },

  projects: [
    {
      id: "project-1",
      title: "FitLog — Workout Library & Gym Companion",
      summary:
        "A dark-themed fitness companion and workout planner to browse lift libraries, create personalized routines, and track daily sets.",
      description:
        "Built with Next.js, React, and Tailwind CSS. Features an interactive library of 12 targeted lifts across major muscle groups, dedicated 'My Plan' builder, set logging, and a responsive dark interface.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      imageUrl: "/projects/fitlog.png",
      demoUrl: "https://assiment-06.vercel.app/",
      githubUrl: "https://github.com/rabbihossen124/Assiment-06",
      featured: true,
      accentColor: "#ccff00",
      status: "Live Demo",
    },
    {
      id: "project-2",
      title: "DevStack — Interactive Tech Stack Builder",
      summary:
        "An interactive developer utility to explore web technologies, assemble customized project stacks, and manage dev toolchains in real time.",
      description:
        "Developed with React, Vite, and Tailwind CSS. Features instant technology filtering, dynamic stack addition with live toast alerts, conflict detection, and quick stack export.",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      imageUrl: "/projects/devstack.png",
      demoUrl: "https://dev-stack-appliation.netlify.app/",
      githubUrl: "https://github.com/rabbihossen124",
      featured: true,
      accentColor: "#ec4899",
      status: "Live Demo",
    },
    {
      id: "project-3",
      title: "ShopSphere — Modern E-Commerce Platform",
      summary:
        "A responsive e-commerce storefront with dynamic product filtering, real-time shopping cart state, and smooth checkout flow.",
      description:
        "Developed with Next.js, React, and Tailwind CSS. Demonstrates clean component architecture, client-side state management, responsive product catalog, and checkout flow.",
      tags: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
      imageUrl: "/projects/shopsphere.jpg",
      demoUrl: "https://shopsphere-demo.vercel.app",
      githubUrl: "https://github.com/rabbihossen124/shopsphere-ecommerce",
      featured: true,
      accentColor: "#38bdf8",
      status: "Demo Project",
    },
  ],

  resume: {
    pdfPath: "/resume.pdf",
    // NOTE: Set to true once you have placed your resume PDF in public/resume.pdf
    hasResumePdf: false,
    summary:
      "An enthusiastic Computer Science & Technology student and frontend web developer eager to build modern, responsive, and performance-driven web applications.",
    experience: [],
    education: [
      {
        degree: "Diploma in Engineering in Computer Science & Technology",
        institution: "Satkhira Polytechnic Institute",
        period: "Running / Present",
        details:
          "Studying Computer Science and Technology with a strong focus on web development, programming fundamentals, algorithms, and database systems.",
      },
    ],
    certifications: [],
  },

  contact: {
    heading: "Let's connect and build something exceptional.",
    subheading:
      "Have a project inquiry, an open position, or an exciting collaboration in mind? Feel free to send a message through the form or reach out directly.",
    email: "mrrabbi522@gmail.com",
    location: "Jashore, Khulna, Bangladesh",
    formNotice:
      "This form validates inputs client-side. To receive messages in production, connect your email service (e.g., Formspree, Resend, or a Next.js API route) as documented below.",
  },
};
