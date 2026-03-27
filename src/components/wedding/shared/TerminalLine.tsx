import { motion } from "framer-motion";

interface TerminalLineProps {
  text: string;
  prefix?: string;
  delay?: number;
  className?: string;
}

const TerminalLine = ({
  text,
  prefix = ">",
  delay = 0,
  className = "",
}: TerminalLineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.35, delay }}
      className={`flex gap-3 font-mono text-sm leading-7 sm:text-base ${className}`}
    >
      <span className="text-emerald-400">{prefix}</span>
      <span>{text}</span>
    </motion.div>
  );
};

export default TerminalLine;
