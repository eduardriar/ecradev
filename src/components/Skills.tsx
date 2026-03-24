import ScrollReveal from "./ScrollReveal";
import SkillCard from "./SkillCard";
import content from "@/lib/content.json";

export default function Skills() {
  return (
    <section id="skills" className="min-h-[80vh] scroll-mt-20 bg-yellow px-6 py-20">
      <div className="h-full mx-auto max-w-3xl flex flex-col gap-16">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-sans text-4xl font-bold text-black">
            {content.skills.title}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
          {content.skills.items.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <SkillCard name={skill.name} description={skill.description} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
