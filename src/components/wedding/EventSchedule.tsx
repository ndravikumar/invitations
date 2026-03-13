import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { format } from "date-fns";
import type { WeddingEvent } from "@/data/weddingData";
import { cn } from "@/lib/utils";

interface EventScheduleProps {
  events: WeddingEvent[];
  title?: string;
  cardClassName?: string;
  layout?: "grid" | "timeline";
}

const EventSchedule = ({
  events,
  title = "Celebration Schedule",
  cardClassName = "bg-white/80",
  layout = "grid",
}: EventScheduleProps) => {
  return (
    <section id="events" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 text-center text-3xl font-semibold sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className={cn("gap-5", layout === "grid" ? "grid md:grid-cols-2 xl:grid-cols-4" : "space-y-5")}>
          {events.map((event, index) => (
            <motion.article
              key={`${event.title}-${event.date}-${event.time}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem] border border-black/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur",
                cardClassName,
              )}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-current/30 to-transparent" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:scale-125" />
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-current/55">
                {format(new Date(event.date), "dd MMM yyyy")}
              </p>
              <h3 className="mb-4 text-2xl font-semibold">{event.title}</h3>
              <div className="space-y-2 text-sm text-current/75">
                <p className="inline-flex items-center gap-2">
                  <Clock3 size={16} />
                  {event.time}
                </p>
                <p className="inline-flex items-start gap-2">
                  <CalendarDays size={16} className="mt-0.5 shrink-0" />
                  <span>{event.description}</span>
                </p>
                {event.location ? (
                  <p className="inline-flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
