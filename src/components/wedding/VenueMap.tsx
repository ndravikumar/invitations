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
        <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`grid overflow-hidden rounded-[2rem] border border-black/5 shadow-lg lg:grid-cols-[0.9fr_1.1fr] ${themeClassName}`}
        >
          <div className="flex flex-col justify-center gap-4 p-8">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-current/10">
              <MapPinned />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-current/50">Location</p>
              <h3 className="mt-2 text-2xl font-semibold">{venue}</h3>
              <p className="mt-3 text-sm leading-7 text-current/75 sm:text-base">{mapLocation}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit rounded-full border border-current/15 px-5 py-3 text-sm font-medium transition hover:bg-current/5"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title={`${venue} map`}
            src={embedUrl}
            className="min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VenueMap;
