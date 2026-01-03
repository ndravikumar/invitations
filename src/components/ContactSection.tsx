import { MessageCircle, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in getting a digital wedding invitation website."
  );

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="section-heading mb-4">
            Ready to Create Your{" "}
            <span className="text-gradient-gold">Digital Invite?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Loved a template? Message us on WhatsApp with the template name.
            <br />
            We'll get back to you within 24 hours!
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg py-4 px-10 mb-12"
          >
            <MessageCircle size={24} />
            <span>Message Us on WhatsApp</span>
          </a>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <Phone size={24} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-1">
                Call / WhatsApp
              </h4>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <MapPin size={24} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-10">
            ✨ We've helped 100+ couples share their special moments digitally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
