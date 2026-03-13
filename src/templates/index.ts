import templateClassic from "@/assets/template-classic.jpg";
import templateModern from "@/assets/template-modern.jpg";
import templateFestive from "@/assets/template-festive.jpg";
import type { WeddingTemplateData } from "@/data/weddingData";
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
];

export { SubhalekhaClassic, ModernFlipInvite, FestiveSouthIndian };
