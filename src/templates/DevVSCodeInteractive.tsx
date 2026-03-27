import { useMemo, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft, Braces, Code2, Files, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import InvitationShell from "@/components/wedding/InvitationShell";
import RSVPForm from "@/components/wedding/RSVPForm";
import VenueMap from "@/components/wedding/VenueMap";
import WeddingCountdown from "@/components/wedding/WeddingCountdown";
import CodeBlock from "@/components/wedding/shared/CodeBlock";
import GalleryGrid from "@/components/wedding/shared/GalleryGrid";
import SectionContainer from "@/components/wedding/shared/SectionContainer";
import TypingText from "@/components/wedding/shared/TypingText";
import type { WeddingTemplateData } from "@/data/weddingData";

interface TemplateProps {
  data: WeddingTemplateData;
}

const sidebarFiles = [
  { label: "wedding.js", sectionId: "wedding-file", tabLabel: "wedding.js" },
  { label: "loveStory.js", sectionId: "love-story", tabLabel: "loveStory.js" },
  { label: "events.json", sectionId: "events", tabLabel: "events.json" },
  { label: "gallery.jsx", sectionId: "gallery", tabLabel: "gallery.jsx" },
  { label: "rsvp.js", sectionId: "rsvp", tabLabel: "rsvp.js" },
  { label: "location.js", sectionId: "location", tabLabel: "location.js" },
] as const;

const DevVSCodeInteractive = ({ data }: TemplateProps) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeFile, setActiveFile] = useState<(typeof sidebarFiles)[number]["label"]>("wedding.js");
  const isDark = theme === "dark";

  const handleFileClick = (file: (typeof sidebarFiles)[number]) => {
    setActiveFile(file.label);
    const target = document.getElementById(file.sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const weddingSnippet = useMemo(
    () => `const wedding = {\n  bride: "${data.brideName}",\n  groom: "${data.groomName}",\n  date: "${format(new Date(data.weddingDate), "PPP p")}",\n  venue: "${data.venue}"\n};`,
    [data.brideName, data.groomName, data.weddingDate, data.venue],
  );

  const storyLines = useMemo(
    () => [
      { content: "const loveStory = [", tone: "accent" as const },
      ...data.story.flatMap((item, index) => [
        {
          content: `  { event: "${item.title}", date: "${item.date}", note: "${item.description}" }${index === data.story.length - 1 ? "" : ","}`,
        },
      ]),
      { content: "];", tone: "accent" as const },
    ],
    [data.story],
  );

  const eventLines = useMemo(() => {
    const entries = data.events.map((event, index) => {
      const key = event.title.toLowerCase().replace(/[^a-z0-9]+/g, "_");
      return {
        content: `  "${key}": "${format(new Date(event.date), "dd MMM yyyy")} ${event.time}"${index === data.events.length - 1 ? "" : ","}`,
      };
    });

    return [{ content: "{", tone: "accent" as const }, ...entries, { content: "}", tone: "accent" as const }];
  }, [data.events]);

  const gallerySnippet = [
    { content: "export function GalleryPanel() {", tone: "accent" as const },
    { content: "  return <Gallery images={gallery} columns={3} />;" },
    { content: "}", tone: "accent" as const },
  ];

  const rsvpSnippet = [
    { content: "function RSVP() {", tone: "accent" as const },
    { content: "  return <Form fields={[\"name\", \"guests\", \"message\"]} />;" },
    { content: "}", tone: "accent" as const },
  ];

  const shellClasses = isDark
    ? "min-h-screen bg-[#0d1117] text-slate-100"
    : "min-h-screen bg-[#f3f4f6] text-slate-900";
  const workspaceClasses = isDark
    ? "border-white/10 bg-[#161b22]/95"
    : "border-slate-300 bg-white/95";
  const panelClasses = isDark
    ? "border-white/10 bg-[#0f1722] text-slate-200"
    : "border-slate-200 bg-[#f8fafc] text-slate-900";

  return (
    <InvitationShell
      title="VS Code Wedding Template"
      brideName={data.brideName}
      groomName={data.groomName}
      darkControls={isDark}
      theme={theme}
      onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      overlayClassName={isDark
        ? "bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%),linear-gradient(180deg,rgba(9,14,23,0.96),rgba(2,6,23,0.98))]"
        : "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%),linear-gradient(180deg,rgba(241,245,249,0.96),rgba(226,232,240,0.98))]"}
      cardClassName={isDark ? "border-cyan-400/25 bg-[#0f172a]/70 text-slate-100" : "border-sky-500/20 bg-white/80 text-slate-900"}
      description="Open a premium editor-style wedding invite with animated code, gallery modules, and developer-friendly details."
      openLabel="Launch Workspace"
      invitationLabel="Compiling celebration details for"
    >
      <div className={shellClasses}>
        <Link
          to="/templates"
          className={`fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur ${isDark ? "border-white/10 bg-black/35 text-white" : "border-slate-300 bg-white/85 text-slate-900"}`}
        >
          <ArrowLeft size={16} />
          Templates
        </Link>

        <div id="invitation-start" className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className={`grid min-h-[calc(100vh-8rem)] overflow-hidden rounded-[2rem] border shadow-[0_30px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[260px_1fr] ${workspaceClasses}`}
          >
            <aside className={`border-b p-5 lg:border-b-0 lg:border-r ${isDark ? "border-white/10 bg-[#11161d]" : "border-slate-200 bg-[#eef2ff]/60"}`}>
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400">
                  <Code2 size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-current/50">Explorer</p>
                  <h1 className="text-lg font-semibold">wedding-invite</h1>
                </div>
              </div>

              <div className="space-y-2">
                {sidebarFiles.map((file, index) => (
                  <motion.button
                    key={file.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    type="button"
                    onClick={() => handleFileClick(file)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${activeFile === file.label ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.12)]" : isDark ? "border-white/5 bg-white/[0.03] hover:border-cyan-400/20 hover:bg-cyan-400/5" : "border-slate-200 bg-white/60 hover:border-sky-300 hover:bg-sky-50"}`}
                  >
                    <Files size={16} />
                    {file.label}
                  </motion.button>
                ))}
              </div>

              <div className={`mt-6 rounded-[1.5rem] border p-4 ${panelClasses}`}>
                <p className="text-xs uppercase tracking-[0.35em] text-current/55">Extensions</p>
                <div className="mt-4 space-y-3 text-sm text-current/75">
                  <div className="flex items-center gap-2"><Sparkles size={15} /> Smooth animations enabled</div>
                  <div className="flex items-center gap-2"><Braces size={15} /> Reusable props connected</div>
                  <div className="flex items-center gap-2"><Github size={15} /> Premium developer aesthetic</div>
                </div>
              </div>
            </aside>

            <main className="space-y-8 p-4 sm:p-6 lg:p-8">
              {activeFile === "wedding.js" &&
                <div id="wedding-file" className={`scroll-mt-24 rounded-[1.6rem] border ${panelClasses}`}>
                  <div className={`flex items-center justify-between border-b px-4 py-3 text-sm ${isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50"}`}>
                    <span className="font-medium text-cyan-400">{sidebarFiles.find((file) => file.label === activeFile)?.tabLabel ?? "wedding.js"}</span>
                    <span className="text-current/50">JavaScript React Workspace</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-7 sm:text-base">
                    <TypingText
                      text={weddingSnippet}
                      className={`max-w-3xl ${isDark ? "text-cyan-200" : "text-slate-700"}`}
                      cursorClassName={isDark ? "bg-cyan-400" : "bg-sky-500"}
                    />
                  </div>
                </div>}

              {activeFile === "loveStory.js" && <div id="love-story" className="grid scroll-mt-24 gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                <CodeBlock title="loveStory.js" language="js" lines={storyLines} className={isDark ? "" : "border-slate-200 bg-white"} />
                <div className={`rounded-[1.5rem] border p-5 ${panelClasses}`}>
                  <p className="text-xs uppercase tracking-[0.35em] text-current/55">Build Status</p>
                  <h2 className="mt-3 text-2xl font-semibold">Wedding App Ready</h2>
                  <p className="mt-3 text-sm leading-7 text-current/70">
                    A modern code-editor inspired invitation with typed content, JSON event blocks, gallery components, and a smooth RSVP flow.
                  </p>
                  <div className={`mt-6 rounded-[1.5rem] border p-4 ${isDark ? "border-cyan-400/10 bg-[#020817]" : "border-slate-200 bg-slate-50"}`}>
                    <WeddingCountdown
                      weddingDate={data.weddingDate}
                      className="gap-4"
                      gridClassName="grid-cols-2"
                      itemClassName={isDark ? "border-cyan-400/10 bg-[#06101f] text-white shadow-none" : "border-slate-200 bg-white text-slate-900 shadow-none"}
                      valueClassName="text-2xl font-semibold sm:text-3xl"
                      labelClassName="mt-2 text-[10px] uppercase tracking-[0.28em] text-current/55"
                    />
                  </div>
                </div>
              </div>}

              {activeFile === "events.json" && <SectionContainer
                id="events"
                eyebrow="events.json"
                title="Ceremony Schedule"
                description="Structured as serialized event data so every ritual feels neatly organized."
                className="px-0 py-0"
              >
                <CodeBlock title="events.json" language="json" lines={eventLines} className={isDark ? "" : "border-slate-200 bg-white"} />
              </SectionContainer>}

              {activeFile === "gallery.jsx" && <SectionContainer
                id="gallery"
                eyebrow="gallery.jsx"
                title="Image Component"
                description="A React-style gallery module backed by dynamic images."
                className="px-0 py-0"
              >
                <div className="space-y-5">
                  <CodeBlock title="gallery.jsx" language="jsx" lines={gallerySnippet} className={isDark ? "" : "border-slate-200 bg-white"} />
                  <GalleryGrid
                    images={data.gallery}
                    cardClassName={isDark ? "border-white/10 bg-[#0f1722]" : "border-slate-200 bg-white"}
                    overlayClassName={isDark ? "from-[#020617]/80 via-[#020617]/10 to-transparent" : "from-slate-900/75 via-slate-900/10 to-transparent"}
                  />
                </div>
              </SectionContainer>}

              {activeFile === "location.js" && <SectionContainer
                id="venue"
                eyebrow="location.js"
                title="Location Module"
                description="A live location view so guests can jump straight into navigation."
                className="px-0 py-0"
              >
                <VenueMap
                  venue={data.venue}
                  mapLocation={data.mapLocation}
                  title="Venue Preview"
                  themeClassName={isDark ? "bg-[#0f1722] text-slate-100" : "bg-white text-slate-900"}
                />
              </SectionContainer>}

              {activeFile === "rsvp.js" && <SectionContainer
                id="rsvp"
                eyebrow="rsvp.js"
                title="Function RSVP()"
                description="Collect guest confirmations through a clean form panel."
                className="px-0 py-0"
              >
                <div className="space-y-5">
                  <CodeBlock title="rsvp.js" language="jsx" lines={rsvpSnippet} className={isDark ? "" : "border-slate-200 bg-white"} />
                  <RSVPForm
                    title="Confirm Your Commit"
                    eyebrow="function RSVP()"
                    description="Let us know if you can join the release day."
                    accentClassName={isDark ? "bg-cyan-400 text-slate-950" : "bg-sky-600 text-white"}
                    cardClassName={isDark ? "rounded-[2rem] border border-white/10 bg-[#0f1722] p-8 shadow-[0_22px_55px_rgba(0,0,0,0.18)]" : "rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_55px_rgba(15,23,42,0.08)]"}
                    fieldClassName={isDark ? "rounded-2xl border border-white/10 bg-[#020817] px-4 py-4 text-white outline-none transition focus:border-cyan-400/40" : "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400"}
                    noteClassName={isDark ? "text-cyan-300" : "text-sky-700"}
                    sectionClassName="px-0 py-0"
                  />
                </div>
              </SectionContainer>}
            </main>
          </motion.div>
        </div>
      </div>
    </InvitationShell>
  );
};

export default DevVSCodeInteractive;
