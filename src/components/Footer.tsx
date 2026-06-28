import { Heart } from "lucide-react";
import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <a href="#home" className="font-display text-2xl text-gold-gradient">
            {profile.firstName} {profile.lastName}
          </a>
          <p className="font-serif text-sm text-champagne/40 italic">
            Frontend Developer · Poet · Lifelong Learner
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-champagne/30">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}.
            All rights reserved.
          </p>
          <p className="font-sans text-xs text-champagne/30 flex items-center gap-1.5">
            Crafted with{" "}
            <Heart size={12} className="text-gold/60 fill-gold/40" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
