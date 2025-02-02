import { GitHubRepo } from "@/lib/definitions"

type GitHubProjectProps = {
  repos: GitHubRepo[]
  selectedTech: string
  topTechnologies: string[]
  onTechChange: (tech: string) => void
}

const GitHubProject = ({
  repos,
  selectedTech,
  topTechnologies,
  onTechChange,
}: GitHubProjectProps) => {
  return (
    <section>
      <div className="mb-8 w-full flex flex-col items-center justify-center">
        <hr className="w-full mb-5 mt-5 border-border" />
        <h2 className="text_title mb-5 mt-5 text-main">All Repositories</h2>
        <div className="relative w-full">
          <select
            className="w-full md:max-w-md  card"
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
          >
            <option value="">All Technologies</option>
            {topTechnologies.map((tech) => (
              <option key={tech} value={tech} className="bg-yellow text-main">
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <section className="flex flex-col items-center justify-center text-center">
          <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {repos.map((repo) => (
              <div key={repo.id} className="flex flex-col justify-between card">
                <h3 className="text-xl font-bold text-main">{repo.name}</h3>
                <p className="text-textSecondary mt-2">{repo.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Language:</strong> {repo.language || "Not specified"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Created on:</strong> {repo.created_at}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default GitHubProject
