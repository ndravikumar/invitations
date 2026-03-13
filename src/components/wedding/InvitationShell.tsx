import { useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InviteControls from "@/components/wedding/InviteControls";
import {
  FlowerCorner,
  MandalaBurst,
  TempleBell,
} from "@/components/wedding/DecorativeSvgs";

interface InvitationShellProps {
  brideName: string;
  groomName: string;
  title: string;
  children: ReactNode;
  overlayClassName?: string;
  cardClassName?: string;
  darkControls?: boolean;
}

export default function InvitationShell({
  brideName,
  groomName,
  title,
  children,
  overlayClassName = "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%),linear-gradient(180deg,rgba(30,10,18,0.94),rgba(8,8,12,0.96))]",
  cardClassName = "bg-white/10 border-white/15 text-white",
  darkControls = true,
}: InvitationShellProps) {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const whatsappUrl = useMemo(() => {
    const url = typeof window === "undefined" ? "" : window.location.href;
    const text = encodeURIComponent(
      `You are invited to the wedding of ${brideName} and ${groomName}. ${url}`,
    );
    return `https://wa.me/?text=${text}`;
  }, [brideName, groomName]);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      audio.volume = 0.45;
      await audio.play();
      setMusicOn(true);
    } catch {
      setMusicOn(false);
    }
  };

  const handleOpen = async () => {
    setOpened(true);
    await startMusic();
    window.setTimeout(() => {
      const hero = document.getElementById("invitation-start");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);
  };

  const handleToggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    await startMusic();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src="/music/backgroundGanesh.mp3"
        loop
        preload="metadata"
      />

      {opened ? (
        <InviteControls
          dark={darkControls}
          musicOn={musicOn}
          onToggleMusic={handleToggleMusic}
          onCopyLink={handleCopyLink}
          whatsappUrl={whatsappUrl}
          copied={copied}
        />
      ) : null}

      <AnimatePresence>
        {!opened ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className={`fixed inset-0 z-[90] overflow-hidden px-4 py-8 sm:px-6 ${overlayClassName}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 text-amber-300/75"
            >
              <TempleBell className="h-full w-full" />
            </motion.div>
            <MandalaBurst className="absolute left-4 top-10 h-28 w-28 text-white/10 sm:left-10" />
            <MandalaBurst className="absolute bottom-10 right-4 h-28 w-28 text-white/10 sm:right-10" />
            <FlowerCorner className="absolute left-0 top-0 h-32 w-32 text-amber-300/25" />
            <FlowerCorner className="absolute bottom-0 right-0 h-32 w-32 rotate-180 text-amber-300/25" />

            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative w-full max-w-xl rounded-[2rem] border p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-10 ${cardClassName}`}
              >
                <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-current/15" />
                <p className="text-sm uppercase tracking-[0.45em] text-current/70">
                  You are invited to the wedding of
                </p>
                <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
                  {brideName} <span className="mx-2 text-rose-300">&hearts;</span> {groomName}
                </h1>
                <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-current/75 sm:text-base">
                  Step into a cinematic invitation experience with music, motion,
                  and celebration details.
                </p>
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleOpen}
                  className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-stone-900 shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
                >
                  Open Invitation
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        animate={{ filter: opened ? "blur(0px)" : "blur(2px)" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
