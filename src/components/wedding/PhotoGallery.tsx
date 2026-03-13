import { motion } from "framer-motion";
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
  return (
    <section id="gallery" className={`px-4 py-16 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.figure
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-current/70">{image.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
