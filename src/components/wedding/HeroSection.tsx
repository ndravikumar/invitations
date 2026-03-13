import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  brideName: string;
  groomName: string;
  weddingDateLabel: string;
  venue: string;
  eyebrow?: string;
  subtitle?: string;
  heroImage?: string;
  className?: string;
  overlayClassName?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

const HeroSection = ({
  brideName,
  groomName,
  weddingDateLabel,
  venue,
  eyebrow,
  subtitle,
  heroImage,
  className,
  overlayClassName,
  align = "center",
  children,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const ornamentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24",
        className,
      )}
    >
      {heroImage ? (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-20 bg-cover bg-center scale-110"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </motion.div>
      ) : null}
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50",
          overlayClassName,
        )}
      />
      <motion.div
        style={{ y: ornamentY }}
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
      />

      <div
        className={cn(
          "mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-8",
          align === "center" ? "items-center text-center" : "items-start text-left",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.45em] text-white/80">{eyebrow}</p>
          ) : null}
          <h1 className="text-5xl font-semibold tracking-wide text-white sm:text-6xl md:text-7xl">
            {brideName} <span className="mx-2 text-amber-300">??</span> {groomName}
          </h1>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-base text-white/85 sm:text-lg">{subtitle}</p>
          ) : null}
          <div
            className={cn(
              "flex flex-col gap-3 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:text-base",
              align === "center" ? "items-center justify-center" : "items-start",
            )}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <CalendarDays size={18} />
              {weddingDateLabel}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <MapPin size={18} />
              {venue}
            </span>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
