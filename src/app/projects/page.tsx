import ProjectCard from "@/components/cards/ProjectCard";
import React from "react";
import { workExperience } from "./projectsConstant";

const page = () => {
  return (
    <>
      <div>projects</div>;
      <div className="m-7  flex flex-col justify-center items-center">
        {workExperience.map((work) => (
          <ProjectCard key={work.company} work={work} />
        ))}
      </div>
    </>
  );
};

export default page;
