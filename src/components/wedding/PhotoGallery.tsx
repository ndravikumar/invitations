import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import type { GalleryItem } from "@/data/weddingData";

interface PhotoGalleryProps {
  images: GalleryItem[];
  title?: string;
  className?: string;
}

const PhotoGallery = ({
  images,
  title = "Gallery",
  className = "",
}: PhotoGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className={`px-4 py-16 sm:px-6 ${className}`}>
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
          >
            {title}
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <motion.button
                key={`${image.src}-${index}`}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-left shadow-[0_22px_50px_rgba(0,0,0,0.12)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-medium">{image.alt}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Tap to view</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                    <Search size={18} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

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
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="max-h-[78vh] w-full object-contain"
              />
              <div className="px-5 py-4 text-sm text-white/80">{images[activeIndex].alt}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
