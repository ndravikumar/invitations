import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

const TypingText = ({
  text,
  speed = 18,
  delay = 200,
  className = "",
  cursorClassName = "bg-current",
}: TypingTextProps) => {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    setVisibleLength(0);
    let interval: number | undefined;

    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setVisibleLength((current) => {
          if (current >= text.length) {
            if (interval) {
              window.clearInterval(interval);
            }
            return current;
          }

          return current + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [delay, speed, text]);

  const visibleText = useMemo(() => text.slice(0, visibleLength), [text, visibleLength]);

  return (
    <span className={`inline-flex whitespace-pre-wrap ${className}`}>
      <span>{visibleText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className={`ml-0.5 inline-block h-[1.1em] w-2 self-end rounded-sm ${cursorClassName}`}
      />
    </span>
  );
};

export default TypingText;
