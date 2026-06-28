import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="01"
          title="About"
          subtitle="A developer who writes code like poetry."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-serif text-2xl md:text-3xl text-champagne/80 leading-relaxed">
                I'm{" "}
                <span className="text-gold-gradient font-medium">
                  {profile.firstName} {profile.lastName}
                </span>
                , a frontend developer and MCA graduate who crafts elegant,
                performant web experiences — blending clean code with thoughtful
                design. Beyond the screen, I'm a published poet writing under
                the pen name <span className="text-gold italic">Anamika</span>,
                with 19 works across 9 publishing houses.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold/60" />
                <span className="font-sans text-sm text-champagne/70">
                  Available for freelance & full-time roles
                </span>
              </div>
            </Reveal>
          </div>

          {/* Stats / quick facts */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="glass rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 pb-5 border-b border-gold/10">
                  <GraduationCap size={20} className="text-gold" />
                  <h3 className="font-display text-2xl text-champagne">
                    Quick Facts
                  </h3>
                </div>
                {[
                  { k: "Role", v: "Frontend Developer" },
                  { k: "Focus", v: "React · TypeScript · UI/UX" },
                  { k: "Education", v: "MCA, Saraswati College" },
                  { k: "Experience", v: "Internship + Freelance + Industry" },
                  { k: "Beyond Code", v: "Poet (Anamika) · 19 Works" },
                ].map((item, i) => (
                  <motion.div
                    key={item.k}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-champagne/40">
                      {item.k}
                    </span>
                    <span className="font-serif text-lg text-champagne/90 text-right">
                      {item.v}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
