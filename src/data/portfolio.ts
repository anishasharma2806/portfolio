// ============================================================
//  PORTFOLIO DATA — Anisha Sharma
//  Edit the arrays below to add more certificates / projects.
// ============================================================

export const profile = {
  name: "Anisha Sharma",
  firstName: "Anisha",
  lastName: "Sharma",
  title: "Frontend Developer",
  tagline:
    "Building modern, responsive and scalable web applications with React.",
  bio: "I'm a frontend developer and MCA graduate who crafts elegant, performant web experiences. I blend clean code with thoughtful design — turning ideas into pixel-perfect, accessible interfaces. Beyond the screen, I'm a published poet who finds rhythm in both syntax and verse.",
  location: "Shegaon, Maharashtra, India",
  email: "aneesha2806@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/anishasharma2806",
    linkedin: "https://linkedin.com/in/anishasharma28",
  },
};

// ------------------------------------------------------------
//  FRONTEND DEVELOPMENT — Skills (1st priority)
//  👉 Add more skills to the arrays below.
// ------------------------------------------------------------
export const skillCategories = [
  {
    category: "Frontend",
    icon: "Code2",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
    ],
  },
  {
    category: "UI / UX",
    icon: "PenTool",
    skills: [
      { name: "Figma", icon: "SiFigma" },
      { name: "Accessibility", icon: "TbAccessible" },
      { name: "Google Stitch", icon: "SiGoogle" },
      { name: "SEO Optimization", icon: "FaSearchengin" },
    ],
  },
  {
    category: "Languages",
    icon: "Layers",
    skills: [
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    category: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git / GitHub", icon: "SiGithub" },
      { name: "Vite", icon: "SiVite" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Node.js", icon: "SiNodedotjs" },
    ],
  },
  {
    category: "AI Development",
    icon: "Sparkles",
    skills: [
      { name: "ChatGPT", icon: "SiOpenai" },
      { name: "Google Antigravity", icon: "SiGoogle" },
      { name: "OpenAI Codex", icon: "SiOpenai" },
      { name: "Prompt Engineering", icon: "FaRobot" },
      { name: "AI-assisted Dev", icon: "FaLaptopCode" },
    ],
  },
];

export const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Figma",
  "Google Stitch",
  "Accessibility",
  "SEO",
  "Git",
  "Vite",
  "Vercel",
  "Node.js",
  "Supabase",
  "ChatGPT",
  "Google Antigravity",
  "OpenAI Codex",
  "Prompt Engineering",
];

