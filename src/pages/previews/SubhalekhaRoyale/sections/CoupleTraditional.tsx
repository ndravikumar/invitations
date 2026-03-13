import { motion } from "framer-motion";

const coupleData = {
  bride: {
    name: "ప్రియ",
    detail: "MBA Graduate",
    parents: "శ్రీ రామకృష్ణ & శ్రీమతి లక్ష్మి",
    photo: "/images/gallery1.jpg",
  },
  groom: {
    name: "రవి",
    detail: "Software Engineer, Hyderabad",
    parents: "శ్రీ వెంకటేశ్వర్లు & శ్రీమతి సరస్వతి",
    photo: "/images/gallery2.jpg",
  },
};

/* Animation presets */
const slideLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.15 },
  },
};

const photoReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CoupleTraditional = () => {
  return (
    <section className="py-24 bg-[#FDF5E6]">
      <div className="max-w-6xl mx-auto px-6 text-center text-[#7B1E1E]">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl mb-20"
        >
          వధూవరులు
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Bride */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={photoReveal}
              className="relative w-44 h-44 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-[#C9A24D]/30 blur-md" />
              <motion.img
                src={coupleData.bride.photo}
                alt={coupleData.bride.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-[#FDF5E6]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            <h3 className="font-serif text-2xl">{coupleData.bride.name}</h3>

            <p className="text-sm italic text-[#A67C52]">
              {coupleData.bride.detail}
            </p>

            <p className="text-sm text-[#8B5A2B]">
              కుమార్తె — {coupleData.bride.parents}
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={photoReveal}
              className="relative w-44 h-44 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-[#C9A24D]/30 blur-md" />
              <motion.img
                src={coupleData.groom.photo}
                alt={coupleData.groom.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-[#FDF5E6]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            <h3 className="font-serif text-2xl">{coupleData.groom.name}</h3>

            <p className="text-sm italic text-[#A67C52]">
              {coupleData.groom.detail}
            </p>

            <p className="text-sm text-[#8B5A2B]">
              కుమారుడు — {coupleData.groom.parents}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleTraditional;
