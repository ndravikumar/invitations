import { MousePointerClick, FileText, Palette, Share2 } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose a Template",
    description:
      "Browse our collection and pick a design that matches your wedding style.",
  },
  {
    icon: FileText,
    title: "Share Your Details",
    description:
      "Send us your wedding details, photos, and preferences via WhatsApp.",
  },
  {
    icon: Palette,
    title: "We Customize",
    description:
      "Our team creates your personalized invitation website within 2-3 days.",
  },
  {
    icon: Share2,
    title: "Share the Link",
    description:
      "Get your unique link and share it with all your guests instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="section-subheading">
            Getting your digital wedding invitation is simple and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-accent/10" />
                <div className="relative w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                  <step.icon size={28} className="text-foreground" />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
