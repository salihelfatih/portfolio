// Portfolio Data Structures
// This file contains all data for projects, repositories, and navigation

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  whatItDoes: string;
  myRole: string;
  keyDecisions: string[];
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  category?: 'Community & Solidarity' | 'AI & ML' | 'Money & Work' | 'Tools & Experiments';
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// Projects for the Work section - using your exact content
export const projects: Project[] = [
  {
    id: 'chapters',
    title: 'Chapters',
    oneLiner: 'Rate-limited social platform for thoughtful writers and readers',
    whatItDoes: 'Users can post one chapter per day, encouraging them to share more deliberate writing. Built to reduce content overload and foster a calm community of writers and readers.',
    myRole: 'Co-designed the social model and built the backend and frontend. Managed the rate-limiting logic and user notifications.',
    keyDecisions: [
      'Implemented per-user posting quotas to prevent spam and encourage reflection',
      'Used pgvector and semantic search for discovering related chapters and writers',
      'Designed content moderation features that scale with community growth'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'pgvector'],
    links: {
      demo: 'https://chapters-demo.netlify.app/',
      github: 'https://github.com/sakialabs/chapters'
    },
    category: 'AI & ML',
    image: '/assets/work/Chapters.png'
  },
  {
    id: 'flokr',
    title: 'fLOKr',
    oneLiner: 'Resource coordination platform for community resource sharing',
    whatItDoes: 'Connects newcomers and community groups to local resources, mentors and mutual aid networks. Manages referrals, shared items and mentorship opportunities via a multi-tenant system.',
    myRole: 'Architected and built the backend and mobile-ready frontend. Established data models for resources, requests and matching.',
    keyDecisions: [
      'Designed a hierarchical resource taxonomy to simplify discovery and reduce cognitive load',
      'Created a mentorship matching algorithm that considers availability, expertise and location',
      'Built multi-tenant architecture to support multiple organizations sharing the same infrastructure while keeping data isolated'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'React Native'],
    links: {
      demo: 'https://flokr.netlify.app',
      github: 'https://github.com/sakialabs/flokr'
    },
    category: 'AI & ML',
    image: '/assets/work/fLOKr.png'
  },
  {
    id: 'makana',
    title: 'Makana',
    oneLiner: 'Practice tracking platform for intentional personal development',
    whatItDoes: 'Enables individuals and small groups to define and track practices (habits, reflections, rituals) without gamification. Focuses on clarity, consistency and gentle reminders.',
    myRole: 'Designed and implemented the system across backend, database and UI. Worked on habit tracking logic and progress visualisation.',
    keyDecisions: [
      'Avoided traditional gamification, instead emphasising progress visibility and user autonomy',
      'Implemented data models that support flexible practice definitions (e.g., daily, weekly, streak-based)',
      'Built the interface to encourage reflection over streak chasing'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL'],
    links: {
      demo: 'https://makana-demo.netlify.app',
      github: 'https://github.com/sakialabs/makana'
    },
    category: 'Tools & Experiments',
    image: '/assets/work/Makana.png'
  },
  {
    id: 'nimbly',
    title: 'Nimbly',
    oneLiner: 'Grocery savings aggregator that surfaces personalised deals',
    whatItDoes: "Collects price data from nearby grocery stores and recommends clearance items and discounts based on the user's preferences. Helps budget-conscious shoppers save money without the complexity of coupons.",
    myRole: 'Designed and built the backend, pricing engine and user dashboard. Integrated data sources and maintained the deployment pipeline.',
    keyDecisions: [
      'Implemented a dynamic pricing index to normalise prices across stores and highlight true savings',
      'Built a recommendation engine that balances user preferences with deal novelty to avoid alert fatigue',
      'Designed the API to support both web and mobile clients from the same backend'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Scrapy'],
    links: {
      demo: 'https://nimbly-demo.netlify.app',
      github: 'https://github.com/sakialabs/nimbly'
    },
    category: 'AI & ML',
    image: '/assets/work/Nimbly.png'
  },
  {
    id: 'rezgenie',
    title: 'RezGenie',
    oneLiner: 'AI-powered resume advisor for job seekers',
    whatItDoes: "Automates resume critique by analysing structure and clarity while preserving the applicant's authentic voice. Provides actionable improvements and highlights skill gaps without imposing generic corporate language.",
    myRole: "Designed and built the full-stack system, integrating OpenAI's models with a FastAPI backend and Next.js frontend. Owned data processing, model integration, UI and deployment.",
    keyDecisions: [
      'Implemented semantic vector search to compare resumes against role descriptions',
      'Built a modular feedback engine to support additional scoring criteria without rewriting the core',
      'Designed the UX to encourage iterative editing rather than one-off submission'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    links: {
      demo: 'https://rezgenie.netlify.app',
      github: 'https://github.com/sakialabs/rezgenie'
    },
    category: 'Money & Work',
    image: '/assets/work/RezGenie.png'
  },
  {
    id: 'riseup',
    title: 'RiseUp',
    oneLiner: 'Event discovery and organizing platform built around chronological feeds',
    whatItDoes: 'Helps activists and community members find local events, initiatives and causes through a simple chronological feed. Prioritises fairness and transparency over algorithmic ranking.',
    myRole: 'Led backend design and frontend implementation. Integrated geolocation features and built the events search engine.',
    keyDecisions: [
      'Ordered feeds chronologically to avoid bias and increase trust',
      'Added geospatial queries to surface events near the user without requiring third-party map services',
      'Designed modular event schema to support recurring events and cross-organisation collaboration'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'PostGIS'],
    links: {
      demo: 'https://riseup-demo.netlify.app',
      github: 'https://github.com/sakialabs/riseup'
    },
    category: 'Money & Work',
    image: '/assets/work/RiseUp.png'
  },
  {
    id: 'seshio',
    title: 'Seshio',
    oneLiner: 'AI-powered session notes and insights for therapists',
    whatItDoes: 'Helps therapists capture session notes quickly and generate insights using AI. Reduces administrative burden while maintaining client privacy and professional standards.',
    myRole: 'Built the full-stack application including AI integration, note-taking interface, and secure data storage.',
    keyDecisions: [
      'Implemented end-to-end encryption for all client data',
      'Used AI to suggest themes and patterns across sessions while keeping therapist in control',
      'Designed offline-first architecture for reliability in various practice settings'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    links: {
      demo: 'https://seshio-demo.netlify.app',
      github: 'https://github.com/sakialabs/seshio'
    },
    category: 'Tools & Experiments',
    image: '/assets/work/Seshio.png'
  },
  {
    id: 'snakr',
    title: 'sNAKr',
    oneLiner: 'Shared household inventory platform that tracks stock levels using fuzzy data',
    whatItDoes: 'Keeps a shared fridge and pantry inventory by ingesting receipts and allowing approximate stock states ("low", "medium", "high"). Generates restock lists to reduce surprise shortages and food waste in multi-person households.',
    myRole: 'Led architecture and implementation end-to-end: database schema, ingestion pipeline, business logic and UI. Deployed and maintained the platform.',
    keyDecisions: [
      'Introduced fuzzy stock states to model uncertainty and reduce user friction when entering quantities',
      'Built receipt ingestion with optical character recognition (OCR) to minimise manual entry',
      'Designed the system as multi-tenant, isolating households while allowing shared items and reminders'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'OCR (Tesseract)'],
    links: {
      demo: 'https://snakr-demo.netlify.app',
      github: 'https://github.com/sakialabs/snakr'
    },
    category: 'AI & ML',
    image: '/assets/work/sNAKr.png'
  },
  {
    id: 'snda',
    title: 'sNDa',
    oneLiner: 'Support and gifting platform for children and communities.',
    whatItDoes: "sNDa lets families, volunteers, and donors coordinate support through wishlists, group contributions, and follow-up. It is designed for vulnerable kids and communities, with a focus on clarity, trust, and avoiding the feeling of being treated as a \"case\".",
    myRole: "Designed and built the first version of sNDa, including the data model for referrals and wishlists, the public story cards, and the basic contribution flows.",
    keyDecisions: [
      'Used structured referral and story cards so supporters see both needs and context without exposing sensitive details',
      'Separated public stories from private follow-up data for better privacy and safety',
      'Kept the contribution flow simple enough for low-bandwidth, mobile-first usage'
    ],
    stack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      demo: 'https://snda.netlify.app/en/',
      github: 'https://github.com/sakialabs/snda'
    },
    category: 'AI & ML',
    image: '/assets/work/sNDa.png'
  },
  {
    id: 'takia',
    title: 'Takia',
    oneLiner: 'Community-led food infrastructure that turns surplus into shared meals.',
    whatItDoes: "Takia connects donors, community kitchens, volunteers, and recipients to fight food insecurity and food waste. The platform helps route surplus food into community kitchens, track requests, and coordinate cooking and distribution in a way that respects dignity and real-world constraints.",
    myRole: "Co-designed the concept and built the initial product experience. Owned the system design, data model for kitchens and routes, donation workflows, and the core web app implementation.",
    keyDecisions: [
      'Modelled kitchens, donors, and routes as separate entities so food flows can be tracked across locations and time',
      'Focused the UI on what matters most in a crisis: who has surplus, who has capacity, and who needs support right now',
      'Kept the tech stack simple enough to be deployable in constrained environments while still allowing AI-assisted planning later'
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      demo: 'https://takia-demo.netlify.app/',
      github: 'https://github.com/sakialabs/takia'
    },
    category: 'AI & ML',
    image: '/assets/work/Takia.png'
  },
  {
    id: 'tapin',
    title: 'TapIn',
    oneLiner: 'Digital access passes that replace physical key fobs.',
    whatItDoes: "TapIn replaces building key fobs with secure wallet passes. Tenants store their access pass in Apple or Google Wallet and tap their phone to unlock the door. Property admins can issue, revoke, and update passes without reprinting cards or changing hardware.",
    myRole: "Designed and built the initial MVP for TapIn. Owned the access pass generation service, the admin dashboard for property managers, and the integration between the wallet passes and the access control API.",
    keyDecisions: [
      'Modelled buildings and units as a multi-tenant system so one deployment can serve multiple properties safely',
      'Used wallet passes instead of yet another mobile login to reduce friction for tenants and staff',
      'Designed a minimal audit log for access events so property managers can see basic history without a complex analytics layer'
    ],
    stack: ['Django', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      demo: 'https://tapin-demo.netlify.app/',
      github: 'https://github.com/sakialabs/tapin'
    },
    category: 'Tools & Experiments',
    image: '/assets/work/TapIn.png'
  },
  {
    id: 'zout',
    title: 'Zout',
    oneLiner: 'Minimalist football striking game focused on timing, accuracy, and feedback',
    whatItDoes: 'Zout is a lightweight football striking game where players take repeated shots and receive immediate visual feedback on accuracy and timing. The game is designed to be simple on the surface while emphasizing consistency, rhythm, and mastery through repetition.',
    myRole: 'Designed and built the game end-to-end. Owned gameplay logic, input handling, scoring mechanics, and visual feedback systems.',
    keyDecisions: [
      'Designed a real-time input and feedback loop focused on timing, accuracy, and shot consistency',
      'Focused on core mechanics over visual complexity to create a pure skill-based experience',
      'Implemented immediate visual and audio feedback to reinforce player actions and improve learning curve'
    ],
    stack: ['Godot', 'GDScript'],
    links: {
      github: 'https://github.com/sakialabs/zout'
    },
    category: 'Tools & Experiments',
    image: '/assets/work/Zout.png'
  }
];

// Navigation data
export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Work',
    href: '/work'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];
