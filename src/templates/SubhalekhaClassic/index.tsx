import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import HeroSection from "@/components/wedding/HeroSection";
import EventSchedule from "@/components/wedding/EventSchedule";
import VenueMap from "@/components/wedding/VenueMap";
import RSVPForm from "@/components/wedding/RSVPForm";
import InviteControls from "@/components/wedding/InviteControls";
import { FloralDivider } from "@/components/wedding/DecorativeSvgs";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const SubhalekhaClassic = ({ data }: TemplateProps) => {
  const [opened, setOpened] = useState(false);
  const weddingDateLabel = useMemo(
    () => format(new Date(data.weddingDate), "EEEE, dd MMMM yyyy • hh:mm a"),
    [data.weddingDate],
  );
  const muhurtham = useMemo(
    () => data.events.find((event) => event.title.toLowerCase().includes("muhurtham")) ?? data.events[0],
    [data.events],
  );

  return (
    <div className="min-h-screen bg-[#f7efe1] text-[#571628]">
      <InviteControls title="Subhalekha Classic" autoBell={opened} />
      <Link
        to="/templates"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#a46c37]/30 bg-[#571628] px-4 py-2 text-sm font-medium text-[#f7efe1] shadow-lg"
      >
        <ArrowLeft size={16} />
        Templates
      </Link>

      {!opened ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#2d0d17] p-4">
          <motion.button
            initial={{ opacity: 0, rotateY: -25, scale: 0.92 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => setOpened(true)}
            className="relative max-w-md rounded-[2rem] border border-[#d2a44c]/50 bg-gradient-to-br from-[#6f1731] to-[#3c0d1b] p-8 text-center text-[#f7efe1] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-3 rounded-[1.5rem] border border-[#d2a44c]/35" />
            <Flower2 className="mx-auto mb-6 text-[#e1b55a]" size={34} />
            <p className="text-xs uppercase tracking-[0.45em] text-[#e1b55a]">Subhalekha</p>
            <h1 className="mt-4 text-4xl font-semibold">Traditional Wedding Invite</h1>
            <p className="mt-4 text-sm leading-7 text-[#f7efe1]/80">
              Tap to open the invitation with temple bell chime, ceremonial details, and blessings.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e1b55a] px-5 py-3 text-sm font-semibold text-[#571628]">
              Open Invitation
              <ChevronDown size={16} />
            </span>
          </motion.button>
        </div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, rotateX: -10 }}
        animate={{ opacity: opened ? 1 : 0, rotateX: opened ? 0 : -10 }}
        transition={{ duration: 0.8 }}
        className={opened ? "block" : "pointer-events-none opacity-0"}
      >
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
          <div className="rounded-[2rem] border border-[#d2a44c]/20 bg-[#5d1429]/65 p-6 text-white shadow-lg backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-[#e1b55a]">Muhurtham</p>
            <p className="mt-3 text-2xl font-semibold">{muhurtham?.time}</p>
            <p className="mt-2 max-w-xl text-sm text-white/75">{muhurtham?.description}</p>
          </div>
        </HeroSection>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d2a44c]/20 bg-white/60 p-8 shadow-lg">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-[#a46c37]">Family Details</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">With Family Blessings</h2>
              <FloralDivider className="mx-auto mt-5 h-12 w-44 text-[#a46c37]" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {data.families?.map((family) => (
                <div
                  key={family.title}
                  className="rounded-[1.75rem] border border-[#d2a44c]/20 bg-[#fff7ec] p-6 text-center shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#a46c37]">{family.side}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{family.title}</h3>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-[#571628]/80">
                    {family.members.map((member) => (
                      <p key={member}>{member}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EventSchedule
          events={data.events}
          title="Shubha Karyakramalu"
          cardClassName="bg-[#fff8ef]"
          layout="timeline"
        />

        <VenueMap
          venue={data.venue}
          mapLocation={data.mapLocation}
          title="Venue"
          themeClassName="bg-[#fff8ef]"
        />

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d2a44c]/20 bg-[#571628] px-8 py-10 text-center text-[#f7efe1]">
            <p className="text-sm uppercase tracking-[0.4em] text-[#e1b55a]">Blessings Message</p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#f7efe1]/85">
              {data.blessingsMessage}
            </p>
          </div>
        </section>

        <RSVPForm title="Kindly Bless Us With Your Presence" accentClassName="bg-[#571628] text-white" />
      </motion.div>
    </div>
  );
};

export default SubhalekhaClassic;
