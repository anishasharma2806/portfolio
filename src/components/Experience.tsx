import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="Where I've built, shipped and grown."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/15 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-gold border-4 border-ink md:-translate-x-1/2 z-10"
                  >
                    <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                  </motion.div>

                  {/* Content card */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                    <Reveal delay={0.1}>
                      <div className="glass rounded-2xl p-6 sm:p-7 hover:border-gold/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase size={15} className="text-gold" />
                          <span className="font-sans text-xs tracking-widest uppercase text-gold/70">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl text-champagne mb-1">
                          {exp.role}
                        </h3>
                        <p className="font-serif text-base sm:text-lg text-gold italic mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="font-sans text-sm text-champagne/60 flex items-start gap-2"
                            >
                              <span className="text-gold mt-1">▹</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        {exp.tech && (
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-gold/10">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-full text-[11px] font-sans text-champagne/60 border border-gold/15 bg-gold/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
