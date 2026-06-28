import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * A soft gold glow that follows the cursor — adds a luxurious, alive feel.
 * Hidden on touch devices.
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[5] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        background:
          "radial-gradient(circle, rgba(201,169,97,0.06) 0%, transparent 60%)",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
