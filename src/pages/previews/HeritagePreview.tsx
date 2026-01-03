import { ArrowLeft, Heart, Calendar, MapPin, Music } from "lucide-react";
import { Link } from "react-router-dom";

const HeritagePreview = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#5D3A1A]">
      {/* Kanjivaram-inspired border */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000]" />
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000]" />

      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-6 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#8B0000] text-[#D4AF37] rounded-full shadow-lg hover:bg-[#6B0000] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Zari Pattern Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30L40 0Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border-2 border-[#D4AF37] text-[#8B0000] text-sm tracking-[0.3em]">
              శుభలేఖ • சுபலேகா
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-serif mb-4"
            style={{ color: "#8B0000" }}
          >
            Kavitha
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-0.5 bg-[#D4AF37]" />
            <Heart className="text-[#D4AF37]" fill="#D4AF37" size={24} />
            <div className="w-16 h-0.5 bg-[#D4AF37]" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-serif"
            style={{ color: "#8B0000" }}
          >
            Suresh
          </h1>

          <div className="mt-12 flex items-center justify-center gap-4 text-[#8B0000]">
            <Calendar size={24} />
            <span className="text-xl">April 28, 2024</span>
          </div>
        </div>
      </section>

      {/* Dual Language Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-[#FFF8F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Telugu */}
            <div className="text-center p-8 border border-[#D4AF37]/30 rounded-lg">
              <h2 className="text-2xl mb-6 text-[#D4AF37]">తెలుగు</h2>
              <p className="text-lg leading-relaxed">
                మా ఇంటి శుభకార్యానికి మీకు హృదయపూర్వక ఆహ్వానం. మీ ఆశీర్వాదాలతో
                మా జీవితాన్ని ధన్యం చేయండి.
              </p>
            </div>

            {/* Tamil */}
            <div className="text-center p-8 border border-[#D4AF37]/30 rounded-lg">
              <h2 className="text-2xl mb-6 text-[#D4AF37]">தமிழ்</h2>
              <p className="text-lg leading-relaxed">
                எங்கள் திருமண விழாவிற்கு உங்களை அன்புடன் அழைக்கின்றோம். உங்கள்
                ஆசீர்வாதம் வேண்டுகிறோம்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Couple */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center p-8 bg-gradient-to-br from-[#8B0000]/5 to-[#D4AF37]/5 rounded-lg border border-[#D4AF37]/20">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#8B0000] to-[#D4AF37] flex items-center justify-center">
              <span className="text-5xl">👰</span>
            </div>
            <h3 className="text-2xl font-serif text-[#8B0000]">కవిత / கவிதா</h3>
            <p className="text-[#5D3A1A]/70 mt-2">
              D/o Sri Ramaiah & Smt. Padma
            </p>
            <p className="text-sm text-[#8B0000] mt-1">Vijayawada</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#8B0000]/5 to-[#D4AF37]/5 rounded-lg border border-[#D4AF37]/20">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#8B0000] to-[#D4AF37] flex items-center justify-center">
              <span className="text-5xl">🤵</span>
            </div>
            <h3 className="text-2xl font-serif text-[#8B0000]">
              సురేష్ / சுரேஷ்
            </h3>
            <p className="text-[#5D3A1A]/70 mt-2">
              S/o Sri Krishnan & Smt. Lakshmi
            </p>
            <p className="text-sm text-[#8B0000] mt-1">Chennai</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4 bg-[#5D3A1A] text-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12 text-[#D4AF37]">
            Wedding Events
          </h2>

          <div className="space-y-6">
            {[
              {
                event: "Mehendi & Haldi",
                telugu: "మెహందీ & పసుపు",
                tamil: "மெகந்தி & மஞ்சள்",
                date: "April 27",
                time: "4 PM",
              },
              {
                event: "Wedding Ceremony",
                telugu: "వివాహం",
                tamil: "திருமணம்",
                date: "April 28",
                time: "9 AM",
              },
              {
                event: "Reception",
                telugu: "రిసెప్షన్",
                tamil: "வரவேற்பு",
                date: "April 28",
                time: "7 PM",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 bg-[#D4AF37]/10 rounded-lg border-l-4 border-[#D4AF37]"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#D4AF37]">
                    {item.event}
                  </h3>
                  <p className="text-sm text-[#FFF8F0]/70">
                    {item.telugu} • {item.tamil}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#D4AF37]">{item.date}</p>
                  <p className="text-sm text-[#FFF8F0]/70">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6 text-[#8B0000]" size={48} />
          <h2 className="text-3xl mb-4 text-[#8B0000]">Venue</h2>
          <p className="text-xl text-[#5D3A1A]">
            Sri Venkateswara Kalyana Mandapam
          </p>
          <p className="text-[#8B0000]">Tirupati, Andhra Pradesh</p>
        </div>
      </section>

      {/* Music Option */}
      <section className="py-12 px-4 bg-[#8B0000] text-[#FFF8F0] text-center">
        <Music className="mx-auto mb-4 text-[#D4AF37]" />
        <p className="text-[#D4AF37]">Click to play traditional music</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#FFF8F0]">
        <p className="text-[#5D3A1A]/70 text-sm">
          Heritage Collection Template
        </p>
      </footer>
    </div>
  );
};

export default HeritagePreview;
