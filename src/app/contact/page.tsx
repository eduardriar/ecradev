import { Metadata } from "next";
import content from "@/lib/content";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: content.metadata.contact.title,
  description: content.metadata.contact.description,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="mb-12 text-3xl font-bold">{content.contact.heading}</h1>
      <ContactLinks />
    </section>
  );
}
