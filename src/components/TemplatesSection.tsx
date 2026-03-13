import { Link } from "react-router-dom";
import { premiumTemplates } from "@/templates";

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Premium <span className="text-gradient-gold">Wedding Templates</span>
          </h2>
          <p className="section-subheading">
            Three polished invitation systems built on reusable components, dynamic data, and mobile-first interactions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {premiumTemplates.map((template) => (
            <article key={template.slug} className="card-elegant overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={template.image}
                  alt={template.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
                  {template.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{template.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={template.previewUrl} className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                  Live Preview
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/templates" className="btn-gold">
            Browse Template Selector
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
