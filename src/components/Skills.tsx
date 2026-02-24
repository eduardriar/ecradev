import ScrollReveal from "./ScrollReveal";
import content from "@/lib/content.json";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-sm font-medium tracking-wider text-accent">
            {content.skills.label}
          </h2>
          <p className="mb-12 text-center text-3xl font-bold">
            {content.skills.title}
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.skills.items.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <div className="rounded-xl border border-border p-5 transition-colors hover:border-accent/40">
                <h3 className="mb-1 font-semibold">{skill.name}</h3>
                <p className="text-sm text-muted">{skill.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
