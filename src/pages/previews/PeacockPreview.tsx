import { ArrowLeft, Heart, Calendar, MapPin, Feather } from "lucide-react";
import { Link } from "react-router-dom";

const PeacockPreview = () => {
  return (
    <div className="min-h-screen bg-[#004D40] text-[#D4AF37]">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#004D40] rounded-full shadow-lg hover:bg-[#C5A028] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Peacock Feather Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#D4AF37] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-[#D4AF37] rounded-full transform translate-x-1/3 translate-y-1/3" />
        </div>

        {/* Ornate Border */}
        <div className="absolute inset-4 md:inset-8 border-2 border-[#D4AF37]/40 rounded-lg pointer-events-none">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#004D40] px-6">
            <Feather className="text-[#D4AF37] rotate-45" size={32} />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#004D40] px-6">
            <Feather className="text-[#D4AF37] -rotate-45" size={32} />
          </div>
        </div>

        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Feather className="text-[#D4AF37] -rotate-45" size={24} />
            <span className="text-sm tracking-[0.4em]">
              || श्री गणेशाय नमः ||
            </span>
            <Feather className="text-[#D4AF37] rotate-45" size={24} />
          </div>

          <h1
            className="text-5xl md:text-7xl font-serif mb-4"
            style={{ fontFamily: "serif" }}
          >
            Meera
          </h1>
          <p className="text-3xl my-4">&</p>
          <h1
            className="text-5xl md:text-7xl font-serif"
            style={{ fontFamily: "serif" }}
          >
            Krishna
          </h1>

          <div className="mt-12">
            <div className="inline-flex items-center gap-4 px-8 py-4 border-2 border-[#D4AF37] rounded-full">
              <Calendar size={24} />
              <span className="text-xl tracking-wider">May 15, 2024</span>
            </div>
          </div>

          <p className="mt-8 text-[#D4AF37]/80 text-lg">
            Request the pleasure of your company
          </p>
        </div>
      </section>

      {/* Mandala Section */}
      <section className="py-20 px-4 bg-[#003D33]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="w-32 h-32 rounded-full border-4 border-[#D4AF37] flex items-center justify-center relative">
              <div className="absolute inset-2 rounded-full border-2 border-[#D4AF37]/50" />
              <Heart className="text-[#D4AF37]" fill="#D4AF37" size={32} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 border border-[#D4AF37]/30 rounded-lg bg-[#D4AF37]/5">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                <span className="text-4xl">👰</span>
              </div>
              <h3 className="text-2xl font-serif mb-2">Meera Sharma</h3>
              <p className="text-[#D4AF37]/70">Daughter of</p>
              <p className="text-[#D4AF37]/90">
                Mr. Rajesh & Mrs. Sunita Sharma
              </p>
              <p className="text-sm text-[#D4AF37]/60 mt-2">Delhi</p>
            </div>

            <div className="text-center p-8 border border-[#D4AF37]/30 rounded-lg bg-[#D4AF37]/5">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                <span className="text-4xl">🤵</span>
              </div>
              <h3 className="text-2xl font-serif mb-2">Krishna Murthy</h3>
              <p className="text-[#D4AF37]/70">Son of</p>
              <p className="text-[#D4AF37]/90">
                Mr. Venkat & Mrs. Padma Murthy
              </p>
              <p className="text-sm text-[#D4AF37]/60 mt-2">Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4 bg-[#004D40]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12 tracking-[0.2em]">
            CEREMONIES
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                event: "Haldi Ceremony",
                date: "May 14",
                time: "10:00 AM",
                icon: "🌼",
              },
              { event: "Mehendi", date: "May 14", time: "4:00 PM", icon: "🎨" },
              {
                event: "Wedding",
                date: "May 15",
                time: "11:00 AM",
                icon: "💍",
              },
              {
                event: "Reception",
                date: "May 15",
                time: "7:00 PM",
                icon: "🎊",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-[#D4AF37]/30 rounded-lg text-center hover:bg-[#D4AF37]/10 transition-colors"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                <p className="text-[#D4AF37]/70">
                  {item.date} | {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-4 bg-[#D4AF37] text-[#004D40]">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-serif mb-4">Venue</h2>
          <p className="text-2xl mb-2">The Grand Palace</p>
          <p className="text-[#004D40]/80">Udaipur, Rajasthan</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#004D40] text-center">
        <Feather className="mx-auto mb-4 text-[#D4AF37]" />
        <p className="text-[#D4AF37]/70 text-sm">Peacock Paradise Template</p>
      </footer>
    </div>
  );
};

export default PeacockPreview;
