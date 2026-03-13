import { motion } from "framer-motion";

const heroData = {
  mantra: "|| శ్రీ గణేశాయ నమః ||",
  bride: "ప్రియ",
  groom: "రవి",
  date: "మార్చి 15, 2024",
};

const HeroTraditional = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/traditional-bg.png')",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-[#FDF5E6]/80 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-[#7B1E1E]">
        {/* Mantra */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="tracking-[0.35em] text-sm md:text-base mb-6"
        >
          {heroData.mantra}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-[1.5px] bg-[#C9A24D] mx-auto mb-10"
        />

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9 }}
          className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
        >
          {heroData.bride}
          <span className="mx-4 text-[#C9A24D] font-normal">&</span>
          {heroData.groom}
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-base md:text-lg text-[#8B5A2B] tracking-wide"
        >
          {heroData.date}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroTraditional;