// ------------------------------------------------------------
//  EXPERIENCE
// ------------------------------------------------------------
export const experience = [
  {
    role: "Web Developer Intern",
    company: "WordLane Tech (Remote)",
    period: "Aug 2025 — Present",
    description: "",
    highlights: [
      "Contributed to the Wise Life web application using frontend best practices — improved component structure, optimized rendering performance, and enhanced UI responsiveness across devices",
      "Applied debugging, SEO, and accessibility techniques to improve usability and performance",
      "Enhanced the official WordLane Publication website — refining the UI, optimizing responsiveness, and improving the overall user experience for a content-driven publishing platform",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Git"],
  },
  {
    role: "Full Stack Developer",
    company: "Cygnus Hedged Strategies Pvt. Ltd. (Indore)",
    period: "Nov 2024 — Apr 2025",
    description: "",
    highlights: [
      "Revamped the Oprate trading platform using React, TypeScript, and Tailwind CSS with a modular architecture",
      "Reduced page load time by 40% through performance optimization techniques",
      "Integrated REST APIs and WebSockets for real-time data handling and improved UI consistency across application modules",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "WebSockets",
      "Git",
    ],
  },
  {
    role: "Web Designer (Freelance)",
    company: "Calm Nest Website (Remote)",
    period: "Apr 2025",
    description: "",
    highlights: [
      "Designed and deployed a fully responsive website using Wix with mobile-first design principles",
      "Improved UI structure, navigation flow, and SEO through optimized layouts",
      "Delivered a professional, user-friendly experience for a mental health practice",
    ],
    tech: ["Wix", "Responsive Design", "SEO"],
  },
  {
    role: "Product Management Intern",
    company: "Cosmic365.AI (Remote)",
    period: "Feb 2024 - Jun 2024",
    description: "",
    highlights: [
      "Trained in Power Automate, MeisterTask, SEO, and Wix, contributing to workflow automation, product management, and website content optimization.",
      "Led SMART sessions to mentor interns on product listing, quality assurance, and process optimization using Power Automate.",
      " Automated repetitive tasks through basic scripting, improving efficiency while strengthening project coordination, presentation, and mentoring skills.",
    ],
    tech: ["Wix", "Responsive Design", "SEO", "Power Automate", "MeisterTask"],
  },
  {
    role: "Product Management Intern",
    company: "NeoDocto Inc. (Remote)",
    period: "Jan 2024 - Feb 2024",
    description: "",
    highlights: [
      "* Automated repetitive workflows using Power Automate and basic scripting, improving efficiency in data processing, file management, and product listing tasks.",
      "Conducted SMART mentoring sessions, guiding interns in product listing, quality assurance, and workflow optimization while collaborating on process improvement initiatives.",
      "Applied SEO, Wix, and digital content management skills to enhance online visibility, while strengthening communication, presentation, and mentoring abilities.",
    ],
    tech: ["Wix", "Responsive Design", "SEO", "Power Automate", "MeisterTask"],
  },
];

export const projectCategories = [
  "All",
  "Client",
  "Internship",
  "Personal (Major)",
  "Personal (Mini)",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  video: string;
  company: string;
  category: Exclude<ProjectCategory, "All">;
  featured: boolean;
}

// ------------------------------------------------------------
//  FEATURED PROJECTS — large showcase cards
// ------------------------------------------------------------
export const projects: Project[] = [
  // === CLIENT ===
  {
    title: "Student Election Management System",
    tagline: "Full-Stack Digital Voting Platform",
    description:
      "Developed a secure full-stack Student Election Management System for N. V. Chinmaya Vidyalaya, Shegaon. The application includes a responsive voting portal, protected administrator dashboard, real-time vote tracking, and a serverless backend powered by Supabase and Vercel. The live portfolio demonstrates the voter-facing experience using sample data, while administrative functionality is intentionally restricted as part of the production deployment for a real client.",
    image: "/screenshots/studentelection.png",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Supabase",
      "Vercel",
    ],
    liveUrl: "https://student-election-nvcv.vercel.app/",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/N.V.%20Chinmaya%20Vidyalaya%2C%20Shegaon%20%E2%80%94%20Student%20Council%20Elections%20-%20Google%20Chrome%202026-06-28%2015-56-28.mp4",
    company: "N. V. Chinmaya Vidyalaya, Shegaon",
    category: "Client",
    featured: true,
  },
  {
    title: "Psychologist Website",
    tagline: "Mental Health Practice Platform",
    description:
      "A client-focused professional website designed to build trust and clarity for mental health services. Emphasized calming visual hierarchy, accessibility, and responsive layouts to enhance user comfort and engagement across devices.",
    image: "/screenshots/calmnest2.png",
    tech: ["Wix", "SEO", "UX", "Responsive UI"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/calm_nest.mp4",
    company: "Freelance — Calm Nest",
    category: "Client",
    featured: false,
  },

  // === INTERNSHIP ===
  {
    title: "SoftwareLoop",
    tagline: "Product Presentation Platform",
    description:
      "A modern product presentation platform built with clean layouts and interactive elements to showcase software solutions effectively. Designed for readability, responsiveness, and strong visual engagement.",
    image: "/screenshots/cosmic.png",
    tech: ["Wix", "SEO"],
    liveUrl: "https://www.softwareloop.shop/",
    video: "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/cosmic.mp4",
    company: "COSMIC365",
    category: "Internship",
    featured: true,
  },
  {
    title: "WiseLife",
    tagline: "Scolar Panel And Solar Devices Platform",
    description:
      "A content-driven lifestyle platform focusing on structured typography, responsive layout systems, and user-friendly navigation for seamless content consumption across devices.",
    image: "/screenshots/wiselife.png",
    tech: ["React", "Content Layout", "Responsive"],
    liveUrl: "https://wise-life-p45.vercel.app/",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/wiselife.mp4",
    company: "WordLane Tech",
    category: "Internship",
    featured: false,
  },
  {
    title: "WordLane Publication Website",
    tagline: "Publishing Platform Enhancement",
    description:
      "Contributed to the development and enhancement of the official WordLane Publication website during my internship at WordLane Tech. Worked collaboratively to implement website improvements, refine the user interface, optimize responsiveness, and enhance the overall user experience for a professional, content-driven publishing platform.",
    image: "/screenshots/wordlane.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    liveUrl: "https://wordlanepublication.com/",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/Word%20Lane%20Publication%20-%20Turn%20Your%20Story%20Into%20A%20Published%20Book%20-%20Google%20Chrome%202026-06-28%2015-47-12.mp4",
    company: "WordLane Tech",
    category: "Internship",
    featured: false,
  },

  // === PERSONAL (MAJOR) ===
  {
    title: "FocusFlow",
    tagline: "Productivity Study Platform",
    description:
      "A productivity-focused study platform designed to help users manage focus sessions efficiently. Built with interactive UI components, structured workflows, and responsive layouts for improved user engagement.",
    image: "/screenshots/FocusFlow.png",
    tech: ["React", "Tailwind"],
    liveUrl: "https://focus-flow-study.vercel.app/",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/FocusFlow.mp4",
    company: "Personal Project",
    category: "Personal (Major)",
    featured: true,
  },
  {
    title: "CakeShop",
    tagline: "Bakery E-Commerce Storefront",
    description:
      "A visually engaging e-commerce style interface designed to simulate an online bakery experience with interactive product browsing and smooth UI transitions to enhance user engagement.",
    image: "/screenshots/Cake3.png",
    tech: ["React"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/cake_shop.mp4",
    company: "Personal Project",
    category: "Personal (Major)",
    featured: false,
  },

  // === PERSONAL (MINI) ===
  {
    title: "Memory Game",
    tagline: "Browser Card-Matching Game",
    description:
      "An interactive browser-based game built to strengthen logical thinking and user engagement through dynamic state handling, animations, and responsive design.",
    image: "/screenshots/memory1.png",
    tech: ["JavaScript", "Game Logic", "UI"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/memory_card.mp4",
    company: "Personal Project",
    category: "Personal (Mini)",
    featured: false,
  },
];

// ------------------------------------------------------------
//  OTHER PROJECTS — grid cards
// ------------------------------------------------------------
export const otherProjects = [
  {
    title: "WordLane Publication Website",
    description:
      "Contributed to the development and enhancement of the official WordLane Publication website during my internship at WordLane Tech. Worked collaboratively to implement website improvements, refine the user interface, optimize responsiveness, and enhance the overall user experience for a professional, content-driven publishing platform.",
    image: "/images/project-wordlane.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    liveUrl: "https://wordlanepublication.com/",
    video: "",
    company: "WordLane Tech",
  },
  {
    title: "WiseLife",
    description:
      "A content-driven lifestyle platform focusing on structured typography, responsive layout systems, and user-friendly navigation for seamless content consumption across devices.",
    image: "/images/project-psychologist.jpg",
    tech: ["React", "Content Layout", "Responsive"],
    liveUrl: "https://wise-life-p45.vercel.app/",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/wiselife.mp4",
    company: "WordLane Tech",
  },
  {
    title: "Psychologist Website",
    description:
      "A client-focused professional website designed to build trust and clarity for mental health services. Emphasized calming visual hierarchy, accessibility, and responsive layouts to enhance user comfort.",
    image: "/screenshots/calmnest2.png",
    tech: ["Wix", "SEO", "UX", "Responsive UI"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/calm_nest.mp4",
    company: "Freelance",
  },
  {
    title: "CakeShop",
    description:
      "A visually engaging e-commerce style interface designed to simulate an online bakery experience with interactive product browsing and smooth UI transitions to enhance user engagement.",
    image: "/screenshots/Cake3.png",
    tech: ["React"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/cake_shop.mp4",
    company: "Personal Project",
  },
  {
    title: "Memory Game",
    description:
      "An interactive browser-based game built to strengthen logical thinking and user engagement through dynamic state handling, animations, and responsive design.",
    image: "/screenshots/memory1.png",
    tech: ["JavaScript", "Game Logic", "UI"],
    liveUrl: "#",
    video:
      "https://z0c3lrhg6olnwbdx.public.blob.vercel-storage.com/memory_card.mp4",
    company: "Personal Project",
  },
];

// ------------------------------------------------------------
//  CERTIFICATES & ACHIEVEMENTS
//  👉 ADD MORE CERTIFICATES HERE — just append objects to the array.
//  Each: { title, issuer, year, category, description, icon }
//  category options: "Development", "Design", "AI", "Other"
// ------------------------------------------------------------
export const certificates = [
  // --- Development ---
  {
    title: "Web Design for Everybody Specialization",
    issuer: "University of Michigan — Coursera",
    year: "2023",
    category: "Development",
    description:
      "A comprehensive specialization covering HTML5, CSS3, responsive web design and web accessibility — building a complete foundation in modern web development from the ground up.",
    icon: "MonitorSmartphone",
    credentialUrl: "/certificates/michigan-specialization.pdf",
  },
  {
    title: "Web Design for Everybody Capstone",
    issuer: "University of Michigan",
    year: "2023",
    category: "Development",
    description:
      "The capstone project of the Web Design for Everybody specialization — applying responsive design, accessibility and modern web standards to a complete end-to-end project.",
    icon: "Trophy",
    credentialUrl: "/certificates/michigan-capstone.pdf",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta — Coursera",
    year: "2023",
    category: "Development",
    description:
      "Meta's foundational front-end development course — covering the web development ecosystem, core technologies, and the role of a front-end developer in modern teams.",
    icon: "Code2",
    credentialUrl: "/certificates/meta.pdf",
  },
  {
    title: "Web Design & Development",
    issuer: "Skill India Digital Hub",
    year: "2023",
    category: "Development",
    description:
      "A nationally-recognised training program covering the full spectrum of web design and development — from design principles to deployment.",
    icon: "Globe",
    credentialUrl: "/certificates/skillindia.pdf",
  },
  {
    title: "Full Stack Development",
    issuer: "ExcelR",
    year: "2024",
    category: "Development",
    description:
      "An intensive full-stack development program covering both frontend and backend technologies, databases, and end-to-end application architecture.",
    icon: "Layers",
    credentialUrl: "/certificates/fullstack.pdf",
  },
  {
    title: "Web Development Training",
    issuer: "Acmegrade",
    year: "2023",
    category: "Development",
    description:
      "Hands-on web development training focused on building real-world projects with HTML, CSS, JavaScript and modern frameworks.",
    icon: "Wrench",
    credentialUrl: "/certificates/Acmegrade.jpg",
  },
  {
    title: "HTML5",
    issuer: "Coursera — University of Michigan",
    year: "2023",
    category: "Development",
    description:
      "Certified mastery of HTML5 — semantic markup, modern elements, forms, multimedia integration and the structural foundation of web pages.",
    icon: "FileCode",
    credentialUrl: "/certificates/html.pdf",
  },
  {
    title: "CSS3",
    issuer: "Coursera — University of Michigan",
    year: "2023",
    category: "Development",
    description:
      "Certified proficiency in CSS3 — selectors, the box model, flexbox, grid, animations, transitions and modern responsive layout techniques.",
    icon: "Palette",
    credentialUrl: "/certificates/css.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "Coursera — University of Michigan",
    year: "2023",
    category: "Development",
    description:
      "Specialised training in responsive web design — media queries, mobile-first development, fluid grids and adaptive layouts for every device.",
    icon: "Smartphone",
    credentialUrl: "/certificates/responsive.pdf",
  },
  // --- Design / UX ---
  {
    title: "Foundations of User Experience",
    issuer: "Google — Coursera",
    year: "2023",
    category: "Design",
    description:
      "Google's UX foundations course — understanding user-centered design, empathy maps, personas, wireframes and the end-to-end UX design process.",
    icon: "PenTool",
    credentialUrl: "/certificates/googleux.pdf",
  },
  // --- AI ---
  {
    title: "Microsoft Copilot",
    issuer: "Skill Nation",
    year: "2024",
    category: "AI",
    description:
      "Training in Microsoft Copilot — leveraging AI assistance for productivity, code generation and intelligent workflow automation.",
    icon: "Bot",
    credentialUrl: "/certificates/copilot.pdf",
  },
  {
    title: "Claude AI",
    issuer: "Skill Nation",
    year: "2024",
    category: "AI",
    description:
      "Hands-on proficiency with Claude AI — prompt crafting, AI-assisted development and integrating large language models into creative and technical workflows.",
    icon: "Sparkles",
    credentialUrl: "/certificates/claude.pdf",
  },
  {
    title: "AI Prompt Engineering",
    issuer: "Freedom with AI",
    year: "2024",
    category: "AI",
    description:
      "Mastered the art of crafting effective prompts for large language models — covering structured prompting, chain-of-thought techniques and practical AI-assisted development workflows.",
    icon: "Bot",
    credentialUrl: "/certificates/freedom.pdf",
  },
  // --- Other / Recognition ---
  {
    title: "Internship Certificate",
    issuer: "COSMIC365.AI",
    year: "2024",
    category: "Other",
    description:
      "Official internship certificate recognising hands-on web development work, project delivery and professional contribution at COSMIC365.AI.",
    icon: "Briefcase",
    credentialUrl: "/certificates/cosmic.pdf",
  },
  {
    title: "Recommendation Letter",
    issuer: "COSMIC365.AI",
    year: "2025",
    category: "Other",
    description:
      "A formal letter of recommendation from COSMIC365.AI recognising technical skill, work ethic and valuable contribution during the internship tenure.",
    icon: "Award",
    credentialUrl: "/certificates/recommendation.pdf",
  },
  {
    title: "Internship Certificate",
    issuer: "NeoDocto Inc.",
    year: "2024",
    category: "Other",
    description:
      "Official internship certificate recognising hands-on web development work, project delivery and professional contribution at COSMIC365.AI.",
    icon: "Briefcase",
    credentialUrl: "/certificates/internship.pdf",
  },
  // 👇 Example of how to add more — copy this block and edit:
  // {
  //   title: "Your Certificate Name",
  //   issuer: "Issuer / Platform",
  //   year: "2024",
  //   category: "Development",
  //   description: "What you learned or achieved.",
  //   icon: "Award",
  // },
];

// ------------------------------------------------------------
//  EDUCATION
// ------------------------------------------------------------
export const education = [
  {
    degree: "MCA — Master of Computer Applications",
    institution: "Saraswati College, Shegaon",
    period: "2022 — 2024",
    description:
      "Postgraduate degree focused on advanced software development, web technologies, database management and application architecture.",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "D.M. Burungale College",
    period: "2018 — 2021",
    description:
      "Undergraduate foundation in computer science — programming fundamentals, data structures, algorithms and software engineering principles.",
  },
];

// ------------------------------------------------------------
//  CREATIVE WRITING — Poet & Writer (last priority)
//  Writing since January 2023 under the pen name "Anamika"
// ------------------------------------------------------------
export const publications = [
  {
    publisher: "Writer's Pocket",
    books: ["Picture Perfect", "Golden Glow"],
  },
  {
    publisher: "The Clouds of Thoughts",
    books: [
      "Bloomed, Broken & Beautiful",
      "Unbound",
      "Between Gulmohar & Gulzar",
      "Verses Lost in Lavender Skies",
    ],
  },
  {
    publisher: "Let's Write Publication",
    books: ["Shards", "Aschary", "The Space Between Us"],
  },
  {
    publisher: "Word Lane Publication",
    books: ["Whispers of Wind"],
  },
  {
    publisher: "Caroling Pen Publishing",
    books: ["The Half Century Pages"],
  },
  {
    publisher: "The Favourite Tales",
    books: [
      "Midnight Margins Vol 3",
      "Voices Unbound Vol 4",
      "Pages of Us",
      "Drum of Dawn Volume 1",
    ],
  },
  {
    publisher: "Versayla Publications",
    books: ["QALA: India's 50 Finest Voices"],
  },
  {
    publisher: "Blue Cloud Publications",
    books: ["She Raises, India Shines"],
  },
  {
    publisher: "Blue Star Publications",
    books: ["Bouquet of Words"],
  },
];

export const debutNovel = {
  title: "The Dance of Destiny",
  status: "In Progress",
  description:
    "Currently writing my debut novel — managing plot structure, pacing, and creative direction. A long-form literary journey weaving the same emotional depth of my poetry into narrative form.",
};

export const writingAwards = [
  {
    title: "Raising Quill Award",
    description: "Recognising excellence in poetic craft and literary voice.",
  },
  {
    title: "Clarion Laureate Award",
    description:
      "A distinguished honour for outstanding contribution to poetry.",
  },
  {
    title: "Top 500 Poets — Blue Star Festival",
    description:
      "Ranked among the top 500 poets at the prestigious Blue Star Festival.",
  },
];

export const writingStats = [
  { label: "Publications", value: "19" },
  { label: "Publishers", value: "9" },
  { label: "Literary Awards", value: "3" },
  { label: "Writing Since", value: "2023" },
];

// Writing disciplines & pen name
export const writingInfo = {
  penName: "Anamika",
  writingSince: "January 2023",
  disciplines: [
    {
      title: "Poetry",
      description:
        "19 publications across 9 publishing houses — exploring love, loss, identity and the quiet spaces in between, written under the pen name Anamika.",
      icon: "Feather",
    },
    {
      title: "Novel Writing",
      description:
        'Currently writing my debut novel "The Dance of Destiny" — managing plot structure, pacing, and creative direction.',
      icon: "BookOpen",
      badge: "In Progress",
    },
    {
      title: "Content Writing",
      description:
        "Blogs and academic writing — crafting structured, research-driven content with clarity, voice and purpose across digital and academic platforms.",
      icon: "FileText",
    },
  ],
  contentSamplesUrl:
    "https://drive.google.com/drive/folders/1XjVuPKJCnqAnYUwY4-m46hMv4Ipzl8yd?usp=sharing",
};
