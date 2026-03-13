import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import HeroSection from "@/components/wedding/HeroSection";
import EventSchedule from "@/components/wedding/EventSchedule";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import VenueMap from "@/components/wedding/VenueMap";
import RSVPForm from "@/components/wedding/RSVPForm";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import CoupleStoryTimeline from "@/components/wedding/CoupleStoryTimeline";
import InvitationShell from "@/components/wedding/InvitationShell";
import { KolamPattern, MangoLeafBorder, MandalaBurst, FlowerCorner } from "@/components/wedding/DecorativeSvgs";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const FestiveSouthIndian = ({ data }: TemplateProps) => {
  const weddingDateLabel = useMemo(
    () => format(new Date(data.weddingDate), "EEEE, dd MMM yyyy"),
    [data.weddingDate],
  );
  const festiveEvents = data.events.slice(0, 4);

  return (
    <InvitationShell
      title="Festive South Indian Wedding"
      brideName={data.brideName}
      groomName={data.groomName}
      overlayClassName="bg-[radial-gradient(circle_at_top,rgba(247,217,126,0.14),transparent_45%),linear-gradient(180deg,rgba(92,19,22,0.95),rgba(32,41,20,0.96))]"
      cardClassName="border-[#f7d97e]/25 bg-white/10 text-white"
      darkControls
    >
      <div className="min-h-screen bg-[#fff4dd] text-[#5f1316]">
        <Link
          to="/templates"
          className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#c99d2b]/30 bg-[#8b1e20] px-4 py-2 text-sm font-medium text-white shadow-lg"
        >
          <ArrowLeft size={16} />
          Templates
        </Link>

        <MangoLeafBorder className="h-20 w-full text-[#c99d2b]" />

        <div className="relative overflow-hidden">
          <KolamPattern className="absolute left-4 top-32 h-24 w-24 text-[#c99d2b]/20" />
          <MandalaBurst className="absolute right-4 top-32 h-24 w-24 text-[#2f7d4a]/15" />
          <FlowerCorner className="absolute bottom-8 left-0 h-32 w-32 text-[#8b1e20]/10" />
          <div id="invitation-start">
            <HeroSection
              brideName={data.brideName}
              groomName={data.groomName}
              weddingDateLabel={weddingDateLabel}
              venue={data.venue}
              eyebrow="South Indian Temple Celebration"
              subtitle="A festive invitation with floral borders, kolam motifs, and grand celebration details."
              heroImage="/images/gallery2.jpg"
              overlayClassName="bg-[linear-gradient(180deg,rgba(139,30,32,0.55),rgba(50,89,42,0.78))]"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="grid w-full max-w-5xl gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur md:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Haldi", value: "Sun-kissed rituals" },
                    { label: "Mehendi", value: "Henna and music" },
                    { label: "Reception", value: "Dinner and dancing" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#f7d97e]">{item.label}</p>
                      <p className="mt-2 text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
                <WeddingCountdown weddingDate={data.weddingDate} itemClassName="bg-white/12 text-white" />
              </motion.div>
            </HeroSection>
          </div>
        </div>

        <section className="relative px-4 py-16 sm:px-6">
          <KolamPattern className="absolute left-4 top-10 h-24 w-24 text-[#c99d2b]/25" />
          <KolamPattern className="absolute bottom-10 right-4 h-24 w-24 text-[#2f7d4a]/20" />
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#c99d2b]/20 bg-white/70 p-8 shadow-[0_24px_60px_rgba(95,19,22,0.12)]">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0c2] px-4 py-2 text-sm font-medium text-[#8b1e20]">
                <Sparkles size={16} />
                Couple & Family
              </div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Join Both Families In Celebration</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {data.families?.map((family) => (
                <motion.div
                  key={family.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[1.75rem] border border-[#c99d2b]/20 bg-[linear-gradient(135deg,rgba(139,30,32,0.06),rgba(47,125,74,0.08))] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#2f7d4a]">{family.side}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{family.title}</h3>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-[#5f1316]/75">
                    {family.members.map((member) => (
                      <p key={member}>{member}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CoupleStoryTimeline items={data.story} accentClassName="bg-[#c99d2b]" cardClassName="bg-white/75" />
        <EventSchedule events={festiveEvents} title="Wedding Events" cardClassName="bg-white/75" />
        <PhotoGallery images={data.gallery} title="Celebration Gallery" className="bg-[linear-gradient(180deg,rgba(255,244,221,1),rgba(248,232,188,0.7))]" />
        <VenueMap venue={data.venue} mapLocation={data.mapLocation} themeClassName="bg-white/80" />
        <RSVPForm title="Kindly RSVP For The Festivities" accentClassName="bg-[#2f7d4a] text-white" />
      </div>
    </InvitationShell>
  );
};

export default FestiveSouthIndian;
