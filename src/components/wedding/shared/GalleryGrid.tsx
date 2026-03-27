import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { GalleryItem } from "@/data/weddingData";

interface GalleryGridProps {
  images: GalleryItem[];
  className?: string;
  cardClassName?: string;
  overlayClassName?: string;
}

const GalleryGrid = ({
  images,
  className = "",
  cardClassName = "border-white/10 bg-white/5",
  overlayClassName = "from-black/70 via-black/10 to-transparent",
}: GalleryGridProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-[1.5rem] border text-left shadow-[0_22px_50px_rgba(0,0,0,0.18)] ${cardClassName}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${overlayClassName}`} />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white">
              <div>
                <p className="text-sm font-medium">{image.alt}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Open</p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur">
                <ExternalLink size={16} />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="px-5 py-4 text-sm text-white/75">{images[activeIndex].alt}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
