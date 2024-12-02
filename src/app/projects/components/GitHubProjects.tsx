import { GitHubRepo } from "@/lib/definitions";
import ProjectCard from "@/components/cards/ProjectCard";

type GitHubProjectProps = {
  repos: GitHubRepo[];
  selectedTech: string;
  topTechnologies: string[];
  onTechChange: (tech: string) => void;
};

const GitHubProject = ({
  repos,
  selectedTech,
  topTechnologies,
  onTechChange,
}: GitHubProjectProps) => {
  const filteredRepos = repos.filter((repo) =>
    selectedTech ? repo.language === selectedTech : true
  );

  return (
    <>
      <div className="mb-8 w-full flex flex-col items-center justify-center">
        <hr className="w-full mb-5 mt-5 " />
        <h2 className="text-3xl font-bold mb-5 mt-5">All Repositories</h2>
        <select
          className="w-full max-w-md p-2 rounded-lg bg-backgroundLight text-main mt-5"
          value={selectedTech}
          onChange={(e) => onTechChange(e.target.value)}
        >
          <option value="">All Technologies</option>
          {topTechnologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <section className="flex flex-col items-center justify-center text-center">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              <ProjectCard repo={repo} key={repo.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GitHubProject;
