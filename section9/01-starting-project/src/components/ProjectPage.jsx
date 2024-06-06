import AddTask from "./AddTask";

export default function ProjectPage({ projects, projectIndex }) {
  return (
    <div className="w-full h-full pt-24 pr-64 pl-12">
      <div className="flex">
        <div className="font-bold text-4xl flex-grow">
          {projects[projectIndex].title}
        </div>
        <div className="flex-none flex items-center justify-center">Delete</div>
      </div>
      <div className="text-gray-400 pt-8">{projects[projectIndex].dueDate}</div>
      <div className="pt-8">{projects[projectIndex].description}</div>
      <div className="h-1 w-full bg-gray-200 mt-6"></div>
      <AddTask/>
    </div>
  );
}
