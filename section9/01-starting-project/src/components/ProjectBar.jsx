export default function ProjectBar({ projects, projectIndex, onAddProject, onClickProject }) {

  const handleOnClick = (event) => {
    onClickProject(event);
  }
  return (
    <section className="w-1/4 h-full rounded-tr-3xl bg-stone-900 pt-20 pl-12">
      <p className="text-white text-3xl font-semibold">YOUR PROJECTS</p>
      <button
        onClick={() => onAddProject()}
        className="text-gray-400 bg-stone-700 h-10 w-36 rounded mt-12"
      >
        + Add Project
      </button>
      <div className="pt-12">
        {projects.map((project) => (
          <div
            key={project.index}
            className={`h-8 w-80 pl-2 flex items-center ${
              project.index == projectIndex
                ? "bg-stone-800 text-gray-200"
                : "text-gray-400"
            }`}
            onClick={() => handleOnClick(project.index)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </section>
  );
}
