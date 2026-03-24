"use client";

import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import content from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  LinkedIn: FaLinkedinIn,
  Email: HiOutlineMail,
  GitHub: FaGithub,
};

export default function ContactLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex justify-center gap-10">
      {content.contact.socials.map((social) => {
        const Icon = iconMap[social.name];
        if (!Icon) return null;

        const isHovered = hovered === social.name;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
            onMouseEnter={() => setHovered(social.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Icon
              className="h-10 w-10 transition-colors duration-200"
              style={{ color: isHovered ? social.hoverColor : "var(--muted)" }}
            />
            <span
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: isHovered ? social.hoverColor : "var(--muted)" }}
            >
              {social.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
