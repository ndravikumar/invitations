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
        <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className={cn("gap-5", layout === "grid" ? "grid md:grid-cols-2 xl:grid-cols-4" : "space-y-5")}>
          {events.map((event, index) => (
            <motion.article
              key={`${event.title}-${event.date}-${event.time}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "rounded-[1.75rem] border border-black/5 p-6 shadow-sm backdrop-blur",
                cardClassName,
              )}
            >
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
