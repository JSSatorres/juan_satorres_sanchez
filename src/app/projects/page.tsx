"use client";

import { useEffect, useState } from "react";
import { GitHubRepo } from "@/lib/definitions";
import MainProyects from "./components/MainProyects";
import GitHubProject from "./components/GitHubProjects";

const ProjectsPage = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [topTechnologies, setTopTechnologies] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: GitHubRepo[] = await response.json();
        setRepos(data);

        const topTechnologiesFound = data.map((ele) => ele.language);
        const cleanTopTechnologies = Array.from(
          new Set(topTechnologiesFound)
        ).filter((item) => item !== null);

        setTopTechnologies(cleanTopTechnologies);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    selectedTech ? repo.language === selectedTech : true
  );

  return (
    <main className="min-h-screen bg-background text-main px-8 py-16 flex flex-col items-center">
      <MainProyects />
      <GitHubProject
        repos={filteredRepos}
        selectedTech={selectedTech}
        topTechnologies={topTechnologies}
        onTechChange={(tech) => setSelectedTech(tech)}
      />
    </main>
  );
};

export default ProjectsPage;
