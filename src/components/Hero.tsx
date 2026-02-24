"use client";

import { motion } from "framer-motion";
import content from "@/lib/content.json";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div
            className="aspect-[3/4] w-full max-w-sm bg-gray-200"
            style={{ borderRadius: "146px" }}
          />
        </motion.div>

        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold"
            style={{ fontSize: "64px", lineHeight: 1.1 }}
          >
            {content.hero.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted"
          >
            {content.hero.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
