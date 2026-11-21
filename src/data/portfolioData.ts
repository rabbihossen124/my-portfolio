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
  category: "Frontend" | "Backend & Database" | "Authentication & Tools" | "Deployment" | "Frameworks & Libraries" | "Tools & Workflow";
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
    phone?: string;
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
    categories: ("Frontend" | "Backend & Database" | "Authentication & Tools" | "Deployment" | "Frameworks & Libraries" | "Tools & Workflow")[];
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
    previewImagePath?: string;
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
    role: "Frontend Developer",
    // HERO HEADLINE
    headline: "Building modern, responsive, and performance-driven web experiences.",
    // CONCISE ELEVATOR PITCH
    shortBio:
      "Passionate and detail-oriented Frontend Developer with strong expertise in React.js, Next.js, and modern JavaScript. Dedicated to developing responsive, accessible, and high-performance web applications while continuously learning and contributing to scalable real-world digital solutions.",
    // YOUR LOCATION (e.g., San Francisco, CA / London, UK / Remote)
    location: "Jashore, Bangladesh",
    // YOUR PROFESSIONAL CONTACT EMAIL
    email: "mrrabbi522@gmail.com",
    phone: "+880 1601028576",
    // AVAILABILITY BADGE (Set `isAvailable` to false when you're not accepting new work)
    availability: {
      isAvailable: true,
      statusText: "Available for select opportunities",
      helperNote: "Open for Frontend Developer positions & collaborations",
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
      "Hi! I'm Rabbi, a Frontend Developer dedicated to engineering reliable, accessible, and visually refined web interfaces. I bridge the gap between design vision and technical implementation, ensuring every product feels responsive and seamless.",
      "My development workflow emphasizes clean component architecture, semantic HTML, modern CSS practices, and robust TypeScript code. I value writing maintainable code that scales gracefully as projects grow.",
      "Whether developing customer-facing interfaces, optimizing Core Web Vitals, or integrating full-stack APIs, I love building applications that deliver real value to users.",
    ],
    quickStats: [
      { label: "Core Focus", value: "Frontend & Modern UI" },
      { label: "Code Standard", value: "TypeScript & Next.js" },
      { label: "Design System", value: "Tailwind CSS & Responsive" },
      { label: "Status", value: "Open to Collaborations" },
    ],
    details: {
      location: "Jashore, Bangladesh",
      education: "Diploma in Computer Science & Technology (CST) at Satkhira Polytechnic Institute (8th Semester)",
      careerGoals: "Seeking Frontend Developer opportunities and collaborations",
      languages: "Bengali (Native), English (Professional)",
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
    categories: ["Frontend", "Backend & Database", "Authentication & Tools", "Deployment"],
    items: [
      // Frontend
      { name: "JavaScript (ES6+)", category: "Frontend", highlight: true },
      { name: "TypeScript", category: "Frontend", highlight: true },
      { name: "React.js", category: "Frontend", highlight: true },
      { name: "Next.js App Router", category: "Frontend", highlight: true },
      { name: "HTML5", category: "Frontend", highlight: true },
      { name: "Tailwind CSS", category: "Frontend", highlight: true },
      { name: "Responsive Design", category: "Frontend" },
      { name: "CSS Modules", category: "Frontend" },

      // Backend & Database
      { name: "Node.js", category: "Backend & Database", highlight: true },
      { name: "Express.js", category: "Backend & Database", highlight: true },
      { name: "MongoDB", category: "Backend & Database", highlight: true },
      { name: "RESTful APIs", category: "Backend & Database", highlight: true },

      // Authentication & Tools
      { name: "BetterAuth", category: "Authentication & Tools", highlight: true },
      { name: "JWT", category: "Authentication & Tools" },
      { name: "Git", category: "Authentication & Tools", highlight: true },
      { name: "GitHub", category: "Authentication & Tools", highlight: true },
      { name: "VS Code", category: "Authentication & Tools" },
      { name: "Browser DevTools", category: "Authentication & Tools" },

      // Deployment
      { name: "Vercel", category: "Deployment", highlight: true },
      { name: "Netlify", category: "Deployment", highlight: true },
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
      title: "Organic Food — Pure & Natural Agro E-Commerce",
      summary:
        "A responsive agro-food & organic product web application with seasonal mega combo showcase, dynamic product catalog, and direct WhatsApp ordering.",
      description:
        "Designed and built for 100% pure & natural agricultural products. Features localized Bengali interface, festive winter combo promotions (শীতের পিঠা উৎসব ও মেগা কম্বো প্যাক), interactive product showcases, and seamless direct WhatsApp ordering integration.",
      tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      imageUrl: "/projects/organicfood.jpg",
      demoUrl: "https://organicfood-rho.vercel.app",
      githubUrl: "https://github.com/rabbihossen124",
      featured: true,
      accentColor: "#10b981",
      status: "Live Demo",
    },
  ],

  resume: {
    pdfPath: "/resume.pdf",
    previewImagePath: "/resume-preview.png",
    hasResumePdf: true,
    summary:
      "Passionate and detail-oriented Frontend Developer with strong expertise in React.js, Next.js, and modern JavaScript. Dedicated to developing responsive, accessible, and high-performance web applications while continuously learning and contributing to scalable real-world digital solutions.",
    experience: [],
    education: [
      {
        degree: "Diploma in Computer Science & Technology (CST)",
        institution: "Satkhira Polytechnic Institute",
        period: "2023 – Present (8th Semester)",
        details:
          "Studying Computer Science and Technology with a strong focus on Frontend Development, React.js, Next.js App Router, modern JavaScript, Tailwind CSS, RESTful APIs, and database fundamentals.",
      },
    ],
    certifications: [],
  },

  contact: {
    heading: "Let's connect and build something exceptional.",
    subheading:
      "Have a project inquiry, an open position, or an exciting collaboration in mind? Feel free to send a message through the form or reach out directly.",
    email: "mrrabbi522@gmail.com",
    location: "Jashore, Bangladesh",
    formNotice:
      "This form validates inputs client-side. To receive messages in production, connect your email service (e.g., Formspree, Resend, or a Next.js API route) as documented below.",
  },
};
