import React from "react";
import Header from "../common/Header";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AboutCard from "../cards/AboutCard";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] mt-32">
      <div className="flex-grow-1 "></div>

      <AboutCard />
    </section>
  );
}

export default AboutSection;
