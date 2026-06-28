import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import {
  Bot,
  Search,
  MonitorSmartphone,
  Wind,
  Code2,
  Layers,
  Wrench,
  PenTool,
  Globe,
  Trophy,
  FileCode,
  Palette,
  Smartphone,
  Sparkles,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Search,
  MonitorSmartphone,
  Wind,
  Award,
  Code2,
  Layers,
  Wrench,
  PenTool,
  Globe,
  Trophy,
  FileCode,
  Palette,
  Smartphone,
  Sparkles,
  Briefcase,
};

interface CertificateData {
  title: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
  icon: string;
  credentialUrl: string;
}

export function CertificateModal({
  cert,
  onClose,
}: {
  cert: CertificateData | null;
  onClose: () => void;
}) {
  const Icon = cert ? (iconMap[cert.icon] ?? Award) : Award;
  const isPdf = cert?.credentialUrl?.endsWith(".pdf");

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] bg-ink/95 backdrop-blur-md flex items-start justify-center pt-20 pb-6 px-3 sm:px-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-3xl w-full relative overflow-hidden"
          >
            {/* Close button — clearly visible, clears the navbar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-ink-soft/90 border border-gold/30 flex items-center justify-center text-champagne/70 hover:text-gold hover:border-gold/60 hover:bg-gold/10 transition-all z-20"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 pr-14">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-gold sm:hidden" />
                <Icon size={28} className="text-gold hidden sm:block" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 block mb-0.5">
                  {cert.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-champagne leading-snug truncate">
                  {cert.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-gold italic">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>

            {/* Credential preview — shows PDF or image directly */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gold/15 mb-4 bg-ink-soft/50">
              {isPdf ? (
                <iframe
                  src={cert.credentialUrl}
                  title={cert.title}
                  className="w-full h-[45vh] sm:h-[55vh] md:h-[60vh] bg-ink"
                />
              ) : (
                <img
                  src={cert.credentialUrl}
                  alt={`${cert.title} certificate`}
                  className="w-full h-auto object-contain max-h-[45vh] sm:max-h-[55vh] md:max-h-[60vh]"
                />
              )}
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-champagne/55 leading-relaxed mb-4">
              {cert.description}
            </p>

            {/* Footer */}
            <div className="pt-3 border-t border-gold/10 flex items-center gap-2">
              <Award size={14} className="text-gold/50 flex-shrink-0" />
              <span className="font-sans text-xs text-champagne/40">
                Verified Certification
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
