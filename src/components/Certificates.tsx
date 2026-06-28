import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Search,
  MonitorSmartphone,
  Wind,
  Award,
  Code2,
  Layers,
  Wrench,
  PenTool,
  Globe,
  Trophy,
  FileCode,
  Palette,
  Smartphone,
  Sparkles,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { certificates } from "../data/portfolio";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CertificateModal } from "./CertificateModal";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Search,
  MonitorSmartphone,
  Wind,
  Award,
  Code2,
  Layers,
  Wrench,
  PenTool,
  Globe,
  Trophy,
  FileCode,
  Palette,
  Smartphone,
  Sparkles,
  Briefcase,
};

const categories = ["All", "Development", "Design", "AI", "Other"];

export function Certificates() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(
    null,
  );

  const filtered =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.category === active);

  return (
    <section id="certificates" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="05"
          title="Certificates"
          subtitle="Fifteen certifications across development, design, AI and professional recognition. Click any card to view details."
        />

        {/* Category filter */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? certificates.length
                  : certificates.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 border flex items-center gap-2 ${
                    active === cat
                      ? "bg-gold text-ink border-gold"
                      : "text-champagne/60 border-gold/15 hover:border-gold/40 hover:text-champagne"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[10px] ${
                      active === cat ? "text-ink/60" : "text-champagne/30"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <StaggerGroup
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((cert) => {
              const Icon = iconMap[cert.icon] ?? Award;
              return (
                <motion.button
                  key={cert.title}
                  variants={staggerItem}
                  onClick={() => setSelected(cert)}
                  className="text-left glass rounded-2xl p-7 h-full group hover:translate-y-[-6px] transition-all duration-500 relative overflow-hidden cursor-pointer block w-full"
                >
                  {/* corner accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />

                  {/* "Click to open" hint */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-gold/60">
                      View →
                    </span>
                  </div>

                  <div className="relative flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <span className="font-display text-3xl text-champagne/15">
                      {cert.year}
                    </span>
                  </div>

                  <span className="relative font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 block mb-2">
                    {cert.category}
                  </span>
                  <h3 className="relative font-display text-xl text-champagne mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="relative font-serif text-sm text-gold italic mb-3">
                    {cert.issuer}
                  </p>
                  <p className="relative font-sans text-sm text-champagne/50 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </motion.button>
              );
            })}
          </StaggerGroup>
        </AnimatePresence>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-serif text-base text-champagne/40 italic">
            More certifications in progress — this section grows as I learn. ✦
          </p>
        </Reveal>
      </div>

      {/* Modal */}
      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
