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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
        threshold: 0.3, // El porcentaje de visibilidad que activa la intersección
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
  }, [])

  const handleScrollTo = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="md:m-7 flex flex-col md:flex-row min-h-screen bg-background text-main px-4 ">
      <section className="md:w-1/4 w-full sticky top-24 z-20">
        <ExperienceTimeline
          activeIndex={activeIndex}
          handleScrollTo={handleScrollTo}
          getYearFromDate={getYearFromDate}
        />
      </section>

      <section className="flex flex-col justify-center items-center w-full">
        {workExperience.map((work, index) => (
          <div
            key={work.company}
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <ExperienceCard work={work} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
