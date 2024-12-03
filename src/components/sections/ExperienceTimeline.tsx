import React from "react";
import { workExperience } from "@/lib/constant/projectsConstant"; // Importamos la constante directamente

interface YearTimelineProps {
  activeIndex: number;
  handleScrollTo: (index: number) => void;
  getYearFromDate: (dateString: string) => string;
}

const ExperienceTimeline: React.FC<YearTimelineProps> = ({
  activeIndex,
  handleScrollTo,
  getYearFromDate,
}) => {
  return (
    <div className="md:fixed md:top-50 bg-secondBackgrond p-5 flex md:flex-col flex-row md:items-center items-center justify-center">
      <ul className="flex md:flex-col flex-row items-center md:space-y-8 space-x-8 md:space-x-0 relative p-5">
        {workExperience.map((work, index) => (
          <li
            key={index}
            className={`cursor-pointer text-xl font-bold transition duration-200 text-white relative flex md:flex-row flex-col items-center`}
            onClick={() => handleScrollTo(index)}
          >
            {/* Puntos de la línea */}
            <div className="relative flex items-center">
              <span
                className={`w-4 h-4 rounded-full z-10 ${
                  activeIndex === index ? "bg-green-400" : "bg-white"
                }`}
              ></span>
              <span className="text-sm ml-4 md:ml-2">
                {getYearFromDate(work?.duration)}
              </span>
            </div>

            {/* Línea que conecta los puntos */}
            {index < workExperience.length - 1 && (
              <div className="absolute md:block hidden left-2 transform translate-x-1/2 top-6 h-full border-l-2 border-gray-600 z-0"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
