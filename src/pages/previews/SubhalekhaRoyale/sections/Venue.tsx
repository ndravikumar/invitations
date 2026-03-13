import { MapPin } from "lucide-react";
import { inviteData } from "../data";

const Venue = () => (
  <section className="py-24 bg-[#8B0000] text-[#FDF5E6] text-center px-4">
    <MapPin className="mx-auto mb-6 text-[#FFD700]" size={40} />
    <h2 className="text-4xl font-serif mb-4">వేదిక</h2>
    <p className="text-xl">{inviteData.wedding.venue}</p>
    <p className="text-[#FFD700] mb-6">{inviteData.wedding.location}</p>
    <a
      href={inviteData.wedding.mapLink}
      target="_blank"
      className="inline-block bg-[#FFD700] text-[#8B0000] px-6 py-2 rounded-full"
    >
      Open in Maps
    </a>
  </section>
);

export default Venue;
