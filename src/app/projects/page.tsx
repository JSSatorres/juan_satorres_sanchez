"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/constant/constantProjects";
import { Project } from "@/lib/definitions";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProjects = PROJECTS.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <main className="min-h-screen bg-background text-white px-4 py-16">
      <div className="mb-8 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search by technology..."
          className="w-full max-w-md p-2 rounded-lg bg-backgroundLight text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <section className="flex flex-col items-center justify-center text-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="bg-backgroundLight p-4 rounded-lg">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mt-4">{project.name}</h2>
                <p className="text-gray-400 mt-2">
                  {project.technologies.join(", ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
