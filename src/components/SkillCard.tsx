"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
  SiOpenapiinitiative,
  SiCss3,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "React JS": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  "Git & GitHub": SiGithub,
  "REST APIs": SiOpenapiinitiative,
  "Responsive Design": SiCss3,
  TypeScript: SiTypescript,
  NodeJS: SiNodedotjs,
};

interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({ name, description }: SkillCardProps) {
  const Icon = iconMap[name];

  return (
    <div className="perspective-600 group h-24">
      <div className="[transform-style:preserve-3d] relative h-full w-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="backface-hidden absolute inset-0 flex flex-row items-center justify-center rounded-xl bg-white px-0 py-0 shadow-sm">
          {Icon && <Icon className="mr-3 text-3xl text-black" />}
          <h3 className="text-center font-mono text-lg text-black">{name}</h3>
        </div>

        {/* Back */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white px-6 py-8 shadow-sm">
          <p className="text-center text-sm leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
