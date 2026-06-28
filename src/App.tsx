import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";
import { FloatingParticles } from "./components/FloatingParticles";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Frontend } from "./components/Frontend";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { CreativeWriting } from "./components/CreativeWriting";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grain relative min-h-screen bg-ink text-champagne overflow-x-hidden">
      {/* Page load overlay */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold/20 border-t-gold"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-2xl text-gold-gradient"
              >
                Anisha Sharma
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-sans text-xs tracking-[0.3em] uppercase text-champagne/30 mt-2"
              >
                Loading Portfolio
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      {/* Ambient floating particles */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <FloatingParticles count={12} />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Frontend />
        <Projects />
        <Certificates />
        <Experience />
        <Education />
        <CreativeWriting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
