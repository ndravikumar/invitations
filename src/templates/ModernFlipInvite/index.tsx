import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import HeroSection from "@/components/wedding/HeroSection";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import CoupleStoryTimeline from "@/components/wedding/CoupleStoryTimeline";
import EventSchedule from "@/components/wedding/EventSchedule";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import VenueMap from "@/components/wedding/VenueMap";
import RSVPForm from "@/components/wedding/RSVPForm";
import InviteControls from "@/components/wedding/InviteControls";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const ModernFlipInvite = ({ data }: TemplateProps) => {
  const weddingDateLabel = useMemo(
    () => format(new Date(data.weddingDate), "dd MMMM yyyy"),
    [data.weddingDate],
  );

  const pages = [
    {
      id: "hero",
      label: "Cover",
      content: (
        <HeroSection
          brideName={data.brideName}
          groomName={data.groomName}
          weddingDateLabel={weddingDateLabel}
          venue={data.venue}
          eyebrow="A modern wedding invitation"
          subtitle="Minimal, warm, and designed for mobile-first invite sharing."
          heroImage={data.heroImage}
          className="rounded-[2rem] p-0"
          overlayClassName="bg-gradient-to-b from-stone-950/45 via-stone-900/35 to-stone-950/60"
        >
          <div className="w-full max-w-2xl">
            <WeddingCountdown
              weddingDate={data.weddingDate}
              itemClassName="bg-white/75"
              className="mt-4"
            />
          </div>
        </HeroSection>
      ),
    },
    {
      id: "story",
      label: "Story",
      content: (
        <div className="bg-[#f5f0e8] text-stone-800">
          <CoupleStoryTimeline
            items={data.story}
            cardClassName="bg-white/70"
            accentClassName="bg-[#c5a46d]"
          />
        </div>
      ),
    },
    {
      id: "events",
      label: "Events",
      content: (
        <div className="bg-white text-stone-800">
          <EventSchedule events={data.events} cardClassName="bg-[#f8f2ea]" />
        </div>
      ),
    },
    {
      id: "gallery",
      label: "Gallery",
      content: (
        <div className="bg-[#f7f3ed] text-stone-800">
          <PhotoGallery images={data.gallery} title="Moments We Love" />
        </div>
      ),
    },
    {
      id: "venue",
      label: "Venue",
      content: (
        <div className="bg-white text-stone-800">
          <VenueMap venue={data.venue} mapLocation={data.mapLocation} themeClassName="bg-[#f8f2ea]" />
          <RSVPForm title="Save Your Seat" accentClassName="bg-[#c5a46d] text-stone-950" />
        </div>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-[#ede6dc] px-4 py-6 text-stone-900 sm:px-6">
      <InviteControls title="Modern Flip Invite" />
      <Link
        to="/templates"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium text-stone-900 shadow-lg backdrop-blur"
      >
        <ArrowLeft size={16} />
        Templates
      </Link>

      <div className="mx-auto max-w-6xl pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <motion.div
            key={pages[currentPage].id}
            initial={{ opacity: 0, rotateY: currentPage % 2 === 0 ? -8 : 8, x: 18 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.55 }}
            className="min-h-[78vh] overflow-hidden rounded-[2.25rem] bg-white shadow-[0_30px_80px_rgba(28,25,23,0.15)]"
            style={{ transformStyle: "preserve-3d", perspective: "1800px" }}
          >
            <div className="relative min-h-[78vh]">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-stone-200/50 to-transparent" />
              {pages[currentPage].content}
            </div>
          </motion.div>

          <aside className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/60 bg-white/65 p-6 shadow-lg backdrop-blur">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-stone-500">Flip Navigation</p>
              <h2 className="mt-3 text-3xl font-semibold">Modern Flip Invite</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                A minimal digital invite with a page-turn experience, countdown, gallery, and RSVP.
              </p>
            </div>

            <div className="space-y-3">
              {pages.map((page, index) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                    index === currentPage ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  <span>{page.label}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-900 px-4 py-3 text-sm font-medium text-white disabled:opacity-40"
                disabled={currentPage === 0}
              >
                <ChevronLeft size={16} />
                Prev
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(page + 1, pages.length - 1))}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-900 disabled:opacity-40"
                disabled={currentPage === pages.length - 1}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ModernFlipInvite;
