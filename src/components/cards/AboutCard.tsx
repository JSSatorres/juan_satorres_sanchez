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
        I am a passionate Full-Stack Web Developer with a solid background in
        industrial design. After a successful career as a technical engineer, I
        decided to shift my professional trajectory towards software
        development, specializing in building robust and scalable web
        applications. With expertise in technologies such as React.js, Next.js,
        Node.js, TypeScript, and knowledge of Python, I have worked on complex
        projects that seamlessly integrate frontend and backend. My focus is on
        optimizing processes and enhancing user experience through innovative
        and efficient solutions.
      </p>

      <div className="flex gap-2 items-center">
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
          Full-Stack Web Development Experience: Goblintrader (Oct 2023 -
          Present, Part-time, Remote): Currently developing both frontend and
          backend solutions using Next.js, TypeScript, Node.js, and Express.
          Focused on building scalable applications and optimizing user
          experience. Viewnext (Mar 2023 - Present, Remote): Specializing in
          frontend development with React.js, Redux, and MaterialUI.
          Contributing to the creation of high-performance user interfaces and
          enhancing application functionality. Vocces Lab (Jun 2022 - Mar 2023,
          Remote): Designed and implemented an internal logistics application
          and streamlined company registration processes. Utilized the MERN
          stack (MongoDB, Express.js, React.js, Node.js), along with Redux,
          React Query, and MaterialUI, to deliver efficient and user-centric
          solutions. Technical Engineering Experience: STULZ TECNIVEL S.L. (Apr
          2018 - Sep 2021): Led the design and development of air handling
          units. Managed product design phases, ensuring quality control and
          adherence to technical specifications. Oversaw production supervision
          and delivery processes. TECNSIS 3000 (Mar 2017 - Apr 2018): Engaged in
          product development and engineering projects, optimizing performance
          and enhancing technical processes. Contributed to improving product
          functionality and efficiency. Background in Industrial Design:
          University of Malaga (Sep 2009 - Jun 2015): Earned a degree in
          Technical Industrial Engineering in Industrial Design. This education
          laid the groundwork for a strong analytical approach and
          problem-solving skills, which have been instrumental in both
          engineering and software development roles.
        </p>
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
