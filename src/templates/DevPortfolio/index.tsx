import { useMemo, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft, BriefcaseBusiness, CalendarDays, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import InvitationShell from "@/components/wedding/InvitationShell";
import RSVPForm from "@/components/wedding/RSVPForm";
import VenueMap from "@/components/wedding/VenueMap";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import GalleryGrid from "@/components/wedding/shared/GalleryGrid";
import SectionContainer from "@/components/wedding/shared/SectionContainer";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const DevPortfolio = ({ data }: TemplateProps) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const intro = useMemo(
    () => `${data.brideName} and ${data.groomName} are shipping their favorite collaboration yet on ${format(new Date(data.weddingDate), "PPP")}.`,
    [data.brideName, data.groomName, data.weddingDate],
  );

  const pageClassName = isDark
    ? "min-h-screen bg-[#07111f] text-[#e2e8f0]"
    : "min-h-screen bg-[#f8fafc] text-slate-900";
  const surfaceClassName = isDark
    ? "border-white/10 bg-white/[0.04]"
    : "border-slate-200 bg-white";

  return (
    <InvitationShell
      title="Developer Portfolio Wedding Template"
      brideName={data.brideName}
      groomName={data.groomName}
      darkControls={isDark}
      theme={theme}
      onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      overlayClassName={isDark
        ? "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_45%),linear-gradient(180deg,rgba(7,17,31,0.96),rgba(3,7,18,0.98))]"
        : "bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.98))]"}
      cardClassName={isDark ? "border-sky-400/20 bg-[#0f172a]/70 text-[#e2e8f0]" : "border-slate-300 bg-white/85 text-slate-900"}
      description="Browse a polished portfolio-style wedding microsite with project cards, elegant sections, and a refined RSVP experience."
      openLabel="Open Portfolio"
      invitationLabel="New collaborative milestone from"
    >
      <div className={pageClassName}>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.15),transparent_30%)]" />

        <Link
          to="/templates"
          className={`fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur ${isDark ? "border-white/10 bg-[#020617]/65 text-white" : "border-slate-300 bg-white/90 text-slate-900"}`}
        >
          <ArrowLeft size={16} />
          Templates
        </Link>

        <div id="invitation-start">
          <section className="px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-sky-400">Developer Portfolio Wedding</p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
                  Hi, we are getting married <span className="inline-block">{"\u{1F44B}"}</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-current/75 sm:text-lg">
                  {intro}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${isDark ? "bg-sky-400 text-slate-950 hover:bg-sky-300" : "bg-slate-900 text-white hover:bg-slate-700"}`}
                  >
                    View Story Projects
                  </a>
                  <a
                    href="#rsvp"
                    className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition ${isDark ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]" : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"}`}
                  >
                    RSVP
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`rounded-[2rem] border p-6 shadow-[0_28px_70px_rgba(15,23,42,0.18)] ${surfaceClassName}`}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={`rounded-[1.5rem] border p-5 ${surfaceClassName}`}>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-400">
                      <BriefcaseBusiness size={22} />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-current/55">Role</p>
                    <p className="mt-2 text-xl font-semibold">Lead Couple</p>
                    <p className="mt-2 text-sm text-current/70">{data.brideName} and {data.groomName}</p>
                  </div>
                  <div className={`rounded-[1.5rem] border p-5 ${surfaceClassName}`}>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
                      <CalendarDays size={22} />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-current/55">Launch Date</p>
                    <p className="mt-2 text-xl font-semibold">{format(new Date(data.weddingDate), "dd MMM yyyy")}</p>
                    <p className="mt-2 text-sm text-current/70">{data.venue}</p>
                  </div>
                </div>
                <WeddingCountdown
                  weddingDate={data.weddingDate}
                  className="mt-5"
                  itemClassName={isDark ? "border-white/10 bg-[#020617] text-white" : "border-slate-200 bg-slate-50 text-slate-900"}
                />
              </motion.div>
            </div>
          </section>

          <SectionContainer
            id="about"
            eyebrow="About Us"
            title="A Partnership Built With Intention"
            description="A clean introduction section that feels like the about block of a modern developer portfolio."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  icon: <HeartHandshake size={22} />,
                  title: "Shared Values",
                  body: `${data.brideName} and ${data.groomName} built their story through patient conversations, family warmth, and small thoughtful rituals.`,
                },
                {
                  icon: <Sparkles size={22} />,
                  title: "What We Love",
                  body: "Long drives, calm coffee breaks, good design, and celebrating milestones with the people who matter most.",
                },
                {
                  icon: <CalendarDays size={22} />,
                  title: "Next Milestone",
                  body: `Join us on ${format(new Date(data.weddingDate), "EEEE, dd MMMM yyyy")} as we celebrate our wedding day.`,
                },
              ].map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className={`rounded-[1.6rem] border p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] ${surfaceClassName}`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-400">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-current/70">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </SectionContainer>

          <SectionContainer
            id="projects"
            eyebrow="Projects"
            title="Love Story Projects"
            description="The relationship timeline reframed like standout portfolio case studies."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {data.story.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`rounded-[1.7rem] border p-6 shadow-[0_24px_60px_rgba(15,23,42,0.1)] ${surfaceClassName}`}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-current/55">Project {index + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-sky-400">{item.date}</p>
                  <p className="mt-4 text-sm leading-7 text-current/70">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </SectionContainer>

          <SectionContainer
            id="events"
            eyebrow="Events"
            title="Ceremony Schedule"
            description="Card-based event blocks with enough polish to feel like featured work."
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {data.events.map((event, index) => (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-[1.6rem] border p-5 ${surfaceClassName}`}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-current/55">{format(new Date(event.date), "dd MMM")}</p>
                  <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-sky-400">{event.time}</p>
                  <p className="mt-3 text-sm leading-7 text-current/70">{event.description}</p>
                  {event.location ? <p className="mt-4 text-sm text-current/55">{event.location}</p> : null}
                </motion.article>
              ))}
            </div>
          </SectionContainer>

          <SectionContainer
            id="gallery"
            eyebrow="Gallery"
            title="Moments We Love"
            description="A responsive portfolio-style gallery with smooth hover and modal behavior."
          >
            <GalleryGrid
              images={data.gallery}
              cardClassName={isDark ? "border-white/10 bg-[#0f172a]" : "border-slate-200 bg-white"}
              overlayClassName={isDark ? "from-[#020617]/85 via-[#020617]/10 to-transparent" : "from-slate-900/75 via-slate-900/10 to-transparent"}
            />
          </SectionContainer>

          <SectionContainer
            id="venue"
            eyebrow="Location"
            title="Venue Details"
            description="A clean map module that fits the modern portfolio layout."
          >
            <VenueMap
              venue={data.venue}
              mapLocation={data.mapLocation}
              title="Navigate to the Celebration"
              themeClassName={isDark ? "bg-[#0f172a] text-white" : "bg-white text-slate-900"}
            />
          </SectionContainer>

          <SectionContainer
            id="rsvp"
            eyebrow="Contact"
            title="RSVP"
            description="A minimal contact-style form for confirmations and warm messages."
          >
            <RSVPForm
              title="Let Us Know You’re Coming"
              eyebrow="Contact"
              description="We’d love to save your place and celebrate together."
              accentClassName={isDark ? "bg-sky-400 text-slate-950" : "bg-slate-900 text-white"}
              cardClassName={isDark ? "rounded-[2rem] border border-white/10 bg-[#0f172a] p-8 shadow-[0_22px_55px_rgba(0,0,0,0.18)]" : "rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_55px_rgba(15,23,42,0.08)]"}
              fieldClassName={isDark ? "rounded-2xl border border-white/10 bg-[#020617] px-4 py-4 text-white outline-none transition focus:border-sky-400/50" : "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400"}
              noteClassName={isDark ? "text-sky-300" : "text-sky-700"}
              sectionClassName="px-0 py-0"
            />
          </SectionContainer>
        </div>
      </div>
    </InvitationShell>
  );
};

export default DevPortfolio;
