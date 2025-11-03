import AboutUs from "@/components/AboutUs";
import ContactCTA from "@/components/ContactCTA";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <StatsSection />
      <ServicesSection />
      <WhyUs />
      <ContactUs />
      <ContactCTA />
    </main>
  );
}
