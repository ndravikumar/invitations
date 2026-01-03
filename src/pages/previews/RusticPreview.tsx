import { ArrowLeft, Heart, Calendar, MapPin, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const RusticPreview = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#5D5348]">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#7C8B6F] text-white rounded-full shadow-lg hover:bg-[#6B7A5E] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Botanical Pattern */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-20">
          <Leaf className="w-full h-full text-[#7C8B6F]" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 rotate-180">
          <Leaf className="w-full h-full text-[#7C8B6F]" />
        </div>

        <div className="text-center relative z-10 max-w-xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-[#C4A77D]" />
            <Leaf className="text-[#7C8B6F]" size={24} />
            <div className="w-12 h-0.5 bg-[#C4A77D]" />
          </div>

          <p className="text-sm tracking-[0.3em] text-[#C4A77D] mb-8">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <h1
            className="text-5xl md:text-7xl font-light mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#7C8B6F" }}
          >
            Ananya
          </h1>
          <p className="text-2xl text-[#C4A77D] my-4">&</p>
          <h1
            className="text-5xl md:text-7xl font-light"
            style={{ fontFamily: "Georgia, serif", color: "#7C8B6F" }}
          >
            Rohan
          </h1>

          <p className="mt-8 text-[#5D5348]/80">
            Invite you to celebrate their wedding
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[#7C8B6F]/10 rounded-full">
            <Calendar className="text-[#7C8B6F]" size={20} />
            <span className="text-[#7C8B6F]">June 12, 2024</span>
          </div>
        </div>
      </section>

      {/* Paper Texture Section */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="mx-auto mb-8 text-[#C4A77D]" size={32} />
          <blockquote className="text-2xl md:text-3xl font-light text-[#5D5348] leading-relaxed italic">
            "In all the world, there is no heart for me like yours. In all the
            world, there is no love for you like mine."
          </blockquote>
          <p className="mt-6 text-[#7C8B6F]">— Maya Angelou</p>
        </div>
      </section>

      {/* Couple */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-[#E8E4DC]">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7C8B6F] to-[#C4A77D] flex items-center justify-center">
              <span className="text-5xl">🌸</span>
            </div>
            <h3
              className="text-2xl text-[#7C8B6F]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ananya Kapoor
            </h3>
            <p className="text-[#5D5348]/70 mt-2">Daughter of</p>
            <p className="text-[#5D5348]">Mr. Vikram & Mrs. Priya Kapoor</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-[#E8E4DC]">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7C8B6F] to-[#C4A77D] flex items-center justify-center">
              <span className="text-5xl">🌿</span>
            </div>
            <h3
              className="text-2xl text-[#7C8B6F]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Rohan Mehta
            </h3>
            <p className="text-[#5D5348]/70 mt-2">Son of</p>
            <p className="text-[#5D5348]">Mr. Anil & Mrs. Neeta Mehta</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#7C8B6F] text-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-center mb-12"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Wedding Day
          </h2>

          <div className="space-y-8">
            {[
              {
                time: "10:00 AM",
                event: "Haldi Ceremony",
                desc: "Traditional turmeric ritual",
              },
              {
                time: "2:00 PM",
                event: "Wedding Ceremony",
                desc: "Exchange of vows",
              },
              { time: "4:00 PM", event: "Pheras", desc: "Seven sacred rounds" },
              {
                time: "7:00 PM",
                event: "Reception Dinner",
                desc: "Celebrate with family & friends",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-24 text-right text-[#C4A77D] font-medium shrink-0">
                  {item.time}
                </div>
                <div className="w-3 h-3 mt-2 rounded-full bg-[#C4A77D] shrink-0" />
                <div>
                  <h3 className="text-xl font-medium">{item.event}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6 text-[#7C8B6F]" size={48} />
          <h2
            className="text-3xl mb-4 text-[#7C8B6F]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Venue
          </h2>
          <p className="text-xl text-[#5D5348]">The Botanical Garden Estate</p>
          <p className="text-[#7C8B6F]">Bangalore, Karnataka</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#E8E4DC] text-center">
        <Leaf className="mx-auto mb-4 text-[#7C8B6F]" />
        <p className="text-[#5D5348]/70 text-sm">Rustic Romance Template</p>
      </footer>
    </div>
  );
};

export default RusticPreview;
