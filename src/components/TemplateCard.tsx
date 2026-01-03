import { ExternalLink, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface TemplateCardProps {
  name: string;
  description: string;
  language: string;
  price: string;
  image: string;
  features: string[];
  previewUrl?: string;
  index: number;
}

const TemplateCard = ({
  name,
  description,
  language,
  price,
  image,
  features,
  previewUrl = "#",
  index,
}: TemplateCardProps) => {
  const whatsappNumber = "919603525393";
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${name}" wedding invitation template.`
  );

  const isInternalLink = previewUrl.startsWith("/");

  return (
    <div
      className="card-elegant overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
          {language}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
            {name}
          </h3>
          <span className="text-lg font-semibold text-accent whitespace-nowrap">
            {price}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          {isInternalLink ? (
            <Link
              to={previewUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <ExternalLink size={16} />
              Live Preview
            </Link>
          ) : (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <ExternalLink size={16} />
              Live Preview
            </a>
          )}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-whatsapp text-sm py-2.5"
          >
            <MessageCircle size={16} />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
