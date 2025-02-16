"use client"

import React, { useRef, useState, useEffect } from "react"
import { workExperience } from "@/lib/constant/projectsConstant"
import ExperienceTimeline from "./components/ExperienceTimeline"
import ExperienceCard from "./components/ExperienceCard"

const getYearFromDate = (dateString: string) => {
  const dateParts = dateString.split(" ")
  return dateParts[1]
}

const Page: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(
              (section) => section === entry.target
            )
            setActiveIndex(index)
          }
        })
      },
      {
        root: null, // El viewport del navegador
        threshold: 0.6, // El porcentaje de visibilidad que activa la intersección
        rootMargin: "-10% 0px -30% 0px",
      }
    )

    const currentSections = sectionsRef.current
    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [isScrolling])

  const handleScrollTo = (index: number) => {
    setIsScrolling(true)
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    setTimeout(() => {
      setActiveIndex(index)
      setIsScrolling(false)
    }, 400)
  }

  return (
    <>
      <article className="md:w-1/6 w-full sticky top-24 z-20 px-0 md:px-4 md:flex md:justify-center">
        <ExperienceTimeline
          activeIndex={activeIndex}
          handleScrollTo={handleScrollTo}
          getYearFromDate={getYearFromDate}
        />
      </article>

      <article className="flex flex-col justify-center items-center w-full px-0 md:px-4">
        {workExperience.map((work, index) => (
          <div
            key={work.company}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`scroll-mt-48 md:scroll-mt-24 last:mb-32 md:last:mb-0 relative 
              ${index === 0 && "mt-8 md:mt-0"}
              ${index < 4 && "translate-y-50"} 
              ${index > 0 && index < 4 && "translate-y-32"}
              ${index === 3 && "mb-40"}`}
          >
            <ExperienceCard work={work} />
          </div>
        ))}
      </article>
    </>
  )
}

export default Page
