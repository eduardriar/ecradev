
const socials = {
  linkedin: {
    name: "LinkedIn" as const,
    href: "https://www.linkedin.com/in/eduardrincon/",
  },
  email: {
    name: "Email" as const,
    href: "mailto:camilo.rincon357@gmail.com",
  },
  github: {
    name: "GitHub" as const,
    href: "https://github.com/eduardriar",
  },
};

const content = {
  metadata: {
    home: {
      title: "Eduard Rincon | Portfolio | Frontend Developer",
      description:
        "Personal portfolio of a Frontend Developer — showcasing projects, skills, and dev notes.",
    },
    blog: {
      title: "Dev Notes | Portfolio",
      description: "Thoughts and notes on frontend development.",
    },
    contact: {
      title: "Contact | Portfolio",
      description: "Get in touch — I'd love to hear from you.",
    },
  },
  nav: {
    links: ["Skills", "Expertise", "Blog"],
    contact: "Contact Me",
  },
  logo: {
    name: "ecradev",
    suffix: "/>",
  },
  hero: {
    heading: "Eduard Rincon",
    tagline:
      "I craft web experiences with clean code, sharp design, and a bit of magic.",
    cards: {
      yearsOfExp: { title: "Years of Exp", value: "4+" },
      projects: { title: "Projects", value: "6" },
      skills: {
        title: "Skills",
        items: [
          { name: "Next JS", color: "#000000", textColor: "#ffffff" },
          { name: "Javascript", color: "#F7DF1E", textColor: "#000000" },
          { name: "Node JS", color: "#339933", textColor: "#ffffff" },
          { name: "Claude", color: "#D97757", textColor: "#ffffff" },
          { name: "a11y", color: "#0a0f14", textColor: "#ffffff" }
        ],
      },
    },
  },
  experience: {
    title: "Digital Contributions For",
    items: [
      {
        role: "Software Engineer",
        company: "EPAM Systems",
        year: "2024 - Now",
        description: [
          "Integrate Artificial Intelligence as a chatbot, so the user could ask about the differences about plans.",
          "Proven records of success when improving previous features that were damaged. This improvement was noted upgrading libraries and fixing all the side effects related.",
          "Propose and develop new features having impact in the product on UI view and user interaction with components.",
          "Maintain key features of the main application.",
        ],
      },
      {
        role: "FrontEnd Engineer",
        company: "Capgemini",
        year: "2023 - 2024",
        description: [],
      },
      {
        role: "Web UI SSr Adv",
        company: "Globant",
        year: "2021 - 2023",
        description: [
          "Created web components in React JS, Next JS, and its corresponding unit test in RTL reaching 100% of the requirements they were asking for.",
          "Speed up by 15% data delivery by building new solutions to the data collection library to send user interaction info to analytics services.",
          "Reduce by 90% the time dedicated to creating new complex config files manually by designing an automated process in Node JS to create new complex config files.",
        ],
      },
      {
        role: "Application Development Associate",
        company: "Accenture",
        year: "2020 - 2021",
        description: [
          "Accelerated by 70% the application speed and improved the user experience by upgrading the main web application of bank services from Angular 2 to Angular 8.",
          "Implemented security and analytics libraries to this upgrade.",
          "Integrated the application with backend microservices.",
        ],
      },
    ],
  },
  skills: {
    label: "WHAT I DO",
    title: "Skills & Expertise",
    items: [
      { name: "React JS", description: "Component-based UIs with hooks and modern patterns" },
      { name: "Next.js", description: "Full-stack React framework with SSR and SSG" },
      { name: "Tailwind CSS", description: "Utility-first CSS for rapid UI development" },
      { name: "JavaScript", description: "ES6+, async patterns, and DOM manipulation" },
      { name: "Git & GitHub", description: "Version control and collaborative workflows" },
      { name: "REST APIs", description: "API integration and data fetching strategies" },
      { name: "Responsive Design", description: "Mobile-first layouts across all devices" },
      { name: "TypeScript", description: "Type-safe JavaScript for scalable applications" },
      { name: "NodeJS", description: "Server-side JavaScript runtime for backend development" },
      { name: "a11y", description: "Semantic HTML, ARIA roles, and keyboard navigation for inclusive interfaces" },
    ],
  },
  about: {
    label: "WHO I AM",
    title: "About Me",
    photoAlt: "Your Photo",
    paragraphs: [
      "I'm a Frontend Developer with a passion for creating clean, intuitive, and performant web applications. I enjoy turning complex problems into simple, beautiful designs.",
      "With experience across the modern JavaScript ecosystem, I specialize in React and Next.js to deliver production-ready applications that are accessible and responsive.",
      "When I'm not coding, you can find me writing about web development on my blog, exploring new technologies, or contributing to open-source projects.",
    ],
  },
  blog: {
    heading: "Dev Notes",
    intro: "Thoughts, tutorials, and notes on frontend development.",
    emptyState: "No posts yet. Check back soon!",
    backLink: "Back to Dev Notes",
  },
  contact: {
    heading: "Contact",
    socials: [
      { ...socials.linkedin, hoverColor: "#0A66C2" },
      { ...socials.email, hoverColor: "#EA4335" },
      { ...socials.github, hoverColor: "#000000" },
    ],
  },
  welcome: {
    scrollHint: "<!-- WARNING: scroll required to proceed ,%ICON%, -->",
    textToSprite: '<h1 class="portafolio">Welcome to my dev journey</h1>',
    textToSpriteMobile: "Welcome to my dev journey",
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    submitButton: "Send Message",
    sendingButton: "Sending...",
    successMessage: "Message sent successfully!",
    errorMessage: "Failed to send. Please try again or email me directly.",
  },
  footer: {
    copyright: "Portfolio. All rights reserved. ecradev />",
    socials: [socials.github, socials.linkedin, socials.email],
  },
} as const;

export default content;
