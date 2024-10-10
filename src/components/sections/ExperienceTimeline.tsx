// components/YearTimeline.tsx
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
    <div className="md:sticky md:top-20 top-0 bg-background p-4 flex md:flex-col flex-row md:items-start items-center justify-between">
      <div className="relative w-full md:w-auto md:h-screen">
        <ul className="flex md:flex-col flex-row items-center md:space-y-8 space-x-8 md:space-x-0">
          {workExperience.map((work, index) => (
            <li
              key={index}
              className={`cursor-pointer text-xl font-bold transition duration-200 text-white relative ${
                activeIndex === index ? "text-green-400" : ""
              }`}
              onClick={() => handleScrollTo(index)}
            >
              {/* Puntos de la línea */}
              <div className="flex flex-col items-center">
                <span
                  className={`w-4 h-4 rounded-full mb-2 z-10 ${
                    activeIndex === index ? "bg-green-400" : "bg-white"
                  }`}
                ></span>
                <span className="text-sm">
                  {getYearFromDate(work?.duration)}
                </span>
              </div>

              {/* Línea que conecta los puntos */}
              {index < workExperience.length - 1 && (
                <div className="absolute md:block hidden left-1/2 transform -translate-x-1/2 top-6 h-full border-l-2 border-gray-600 z-0"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Línea horizontal en móvil */}
        <div className="md:hidden absolute bottom-1 w-full h-0.5 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
