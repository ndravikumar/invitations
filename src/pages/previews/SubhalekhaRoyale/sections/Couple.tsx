import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../animations";
import { inviteData } from "../data";

const PersonCard = ({ data, direction }: any) => (
  <motion.div
    variants={direction}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white/70 p-10 rounded-2xl shadow-xl text-center"
  >
    <div className="relative w-40 h-40 mx-auto mb-6">
      <div className="absolute inset-0 bg-[#FFD700]/30 blur-lg rounded-full" />
      <img
        src={data.photo}
        alt={data.name}
        className="relative w-full h-full rounded-full object-cover border-4 border-white"
      />
    </div>
    <h3 className="text-2xl font-semibold">{data.name}</h3>
    <p className="text-[#CD853F] mt-2">{data.parents}</p>
  </motion.div>
);

const Couple = () => (
  <section className="py-24 bg-[#8B0000]/5">
    <h2 className="text-center text-4xl font-serif mb-16 text-[#8B0000]">
      వధూవరులు
    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 px-4">
      <PersonCard data={inviteData.bride} direction={slideLeft} />
      <PersonCard data={inviteData.groom} direction={slideRight} />
    </div>
  </section>
);

export default Couple;
