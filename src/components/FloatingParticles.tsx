import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Floating gold dust particles that drift upward — adds ambient luxury.
 */
export function FloatingParticles({ count = 15 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.3,
      })),
    [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
