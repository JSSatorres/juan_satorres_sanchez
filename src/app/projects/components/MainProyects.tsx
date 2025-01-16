import { favoriteProjects } from "@/lib/constant/constantProjects";

const MainProyects = () => {
  return (
    <section className="w-4/5 my-8">
      <h2 className="heading-primary text-center">Favorite Projects</h2>
      <div className="flex flex-col gap-8">
        {favoriteProjects.map((project) => (
          <div
            key={project.id}
            className="card hover:card-hover flex flex-col justify-between"
          >
            <img
              src={project.image_url}
              alt={project.name}
              className="w-full h-40 object-cover rounded-t-card"
            />
            <h3 className="text-xl font-semibold mt-4 text-main">
              {project.name}
            </h3>
            <p className="text-textSecondary mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              <strong>Language:</strong> {project.language || "Not specified"}
            </p>
            <p className="mt-2 text-textSecondary">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on GitHub
              </a>
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
  );
};

export default MainProyects;
