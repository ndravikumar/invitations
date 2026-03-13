import { useEffect, useState } from "react";

interface CountdownProps {
  weddingDate: string;
  className?: string;
  itemClassName?: string;
}

const getTimeLeft = (date: string) => {
  const distance = new Date(date).getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const WeddingCountdown = ({
  weddingDate,
  className = "",
  itemClassName = "bg-white/70",
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className={`rounded-[1.5rem] border border-black/5 px-4 py-5 text-center shadow-sm backdrop-blur ${itemClassName}`}
        >
          <div className="text-3xl font-semibold sm:text-4xl">{value}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.35em] text-current/55">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default WeddingCountdown;
