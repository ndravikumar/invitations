import TemplateCard from "./TemplateCard";
import templateClassic from "@/assets/template-classic.jpg";
import templateModern from "@/assets/template-modern.jpg";
import templateFestive from "@/assets/template-festive.jpg";
import templateRoyal from "@/assets/template-royal.jpg";
import templateMinimal from "@/assets/template-minimal.jpg";
import templateHeritage from "@/assets/template-heritage.jpg";
import templatePeacock from "@/assets/template-peacock.jpg";
import templateRustic from "@/assets/template-rustic.jpg";
import templateDestination from "@/assets/template-destination.jpg";
import templateBollywood from "@/assets/template-bollywood.jpg";

const templates = [
  {
    name: "Subhalekha Classic",
    description:
      "Traditional Telugu wedding aesthetics with authentic cultural elements and beautiful typography.",
    language: "Telugu",
    price: "₹2,999",
    image: templateClassic,
    previewUrl: "/preview/classic",
    features: [
      "Traditional opening animation",
      "Telugu calendar & muhurtham",
      "Family tree section",
    ],
  },
  {
    name: "Modern Flip Invite",
    description:
      "Elegant book-style page flip animation with a contemporary minimal design approach.",
    language: "English",
    price: "₹3,499",
    image: templateModern,
    previewUrl: "/preview/modern",
    features: [
      "Book-style page flip effect",
      "Modern minimal theme",
      "Photo gallery included",
    ],
  },
  {
    name: "Festive South Indian",
    description:
      "Colorful temple-inspired visuals perfect for grand South Indian celebrations.",
    language: "South Indian",
    price: "₹3,999",
    image: templateFestive,
    previewUrl: "/preview/festive",
    features: [
      "Temple-inspired design",
      "Vibrant color palette",
      "Multiple event support",
    ],
  },
  {
    name: "Royal Sangeet",
    description:
      "Luxurious design with golden accents, perfect for grand celebrations and royal themes.",
    language: "Telugu / English",
    price: "₹4,499",
    image: templateRoyal,
    previewUrl: "/preview/royal",
    features: [
      "Royal golden theme",
      "Sangeet & events page",
      "RSVP functionality",
    ],
  },
  {
    name: "Minimalist Elegance",
    description:
      "Clean, sophisticated design with subtle animations for modern couples.",
    language: "English",
    price: "₹2,499",
    image: templateMinimal,
    previewUrl: "/preview/minimal",
    features: ["Clean typography", "Subtle animations", "Quick loading"],
  },
  {
    name: "Heritage Collection",
    description:
      "Inspired by traditional Kanjivaram patterns and South Indian heritage.",
    language: "Telugu / Tamil",
    price: "₹3,999",
    image: templateHeritage,
    previewUrl: "/preview/heritage",
    features: [
      "Kanjivaram patterns",
      "Dual language support",
      "Custom music option",
    ],
  },
  {
    name: "Peacock Paradise",
    description:
      "Majestic peacock motifs with deep teal and gold, embodying timeless elegance.",
    language: "Hindi / English",
    price: "₹3,799",
    image: templatePeacock,
    previewUrl: "/preview/peacock",
    features: [
      "Peacock feather animations",
      "Mandala patterns",
      "Ornate gold borders",
    ],
  },
  {
    name: "Rustic Romance",
    description:
      "Earthy botanical aesthetics with vintage charm for nature-loving couples.",
    language: "English",
    price: "₹2,799",
    image: templateRustic,
    previewUrl: "/preview/rustic",
    features: [
      "Botanical illustrations",
      "Vintage paper texture",
      "Eco-friendly theme",
    ],
  },
  {
    name: "Destination Dreams",
    description:
      "Beach sunset vibes perfect for destination weddings in Goa, Kerala or abroad.",
    language: "English",
    price: "₹4,999",
    image: templateDestination,
    previewUrl: "/preview/destination",
    features: [
      "Beach & sunset theme",
      "Travel itinerary page",
      "Location map included",
    ],
  },
  {
    name: "Bollywood Glamour",
    description:
      "Star-studded sparkle with dramatic flair for couples who love the spotlight.",
    language: "Hindi / English",
    price: "₹4,299",
    image: templateBollywood,
    previewUrl: "/preview/bollywood",
    features: [
      "Sparkle animations",
      "Dramatic curtain reveal",
      "Celebrity-style design",
    ],
  },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-20 md:py-28">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Our <span className="text-gradient-gold">Wedding Templates</span>
          </h2>
          <p className="section-subheading">
            Handcrafted designs that blend tradition with modern elegance. Each
            template is fully customizable.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={template.name} {...template} index={index} />
          ))}
        </div>

        {/* Custom Request */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for something unique? We create custom designs too!
          </p>
          <a href="#contact" className="btn-gold">
            Request Custom Template
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
