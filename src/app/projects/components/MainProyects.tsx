

const favoriteProjects: any[] = [
  {
    id: 1,
    name: "Favorite Project 1",
    full_name: "user/favorite-project-1",
    html_url: "https://github.com/user/favorite-project-1",
    language: "JavaScript",
   
  },
  {
    id: 2,
    name: "Favorite Project 2",
    full_name: "user/favorite-project-2",
    html_url: "https://github.com/user/favorite-project-2",
    language: "TypeScript",
  
  },

];

const MainProyects = () => {
  return (
    <section className="w-4/5 my-8">
      <h2 className="text-2xl font-bold mb-4">Favorite Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteProjects.map((project) => (
          <div key={project.id} className="bg-backgroundLight p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.language}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProyects;