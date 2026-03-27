import templateClassic from "@/assets/template-classic.jpg";
import templateDevPortfolio from "@/assets/template-dev-portfolio.svg";
import templateDevTerminal from "@/assets/template-dev-terminal.svg";
import templateDevVSCode from "@/assets/template-dev-vscode.svg";
import templateModern from "@/assets/template-modern.jpg";
import templateFestive from "@/assets/template-festive.jpg";
import type { WeddingTemplateData } from "@/data/weddingData";
import DevPortfolio from "./DevPortfolio";
import DevTerminal from "./DevTerminal";
import DevVSCode from "./DevVSCodeInteractive";
import SubhalekhaClassic from "./SubhalekhaClassic";
import ModernFlipInvite from "./ModernFlipInvite";
import FestiveSouthIndian from "./FestiveSouthIndian";

export interface TemplateDefinition {
  slug: string;
  name: string;
  description: string;
  image: string;
  previewUrl: string;
  features: string[];
  Component: ({ data }: { data: WeddingTemplateData }) => JSX.Element;
}

export const premiumTemplates: TemplateDefinition[] = [
  {
    slug: "subhalekha-classic",
    name: "Subhalekha Classic",
    description: "Traditional Telugu invitation with ceremonial opening, gold-maroon styling, and family blessings.",
    image: templateClassic,
    previewUrl: "/preview/classic",
    features: ["Temple bell opening", "Traditional serif styling", "Blessings, venue, RSVP"],
    Component: SubhalekhaClassic,
  },
  {
    slug: "modern-flip-invite",
    name: "Modern Flip Invite",
    description: "Minimal beige-and-gold invite with page-flip interactions, countdown, gallery, and modern storytelling.",
    image: templateModern,
    previewUrl: "/preview/modern",
    features: ["Flip-book navigation", "Countdown timer", "Parallax-style hero and hover gallery"],
    Component: ModernFlipInvite,
  },
  {
    slug: "festive-south-indian",
    name: "Festive South Indian Wedding",
    description: "Temple-inspired festive design with mango leaf borders, kolam motifs, vibrant ceremony blocks, and RSVP.",
    image: templateFestive,
    previewUrl: "/preview/festive",
    features: ["Decorative SVG motifs", "Red, gold, and green palette", "Mobile-first celebration layout"],
    Component: FestiveSouthIndian,
  },
  {
    slug: "dev-vscode",
    name: "VS Code Wedding",
    description: "Premium editor-inspired invitation with a file explorer, animated code blocks, JSON event rendering, and component-style gallery modules.",
    image: templateDevVSCode,
    previewUrl: "/preview/dev-vscode",
    features: ["Typing animation", "Code highlighting", "Dark and light workspace modes"],
    Component: DevVSCode,
  },
  {
    slug: "dev-terminal",
    name: "Terminal Wedding",
    description: "Full-screen terminal invite with boot logs, command-style sections, a live countdown, and a replayable wedding script sequence.",
    image: templateDevTerminal,
    previewUrl: "/preview/dev-terminal",
    features: ["Terminal log storytelling", "Run Wedding Script action", "Command-line RSVP flow"],
    Component: DevTerminal,
  },
  {
    slug: "dev-portfolio",
    name: "Developer Portfolio Wedding",
    description: "Modern portfolio-style wedding microsite with project-based love story cards, elegant event sections, and polished RSVP contact flow.",
    image: templateDevPortfolio,
    previewUrl: "/preview/dev-portfolio",
    features: ["Portfolio hero layout", "Scroll-based section reveals", "Premium gallery and contact styling"],
    Component: DevPortfolio,
  },
];

export { SubhalekhaClassic, ModernFlipInvite, FestiveSouthIndian, DevVSCode, DevTerminal, DevPortfolio };
