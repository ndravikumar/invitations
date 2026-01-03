import { ArrowLeft, Heart, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModernPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Cover
    <div
      key="cover"
      className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-stone-100 to-stone-200 p-8"
    >
      <p className="text-sm tracking-[0.4em] text-stone-500 mb-4">
        THE WEDDING OF
      </p>
      <h1 className="text-5xl md:text-7xl font-light tracking-wide text-stone-800 mb-2">
        Emma
      </h1>
      <p className="text-3xl text-stone-400 my-2">&</p>
      <h1 className="text-5xl md:text-7xl font-light tracking-wide text-stone-800">
        James
      </h1>
      <div className="mt-8 w-16 h-0.5 bg-stone-400" />
      <p className="mt-6 text-stone-500">December 20, 2024</p>
    </div>,

    // Our Story
    <div
      key="story"
      className="flex flex-col items-center justify-center h-full bg-white p-8"
    >
      <h2 className="text-3xl font-light text-stone-800 mb-8">Our Story</h2>
      <p className="text-stone-600 max-w-md text-center leading-relaxed">
        We met on a rainy afternoon in a small coffee shop. What started as a
        conversation over two cups of latte turned into a lifetime of love and
        adventure together.
      </p>
      <Heart className="mt-8 text-rose-400" size={24} />
    </div>,

    // Ceremony
    <div
      key="ceremony"
      className="flex flex-col items-center justify-center h-full bg-stone-100 p-8"
    >
      <h2 className="text-3xl font-light text-stone-800 mb-8">The Ceremony</h2>
      <Calendar className="text-stone-600 mb-4" size={32} />
      <p className="text-xl text-stone-700 mb-2">December 20, 2024</p>
      <div className="flex items-center gap-2 text-stone-600 mb-6">
        <Clock size={18} />
        <span>3:00 PM</span>
      </div>
      <MapPin className="text-stone-600 mb-2" size={24} />
      <p className="text-stone-600 text-center">
        St. Mary's Cathedral
        <br />
        123 Garden Street, New York
      </p>
    </div>,

    // Reception
    <div
      key="reception"
      className="flex flex-col items-center justify-center h-full bg-white p-8"
    >
      <h2 className="text-3xl font-light text-stone-800 mb-8">Reception</h2>
      <p className="text-stone-600 text-center mb-6">
        Join us for dinner and dancing
        <br />
        immediately following the ceremony
      </p>
      <div className="p-6 bg-stone-100 rounded-lg">
        <p className="font-medium text-stone-800">The Grand Ballroom</p>
        <p className="text-stone-600">456 Luxury Avenue</p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-full shadow-lg hover:bg-stone-700 transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Book Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg">
          {/* Book */}
          <div
            className="relative bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-500"
            style={{
              aspectRatio: "3/4",
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Page Content */}
            <div className="absolute inset-0">{pages[currentPage]}</div>

            {/* Page Turn Effect Overlay */}
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-stone-300/20 to-transparent pointer-events-none" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-6 py-2 bg-stone-800 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? "bg-stone-800" : "bg-stone-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(pages.length - 1, p + 1))
              }
              disabled={currentPage === pages.length - 1}
              className="px-6 py-2 bg-stone-800 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors"
            >
              Next
            </button>
          </div>

          <p className="text-center text-sm text-stone-500 mt-4">
            Modern Flip Invite Template
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernPreview;
