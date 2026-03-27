import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

const SectionContainer = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
}: SectionContainerProps) => {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 sm:py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        className={`mx-auto max-w-6xl ${contentClassName}`}
      >
        <div className="mb-8">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.35em] text-current/60 sm:text-sm">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-current/70 sm:text-base">{description}</p>
          ) : null}
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;
