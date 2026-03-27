import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { ArrowLeft, Play, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import InvitationShell from "@/components/wedding/InvitationShell";
import RSVPForm from "@/components/wedding/RSVPForm";
import VenueMap from "@/components/wedding/VenueMap";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import GalleryGrid from "@/components/wedding/shared/GalleryGrid";
import SectionContainer from "@/components/wedding/shared/SectionContainer";
import TerminalLine from "@/components/wedding/shared/TerminalLine";
import TypingText from "@/components/wedding/shared/TypingText";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const DevTerminal = ({ data }: TemplateProps) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [sequenceStep, setSequenceStep] = useState(0);
  const isDark = theme === "dark";

  const bootSequence = useMemo(
    () => [
      "initializing wedding...",
      "loading couple_data.json",
      `bride: "${data.brideName}"`,
      `groom: "${data.groomName}"`,
      `date: "${format(new Date(data.weddingDate), "PPP p")}"`,
      `venue: "${data.venue}"`,
      "status: ready",
    ],
    [data.brideName, data.groomName, data.weddingDate, data.venue],
  );

  useEffect(() => {
    if (sequenceStep === 0 || sequenceStep >= bootSequence.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSequenceStep((current) => current + 1);
    }, 280);

    return () => window.clearTimeout(timer);
  }, [bootSequence.length, sequenceStep]);

  const startSequence = () => {
    setSequenceStep(1);
  };

  const terminalPanel = isDark
    ? "border-[#1f4229] bg-black text-[#a7f3d0]"
    : "border-slate-300 bg-[#f8fafc] text-slate-900";

  return (
    <InvitationShell
      title="Terminal Wedding Template"
      brideName={data.brideName}
      groomName={data.groomName}
      darkControls={isDark}
      theme={theme}
      onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      overlayClassName={isDark
        ? "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.96),rgba(4,10,4,0.98))]"
        : "bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.2),transparent_45%),linear-gradient(180deg,rgba(248,250,252,0.96),rgba(226,232,240,0.98))]"}
      cardClassName={isDark ? "border-emerald-400/25 bg-black/80 text-[#dcfce7]" : "border-slate-300 bg-white/85 text-slate-900"}
      description="Run a cinematic terminal sequence that prints the wedding story, events, countdown, and RSVP prompt."
      openLabel="Run ./wedding.sh"
      invitationLabel="Executing invite script for"
    >
      <div className={isDark ? "min-h-screen bg-black text-[#a7f3d0]" : "min-h-screen bg-[#f1f5f9] text-slate-900"}>
        <Link
          to="/templates"
          className={`fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur ${isDark ? "border-[#1f4229] bg-black/80 text-[#dcfce7]" : "border-slate-300 bg-white/90 text-slate-900"}`}
        >
          <ArrowLeft size={16} />
          Templates
        </Link>

        <div id="invitation-start" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className={`overflow-hidden rounded-[2rem] border shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${terminalPanel}`}>
            <div className={`flex items-center justify-between border-b px-4 py-3 ${isDark ? "border-[#1f4229] bg-[#041108]" : "border-slate-300 bg-slate-100"}`}>
              <div className="flex items-center gap-3">
                <TerminalSquare size={18} />
                <span className="font-mono text-sm">wedding-terminal</span>
              </div>
              <button
                type="button"
                onClick={startSequence}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${isDark ? "bg-emerald-400 text-black hover:bg-emerald-300" : "bg-slate-900 text-white hover:bg-slate-700"}`}
              >
                <Play size={14} />
                Run Wedding Script
              </button>
            </div>

            <div className="space-y-10 p-5 font-mono sm:p-8">
              <section className="rounded-[1.5rem] border border-current/10 bg-current/5 p-5">
                <TypingText
                  text={bootSequence.slice(0, Math.max(sequenceStep, 1)).map((line) => `> ${line}`).join("\n")}
                  className="text-sm leading-8 sm:text-base"
                  cursorClassName={isDark ? "bg-emerald-400" : "bg-slate-900"}
                />
              </section>

              <SectionContainer
                eyebrow="logs --story"
                title="Love Story Output"
                description="A timeline printed as if it were a deployment log."
                className="px-0 py-0"
              >
                <div className="space-y-2 rounded-[1.5rem] border border-current/10 bg-current/5 p-5">
                  {data.story.map((item, index) => (
                    <TerminalLine
                      key={item.title}
                      text={`${item.date}: ${item.title} | ${item.description}`}
                      delay={index * 0.08}
                      className={isDark ? "text-[#dcfce7]" : "text-slate-800"}
                    />
                  ))}
                </div>
              </SectionContainer>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <SectionContainer
                  eyebrow="fetch events"
                  title="Event Commands"
                  description="Every celebration rendered like structured command output."
                  className="px-0 py-0"
                >
                  <div className="space-y-2 rounded-[1.5rem] border border-current/10 bg-current/5 p-5">
                    {data.events.map((event, index) => (
                      <TerminalLine
                        key={event.title}
                        text={`${event.title.toLowerCase()}: ${format(new Date(event.date), "dd MMM yyyy")} ${event.time}`}
                        delay={index * 0.06}
                        className={isDark ? "text-[#dcfce7]" : "text-slate-800"}
                      />
                    ))}
                  </div>
                </SectionContainer>

                <SectionContainer
                  eyebrow="time_remaining"
                  title="Countdown"
                  description="Live remaining time, updated in real time."
                  className="px-0 py-0"
                >
                  <div className="space-y-4 rounded-[1.5rem] border border-current/10 bg-current/5 p-5">
                    <TerminalLine
                      text={`${Math.max(Math.ceil((new Date(data.weddingDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)), 0)} days`}
                      className={isDark ? "text-[#dcfce7]" : "text-slate-800"}
                    />
                    <WeddingCountdown
                      weddingDate={data.weddingDate}
                      itemClassName={isDark ? "border-[#1f4229] bg-[#031208] text-[#dcfce7]" : "border-slate-300 bg-white text-slate-900"}
                    />
                  </div>
                </SectionContainer>
              </div>

              <SectionContainer
                eyebrow="ls gallery"
                title="Terminal Gallery"
                description="Screenshot previews arranged inside a command-line inspired gallery board."
                className="px-0 py-0"
              >
                <GalleryGrid
                  images={data.gallery}
                  cardClassName={isDark ? "border-[#1f4229] bg-[#020804]" : "border-slate-300 bg-white"}
                  overlayClassName={isDark ? "from-black/80 via-black/15 to-transparent" : "from-slate-900/70 via-slate-900/10 to-transparent"}
                />
              </SectionContainer>

              <SectionContainer
                eyebrow="open map"
                title="Venue Route"
                description="Launch directions directly from the terminal window."
                className="px-0 py-0"
              >
                <VenueMap
                  venue={data.venue}
                  mapLocation={data.mapLocation}
                  title="Venue Map"
                  themeClassName={isDark ? "bg-[#010805] text-[#dcfce7]" : "bg-white text-slate-900"}
                />
              </SectionContainer>

              <SectionContainer
                eyebrow="prompt rsvp"
                title="Guest Input"
                description="A command-prompt style RSVP panel for confirmations."
                className="px-0 py-0"
              >
                <RSVPForm
                  title="Terminal RSVP"
                  eyebrow="> enter your name:"
                  description="Then tell us how many seats to reserve in your party."
                  accentClassName={isDark ? "bg-emerald-400 text-black" : "bg-slate-900 text-white"}
                  cardClassName={isDark ? "rounded-[2rem] border border-[#1f4229] bg-[#010805] p-8 shadow-[0_22px_55px_rgba(0,0,0,0.3)]" : "rounded-[2rem] border border-slate-300 bg-white p-8 shadow-[0_22px_55px_rgba(15,23,42,0.08)]"}
                  fieldClassName={isDark ? "rounded-2xl border border-[#1f4229] bg-black px-4 py-4 text-[#dcfce7] outline-none transition focus:border-emerald-400" : "rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900"}
                  noteClassName={isDark ? "text-emerald-300" : "text-slate-700"}
                  sectionClassName="px-0 py-0"
                  buttonLabel="submit_response"
                />
              </SectionContainer>
            </div>
          </div>
        </div>
      </div>
    </InvitationShell>
  );
};

export default DevTerminal;
