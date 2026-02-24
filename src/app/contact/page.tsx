import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import content from "@/lib/content.json";

export const metadata: Metadata = {
  title: content.metadata.contact.title,
  description: content.metadata.contact.description,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-2 text-3xl font-bold">{content.contact.heading}</h1>
      <p className="mb-10 text-muted">
        {content.contact.intro}
      </p>

      <div className="grid gap-12 md:grid-cols-[1fr_auto]">
        <ContactForm />

        <div>
          <h2 className="mb-4 text-sm font-medium tracking-wider text-accent">
            {content.contact.connectLabel}
          </h2>
          <ul className="space-y-3">
            {content.contact.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
