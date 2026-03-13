import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { inviteData } from "../data";

const Events = () => (
  <section className="py-24 px-4">
    <h2 className="text-center text-4xl font-serif mb-12 text-[#8B0000]">
      శుభ కార్యక్రమాలు
    </h2>

    <div className="max-w-3xl mx-auto space-y-6">
      {inviteData.events.map((e, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6 bg-white/70 p-6 rounded-xl shadow"
        >
          <span className="text-4xl">{e.icon}</span>
          <div>
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-[#CD853F]">{e.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Events;
