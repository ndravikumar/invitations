import Hero from "./sections/Hero";
import Couple from "./sections/Couple";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Venue from "./sections/Venue";
import Footer from "./sections/Footer";
import MusicPlayer from "./sections/MusicPlayer";
import HeroTraditional from "./sections/HeroTraditional";
import CoupleTraditional from "./sections/CoupleTraditional";
import WeddingEventsTimeline from "./sections/WeddingEventsTimeline";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SubhalekhaRoyale = () => (
  <div className="font-sans">
    {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white text-[#FF1493] rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>
    <MusicPlayer />
    <HeroTraditional />
    <CoupleTraditional />
    <WeddingEventsTimeline />
    <Gallery />
    <Venue />
    <Footer />
  </div>
);

export default SubhalekhaRoyale;
