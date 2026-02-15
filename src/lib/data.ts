export interface Project {
  id: string;
  name: string;
  category: string[];
  image: string;
  gif: string;
  description: {
    en: string;
    es: string;
  };
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export interface Company {
  name: string;
  logo: string;
}

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5", category: "frontend" },
  { name: "CSS3", icon: "css3", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "Redux", icon: "redux", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  { name: "Sass", icon: "sass", category: "frontend" },
  { name: "Vite", icon: "vite", category: "frontend" },
  { name: "Astro", icon: "astro", category: "frontend" },
  { name: "React Native", icon: "react", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "Python", icon: "python", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "MySQL", icon: "mysql", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend" },
  { name: "MongoDB", icon: "mongodb", category: "backend" },
  { name: "Firebase", icon: "firebase", category: "backend" },
  { name: "Git", icon: "git", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "AWS", icon: "aws", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "Zustand", icon: "zustand", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Beverage Finder",
    category: ["all", "react"],
    image: "/images/projects/beverage-finder.jpg",
    gif: "/images/projects/beverage-finder.gif",
    description: {
      en: "A web app that allows users to find beverages information and their recipes",
      es: "Una aplicación web que permite a los usuarios encontrar información sobre bebidas y sus recetas",
    },
    tech: ["React"],
    github: "https://github.com/Hernan1ro/beverage-finder",
    demo: "https://beverage-finder.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    name: "GuitarLA",
    category: ["all", "react"],
    image: "/images/projects/guitarLA.jpg",
    gif: "/images/projects/guitarLA.gif",
    description: {
      en: "A website for GuitarLA, a guitar store with blogs, courses and more",
      es: "Un sitio web para GuitarLA, una tienda de guitarras con blogs, cursos y más",
    },
    tech: ["React", "Next.js", "CSS"],
    github: "https://github.com/Hernan1ro/GitarLA-app",
    demo: "https://guitarla-next-hernan1ro.vercel.app/",
    featured: true,
  },
  {
    id: "3",
    name: "USA Machinery",
    category: ["all", "react"],
    image: "/images/projects/USAmachinery.jpg",
    gif: "/images/projects/USAMachinery.gif",
    description: {
      en: "Website of USA Machinery Company — buy/rent machinery and get different services",
      es: "Sitio web de USA Machinery Company — compra/alquila maquinaria y obtén diferentes servicios",
    },
    tech: ["React", "CSS"],
    github: "https://github.com/Hernan1ro",
    demo: "https://amazing-kirch-7a99e6.netlify.app/",
    featured: true,
  },
  {
    id: "4",
    name: "FinAntApp",
    category: ["all", "react"],
    image: "/images/projects/Finantapp.jpg",
    gif: "/images/projects/Finantapp.gif",
    description: {
      en: "Track your ant expenses and improve your personal finances",
      es: "Rastrea tus gastos hormiga y mejora tus finanzas personales",
    },
    tech: ["React", "Redux", "Firebase", "Chart.js"],
    github: "https://github.com/Hernan1ro/Budget-manager-app",
    demo: "https://angry-fermat-bc349f.netlify.app/",
    featured: true,
  },
  {
    id: "5",
    name: "React Shop",
    category: ["all", "react"],
    image: "/images/projects/yard-sale.jpg",
    gif: "/images/projects/yard-sale.gif",
    description: {
      en: "An E-commerce demo built in React.js using an external API to get the data",
      es: "Un demo de E-commerce construido en React.js usando una API externa para obtener los datos",
    },
    tech: ["React", "Sass", "JavaScript"],
    github: "https://github.com/Hernan1ro/react-shop",
    demo: "https://shopreact.xyz/",
    featured: true,
  },
  {
    id: "6",
    name: "Petgram",
    category: ["all", "react"],
    image: "/images/projects/petgram.jpg",
    gif: "/images/projects/petgram.gif",
    description: {
      en: "Social media like Instagram but created for pets",
      es: "Red social como Instagram pero creada para mascotas",
    },
    tech: ["React", "Styled Components", "Sass"],
    github: "https://github.com/Hernan1ro/Petgram",
    demo: "https://peaceful-bartik-228a2a.netlify.app/",
    featured: true,
  },
  {
    id: "7",
    name: "Budget Manager App",
    category: ["all", "react"],
    image: "/images/projects/budget-manager.png",
    gif: "/images/projects/budget-manager.gif",
    description: {
      en: "A web app that helps you to track and analyze your personal budget",
      es: "Una aplicación web que te ayuda a rastrear y analizar tu presupuesto personal",
    },
    tech: ["React", "CSS"],
    github: "https://github.com/Hernan1ro/budget-control-app",
    demo: "https://friendly-bhabha-bbe9e2.netlify.app/",
  },
  {
    id: "8",
    name: "Travel Agency Web",
    category: ["all", "node"],
    image: "/images/projects/travel-agency.jpg",
    gif: "/images/projects/travel-agency.gif",
    description: {
      en: "Book your trip to the most beautiful places in the world",
      es: "Reserva tu viaje a los lugares más hermosos del mundo",
    },
    tech: ["Node.js", "MySQL", "Express", "CSS"],
    github: "https://github.com/Hernan1ro/TravelAgency",
    demo: "https://cryptic-brushlands-37446.herokuapp.com/",
  },
  {
    id: "9",
    name: "Gatsby Hotel",
    category: ["all", "react"],
    image: "/images/projects/gatsby-hotel.jpg",
    gif: "/images/projects/gatsby-hotel.gif",
    description: {
      en: "A demo project using Gatsby and React to create a website for a hotel",
      es: "Un proyecto demo usando Gatsby y React para crear un sitio web de hotel",
    },
    tech: ["React", "Gatsby", "CSS"],
    github: "https://github.com/Hernan1ro/Gatsby-hotel",
    demo: "https://wizardly-gates-c4ed08.netlify.app/",
  },
  {
    id: "10",
    name: "Cryptocurrency Query",
    category: ["all", "javascript"],
    image: "/images/projects/cripto-query.png",
    gif: "/images/projects/cripto-query.gif",
    description: {
      en: "Query the most popular cryptocurrencies in the world",
      es: "Consulta las criptomonedas más populares del mundo",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/Cryptocurrency-query",
    demo: "https://determined-goldberg-b71032.netlify.app/",
  },
  {
    id: "11",
    name: "Store API REST",
    category: ["all", "node"],
    image: "/images/projects/store-api.png",
    gif: "/images/projects/store-api.gif",
    description: {
      en: "API REST with Express.js that works as a database for a demo project",
      es: "API REST con Express.js que funciona como base de datos para un proyecto demo",
    },
    tech: ["Node.js", "Express", "JavaScript"],
    github: "https://github.com/Hernan1ro/my-store",
    demo: "https://secret-shelf-81091.herokuapp.com/api/v1/products",
  },
  {
    id: "12",
    name: "Conf Merch",
    category: ["all", "react"],
    image: "/images/projects/conf-merch.png",
    gif: "/images/projects/conf-merch.gif",
    description: {
      en: "Website for merch with a demo button linked to PayPal to simulate the buying process",
      es: "Sitio web de merchandising con un botón demo vinculado a PayPal para simular el proceso de compra",
    },
    tech: ["React", "CSS"],
    github: "https://github.com/Hernan1ro/conf-merch",
    demo: "https://conf-merch-6dce5.web.app/",
  },
  {
    id: "13",
    name: "Car Insurance Calculator",
    category: ["all", "javascript"],
    image: "/images/projects/car-budget-calculator.png",
    gif: "/images/projects/car-budget-calculator.gif",
    description: {
      en: "Quote your car insurance depending on its brand, year, and origin",
      es: "Cotiza tu seguro de auto dependiendo de su marca, año y origen",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/Car_insurance_quote",
    demo: "https://thirsty-thompson-4133e4.netlify.app/",
  },
  {
    id: "14",
    name: "Weather API Index",
    category: ["all", "javascript"],
    image: "/images/projects/weather-page.png",
    gif: "/images/projects/weather-page.gif",
    description: {
      en: "Real-time weather information using a weather API",
      es: "Información del clima en tiempo real usando una API del clima",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/Weather-API-Index",
    demo: "https://admiring-wiles-051b4f.netlify.app/",
  },
  {
    id: "15",
    name: "Loan Calculator",
    category: ["all", "javascript"],
    image: "/images/projects/Loan-calculator.png",
    gif: "/images/projects/Loan-calculator.gif",
    description: {
      en: "A web calculator that helps you to calculate your loans",
      es: "Una calculadora web que te ayuda a calcular tus préstamos",
    },
    tech: ["React", "CSS"],
    github: "https://github.com/Hernan1ro/loan-app",
    demo: "https://dazzling-kilby-a7bad1.netlify.app/",
  },
  {
    id: "16",
    name: "Platzi Video",
    category: ["all", "react"],
    image: "/images/projects/Platzi-video.png",
    gif: "/images/projects/Platzi-video.gif",
    description: {
      en: "Website made with React.js, Redux, and React-router",
      es: "Sitio web hecho con React.js, Redux y React-router",
    },
    tech: ["React", "Redux", "CSS"],
    github: "https://github.com/Hernan1ro/VideoStream",
    demo: "https://kind-thompson-871be5.netlify.app/",
  },
  {
    id: "17",
    name: "Car Seeker",
    category: ["all", "javascript"],
    image: "/images/projects/Car-seeker.png",
    gif: "/images/projects/Car-seeker.gif",
    description: {
      en: "Sort cars by brand, year, price and other characteristics",
      es: "Ordena autos por marca, año, precio y otras características",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/car-seeker/tree/master",
    demo: "https://dazzling-bassi-7fca28.netlify.app/",
  },
  {
    id: "18",
    name: "Task Manager",
    category: ["all", "javascript"],
    image: "/images/projects/task-manager.png",
    gif: "/images/projects/task-manager.gif",
    description: {
      en: "Organize your to-do list with this simple app made with vanilla JS",
      es: "Organiza tu lista de tareas con esta app hecha con JavaScript vanilla",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/Lista-de-tareas",
    demo: "https://hernan1ro.github.io/Lista-de-tareas/",
  },
  {
    id: "19",
    name: "BlackJack Game",
    category: ["all", "javascript"],
    image: "/images/projects/blackjack.png",
    gif: "/images/projects/blackjack.gif",
    description: {
      en: "The BlackJack game built with vanilla JavaScript to test your luck",
      es: "El juego de BlackJack construido con JavaScript vanilla para probar tu suerte",
    },
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Hernan1ro/blackjack-game",
    demo: "https://modest-poincare-34531d.netlify.app/",
  },
];

export const companies: Company[] = [
  { name: "SOFTIX S.A.S", logo: "/images/companies/softix.svg" },
  { name: "Sabia Soluciones", logo: "/images/companies/sabia.svg" },
  { name: "Customer Solutions", logo: "/images/companies/customer-solutions.svg" },
];
