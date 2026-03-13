import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import HeroSection from "@/components/wedding/HeroSection";
import EventSchedule from "@/components/wedding/EventSchedule";
import VenueMap from "@/components/wedding/VenueMap";
import RSVPForm from "@/components/wedding/RSVPForm";
import CoupleStoryTimeline from "@/components/wedding/CoupleStoryTimeline";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import InvitationShell from "@/components/wedding/InvitationShell";
import { FloralDivider, FlowerCorner, MandalaBurst } from "@/components/wedding/DecorativeSvgs";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const SubhalekhaClassic = ({ data }: TemplateProps) => {
  const weddingDateLabel = useMemo(
    () => format(new Date(data.weddingDate), "EEEE, dd MMMM yyyy • hh:mm a"),
    [data.weddingDate],
  );
  const muhurtham = useMemo(
    () => data.events.find((event) => event.title.toLowerCase().includes("muhurtham")) ?? data.events[0],
    [data.events],
  );

  return (
    <InvitationShell
      title="Subhalekha Classic"
      brideName={data.brideName}
      groomName={data.groomName}
      overlayClassName="bg-[radial-gradient(circle_at_top,rgba(226,181,90,0.15),transparent_45%),linear-gradient(180deg,rgba(49,11,20,0.96),rgba(22,7,13,0.98))]"
      cardClassName="border-[#d2a44c]/35 bg-[#5d1429]/65 text-[#f7efe1]"
      darkControls
    >
      <div className="min-h-screen bg-[#f7efe1] text-[#571628]">
        <Link
          to="/templates"
          className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#a46c37]/30 bg-[#571628] px-4 py-2 text-sm font-medium text-[#f7efe1] shadow-lg"
        >
          <ArrowLeft size={16} />
          Templates
        </Link>

        <div className="relative overflow-hidden">
          <MandalaBurst className="absolute right-0 top-24 h-32 w-32 text-[#d2a44c]/15" />
          <FlowerCorner className="absolute left-0 top-20 h-32 w-32 text-[#d2a44c]/15" />
          <div id="invitation-start">
            <HeroSection
              brideName={data.brideName}
              groomName={data.groomName}
              weddingDateLabel={weddingDateLabel}
              venue={data.venue}
              eyebrow="Sri Ganeshaya Namaha"
              subtitle="With immense joy and the blessings of our elders, we invite you to the sacred wedding ceremony."
              heroImage="/images/traditional-bg.png"
              overlayClassName="bg-[radial-gradient(circle_at_top,_rgba(126,25,49,0.32),_rgba(45,13,23,0.92))]"
              className="border-b border-[#d2a44c]/30"
            >
              <div className="grid w-full max-w-4xl gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-[#d2a44c]/20 bg-[#5d1429]/65 p-6 text-white shadow-lg backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#e1b55a]">Muhurtham</p>
                  <p className="mt-3 text-2xl font-semibold">{muhurtham?.time}</p>
                  <p className="mt-2 max-w-xl text-sm text-white/75">{muhurtham?.description}</p>
                </div>
                <WeddingCountdown
                  weddingDate={data.weddingDate}
                  itemClassName="bg-[#fff4df]/88 text-[#571628]"
                />
              </div>
            </HeroSection>
          </div>
        </div>

        <section className="relative px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d2a44c]/20 bg-white/60 p-8 shadow-[0_24px_60px_rgba(87,22,40,0.12)] backdrop-blur">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-[#a46c37]">Family Details</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">With Family Blessings</h2>
              <FloralDivider className="mx-auto mt-5 h-12 w-44 text-[#a46c37]" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {data.families?.map((family) => (
                <motion.div
                  key={family.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[1.75rem] border border-[#d2a44c]/20 bg-[#fff7ec] p-6 text-center shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#a46c37]">{family.side}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{family.title}</h3>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-[#571628]/80">
                    {family.members.map((member) => (
                      <p key={member}>{member}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CoupleStoryTimeline
          items={data.story}
          title="Sacred Journey"
          accentClassName="bg-[#a46c37]"
          cardClassName="bg-[#fff8ef]"
        />
        <EventSchedule
          events={data.events}
          title="Shubha Karyakramalu"
          cardClassName="bg-[#fff8ef]"
          layout="timeline"
        />
        <PhotoGallery images={data.gallery} title="Wedding Memories" className="bg-[#fbf3e4]" />
        <VenueMap
          venue={data.venue}
          mapLocation={data.mapLocation}
          title="Venue"
          themeClassName="bg-[#fff8ef]"
        />

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d2a44c]/20 bg-[#571628] px-8 py-10 text-center text-[#f7efe1] shadow-[0_24px_60px_rgba(87,22,40,0.18)]">
            <p className="text-sm uppercase tracking-[0.4em] text-[#e1b55a]">Blessings Message</p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#f7efe1]/85">
              {data.blessingsMessage}
            </p>
          </div>
        </section>

        <RSVPForm title="Kindly Bless Us With Your Presence" accentClassName="bg-[#571628] text-white" />
      </div>
    </InvitationShell>
  );
};

export default SubhalekhaClassic;
