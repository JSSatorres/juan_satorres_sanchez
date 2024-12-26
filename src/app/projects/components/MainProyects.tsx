import { favoriteProjects } from "@/lib/constant/constantProjects";


const MainProyects = () => {
  return (
    <section className="w-4/5 my-8">
      <h2 className="text-2xl font-bold mb-4">Proyectos Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteProjects.map((project) => (
          <div
            key={project.id}
            className="bg-backgroundLight p-4 rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.image_url}
              alt={project.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">{project.language}</p>
            <p className="mt-2">
              <strong>Tecnologías:</strong> {project.technologies.join(", ")}
            </p>
            <div className="mt-2">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-2"
              >
                Ver en GitHub
              </a>
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProyects;
