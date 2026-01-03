import {
  Heart,
  Smartphone,
  Globe,
  Share2,
  Palette,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Designs",
    description: "Every invitation is crafted uniquely for your special day.",
  },
  {
    icon: Share2,
    title: "WhatsApp Friendly",
    description: "Share easily with family and friends via WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "No App Needed",
    description: "Works perfectly on any browser, no downloads required.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Accessible on all devices - mobile, tablet, and desktop.",
  },
  {
    icon: Palette,
    title: "Cultural Aesthetics",
    description: "Authentic Indian wedding designs with regional touches.",
  },
  {
    icon: Headphones,
    title: "Quick Support",
    description: "Fast response and revisions via WhatsApp chat.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="section-subheading">
            We blend tradition with technology to create memorable digital
            invitations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
