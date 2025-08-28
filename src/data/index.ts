import AstroIcon from "@icons/AstroIcon.astro";
import NodeIcon from "@icons/NodeIcon.astro";
import ReactIcon from "@icons/ReactIcon.astro";
import ReactNativeIcon from "@icons/ReactNativeIcon.astro";
import SqlIcon from "@icons/SqlIcon.astro";
import TailwindIcon from "@icons/TailwindIcon.astro";
import TypescriptIcon from "@icons/TypescriptIcon.astro";

export const TAGS = {
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  REACT: {
    name: "React.js",
    icon: ReactIcon,
  },
  REACTNATIVE: {
    name: "React Native",
    icon: ReactNativeIcon
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  NODEJS: {
    name: "Node.js",
    icon: NodeIcon,
  },
  SQL: {
    name: "PostgreSQL",
    icon: SqlIcon,
  },
  TAILWIND: {
    name: "TailwindCSS",
    icon: TailwindIcon,
  },
};

export const PROJECTS = [
  {
    title: "Ferretería Bonilla – Reclutamiento Inteligente",
    description:
      "Plataforma de selección de personal que utiliza inteligencia artificial para analizar CVs y un Chatbot interactivo para guiar a los candidatos, optimizando el proceso de contratación y mejorando la experiencia del usuario. En este proyecto trabajé como FullStack Developer, implementando tanto la lógica del frontend con React y Tailwind como la integración con APIs de análisis de CV basadas en IA.",
    link: null,
    github: "https://github.com/cris-rod96/ferreteria-bonilla-lm-client",
    image: "/images/ferreteria-bonilla-client.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    platform: "Web",
    category: "Profesional",
    status: "Completado"
  },
  {
    title: "Tykkera – Gestión de Tickets Simplificada",
    description:
      "Plataforma que facilita la administración de tickets de mesa de ayuda para empresas de reparación y mantenimiento de equipos tecnológicos, simplificando procesos complejos y mejorando la eficiencia operativa. Formé parte del equipo de backend, trabajando en la implementación de APIs, manejo de bases de datos y optimización de la lógica de tickets para garantizar rapidez y fiabilidad en la plataforma.",
    link: "https://front-tikkerly.vercel.app/",
    github: "https://github.com/Tikkerly/Front-Tikkerly",
    image: "/images/tykkera.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    platform: "Web",
    category: "Profesional",
    status: "Completado"
  },
  {
    title: "ShoeKingdom – Tienda Online de Zapatillas",
    description:
      "Plataforma de comercio electrónico especializada en zapatillas de alta calidad, que ofrece una amplia selección de marcas reconocidas y diseños exclusivos. La tienda está diseñada para brindar a los usuarios una experiencia de compra fluida, destacando comodidad, durabilidad y estilo en cada producto. En este proyecto participé como FullStack Developer, implementando la lógica del frontend con React y Tailwind, optimizando la navegación, la visualización de productos y la integración con el carrito de compras y pasarelas de pago.",
    link: "https://shoe-kingdom-ae164.web.app/", // reemplaza con el link real
    github: "https://github.com/PF-grupo2/pf-henry-frontend", // reemplaza con el repositorio real
    image: "/images/shoe-kigndom.png", // reemplaza con la imagen real
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODEJS, TAGS.SQL],
    platform: "Web",
    category: "Profesional",
    status: "Completado"

  },
  {
    title: "Codify – Gamificación para Aprender Programación",
    description:
      "Aplicación móvil que utiliza la gamificación para enseñar programación de manera interactiva y divertida. Está dirigida a docentes y estudiantes de Ingeniería en Informática y Sistemas Computacionales de la Universidad Técnica de Cotopaxi, facilitando el aprendizaje mediante retos, juegos y ejercicios prácticos. En este proyecto trabajé como FullStack Developer, desarrollando el frontend con React Native, implementando APIs en Node.js y gestionando la base de datos en PostgreSQL para asegurar una experiencia de usuario fluida y eficiente.",
    link: null,
    github: "https://github.com/usuario/codify", // reemplaza con el repositorio real
    image: "/images/codify.png", // reemplaza con la imagen real
    tags: [TAGS.REACTNATIVE, TAGS.NODEJS, TAGS.SQL],
    platform: "Móvil",
    category: "Académico",
    status: "Completado"

  }, {
    title: "Mega System – Gestión de Ventas con BI",
    description:
      "Aplicación móvil desarrollada en React Native para la gestión integral de la información de ventas de Mega System. La app integra herramientas de Business Intelligence (BI) que permiten a los usuarios analizar datos, optimizar la toma de decisiones y mejorar la eficiencia operativa. En este proyecto trabajé como FullStack Developer, implementando el frontend con React Native, conectando APIs en Node.js y gestionando bases de datos PostgreSQL para asegurar un flujo de información confiable y ágil.",
    link: null,
    github: "https://github.com/usuario/mega-system", // reemplaza con el repositorio real
    image: "/images/mega-system.png", // reemplaza con la imagen real
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.SQL],
    platform: "Móvil",
    category: "Profesional",
    status: "Completado"

  },
  {
    title: "Amigo Secreto – Organización de Sorteos Online",
    description:
      "Aplicación web diseñada para facilitar la organización de sorteos de amigo secreto entre grupos de amigos o familiares. Los usuarios pueden registrarse, crear una sala y compartir un código único para invitar participantes. Es posible definir una fecha y hora límite para registrarse, momento en el que el sistema realiza automáticamente el sorteo y notifica a cada participante por correo electrónico. Además, los usuarios pueden añadir sus gustos y deseos para que el regalo sea más acertado y pueden indicar personas con las que no desean ser emparejados, evitando conflictos. En este proyecto trabajé como FullStack Developer utilizando React, Node.js y PostgreSQL para garantizar una experiencia fluida y segura.",
    link: null,
    github: "https://github.com/usuario/amigo-secreto", // reemplaza con tu repositorio real
    image: null, // reemplaza con la imagen que uses
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.SQL, TAGS.TYPESCRIPT],
    platform: "Web",
    category: "Personal",
    status: "En proceso"

  }, {
    title: "Portfolio – Presentación de Proyectos",
    description: "Mi portfolio personal donde muestro mis proyectos web y móviles desarrollados en React, React Native, Node.js y otras tecnologías. Incluye proyectos académicos, freelance y personales.",
    link: "https://rodris-porfolio.vercel.app/",
    github: "https://github.com/cris-rod96/rodris-porfolio",
    image: "/images/porfolio.png",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    platform: "Web",
    category: "Personal",
    status: "En proceso"
  }

];



