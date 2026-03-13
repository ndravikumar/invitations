import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

interface RSVPFormProps {
  title?: string;
  accentClassName?: string;
}

const RSVPForm = ({
  title = "RSVP",
  accentClassName = "bg-amber-500 text-stone-950",
}: RSVPFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] backdrop-blur"
        >
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-current/50">Celebrate with us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
          </div>

          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input
              required
              placeholder="Your name"
              className="rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:-translate-y-0.5 focus:border-black/30"
            />
            <input
              type="number"
              min="1"
              placeholder="Number of guests"
              className="rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:-translate-y-0.5 focus:border-black/30"
            />
            <textarea
              placeholder="Blessings / message"
              rows={4}
              className="sm:col-span-2 rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:-translate-y-0.5 focus:border-black/30"
            />
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`sm:col-span-2 rounded-full px-6 py-4 text-sm font-semibold shadow-[0_16px_35px_rgba(0,0,0,0.12)] transition hover:opacity-90 ${accentClassName}`}
            >
              Send RSVP
            </motion.button>
          </form>

          {submitted ? (
            <p className="mt-4 text-center text-sm text-emerald-700">
              RSVP captured locally for preview. Connect this form to your backend or WhatsApp flow.
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
