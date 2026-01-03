import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TemplatesSection from "@/components/TemplatesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TemplatesSection />
        <HowItWorks />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
