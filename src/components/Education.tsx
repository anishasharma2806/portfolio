import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="06"
          title="Education"
          subtitle="The academic foundation behind the craft."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.15}>
              <div className="glass rounded-3xl p-8 h-full group hover:border-gold/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />

                <div className="relative flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-gold" />
                  </div>
                  <span className="font-sans text-xs tracking-widest uppercase text-gold/70">
                    {edu.period}
                  </span>
                </div>

                <h3 className="relative font-display text-2xl md:text-3xl text-champagne mb-2 leading-snug">
                  {edu.degree}
                </h3>
                <p className="relative font-serif text-lg text-gold italic mb-4">
                  {edu.institution}
                </p>
                <p className="relative font-sans text-sm text-champagne/55 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
