import ScrollReveal from "./ScrollReveal";
import content from "@/lib/content.json";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent">
            {content.about.label}
          </h2>
          <p className="mb-12 text-center text-3xl font-bold">{content.about.title}</p>
        </ScrollReveal>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <ScrollReveal>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-muted">
              <span className="text-sm">{content.about.photoAlt}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              {content.about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-muted${i < content.about.paragraphs.length - 1 ? " mb-4" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
