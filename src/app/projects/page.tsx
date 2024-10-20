"use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { PROJECTS } from "@/lib/constant/constantProjects";
// import { GitHubRepo, Project } from "@/lib/definitions";
// // import ServiceCard from "@/components/cards/ServiceCard";

// const ProjectsPage = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const filteredProjects = PROJECTS.filter((project) =>
//     project.technologies.some((tech) =>
//       tech.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const [repos, setRepos] = useState<GitHubRepo[]>([]); // Repositorios tipados

//   console.log( "GITHUB_USERNAME:", process.env.NEXT_PUBLIC_GITHUB_USERNAME, "GITHUB_TOKEN:", process.env.NEXT_PUBLIC_GITHUB_TOKEN)
  
//   console.log(repos);
  

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch("/api/github");
//         if (!response.ok) {
//           throw new Error("Failed to fetch repositories");
//         }
//         const data: GitHubRepo[] = await response.json(); // Tipamos la respuesta
//         setRepos(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchRepos();
//   }, []);

//   console.log(repos);

//   return (
//     <main className="min-h-screen bg-background text-white px-4 py-16">
//       <div className="mb-8 w-full flex justify-center">
//         <input
//           type="text"
//           placeholder="Search by technology..."
//           className="w-full max-w-md p-2 rounded-lg bg-backgroundLight text-white"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <section className="flex flex-col items-center justify-center text-center">
//         <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project: Project) => (
//             <div key={project.id} className="bg-backgroundLight p-4 rounded-lg">
//               <Link
//                 href={project?.url || "#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.projectTitle}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <h2 className="text-xl font-bold mt-4">
//                   {project.projectTitle}
//                 </h2>{" "}
//                 <p className="text-gray-400 mt-2">
//                   {project.technologies.join(", ")}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* <ServiceCard /> */}
//     </main>
//   );
// };

// export default ProjectsPage;

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GitHubRepo } from '@/lib/definitions';

const ProjectsPage = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [topTechnologies, setTopTechnologies] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: GitHubRepo[] = await response.json();
        setRepos(data);

        // Count technologies
        const techCounts: Record<string, number> = {};
        data.forEach((repo) => {
          if (repo.language) {
            techCounts[repo.language] = (techCounts[repo.language] || 0) + 1;
          }
        });

        // Sort and take top 4
        const sortedTechs = Object.keys(techCounts).sort(
          (a, b) => techCounts[b] - techCounts[a]
        ).slice(0, 4);

        setTopTechnologies(sortedTechs);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    selectedTech ? repo.language === selectedTech : true
  );

  return (
    <main className="min-h-screen bg-background text-main px-4 py-16">
      <div className="mb-8 w-full flex justify-center">
        <select
          className="w-full max-w-md p-2 rounded-lg bg-backgroundLight text-main"
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
        >
          <option value="">All Technologies</option>
          {topTechnologies.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
      <section className="flex flex-col items-center justify-center text-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo) => (
            <div key={repo.id} className="bg-backgroundLight p-4 rounded-lg">
            <h2 className="text-2xl font-bold mt-4">{repo.name.replace(/[-_]/g, ' ')}</h2>
              <p className="text-gray-400 mt-2">Description: {repo.description || 'No description provided'}</p>
              <p className="text-gray-400 mt-2">Language: {repo.language || 'Not specified'}</p>
              <p className="text-gray-400 mt-2">Created on: {new Date(repo.created_at).toLocaleDateString()}</p>
              {/* <p className="text-gray-400 mt-2">Stars: {repo.stargazers_count}</p>
              <p className="text-gray-400 mt-2">Forks: {repo.forks_count}</p> */}
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h6 className="text-sm text-primary font-bold mt-4">{repo.full_name}</h6>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;