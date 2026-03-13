import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { StoryMoment } from "@/data/weddingData";

interface CoupleStoryTimelineProps {
  items: StoryMoment[];
  title?: string;
  accentClassName?: string;
  cardClassName?: string;
}

const CoupleStoryTimeline = ({
  items,
  title = "Our Story",
  accentClassName = "bg-amber-500",
  cardClassName = "bg-white/80",
}: CoupleStoryTimelineProps) => {
  return (
    <section id="story" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-current/15 sm:before:left-1/2">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="absolute left-5 top-2 h-[calc(100%-1rem)] origin-top w-px bg-current/20 sm:left-1/2"
          />
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.date}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
            >
              <div className={index % 2 === 0 ? "sm:text-right" : "sm:col-start-2"}>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${accentClassName} text-white shadow-lg shadow-black/10 sm:absolute sm:left-1/2 sm:-translate-x-1/2`}
                >
                  <Heart size={18} fill="currentColor" />
                </motion.div>
                <div className={`rounded-[1.75rem] border border-black/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur ${cardClassName}`}>
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-current/60">{item.date}</p>
                  <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-current/75 sm:text-base">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoupleStoryTimeline;
