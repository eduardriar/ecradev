const es = {
  metadata: {
    home: {
      title: "Eduard Rincon | Portafolio | Desarrollador Frontend",
      description:
        "Portafolio personal de un Desarrollador Frontend — proyectos, habilidades y notas de desarrollo.",
    },
    blog: {
      title: "Notas de Desarrollo | Portafolio",
      description: "Reflexiones y notas sobre desarrollo frontend.",
    },
    contact: {
      title: "Contacto | Portafolio",
      description: "Hablemos — me encantaría saber de ti.",
    },
  },
  nav: {
    links: ["Habilidades", "Experiencia", "Blog"],
    contact: "Contáctame",
  },
  hero: {
    heading: "Eduard Rincon",
    tagline:
      "Creo experiencias web con código limpio, diseño preciso y un toque de magia.",
    cards: {
      yearsOfExp: { title: "Años de Exp.", value: "4+" },
      projects: { title: "Proyectos", value: "6" },
      skills: { title: "Habilidades" },
    },
  },
  experience: {
    title: "Contribuciones Digitales Para",
    items: [
      {
        role: "Ingeniero de Software",
        company: "EPAM Systems",
        year: "2024 - Hoy",
        description: [
          "Integré Inteligencia Artificial en forma de chatbot, permitiendo a los usuarios consultar diferencias entre planes.",
          "Historial probado de éxito mejorando funcionalidades previas que estaban dañadas; logrado actualizando librerías y corrigiendo los efectos colaterales.",
          "Propuse y desarrollé nuevas funcionalidades con impacto en la vista UI del producto y en la interacción del usuario con los componentes.",
          "Mantuve funcionalidades clave de la aplicación principal.",
        ],
      },
      {
        role: "Ingeniero FrontEnd",
        company: "Capgemini",
        year: "2023 - 2024",
        description: [],
      },
      {
        role: "Web UI SSr Avanzado",
        company: "Globant",
        year: "2021 - 2023",
        description: [
          "Creé componentes web en React JS, Next JS, y sus pruebas unitarias en RTL alcanzando el 100% de los requisitos solicitados.",
          "Aceleré en un 15% la entrega de datos al construir nuevas soluciones para la librería de recolección que envía información de interacción del usuario a servicios de analítica.",
          "Reduje en un 90% el tiempo dedicado a crear nuevos archivos de configuración complejos al diseñar un proceso automatizado en Node JS.",
        ],
      },
      {
        role: "Asociado de Desarrollo de Aplicaciones",
        company: "Accenture",
        year: "2020 - 2021",
        description: [
          "Aceleré en un 70% la velocidad de la aplicación y mejoré la experiencia de usuario al migrar la aplicación web principal de servicios bancarios de Angular 2 a Angular 8.",
          "Implementé librerías de seguridad y analítica como parte de esta migración.",
          "Integré la aplicación con microservicios de backend.",
        ],
      },
    ],
  },
  skills: {
    label: "LO QUE HAGO",
    title: "Habilidades & Experiencia",
    items: [
      { name: "React JS", description: "UIs basadas en componentes con hooks y patrones modernos" },
      { name: "Next.js", description: "Framework React full-stack con SSR y SSG" },
      { name: "Tailwind CSS", description: "CSS utility-first para desarrollo rápido de interfaces" },
      { name: "JavaScript", description: "ES6+, patrones asíncronos y manipulación del DOM" },
      { name: "Git & GitHub", description: "Control de versiones y flujos de trabajo colaborativos" },
      { name: "REST APIs", description: "Integración de APIs y estrategias de obtención de datos" },
      { name: "Responsive Design", description: "Layouts mobile-first en todos los dispositivos" },
      { name: "TypeScript", description: "JavaScript con tipos para aplicaciones escalables" },
      { name: "NodeJS", description: "Runtime de JavaScript del lado del servidor para backend" },
      { name: "a11y", description: "HTML semántico, roles ARIA y navegación por teclado para interfaces inclusivas" },
    ],
  },
  about: {
    label: "QUIÉN SOY",
    title: "Sobre Mí",
    photoAlt: "Tu Foto",
    paragraphs: [
      "Soy un Desarrollador Frontend con pasión por crear aplicaciones web limpias, intuitivas y de alto rendimiento. Disfruto convirtiendo problemas complejos en diseños simples y hermosos.",
      "Con experiencia en el ecosistema moderno de JavaScript, me especializo en React y Next.js para entregar aplicaciones listas para producción que sean accesibles y responsivas.",
      "Cuando no estoy programando, me encontrarás escribiendo sobre desarrollo web en mi blog, explorando nuevas tecnologías o contribuyendo a proyectos open-source.",
    ],
  },
  blog: {
    heading: "Notas de Desarrollo",
    intro: "Reflexiones, tutoriales y notas sobre desarrollo frontend.",
    emptyState: "Aún no hay publicaciones. ¡Vuelve pronto!",
    backLink: "Volver a Notas de Desarrollo",
  },
  contact: {
    heading: "Contacto",
  },
  welcome: {
    scrollHint: "ADVERTENCIA: se requiere desplazarse para continuar ,%ICON%,",
    scrollHintMobile: "<!-- ADVERTENCIA: se requiere desplazarse para continuar ,%ICON%, -->",
    textToSprite: '<h1 class="portafolio">Bienvenido a mi viaje dev</h1>',
    textToSpriteMobile: "Bienvenido a mi viaje dev",
  },
  contactForm: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Tu mensaje...",
    submitButton: "Enviar Mensaje",
    sendingButton: "Enviando...",
    successMessage: "¡Mensaje enviado con éxito!",
    errorMessage: "Error al enviar. Intenta de nuevo o escríbeme directamente.",
  },
  footer: {
    copyright: "Portafolio. Todos los derechos reservados. ecradev />",
  },
};

export default es;
