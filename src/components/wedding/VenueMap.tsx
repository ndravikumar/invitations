import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

interface VenueMapProps {
  venue: string;
  mapLocation: string;
  title?: string;
  themeClassName?: string;
}

const VenueMap = ({
  venue,
  mapLocation,
  title = "Venue",
  themeClassName = "bg-white/80",
}: VenueMapProps) => {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&z=15&output=embed`;

  return (
    <section id="venue" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`grid overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_22px_55px_rgba(0,0,0,0.12)] lg:grid-cols-[0.9fr_1.1fr] ${themeClassName}`}
        >
          <div className="flex flex-col justify-center gap-4 p-8">
            <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-current/10">
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.1, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-current/30"
              />
              <MapPinned />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-current/50">Location</p>
              <h3 className="mt-2 text-2xl font-semibold">{venue}</h3>
              <p className="mt-3 text-sm leading-7 text-current/75 sm:text-base">{mapLocation}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit rounded-full border border-current/15 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-current/5"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/90 shadow-[0_10px_30px_rgba(244,63,94,0.45)]"
            >
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </motion.div>
            <iframe
              title={`${venue} map`}
              src={embedUrl}
              className="min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueMap;
