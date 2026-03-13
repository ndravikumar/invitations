import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { inviteData } from "../data";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn("Autoplay blocked by browser");
    }
  };

  // Optional: stop music when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={inviteData.music} loop preload="auto" />

      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                   w-12 h-12 rounded-full shadow-xl
                   bg-[#FFD700] text-[#8B0000]
                   hover:scale-105 transition"
      >
        {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default MusicPlayer;
