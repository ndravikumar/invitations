export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  location?: string;
}

export interface StoryMoment {
  title: string;
  date: string;
  description: string;
}

export interface FamilyMember {
  side: "Bride" | "Groom";
  title: string;
  members: string[];
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface WeddingTemplateData {
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
  events: WeddingEvent[];
  story: StoryMoment[];
  gallery: GalleryItem[];
  mapLocation: string;
  families?: FamilyMember[];
  blessingsMessage?: string;
  rsvpPhone?: string;
  heroImage?: string;
}

export const weddingData: WeddingTemplateData = {
  brideName: "Saanvi",
  groomName: "Arjun",
  weddingDate: "2026-12-06T09:18:00+05:30",
  venue: "Sri Lakshmi Convention, Vijayawada",
  mapLocation: "Sri Lakshmi Convention, Vijayawada",
  heroImage: "/images/gallery1.jpg",
  blessingsMessage:
    "With the blessings of our elders, we invite you to celebrate this sacred union and shower the couple with your love.",
  rsvpPhone: "+91 96035 25393",
  families: [
    {
      side: "Bride",
      title: "Bride's Family",
      members: ["D/o Srinivas & Padmavathi", "Granddaughter of Narayana Rao Family"],
    },
    {
      side: "Groom",
      title: "Groom's Family",
      members: ["S/o Raghuram & Lalitha", "Grandson of Subrahmanyam Family"],
    },
  ],
  events: [
    {
      title: "Pellikuthuru",
      date: "2026-12-04",
      time: "6:30 PM",
      description: "An intimate evening of turmeric, music, and family blessings.",
      location: "Bride's Residence",
    },
    {
      title: "Mehendi & Sangeet",
      date: "2026-12-05",
      time: "7:00 PM",
      description: "Celebration with colour, dance, and live music.",
      location: "Aster Courtyard",
    },
    {
      title: "Muhurtham",
      date: "2026-12-06",
      time: "9:18 AM",
      description: "Traditional Telugu wedding ceremony at the auspicious muhurtham.",
      location: "Sri Lakshmi Convention",
    },
    {
      title: "Reception",
      date: "2026-12-06",
      time: "7:30 PM",
      description: "Dinner, blessings, and an evening reception with family and friends.",
      location: "Sri Lakshmi Convention",
    },
  ],
  story: [
    {
      title: "First Meeting",
      date: "February 2022",
      description: "A family introduction turned into an effortless conversation that never really ended.",
    },
    {
      title: "A Shared Yes",
      date: "August 2023",
      description: "Between coffee runs and long drives, friendship became commitment.",
    },
    {
      title: "Proposal",
      date: "January 2025",
      description: "Arjun proposed during a temple-town trip, with both families already smiling in approval.",
    },
  ],
  gallery: [
    { src: "/images/gallery1.jpg", alt: "Couple portrait by the lakeside" },
    { src: "/images/gallery2.jpg", alt: "Couple smiling together" },
    { src: "/images/traditional-bg.png", alt: "Traditional invitation texture" },
  ],
};
