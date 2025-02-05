import React from "react"
import { workExperience } from "@/lib/constant/projectsConstant"

interface ExperienceTimeline {
  activeIndex: number
  handleScrollTo: (index: number) => void
  getYearFromDate: (dateString: string) => string
}

const ExperienceTimeline: React.FC<ExperienceTimeline> = ({
  activeIndex,
  handleScrollTo,
  getYearFromDate,
}) => {
  return (
    <div className="md:fixed md:top-22 bg-secondBackgrond  flex md:flex-col flex-row md:items-center items-center justify-center card">
      <ul className="flex md:flex-col flex-row items-center  md:space-y-8  md:space-x-0  ">
        {workExperience.map((work, index) => (
          <li
            key={index}
            className={`cursor-pointer text-xl font-bold transition duration-200 text-main relative flex md:flex-row flex-col items-center mx-1`}
            onClick={() => handleScrollTo(index)}
          >
            <div className="relative flex items-center">
              <span
                className={`w-4 h-4 rounded-full z-2 ${
                  activeIndex === index
                    ? "bg-primary"
                    : "bg-white border-2 border-primary"
                } hover:bg-opacity-75`}
              ></span>
              <span className="text-sm ml-1 md:ml-2">
                {getYearFromDate(work?.duration)}
              </span>
            </div>

            {index < workExperience.length - 1 && (
              <div className="absolute md:block hidden left-2 transform translate-x-1/2 top-6 h-full border-l-2 border-gray-600 z-0"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceTimeline
