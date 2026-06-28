import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add /ajax/ before the email variable
    fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    }).catch(() => {});

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #c9a961, transparent 70%)",
            top: "10%",
            left: "5%",
            opacity: 0.15,
          }}
        />
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background: "radial-gradient(circle, #6b4e8e, transparent 70%)",
            bottom: "10%",
            right: "5%",
            opacity: 0.12,
            animationDelay: "-7s",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          index="08"
          title="Get In Touch"
          subtitle="Have a project, role or idea? Let's create something elegant together."
          align="center"
        />

        {/* Centered intro text */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display text-3xl md:text-4xl text-champagne leading-tight">
              Let's build something
              <span className="block text-gold-gradient italic font-serif font-light">
                worth remembering.
              </span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 font-sans text-base text-champagne/55 leading-relaxed"
            >
              Whether it's a frontend role, a freelance project or a creative
              collaboration — my inbox is always open. I usually reply within a
              day.
            </motion.p>
          </div>
        </Reveal>

        {/* Form — centered, no character */}
        <Reveal delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 md:p-10 space-y-6 max-w-lg mx-auto"
            initial={{ boxShadow: "0 0 0 rgba(201,169,97,0)" }}
            whileInView={{ boxShadow: "0 0 50px rgba(201,169,97,0.1)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>
              <label className="font-sans text-xs tracking-widest uppercase text-champagne/40 block mb-2">
                Your Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-gold/20 focus:border-gold outline-none py-3 font-serif text-lg text-champagne transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-widest uppercase text-champagne/40 block mb-2">
                Email Address
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-gold/20 focus:border-gold outline-none py-3 font-serif text-lg text-champagne transition-colors"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-widest uppercase text-champagne/40 block mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-gold/20 focus:border-gold outline-none py-3 font-serif text-lg text-champagne transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="group relative w-full py-4 rounded-full overflow-hidden border border-gold/40 hover:border-gold transition-colors disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-sans text-sm tracking-wide text-champagne group-hover:text-ink transition-colors">
                {sent ? (
                  <>
                    <Check size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.form>
        </Reveal>

        {/* Contact info — below the form */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                  <Mail size={17} className="text-gold" />
                </div>
                <span className="font-serif text-base text-champagne/80 group-hover:text-gold transition-colors">
                  {profile.email}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                  <MapPin size={17} className="text-gold" />
                </div>
                <span className="font-serif text-base text-champagne/80">
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-champagne/70 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-champagne/70 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
