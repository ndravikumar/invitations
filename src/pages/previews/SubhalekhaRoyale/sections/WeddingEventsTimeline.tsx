import { motion } from "framer-motion";

const events = [
  {
    title: "పెళ్ళి",
    date: "మార్చి 15, 2024",
    time: "ఉదయం 10:30 గంటలకు",
    description: "ముహూర్తం",
    icon: "💍",
  },
  {
    title: "రిసెప్షన్",
    date: "మార్చి 15, 2024",
    time: "సాయంత్రం 7:00 గంటలకు",
    description: "విందు కార్యక్రమం",
    icon: "🎉",
  },
];

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WeddingEventsTimeline = () => {
  return (
    <section className="py-24 bg-[#FDF5E6]">
      <div className="max-w-5xl mx-auto px-6 text-[#7B1E1E]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-serif text-3xl md:text-4xl mb-20"
        >
          శుభ కార్యక్రమాలు
        </motion.h2>

        <div className="relative">
          {/* Vertical Gold Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-[2px] bg-[#C9A24D] -translate-x-1/2"
          />

          {/* Events */}
          <div className="space-y-20">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                >
                  {/* Left Content */}
                  {isLeft && (
                    <motion.div
                      variants={itemLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="md:pr-16 text-right"
                    >
                      <h3 className="font-serif text-2xl mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#8B5A2B]">{event.date}</p>
                      <p className="text-sm text-[#8B5A2B]">{event.time}</p>
                      <p className="mt-1 text-sm italic text-[#A67C52]">
                        {event.description}
                      </p>
                    </motion.div>
                  )}

                  {/* Center Icon */}
                  <div className="flex justify-center md:justify-center my-6 md:my-0">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDF5E6] border-2 border-[#C9A24D] text-lg">
                      {event.icon}
                    </span>
                  </div>

                  {/* Right Content */}
                  {!isLeft && (
                    <motion.div
                      variants={itemRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="md:pl-16 text-left"
                    >
                      <h3 className="font-serif text-2xl mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#8B5A2B]">{event.date}</p>
                      <p className="text-sm text-[#8B5A2B]">{event.time}</p>
                      <p className="mt-1 text-sm italic text-[#A67C52]">
                        {event.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEventsTimeline;
