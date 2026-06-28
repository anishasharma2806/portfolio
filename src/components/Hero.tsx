import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, #c9a961, transparent 70%)",
            top: "5%",
            left: "-5%",
          }}
        />
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #6b4e8e, transparent 70%)",
            bottom: "5%",
            right: "-5%",
            animationDelay: "-6s",
          }}
        />
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background: "radial-gradient(circle, #c9a961, transparent 70%)",
            top: "40%",
            right: "10%",
            animationDelay: "-12s",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Decorative gold rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full border border-gold/5" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[800px] rounded-full border border-gold/3" />
      </motion.div>

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <Sparkles size={16} className="text-gold" />
          <span className="font-sans text-xs tracking-[0.3em] text-gold/80 uppercase">
            Frontend Developer · Poet
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-champagne"
        >
          {profile.firstName}
          <br />
          <span className="text-gold-gradient italic font-serif font-light">
            {profile.lastName}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 sm:w-16 bg-gold/30" />
          <span className="shimmer-text font-serif text-xl sm:text-2xl md:text-4xl">
            Frontend Developer
          </span>
          <span className="h-px w-12 sm:w-16 bg-gold/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl mx-auto font-sans text-sm sm:text-base md:text-lg text-champagne/55 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 overflow-hidden rounded-full border border-gold/40 hover:border-gold transition-colors"
          >
            <span className="relative z-10 font-sans text-sm tracking-wide text-champagne group-hover:text-ink transition-colors">
              View My Work
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 overflow-hidden rounded-full border border-champagne/20 hover:border-gold/40 transition-colors"
          >
            <span className="relative z-10 font-sans text-sm tracking-wide text-champagne/80 group-hover:text-gold transition-colors">
              Get In Touch
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-champagne/40 hover:text-gold transition-colors"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
