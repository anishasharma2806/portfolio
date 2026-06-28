import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Video } from "lucide-react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "../data/portfolio";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VideoModal } from "./VideoModal";

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");

  const openVideo = (url: string, title: string) => {
    setVideoUrl(url);
    setVideoTitle(title);
  };

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // When "All" is selected: split into featured (large) + grid (like before)
  // When a specific category is selected: show ALL projects one below the other in large layout
  const isAll = active === "All";
  const featured = isAll ? filtered.filter((p) => p.featured) : filtered;
  const grid = isAll ? filtered.filter((p) => !p.featured) : [];

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="04"
          title="Selected Work"
          subtitle="Projects where design meets clean, functional code. Filter by category to explore."
        />

        {/* Category filter */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-12">
            {projectCategories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 border flex items-center gap-2 ${
                    active === cat
                      ? "bg-gold text-ink border-gold"
                      : "text-champagne/60 border-gold/15 hover:border-gold/40 hover:text-champagne"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[10px] ${
                      active === cat ? "text-ink/60" : "text-champagne/30"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured projects — large cards */}
            {featured.length > 0 && (
              <div className="space-y-10 mb-16">
                {featured.map((project, i) => (
                  <Reveal key={project.title} delay={i * 0.05}>
                    <FeaturedProject
                      project={project}
                      index={i}
                      onOpenVideo={openVideo}
                    />
                  </Reveal>
                ))}
              </div>
            )}

            {/* Grid projects — only shown when "All" is selected */}
            {grid.length > 0 && (
              <>
                <Reveal>
                  <h3 className="font-display text-2xl sm:text-3xl text-champagne/80 mb-8 flex items-center gap-4">
                    More Projects
                    <span className="h-px flex-1 bg-gold/15" />
                  </h3>
                </Reveal>
                <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grid.map((project) => (
                    <motion.div key={project.title} variants={staggerItem}>
                      <GridProject project={project} onOpenVideo={openVideo} />
                    </motion.div>
                  ))}
                </StaggerGroup>
              </>
            )}

            {filtered.length === 0 && (
              <p className="text-center font-serif text-lg text-champagne/40 italic py-12">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <VideoModal
        videoUrl={videoUrl}
        title={videoTitle}
        onClose={() => setVideoUrl(null)}
      />
    </section>
  );
}

function FeaturedProject({
  project,
  index,
  onOpenVideo,
}: {
  project: Project;
  index: number;
  onOpenVideo: (url: string, title: string) => void;
}) {
  const isReversed = index % 2 === 1;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center group ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Media */}
      <div className="relative">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/15 block group/media"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover/media:opacity-0"
          />
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/media:opacity-100 transition-opacity duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none" />
          <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-500">
            <ArrowUpRight size={18} className="text-gold sm:hidden" />
            <ArrowUpRight size={20} className="text-gold hidden sm:block" />
          </div>
          {project.video && (
            <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 flex items-center gap-1.5 opacity-0 group-hover/media:opacity-100 transition-opacity duration-500">
              <Play size={12} className="text-gold fill-gold" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-gold/80">
                Hover Preview
              </span>
            </div>
          )}
          <span className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 font-sans text-[10px] sm:text-xs tracking-widest uppercase text-gold/80">
            0{index + 1} · {project.featured ? "Featured" : project.category}
          </span>
        </motion.a>

        {/* Watch Preview button */}
        {project.video && (
          <motion.button
            onClick={() => onOpenVideo(project.video, project.title)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-3 sm:mt-4 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass hover:border-gold/40 transition-colors group/btn"
          >
            <Video
              size={15}
              className="text-gold group-hover/btn:scale-110 transition-transform sm:hidden"
            />
            <Video
              size={16}
              className="text-gold group-hover/btn:scale-110 transition-transform hidden sm:block"
            />
            <span className="font-sans text-xs sm:text-sm text-champagne/70 group-hover/btn:text-gold transition-colors">
              Watch Full Preview
            </span>
          </motion.button>
        )}
      </div>

      {/* Text */}
      <div className={isReversed ? "lg:pr-6" : "lg:pl-6"}>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-sans tracking-wider uppercase bg-gold/10 text-gold border border-gold/15">
            {project.category}
          </span>
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-champagne/35">
            {project.company}
          </p>
        </div>
        <p className="font-serif text-base sm:text-lg text-gold italic mb-2">
          {project.tagline}
        </p>
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-champagne mb-4">
          {project.title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-champagne/55 leading-relaxed mb-6 max-w-md">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-sans text-champagne/60 border border-gold/15 bg-gold/5"
            >
              {t}
            </span>
          ))}
        </div>
        {project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:gap-3 transition-all elegant-link"
          >
            View Live Project <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function GridProject({
  project,
  onOpenVideo,
}: {
  project: Project;
  onOpenVideo: (url: string, title: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="group glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:translate-y-[-6px] h-full flex flex-col"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={15} className="text-gold" />
        </div>
        {project.video && (
          <button
            onClick={() => onOpenVideo(project.video, project.title)}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-gold/40"
          >
            <Play size={11} className="text-gold fill-gold" />
            <span className="font-sans text-[10px] tracking-widest uppercase text-gold/80">
              Watch
            </span>
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-sans tracking-wider uppercase bg-gold/10 text-gold/80 border border-gold/10">
            {project.category}
          </span>
          <p className="font-sans text-[9px] tracking-widest uppercase text-champagne/30 truncate">
            {project.company}
          </p>
        </div>
        <h4 className="font-display text-lg sm:text-xl text-champagne mb-2 group-hover:text-gold transition-colors">
          {project.title}
        </h4>
        <p className="font-sans text-sm text-champagne/50 leading-relaxed mb-3 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-[10px] font-sans text-champagne/50 border border-gold/10"
            >
              {t}
            </span>
          ))}
        </div>
        {project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()} // CRITICAL: This stops the video from opening
            className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-110"
          >
            <ArrowUpRight size={15} className="text-gold" />
          </a>
        )}
      </div>
    </div>
  );
}
