import {
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Plane,
  Palmtree,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";

const DestinationPreview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE4D6] via-[#FFF0E8] to-[#E8F4F8] text-[#2D4A5E]">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#FF7F6E] text-white rounded-full shadow-lg hover:bg-[#E86E5D] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-[#2D4A5E]/20">
          <Palmtree size={80} />
        </div>
        <div className="absolute top-20 right-10 text-[#2D4A5E]/20">
          <Palmtree size={80} />
        </div>
        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[#FFB347]/50">
          <Sun size={120} />
        </div>

        <div className="text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Plane className="text-[#FF7F6E] -rotate-45" size={24} />
            <span className="text-sm tracking-[0.3em] text-[#FF7F6E]">
              DESTINATION WEDDING
            </span>
            <Plane className="text-[#FF7F6E] rotate-45" size={24} />
          </div>

          <h1
            className="text-5xl md:text-7xl font-light mb-4"
            style={{ color: "#2D4A5E" }}
          >
            Tara
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-12 h-0.5 bg-[#FF7F6E]" />
            <Heart className="text-[#FF7F6E]" fill="#FF7F6E" size={24} />
            <div className="w-12 h-0.5 bg-[#FF7F6E]" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-light"
            style={{ color: "#2D4A5E" }}
          >
            Varun
          </h1>

          <p className="mt-8 text-[#2D4A5E]/80 text-lg">
            are tying the knot by the sea
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[#FF7F6E] text-white rounded-full">
            <Calendar size={20} />
            <span>March 5-7, 2024</span>
          </div>

          <p className="mt-6 text-[#FF7F6E] font-medium">📍 Goa, India</p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12 text-[#2D4A5E]">
            Wedding Weekend
          </h2>

          <div className="space-y-8">
            {[
              {
                day: "Day 1 - March 5",
                title: "Welcome Party",
                desc: "Beach bonfire & cocktails",
                time: "7:00 PM",
                icon: "🏖️",
              },
              {
                day: "Day 2 - March 6",
                title: "Mehendi & Pool Party",
                desc: "Poolside celebrations",
                time: "2:00 PM",
                icon: "🎨",
              },
              {
                day: "Day 2 - March 6",
                title: "Sangeet Night",
                desc: "Dance under the stars",
                time: "8:00 PM",
                icon: "💃",
              },
              {
                day: "Day 3 - March 7",
                title: "Wedding Ceremony",
                desc: "Sunset beach wedding",
                time: "5:00 PM",
                icon: "💒",
              },
              {
                day: "Day 3 - March 7",
                title: "Reception Dinner",
                desc: "Beachfront celebration",
                time: "8:00 PM",
                icon: "🎊",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm"
              >
                <span className="text-4xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-[#FF7F6E] mb-1">{item.day}</p>
                  <h3 className="text-xl font-semibold text-[#2D4A5E]">
                    {item.title}
                  </h3>
                  <p className="text-[#2D4A5E]/70">{item.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#FF7F6E] font-medium">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Location */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2D4A5E] to-[#1A3A4A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl mb-6">The Venue</h2>
          <p className="text-2xl mb-2">Taj Exotica Resort & Spa</p>
          <p className="text-white/70">Benaulim Beach, South Goa</p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl mb-2">✈️</p>
              <p className="font-medium">Nearest Airport</p>
              <p className="text-sm text-white/70">Dabolim Airport (25 km)</p>
            </div>
            <div className="p-4">
              <p className="text-3xl mb-2">🏨</p>
              <p className="font-medium">Accommodations</p>
              <p className="text-sm text-white/70">Rooms blocked at venue</p>
            </div>
            <div className="p-4">
              <p className="text-3xl mb-2">👗</p>
              <p className="font-medium">Dress Code</p>
              <p className="text-sm text-white/70">
                Beach formal / Pastel colors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Couple */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF7F6E] to-[#FFB347] flex items-center justify-center">
              <span className="text-5xl">👰</span>
            </div>
            <h3 className="text-2xl text-[#2D4A5E]">Tara Oberoi</h3>
            <p className="text-[#2D4A5E]/70 mt-2">Daughter of</p>
            <p className="text-[#2D4A5E]">Mr. Sameer & Mrs. Ritu Oberoi</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF7F6E] to-[#FFB347] flex items-center justify-center">
              <span className="text-5xl">🤵</span>
            </div>
            <h3 className="text-2xl text-[#2D4A5E]">Varun Khanna</h3>
            <p className="text-[#2D4A5E]/70 mt-2">Son of</p>
            <p className="text-[#2D4A5E]">Mr. Rahul & Mrs. Meera Khanna</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#2D4A5E] text-white text-center">
        <Heart className="mx-auto mb-4" />
        <p>Can't wait to celebrate with you in paradise!</p>
        <p className="text-sm mt-4 opacity-70">Destination Dreams Template</p>
      </footer>
    </div>
  );
};

export default DestinationPreview;
