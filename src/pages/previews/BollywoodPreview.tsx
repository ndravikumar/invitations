import {
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Sparkles,
  Star,
  Music,
} from "lucide-react";
import { Link } from "react-router-dom";

const BollywoodPreview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF1493] via-[#FF69B4] to-[#FF1493] text-white overflow-hidden">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white text-[#FF1493] rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Sparkle Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      {/* Curtain Effect Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#8B0035] to-transparent opacity-50" />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Stage Lights */}
        <div className="absolute top-0 left-1/4 w-32 h-64 bg-gradient-to-b from-yellow-300/30 to-transparent blur-xl" />
        <div className="absolute top-0 right-1/4 w-32 h-64 bg-gradient-to-b from-yellow-300/30 to-transparent blur-xl" />

        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star
              className="text-yellow-300 animate-spin"
              style={{ animationDuration: "3s" }}
              size={24}
            />
            <span className="text-xl tracking-[0.3em] text-yellow-300 font-bold">
              BOLLYWOOD WEDDING
            </span>
            <Star
              className="text-yellow-300 animate-spin"
              style={{ animationDuration: "3s" }}
              size={24}
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Priyanka
          </h1>
          <p className="text-4xl my-4 text-yellow-300">💕</p>
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Raj
          </h1>

          <p className="mt-8 text-xl">✨ A Starry Celebration of Love ✨</p>

          <div className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-[#FF1493] rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,215,0,0.5)]">
            <Calendar size={24} />
            <span>December 31, 2024</span>
          </div>
        </div>
      </section>

      {/* Film Strip Divider */}
      <div className="bg-black py-4 flex justify-center gap-2">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-8 h-6 bg-white/20 rounded" />
        ))}
      </div>

      {/* Couple Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#8B0035] to-[#FF1493]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">
            🌟 The Stars of the Show 🌟
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-yellow-300/30">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                <span className="text-6xl">👸</span>
              </div>
              <h3 className="text-3xl font-bold text-yellow-300">Priyanka</h3>
              <p className="text-white/80 mt-2">The Showstopper Bride</p>
              <p className="text-sm text-white/60 mt-1">
                Daughter of the Sharma Family
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-yellow-300/30">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                <span className="text-6xl">🤴</span>
              </div>
              <h3 className="text-3xl font-bold text-yellow-300">Raj</h3>
              <p className="text-white/80 mt-2">The Leading Man</p>
              <p className="text-sm text-white/60 mt-1">
                Son of the Kapoor Family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FF1493]">
            🎬 The Grand Production 🎬
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                event: "Cocktail Night",
                date: "Dec 29",
                time: "8 PM",
                icon: "🍸",
                tag: "Act 1",
              },
              {
                event: "Mehendi & Sangeet",
                date: "Dec 30",
                time: "4 PM",
                icon: "💃",
                tag: "Act 2",
              },
              {
                event: "Wedding Ceremony",
                date: "Dec 31",
                time: "11 AM",
                icon: "💒",
                tag: "Climax",
              },
              {
                event: "NYE Reception",
                date: "Dec 31",
                time: "9 PM",
                icon: "🎆",
                tag: "Finale",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-r from-[#FF1493]/20 to-[#FF69B4]/20 rounded-xl border border-[#FF1493]/30 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#FF69B4] mt-1">
                      {item.event}
                    </h3>
                    <p className="text-white/70">
                      {item.date} | {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-[#FF1493]">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-4">The Set Location</h2>
          <p className="text-2xl mb-2">JW Marriott Mumbai</p>
          <p className="text-[#FF1493]/80">Juhu Beach, Mumbai</p>
        </div>
      </section>

      {/* Music */}
      <section className="py-12 px-4 bg-[#FF1493] text-center">
        <Music className="mx-auto mb-4 animate-bounce" size={32} />
        <p className="text-xl font-bold">
          🎵 Click to play our love story soundtrack 🎵
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center">
        <div className="flex justify-center gap-4 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400"
              fill="#FACC15"
              size={20}
            />
          ))}
        </div>
        <p className="text-[#FF69B4]">
          It's going to be a blockbuster celebration!
        </p>
        <p className="text-sm mt-4 text-white/50">Bollywood Glamour Template</p>
      </footer>
    </div>
  );
};

export default BollywoodPreview;
