"use client";

import { motion } from "framer-motion";
import content from "@/lib/content.json";

const { heading, tagline, cards } = content.hero;

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 mt-12 mb-12">
      <div className="mx-auto max-w-2xl text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans font-bold"
          style={{ fontSize: "64px", lineHeight: 1.1 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted"
        >
          {tagline}
        </motion.p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          {/* Years of Exp */}
          <div className="rounded-xl border border-border p-5 text-left">
            <span className="font-mono text-sm text-muted">
              {cards.yearsOfExp.title}
            </span>
            <p className="mt-2 font-sans text-5xl font-bold">
              {cards.yearsOfExp.value}
            </p>
          </div>

          {/* Projects */}
          <div className="rounded-xl border border-border p-5 text-left">
            <span className="font-mono text-sm text-muted">
              {cards.projects.title}
            </span>
            <p className="mt-2 font-sans text-5xl font-bold">
              {cards.projects.value}
            </p>
          </div>

          {/* Skills */}
          <div className="col-span-2 rounded-xl border border-border p-5 text-left">
            <span className="font-mono text-sm text-muted">
              {cards.skills.title}
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {cards.skills.items.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md px-3 py-1 text-sm font-mono font-medium"
                  style={{
                    backgroundColor: skill.color,
                    color: skill.textColor,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
