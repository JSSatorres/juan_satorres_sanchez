import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import { FaLinkedin, FaSlack, FaGoogle, FaFacebookF } from "react-icons/fa";

// import FaqSection from "@/components/sections/FaqSection";
// import FooterSection from "@/components/sections/FooterSection";
// import HeroSection from "@/components/sections/HeroSection";
// import LargeTextSection from "@/components/sections/LargeTextSection";
// import PortfolioSection from "@/components/sections/PortfolioSection";
// import ServiceSection from "@/components/sections/ServiceSection";
// import TestimonialSection from "@/components/sections/TestimonialSection";
// import { Contact } from "lucide-react";

export default function Home() {
  return (
    // <div className="px-4 md:px-[6rem] flex flex-row justify-center">
    //   <ContactSection />
    //   <AboutSection />
    // </div>

    // pages/index.js

    <div className="min-h-screen bg-gray-900 text-white">
      <header className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Adams</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              I’m <span className="text-yellow-400">James Adams</span>
            </h1>
            <p className="mt-4 text-gray-400">
              A freelancer who provides services for digital programming and
              design content needs, for all businesses with more than 10 years
              of experience.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 px-4 py-2 rounded-full flex items-center"
              >
                <FaFacebookF /> Meta
              </a>
              <a
                href="#"
                className="bg-red-600 px-4 py-2 rounded-full flex items-center"
              >
                <FaGoogle /> Google
              </a>
              <a
                href="#"
                className="bg-blue-700 px-4 py-2 rounded-full flex items-center"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="#"
                className="bg-purple-500 px-4 py-2 rounded-full flex items-center"
              >
                <FaSlack /> Slack
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <Image
              src="/profile.jpg" // Cambia esta ruta según tu imagen
              alt="James Adams"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">What Can I Do For Your Needs</h2>
          <p className="text-gray-400 mt-4">
            It is easier to entrust the work to the experts because they are
            able to provide the best results with reliable quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-gray-400">117 Projects</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Front End Develop</h3>
              <p className="text-gray-400">84 Projects</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Mobile App Develop</h3>
              <p className="text-gray-400">50 Projects</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
