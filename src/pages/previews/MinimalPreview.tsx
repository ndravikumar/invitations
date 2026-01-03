import { ArrowLeft, Heart, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const MinimalPreview = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full shadow-lg hover:bg-neutral-800 transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <p className="text-xs tracking-[0.5em] text-neutral-400 mb-8">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
            Sarah
          </h1>
          <p className="text-2xl text-neutral-400 my-4">&</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Michael
          </h1>

          <div className="mt-16 space-y-2">
            <p className="text-xs tracking-[0.3em] text-neutral-400">
              INVITE YOU TO CELEBRATE THEIR WEDDING
            </p>
            <p className="text-2xl font-light">March 22, 2024</p>
          </div>

          <div className="mt-16">
            <div className="w-px h-16 bg-neutral-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] text-neutral-400 mb-4">
                THE CEREMONY
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <Calendar size={18} />
                  <span>March 22, 2024</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <Clock size={18} />
                  <span>4:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <MapPin size={18} />
                  <span>The Garden Chapel</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs tracking-[0.3em] text-neutral-400 mb-4">
                THE RECEPTION
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <Calendar size={18} />
                  <span>March 22, 2024</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <Clock size={18} />
                  <span>6:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-neutral-600">
                  <MapPin size={18} />
                  <span>Riverside Estate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Couple */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <span className="text-4xl">👰</span>
            </div>
            <h3 className="text-xl font-light">Sarah Anderson</h3>
            <p className="text-sm text-neutral-500 mt-2">
              Daughter of James & Mary Anderson
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <span className="text-4xl">🤵</span>
            </div>
            <h3 className="text-xl font-light">Michael Bennett</h3>
            <p className="text-sm text-neutral-500 mt-2">
              Son of Robert & Susan Bennett
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4 bg-neutral-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="mx-auto mb-8 text-neutral-400" size={24} />
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
            "The best thing to hold onto in life is each other."
          </blockquote>
          <p className="mt-6 text-neutral-500 text-sm">— Audrey Hepburn</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-neutral-400 text-sm">
          We can't wait to celebrate with you
        </p>
        <p className="text-neutral-300 text-xs mt-4">
          Minimalist Elegance Template
        </p>
      </footer>
    </div>
  );
};

export default MinimalPreview;
