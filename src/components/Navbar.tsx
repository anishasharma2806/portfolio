import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Frontend", href: "#frontend" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when section is roughly in the middle of the viewport
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-ink/85 backdrop-blur-xl border-b border-gold/10"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 flex-shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl text-gold-gradient tracking-wide">
              Anisha
            </span>
            <span className="font-serif text-sm text-champagne/40 italic">
              S.
            </span>
          </a>

          {/* Nav links — desktop */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`elegant-link font-sans text-sm tracking-wide transition-colors ${
                      isActive
                        ? "text-gold"
                        : "text-champagne/70 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                  {/* Active section indicator dot */}
                  <motion.span
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </li>
              );
            })}
          </ul>

          {/* Right side — Resume button + mobile menu toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={profile.resumeUrl}
              download
              className="group relative hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 overflow-hidden rounded-full border border-gold/30 hover:border-gold transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2 font-sans text-xs sm:text-sm tracking-wide text-gold/90 group-hover:text-ink transition-colors">
                <Download
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-champagne/80 hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-2xl text-gold-gradient">
                Anisha S.
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-champagne/80 hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 gap-7">
              {links.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="relative"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`font-display text-3xl transition-colors ${
                        isActive
                          ? "text-gold"
                          : "text-champagne hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"
                      />
                    )}
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.07 }}
              >
                <a
                  href={profile.resumeUrl}
                  download="Anisha_Sharma_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 hover:border-gold transition-colors"
                >
                  <Download size={16} className="text-gold" />
                  <span className="font-sans text-sm text-champagne/80">
                    Download Resume
                  </span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
