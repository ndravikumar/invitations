import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../animations";
import { inviteData } from "../data";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-[#FDF5E6] text-[#8B0000]">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="text-center px-4"
    >
      <p className="tracking-[0.3em] text-[#CD853F] mb-4">
        || శ్రీ గణేశాయ నమః ||
      </p>

      <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif">
        {inviteData.bride.name}
        <span className="text-[#FFD700] mx-3">&</span>
        {inviteData.groom.name}
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-6 text-xl text-[#CD853F]">
        {inviteData.wedding.date}
      </motion.p>
    </motion.div>
  </section>
);

export default Hero;
