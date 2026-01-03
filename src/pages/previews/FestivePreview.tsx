import {
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Music,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const FestivePreview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-50 text-orange-900">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Decorative Top Border */}
      <div className="h-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500" />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Temple-inspired decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <div className="w-full h-full border-8 border-orange-600 rounded-full" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div className="w-full h-full border-8 border-orange-600 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles className="text-yellow-500" />
            <span className="text-sm tracking-[0.3em] text-orange-600">
              ॐ श्री गणेशाय नमः
            </span>
            <Sparkles className="text-yellow-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Lakshmi & Venkat
          </h1>

          <p className="text-xl text-orange-700 mb-8">are getting married!</p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-lg">
            <Calendar size={20} />
            <span>January 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Kolam Pattern Divider */}
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500" />
          <div className="w-4 h-4 rotate-45 bg-orange-500" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500" />
        </div>
      </div>

      {/* Couple Cards */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl border-2 border-orange-300 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-4xl">
              👰
            </div>
            <h3 className="text-2xl font-bold text-orange-800">Lakshmi</h3>
            <p className="text-orange-600 mt-2">
              Daughter of Mr. & Mrs. Ramachandran
            </p>
            <p className="text-sm text-orange-500 mt-1">Chennai, Tamil Nadu</p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl border-2 border-orange-300 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-4xl">
              🤵
            </div>
            <h3 className="text-2xl font-bold text-orange-800">Venkat</h3>
            <p className="text-orange-600 mt-2">
              Son of Mr. & Mrs. Krishnamurthy
            </p>
            <p className="text-sm text-orange-500 mt-1">Madurai, Tamil Nadu</p>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Wedding Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { event: "Mehendi", date: "Jan 13", time: "4:00 PM", icon: "🎨" },
              { event: "Sangeet", date: "Jan 14", time: "7:00 PM", icon: "💃" },
              { event: "Wedding", date: "Jan 15", time: "9:00 AM", icon: "💒" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="text-xl font-bold">{item.event}</h3>
                <p className="text-white/80">{item.date}</p>
                <p className="text-sm text-white/70">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto text-orange-600 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Venue</h2>
          <p className="text-xl text-orange-700">Sri Meenakshi Temple Hall</p>
          <p className="text-orange-600">East Masi Street, Madurai</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-center">
        <Heart className="mx-auto mb-4" />
        <p>We can't wait to celebrate with you!</p>
        <p className="text-sm mt-4 opacity-70">Festive South Indian Template</p>
      </footer>
    </div>
  );
};

export default FestivePreview;
