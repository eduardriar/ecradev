"use client";

import { motion } from "framer-motion";
import content from "@/lib/content";
import { useMobile } from "@/hooks/useMobile";

const BouncingArrow = () => (
    <motion.svg
        className="w-5 h-5 inline-block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
        <path d="M12 5v14" />
        <path d="M19 12l-7 7-7-7" />
    </motion.svg>
);

export const ScrollHint = () => {
    const isMobile = useMobile();
    const iconRef = "%ICON%";
    const scrollHintText = !isMobile ? content.welcome.scrollHintMobile.split(",") :content.welcome.scrollHint.split(",");

    return (
        <span className="text-textSecondary flex items-center gap-1 mb-4 text-lg">
            {scrollHintText.map((text, i) =>
                text === iconRef ? <BouncingArrow key={i} /> : text
            )}
        </span>
    );
}