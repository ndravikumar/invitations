import { useEffect, useMemo, useRef, useState } from "react";
import { Music2, Pause, Share2 } from "lucide-react";

const playBellTone = async (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const frequencies = [523.25, 659.25, 783.99];

  frequencies.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02 + index * 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + index * 0.1);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now + index * 0.02);
    oscillator.stop(now + 1.9 + index * 0.1);
  });
};

interface InviteControlsProps {
  title: string;
  dark?: boolean;
  autoBell?: boolean;
}

const InviteControls = ({ title, dark = false, autoBell = false }: InviteControlsProps) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");

  const buttonClassName = useMemo(
    () =>
      dark
        ? "border-white/15 bg-white/10 text-white hover:bg-white/20"
        : "border-black/10 bg-white/80 text-stone-900 hover:bg-white",
    [dark],
  );

  useEffect(() => {
    if (!autoBell) {
      return;
    }

    const timer = window.setTimeout(async () => {
      try {
        const AudioContextCtor = window.AudioContext;
        if (!AudioContextCtor) {
          return;
        }
        audioContextRef.current = audioContextRef.current ?? new AudioContextCtor();
        await playBellTone(audioContextRef.current);
        setMusicOn(true);
      } catch {
        setMusicOn(false);
      }
    }, 400);

    return () => window.clearTimeout(timer);
  }, [autoBell]);

  const handleMusicToggle = async () => {
    try {
      const AudioContextCtor = window.AudioContext;
      if (!AudioContextCtor) {
        return;
      }

      audioContextRef.current = audioContextRef.current ?? new AudioContextCtor();
      await playBellTone(audioContextRef.current);
      setMusicOn((current) => !current);
    } catch {
      setMusicOn(false);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareState("copied");
        window.setTimeout(() => setShareState("idle"), 1800);
      }
    } catch {
      setShareState("idle");
    }
  };

  return (
    <div className="fixed right-4 top-4 z-50 flex gap-3">
      <button
        type="button"
        onClick={handleMusicToggle}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur transition ${buttonClassName}`}
        aria-label="Toggle music"
      >
        {musicOn ? <Pause size={18} /> : <Music2 size={18} />}
      </button>
      <button
        type="button"
        onClick={handleShare}
        className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium shadow-lg backdrop-blur transition ${buttonClassName}`}
      >
        <Share2 size={16} />
        {shareState === "copied" ? "Copied" : "Share"}
      </button>
    </div>
  );
};

export default InviteControls;
