import { MessageCircle, ArrowDown } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "919603525393";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in a digital wedding invitation website."
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float delay-300" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              A modern way to invite with tradition
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Turn Your Wedding Invitation Into a{" "}
            <span className="text-gradient-gold">Beautiful Website</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Share your wedding invite as a link. Elegant. Personal. Memorable.
            <br className="hidden sm:block" />
            Perfect for South Indian & Telugu weddings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <a href="#templates" className="btn-maroon w-full sm:w-auto">
              <span>View Templates</span>
              <ArrowDown size={18} />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up delay-400">
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>100+ Happy Couples</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>No App Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>WhatsApp Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#templates"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
