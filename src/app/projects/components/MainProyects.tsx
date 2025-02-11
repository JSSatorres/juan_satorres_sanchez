import { favoriteProjects } from "@/lib/constant/constantProjects"

const MainProjects = () => {
  return (
    <section className="w-full md:w-4/5  mx-auto">
      <h2 className="text_title mb-10 md:my-10 text-main text-center">
        Favorite Projects
      </h2>
      <div className="flex flex-col gap-8">
        {favoriteProjects.map((project) => (
          <div
            key={project.id}
            className="card hover:card-hover flex flex-col justify-between"
          >
            <h3 className="text_title font-semibold my-6 text-main md:text-center ">
              {project.name}
            </h3>
            <img
              src={project.image_url}
              alt={project.name}
              className="w-full object-cover rounded-t-card  md:h-60 md:object-top mb-6"
            />

            <div className="md:flex md:justify-between md:items-center">
              <div>
                <p className="text-textSecondary mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Language:</strong>{" "}
                  {project.language || "Not specified"}
                </p>
                <p className="mt-2 text-textSecondary">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
              </div>
              <div>
                {project.highlights && (
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="mt-4 flex gap-4 md:justify-center">
              {project?.html_url && (
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on GitHub
                </a>
              )}
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProjects
