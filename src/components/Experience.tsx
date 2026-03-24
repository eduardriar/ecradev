"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import content from "@/lib/content.json";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="about" className="min-h-[80vh] scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl flex flex-col gap-16">
        <ScrollReveal>
          <h3 className="mb-12 text-center font-sans text-4xl font-bold text-black">
            {content.experience.title}
          </h3>
        </ScrollReveal>

        <div className="flex flex-col" style={{ gap: "25px" }}>
          {content.experience.items.map((item, i) => (
            <ScrollReveal key={item.company} delay={i * 0.08}>
              <div>
                <div
                  className="grid cursor-pointer grid-cols-3 border-b border-gray-300 pb-4 text-center"
                  onClick={() => toggle(i)}
                >
                  <span className="font-sans text-base text-black">{item.role}</span>
                  <span className="font-sans text-base text-black">{item.company}</span>
                  <span className="font-sans text-base text-black">{item.year}</span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 pl-12 max-w-100 ${expandedIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {item.description.length > 0 && (
                    <ul className="mt-4 space-y-2 px-4 list-disc" >
                      {item.description.map((desc, j) => (
                        <li key={j} className="font-sans text-sm leading-relaxed text-gray-600">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
