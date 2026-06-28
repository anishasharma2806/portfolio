import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function VideoModal({
  videoUrl,
  title,
  onClose,
}: {
  videoUrl: string | null;
  title: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] bg-ink/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-auto"
          >
            {/* Close button — positioned above the video, always visible */}
            <div className="flex items-center justify-between mb-3">
              <p className="font-display text-lg sm:text-xl text-gold truncate pr-3">
                {title}
              </p>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-champagne/60 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(201,169,97,0.15)] bg-ink">
              <video
                src={videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-auto max-h-[70vh] object-contain bg-ink"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
