import { ArrowLeft, Heart, Calendar, MapPin, Users, Music } from "lucide-react";
import { Link } from "react-router-dom";

const ClassicPreview = () => {
  return (
    <div className="min-h-screen bg-[#FDF5E6] text-[#8B0000]">
      {/* Back Button */}
      <Link
        to="/#templates"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#8B0000] text-[#FFD700] rounded-full shadow-lg hover:bg-[#6B0000] transition-colors"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z' fill='%238B0000' fill-opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="text-center px-4 animate-fade-in">
          <p className="text-lg tracking-[0.3em] mb-4 text-[#CD853F]">
            || శ్రీ గణేశాయ నమః ||
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-8" />

          <h1
            className="font-display text-5xl md:text-7xl mb-4"
            style={{ fontFamily: "serif" }}
          >
            Priya <span className="text-[#FFD700]">&</span> Ravi
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-[#CD853F]">
            మా వివాహానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము
          </p>

          <div className="flex items-center justify-center gap-4 text-lg">
            <Calendar className="text-[#FFD700]" />
            <span>మార్చి 15, 2024</span>
          </div>

          <Heart
            className="mx-auto mt-12 text-[#FFD700] animate-pulse"
            size={32}
          />
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-20 px-4 bg-[#8B0000]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-[#8B0000]">
            వధూవరులు
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white/50 rounded-lg border-2 border-[#FFD700]/30">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#CD853F] flex items-center justify-center">
                <span className="text-4xl text-white">👰</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">ప్రియ</h3>
              <p className="text-[#CD853F]">
                D/o శ్రీ రామకృష్ణ & శ్రీమతి లక్ష్మి
              </p>
            </div>

            <div className="p-8 bg-white/50 rounded-lg border-2 border-[#FFD700]/30">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#CD853F] flex items-center justify-center">
                <span className="text-4xl text-white">🤵</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">రవి</h3>
              <p className="text-[#CD853F]">
                S/o శ్రీ వెంకటేశ్వర్లు & శ్రీమతి సరస్వతి
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center text-[#8B0000]">
            శుభ కార్యక్రమాలు
          </h2>

          <div className="space-y-6">
            {[
              {
                event: "పెళ్ళి",
                date: "మార్చి 15, 2024",
                time: "ముహూర్తం: 10:30 AM",
                icon: "💒",
              },
              {
                event: "రిసెప్షన్",
                date: "మార్చి 15, 2024",
                time: "సాయంత్రం 7:00 PM",
                icon: "🎉",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 bg-white/50 rounded-lg border-l-4 border-[#FFD700]"
              >
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{item.event}</h3>
                  <p className="text-[#CD853F]">
                    {item.date} | {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-4 bg-[#8B0000] text-[#FDF5E6]">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-6 text-[#FFD700]" size={48} />
          <h2 className="font-display text-3xl md:text-4xl mb-6">వేదిక</h2>
          <p className="text-xl mb-2">శ్రీ వెంకటేశ్వర కళ్యాణ మండపం</p>
          <p className="text-[#FFD700]">హైదరాబాద్, తెలంగాణ</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#FDF5E6]">
        <p className="text-[#CD853F]">మీ ఆశీర్వాదాలు మాకు అమూల్యం</p>
        <p className="text-sm mt-4 text-[#8B0000]/60">
          Subhalekha Classic Template
        </p>
      </footer>
    </div>
  );
};

export default ClassicPreview;
