import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { inviteData } from "../data";

const Gallery = () => (
  <section className="py-24 bg-[#8B0000]/5 px-4">
    <h2 className="text-center text-4xl font-serif mb-12 text-[#8B0000]">
      జ్ఞాపకాలు
    </h2>

    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
      {inviteData.gallery.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl object-cover shadow-lg"
        />
      ))}
    </div>
  </section>
);

export default Gallery;
