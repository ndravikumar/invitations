import { motion } from "framer-motion";
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
        <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-current/15 sm:before:left-1/2">
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
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${accentClassName} text-sm font-semibold text-white shadow-lg sm:absolute sm:left-1/2 sm:-translate-x-1/2`}>
                  {index + 1}
                </div>
                <div className={`rounded-[1.75rem] border border-black/5 p-6 shadow-sm backdrop-blur ${cardClassName}`}>
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
