import { motion } from "framer-motion";
import {
  Feather,
  Award,
  BookOpen,
  FileText,
  ExternalLink,
  BookMarked,
  type LucideIcon,
} from "lucide-react";
import {
  publications,
  debutNovel,
  writingAwards,
  writingStats,
  writingInfo,
} from "../data/portfolio";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Feather,
  BookOpen,
  FileText,
};

export function CreativeWriting() {
  return (
    <section id="writing" className="relative py-28 md:py-36 overflow-hidden">
      {/* soft background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb"
          style={{
            width: 450,
            height: 450,
            background: "radial-gradient(circle, #8e6b4e, transparent 70%)",
            top: "20%",
            right: "-10%",
            opacity: 0.25,
          }}
        />
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background: "radial-gradient(circle, #6b4e8e, transparent 70%)",
            bottom: "10%",
            left: "-5%",
            opacity: 0.2,
            animationDelay: "-8s",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          index="07"
          title="Creative Writing"
          subtitle="When the code rests, the verse begins. Poet, novelist & content writer."
        />

        {/* Intro + pen name + stats */}
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Feather size={20} className="text-gold" />
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold/70">
                  Poet · Novelist · Content Writer
                </span>
              </div>
              <p className="font-serif text-xl md:text-2xl text-champagne/75 leading-relaxed italic">
                Writing since {writingInfo.writingSince} under the pen name{" "}
                <span className="text-gold-gradient not-italic font-display text-2xl">
                  {writingInfo.penName}
                </span>
                , I've been published across 9 publishing houses with 19 works
                to my name and three literary awards. Poetry taught me rhythm,
                restraint and the weight of a single word — skills that quietly
                shape every interface I build.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:w-80">
              {writingStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl text-gold-gradient">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-champagne/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Writing disciplines */}
        <StaggerGroup className="grid md:grid-cols-3 gap-6 mb-20">
          {writingInfo.disciplines.map((disc) => {
            const Icon = iconMap[disc.icon] ?? Feather;
            return (
              <motion.div key={disc.title} variants={staggerItem}>
                <div className="glass rounded-2xl p-8 h-full group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                  <div className="relative flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} className="text-gold" />
                    </div>
                    {disc.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-sans tracking-wider uppercase bg-gold/15 text-gold border border-gold/20">
                        {disc.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="relative font-display text-2xl text-champagne mb-3">
                    {disc.title}
                  </h3>
                  <p className="relative font-serif text-sm text-champagne/55 leading-relaxed italic">
                    {disc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Debut Novel spotlight */}
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/8 rounded-full blur-3xl group-hover:bg-gold/12 transition-colors" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <BookOpen size={36} className="text-gold" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/60">
                  Debut Novel · {debutNovel.status}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-gold-gradient mt-2 mb-3">
                  {debutNovel.title}
                </h3>
                <p className="font-serif text-base md:text-lg text-champagne/55 leading-relaxed italic max-w-2xl">
                  {debutNovel.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Publications by publisher */}
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <BookMarked size={18} className="text-gold" />
            <h3 className="font-display text-2xl text-champagne/80">
              Published Works
            </h3>
            <span className="font-serif text-sm text-champagne/30 italic">
              by publishing house
            </span>
            <span className="h-px flex-1 bg-gold/15" />
          </div>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {publications.map((pub, i) => (
            <motion.div key={pub.publisher} variants={staggerItem}>
              <div className="glass rounded-2xl p-6 h-full group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                <span className="font-display text-5xl text-gold/10 absolute top-2 right-4 group-hover:text-gold/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h4 className="font-serif text-lg text-gold italic mb-3 leading-snug">
                    {pub.publisher}
                  </h4>
                  <ul className="space-y-1.5">
                    {pub.books.map((book) => (
                      <li
                        key={book}
                        className="font-sans text-sm text-champagne/60 flex items-start gap-2"
                      >
                        <span className="text-gold/50 mt-0.5">✦</span>
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Literary Awards */}
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} className="text-gold" />
            <h3 className="font-display text-2xl text-champagne/80">
              Literary Awards
            </h3>
            <span className="h-px flex-1 bg-gold/15" />
          </div>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6 mb-16">
          {writingAwards.map((award) => (
            <motion.div key={award.title} variants={staggerItem}>
              <div className="glass rounded-2xl p-8 h-full group hover:border-gold/30 transition-all duration-500 text-center relative overflow-hidden">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                <div className="relative w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Award size={28} className="text-gold" />
                </div>
                <h4 className="relative font-display text-xl text-champagne mb-3 leading-snug">
                  {award.title}
                </h4>
                <p className="relative font-serif text-sm text-champagne/50 italic leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Content writing samples CTA */}
        <Reveal delay={0.1}>
          <a
            href={writingInfo.contentSamplesUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block glass rounded-3xl p-8 md:p-10 text-center hover:border-gold/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <FileText size={28} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl md:text-3xl text-champagne mb-2">
                Content Writing Samples
              </h3>
              <p className="font-serif text-base text-champagne/50 italic mb-4 max-w-lg mx-auto">
                Explore my blogs and academic writing — a collection of
                structured, research-driven content across digital and academic
                platforms.
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-sm text-gold group-hover:gap-3 transition-all">
                View Writing Portfolio <ExternalLink size={16} />
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-serif text-lg text-champagne/40 italic">
            "Every interface is a stanza; every click, a breath between lines."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
