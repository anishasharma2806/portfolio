import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Wrench,
  Sparkles,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiHtml5,
  SiCss,
  SiGithub,
  SiVite,
  SiVercel,
  SiSupabase,
  SiNodedotjs,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";
import { TbAccessible } from "react-icons/tb";
import { FaSearchengin, FaRobot, FaLaptopCode } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { skillCategories, techStack } from "../data/portfolio";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categoryIconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Wrench,
  Sparkles,
  PenTool,
};

const skillIconMap: Record<string, IconType> = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  TbAccessible,
  SiGoogle,
  FaSearchengin,
  SiHtml5,
  SiCss,
  SiGithub,
  SiVite,
  SiVercel,
  SiSupabase,
  SiNodedotjs,
  SiOpenai,
  FaRobot,
  FaLaptopCode,
};

// Map tech stack names to brand colors
const brandColors: Record<string, string> = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Bootstrap: "#7952B3",
  Figma: "#F24E1E",
  "Google Stitch": "#4285F4",
  Accessibility: "#c9a961",
  SEO: "#c9a961",
  Git: "#F05032",
  Vite: "#646CFF",
  Vercel: "#ffffff",
  "Node.js": "#339933",
  Supabase: "#3ECF8E",
  ChatGPT: "#10A37F",
  "Prompt Engineering": "#c9a961",
};

export function Frontend() {
  return (
    <section id="frontend" className="relative py-28 md:py-36">
      {/* Marquee tech ticker */}
      <div className="relative overflow-hidden py-6 border-y border-gold/10 mb-20">
        <div className="flex marquee-track whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-champagne/15 mx-8"
            >
              {tech}
              <span className="text-gold/40 mx-8">✦</span>
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="02"
          title="Frontend Craft"
          subtitle="My primary discipline — turning design into delightful, accessible interfaces."
        />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const CatIcon = categoryIconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.category}
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="glass rounded-2xl p-7 h-full group relative overflow-hidden">
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/8 blur-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CatIcon size={20} className="text-gold" />
                    </motion.div>
                    <h3 className="font-display text-xl text-champagne">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, si) => {
                      const SkillIcon = skillIconMap[skill.icon] ?? SiReact;
                      const color = brandColors[skill.name] ?? "#c9a961";
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + si * 0.08,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.12, y: -3 }}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-ink-soft/60 border border-gold/10 hover:border-gold/30 transition-colors cursor-default"
                        >
                          <SkillIcon
                            size={20}
                            style={{ color }}
                            className="flex-shrink-0"
                          />
                          <span className="font-sans text-sm text-champagne/70">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Philosophy strip */}
        <Reveal delay={0.2}>
          <motion.div
            className="mt-16 glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(201,169,97,0.05), transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(201,169,97,0.05), transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(201,169,97,0.05), transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <p className="relative font-serif text-xl md:text-2xl text-champagne/70 italic leading-relaxed max-w-3xl mx-auto">
              "Great frontend work is invisible — the user never notices the
              code, only that everything feels effortless."
            </p>
            <motion.p
              className="relative mt-4 font-sans text-xs tracking-[0.3em] uppercase text-gold/60"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              My Development Philosophy
            </motion.p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
