import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
  children,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`mb-14 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-4 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <span className="font-sans text-xs tracking-[0.4em] text-gold/70 uppercase">
          {index}
        </span>
        <span className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl text-champagne leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`mt-4 font-serif text-lg md:text-xl text-champagne/50 italic ${
            centered ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  );
}
