"use client";


import { useEffect, useState } from 'react';
import { GitHubRepo } from '@/lib/definitions';
import MainProjectsCard from '@/components/cards/MainProjectsCard';
import ProjectCard from '@/components/cards/ProjectCard';


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

      <div className="flex flex-col items-center justify-center text-center">

        <section className="flex flex-col items-center justify-center text-center">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              <div key={repo.id} className="bg-backgroundLight p-4 rounded-lg">
                <MainProjectsCard repo={repo} />
              </div>
            ))}
          </div>
        </section>

    

        <section className="flex flex-col items-center justify-center text-center">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              
                <ProjectCard repo={repo} key={repo.id} />
             
            ))}
          </div>
        </section>    

      </div>
    </main>
  );
};

export default ProjectsPage;