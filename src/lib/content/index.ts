import shared from "./shared";
import en from "./en";
import es from "./es";

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export const defaultLocale: Locale = "en";

type Translation = typeof en;
const translations: Record<Locale, Translation> = { en, es };

export function getContent(locale: Locale) {
  const t = translations[locale] ?? translations[defaultLocale];

  return {
    metadata: t.metadata,
    nav: t.nav,
    logo: shared.logo,
    hero: {
      heading: t.hero.heading,
      tagline: t.hero.tagline,
      cards: {
        yearsOfExp: t.hero.cards.yearsOfExp,
        projects: t.hero.cards.projects,
        skills: {
          title: t.hero.cards.skills.title,
          items: shared.heroSkillItems,
        },
      },
    },
    experience: t.experience,
    skills: t.skills,
    about: t.about,
    blog: t.blog,
    contact: {
      heading: t.contact.heading,
      socials: [
        { ...shared.socials.linkedin, hoverColor: shared.socialHoverColors.LinkedIn },
        { ...shared.socials.email, hoverColor: shared.socialHoverColors.Email },
        { ...shared.socials.github, hoverColor: shared.socialHoverColors.GitHub },
      ],
    },
    welcome: t.welcome,
    contactForm: t.contactForm,
    footer: {
      copyright: t.footer.copyright,
      socials: [shared.socials.github, shared.socials.linkedin, shared.socials.email],
    },
  };
}

export type Content = ReturnType<typeof getContent>;
