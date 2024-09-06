import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

// import FaqSection from "@/components/sections/FaqSection";
// import FooterSection from "@/components/sections/FooterSection";
// import HeroSection from "@/components/sections/HeroSection";
// import LargeTextSection from "@/components/sections/LargeTextSection";
// import PortfolioSection from "@/components/sections/PortfolioSection";
// import ServiceSection from "@/components/sections/ServiceSection";
// import TestimonialSection from "@/components/sections/TestimonialSection";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="px-4 md:px-[6rem] flex flex-col justify-center">
      <ContactSection /> 
      <h2> asdasd 
        </h2>      
      <AboutSection />
    </div>

    // <div className="px-4 md:px-[6rem] flex flex-col gap-[5rem] md:gap-[12.5rem] mt-[5rem] md:mt-[12.5rem]">
    //   <ServiceSection />
    //   <PortfolioSection />
    //   <FaqSection />
    //   <TestimonialSection />

    // <LargeTextSection />
    // <FooterSection />
    // </div>
  );
}
