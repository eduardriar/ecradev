import { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/get-locale";
import ContactLinks from "@/components/ContactLinks";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const { metadata } = getContent(getLocale());
  return {
    title: metadata.contact.title,
    description: metadata.contact.description,
  };
}

export default function ContactPage() {
  const content = getContent(getLocale());
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="mb-12 text-3xl font-bold">{content.contact.heading}</h1>
      <ContactLinks />
    </section>
  );
}
