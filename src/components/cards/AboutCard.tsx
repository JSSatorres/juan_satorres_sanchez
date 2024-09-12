import { RESUME_INTRODUCTION } from "@/lib/constant";
import React from "react";
// import { Separator } from "../ui/separator";
// import MainButton from "../common/MainButton";
// import Link from "next/link";

function AboutCard() {
  return (
    <section className=" rounded-[0.625rem] ">
      <div className="flex gap-2 items-center  pt-[2.5rem] px-[2.5rem]">
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
          Introduction
        </p>
      </div>

      <p className="text-customGrayAlt2 text-[0.875rem] mt-[0.75rem]  px-[2.5rem]">
        {RESUME_INTRODUCTION}
      </p>

      <div className="flex gap-2 items-center">
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]"></p>
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-4  p-[2.5rem]">
        <div className="border border-lightDark rounded-[6.25rem] inline-flex justify-between p-[0.62rem] gap-4 w-[210px]">
          <img
            src="/images/facebook_icon.png"
            alt="facebook icon"
            className="cursor-pointer"
          />
          <img
            src="/images/x_icon.png"
            alt="x icon"
            className="cursor-pointer"
          />
          <img
            src="/images/instagram_icon.png"
            alt="instagram icon"
            className="cursor-pointer"
          />
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-[1.25rem]">
          <MainButton text="Let's Work" classes="w-full md:w-[inherit]" />
          <MainButton text="Download CV" classes="w-full md:w-[inherit]" />
        </div> */}
      </div>
    </section>
  );
}

export default AboutCard;
