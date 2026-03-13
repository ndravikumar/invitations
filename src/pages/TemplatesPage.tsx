import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import InviteControls from "@/components/wedding/InviteControls";
import { premiumTemplates } from "@/templates";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f2e8,#fdfaf5)] px-4 py-8 text-stone-900 sm:px-6">
      <InviteControls title="Wedding Templates" />
      <div className="mx-auto max-w-6xl">
        <Link
          to="/#templates"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium shadow-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-10 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-stone-500">Premium Wedding Templates</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Choose a Design Direction</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Preview three reusable wedding website templates powered by a shared data source, reusable sections, and mobile-first layouts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {premiumTemplates.map((template, index) => (
            <motion.article
              key={template.slug}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{template.name}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{template.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-stone-700">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={template.previewUrl}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white"
                >
                  Use template
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
