import { MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "919876543210";

  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
              <span className="text-foreground font-display font-bold text-lg">
                S
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Subhalekha Digital Invites
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Hyderabad, India
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© 2025 Subhalekha Digital Invites. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
