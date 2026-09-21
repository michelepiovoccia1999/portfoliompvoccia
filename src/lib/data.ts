export const siteConfig = {
  name: "Michele Pio Voccia",
  role: "Software Engineer",
  tagline: "Creo applicazioni web moderne, scalabili e orientate al business.",
  email: "michelepiovoccia@gmail.com",
  linkedin: "https://www.linkedin.com/in/michele-pio-voccia-b65922227/",
  github: "https://github.com/michelepiovoccia1999?tab=repositories",
};

export const about = {
  description:
    "Sviluppatore con esperienza nella progettazione e sviluppo di applicazioni web . Specializzato in architetture moderne e soluzioni backend scalabili. Approccio orientato ai risultati con attenzione alla qualità del codice e all'esperienza utente.",
  highlights: [
    "Architetture moderne e scalabili",
    "Codice pulito e manutenibile",
    "Approccio orientato al business",
  ],
};

export const skills = {
  Backend: [
    { name: "Java", icon: "☕️" },
    { name: "Python", icon: "🐍" }
  ],
  Frontend: [
    { name: "Next.js", icon: "🔺" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Oracle", icon: "⭕️" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳" },
    { name: "GitHub", icon: "⚙️" },
    { name: "Vercel", icon: "▵" },
  ],
};

export const experiences = [
  {
    company: "Minsait S.P.A.",
    role: "Software Engineer",
    period: "2023 – Presente",
    results: [
      "Analisi e sviluppo di soluzioni Beck-End",
      "Architettura microservizi per 100k+ utenti",
      "CI/CD pipeline con deploy automatizzati",
    ],
  },
  {
    company: "I.T. Svil",
    role: "Stage Java Back-end Developer",
    period: " NOV 2022 – MAG 2023",
    results: [
      "Sviluppo di 15+ progetti web per clienti enterprise",
      "Migrazione da legacy a stack moderno",
      "Mentoring di 3 developer junior",
    ],
  }
];

export const education = [
  {
    institution: "Università degli studi di Salerno",
    degree: "Laurea triennale in Informatica",
    year: "2023",
    grade: "96/110",
  },
];

export const projects = [
  {
    title: "LoBag | Borse artigialnali fatte a mano",
    description: "Piattaforma e-commerce per l'acquisto di borse fatte a mano in filato.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Java"],
    demo: "https://lobag.vercel.app/",
    image: "images/Logo_brand.png",
  },
  
  {
    title: "Ghisa | Spingi più che puoi",
    description: "Web app per la gestione delle proprie scheda di allenamento e dei propri progressi.",
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    demo: "https://ghisa-delta.vercel.app/",
    image: "images/ghisa-icon-1024.png",
  },

  {
    title: "Turniamo | Gestisci le tue ore lavorative",
    description: "Web app per la gestione dei propri turni lavorativi.",
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    demo: "https://turniamo.vercel.app",
    image: "images/turni-e-ore-icona-app_1.png",
  },

  {
    title: "Sana | Cosa si mangia di buono oggi?",
    description: "Web app per la gestione dei pasti e dei progressi alimentari.",
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    demo: "https://sana-ivory.vercel.app",
    image: "images/sana-app-icon-2.png",
  },
];

export const stats = [
  { label: "Anni di esperienza", value: 3 },
  { label: "Progetti completati", value: 4 },
  { label: "Clienti soddisfatti", value: 3 },
  { label: "Tecnologie utilizzate", value: 10 },
];

export const testimonials = [
  {
    name: "Marco Rossi",
    role: "CEO, TechStartup",
    text: "Michele ha trasformato la nostra idea in un prodotto concreto in tempi record. Professionalità e competenza ai massimi livelli.",
    avatar: "MR",
  },
  {
    name: "Laura Bianchi",
    role: "Product Manager, Digital Corp",
    text: "Collaborare con Michele è stato un piacere. Attenzione ai dettagli, codice pulito e sempre proattivo nelle soluzioni.",
    avatar: "LB",
  },
  {
    name: "Andrea Verdi",
    role: "CTO, InnovateTech",
    text: "Un developer completo che capisce sia il lato tecnico che quello business. Lo raccomando senza riserve.",
    avatar: "AV",
  },
];
