import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Link2, Share2 } from "lucide-react";

interface InviteControlsProps {
  musicOn: boolean;
  onToggleMusic: () => void;
  onCopyLink: () => void;
  whatsappUrl: string;
  dark?: boolean;
  copied?: boolean;
}

const InviteControls = ({
  musicOn,
  onToggleMusic,
  onCopyLink,
  whatsappUrl,
  dark = false,
  copied = false,
}: InviteControlsProps) => {
  const baseClassName = dark
    ? "border-white/15 bg-black/20 text-white hover:bg-black/35"
    : "border-black/10 bg-white/80 text-stone-900 hover:bg-white";

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
        type="button"
        onClick={onToggleMusic}
        className={`inline-flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_15px_35px_rgba(0,0,0,0.18)] backdrop-blur transition ${baseClassName}`}
        aria-label="Toggle music"
      >
        <span className="text-lg leading-none">{musicOn ? "??" : "??"}</span>
      </motion.button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500 text-white shadow-[0_15px_35px_rgba(16,185,129,0.28)] transition hover:-translate-y-0.5"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
        type="button"
        onClick={onCopyLink}
        className={`relative inline-flex h-14 min-w-14 items-center justify-center rounded-full border px-4 shadow-[0_15px_35px_rgba(0,0,0,0.18)] backdrop-blur transition ${baseClassName}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : "share"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            {copied ? <Link2 size={16} /> : <Share2 size={16} />}
            {copied ? "Copied" : "Copy"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default InviteControls;


