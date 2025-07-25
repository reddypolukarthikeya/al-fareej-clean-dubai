
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
