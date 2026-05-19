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

const heroSkillItems = [
  { name: "Next JS", color: "#000000", textColor: "#ffffff" },
  { name: "Javascript", color: "#F7DF1E", textColor: "#000000" },
  { name: "Node JS", color: "#339933", textColor: "#ffffff" },
  { name: "Claude", color: "#D97757", textColor: "#ffffff" },
  { name: "a11y", color: "#0a0f14", textColor: "#ffffff" },
] as const;

const socialHoverColors = {
  LinkedIn: "#0A66C2",
  Email: "#EA4335",
  GitHub: "#000000",
} as const;

const shared = {
  logo: { name: "ecradev", suffix: "/>" },
  socials,
  heroSkillItems,
  socialHoverColors,
} as const;

export default shared;
