"use client";

import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { workExperience } from "@/lib/constant/projectsConstant";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

const getYearFromDate = (dateString: string) => {
  const dateParts = dateString.split(" ");
  return dateParts[1];
};

const Page: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]); // Referencia a cada sección
  const [activeIndex, setActiveIndex] = useState<number>(0); // Estado para manejar el índice activo

  // Función que usa IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(
              (section) => section === entry.target
            );
            setActiveIndex(index); // Actualizar el índice activo
          }
        });
      },
      {
        root: null, // El viewport del navegador
        threshold: 0.3, // El porcentaje de visibilidad que activa la intersección
      }
    );

    // Observar todas las secciones (tarjetas de experiencia)
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section); // Dejar de observar las secciones
        }
      });
    };
  }, []);

  // Función para hacer scroll hasta la sección correspondiente
  const handleScrollTo = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="m-7 flex flex-col md:flex-row">
      {/* Eje de Años - Barra fija a la izquierda en desktop y arriba en móvil */}
      <div className="md:w-1/4 w-full">
        <ExperienceTimeline
          activeIndex={activeIndex}
          handleScrollTo={handleScrollTo}
          getYearFromDate={getYearFromDate}
        />
      </div>

      {/* Sección de contenido con tarjetas de proyectos */}
      <div className="flex flex-col justify-center items-center md:w-3/4">
        {workExperience.map((work, index) => (
          <div
            key={work.company}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="mb-12"
          >
            <ProjectCard work={work} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
