import {
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Crown,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const RoyalPreview = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#D4AF37]">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0a0a0a] rounded-full shadow-lg hover:bg-[#C5A028] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, #D4AF37 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Golden Border Frame */}
        <div className="absolute inset-8 border-2 border-[#D4AF37]/30 pointer-events-none">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-4">
            <Crown className="text-[#D4AF37]" size={24} />
          </div>
        </div>

        <div className="text-center px-4 z-10">
          <div className="flex justify-center gap-4 mb-8">
            <Sparkles className="animate-pulse" />
            <span className="text-sm tracking-[0.5em]">ROYAL WEDDING</span>
            <Sparkles className="animate-pulse" />
          </div>

          <h1
            className="text-6xl md:text-8xl font-serif mb-6"
            style={{ fontFamily: "serif" }}
          >
            Anika
          </h1>
          <p className="text-4xl mb-6">&</p>
          <h1
            className="text-6xl md:text-8xl font-serif"
            style={{ fontFamily: "serif" }}
          >
            Arjun
          </h1>

          <div className="mt-12 inline-flex items-center gap-4 px-8 py-4 border border-[#D4AF37] rounded-full">
            <Calendar size={24} />
            <span className="text-xl tracking-wider">February 14, 2024</span>
          </div>
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl mb-16 tracking-[0.3em]">
            THE COUPLE
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-transparent">
                <span className="text-5xl">👸</span>
              </div>
              <h3 className="text-2xl font-serif mb-2">Princess Anika</h3>
              <p className="text-[#D4AF37]/70">
                Daughter of the Royal House of Rajputana
              </p>
            </div>

            <div className="text-center p-8 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-transparent">
                <span className="text-5xl">🤴</span>
              </div>
              <h3 className="text-2xl font-serif mb-2">Prince Arjun</h3>
              <p className="text-[#D4AF37]/70">
                Son of the Royal House of Mewar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 px-4 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl mb-16 tracking-[0.3em]">
            ROYAL CELEBRATIONS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                event: "Mehendi Ceremony",
                date: "Feb 12",
                time: "4 PM",
                icon: "🌿",
              },
              {
                event: "Royal Sangeet",
                date: "Feb 13",
                time: "7 PM",
                icon: "🎭",
              },
              {
                event: "Wedding Ceremony",
                date: "Feb 14",
                time: "11 AM",
                icon: "👑",
              },
              {
                event: "Grand Reception",
                date: "Feb 14",
                time: "8 PM",
                icon: "🏰",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-[#D4AF37]/30 text-center hover:bg-[#D4AF37]/10 transition-colors"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-semibold mb-2">{item.event}</h3>
                <p className="text-sm text-[#D4AF37]/70">{item.date}</p>
                <p className="text-sm text-[#D4AF37]/50">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl mb-8 tracking-[0.3em]">THE PALACE</h2>
          <p className="text-2xl mb-2">Umaid Bhawan Palace</p>
          <div className="flex items-center justify-center gap-2 text-[#D4AF37]/70">
            <MapPin size={18} />
            <span>Jodhpur, Rajasthan</span>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-16 px-4 bg-[#D4AF37] text-[#0a0a0a]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl mb-4">Kindly Respond</h2>
          <button className="px-8 py-3 bg-[#0a0a0a] text-[#D4AF37] rounded-full hover:bg-[#1a1a1a] transition-colors">
            RSVP Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] text-center">
        <Heart className="mx-auto mb-4 text-[#D4AF37]" />
        <p className="text-[#D4AF37]/70 text-sm">Royal Sangeet Template</p>
      </footer>
    </div>
  );
};

export default RoyalPreview;
