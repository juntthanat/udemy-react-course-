import AddTask from "./AddTask";

export default function ProjectPage({
  selectedProject,
  projectIndex,
  handleAddTask,
  handleClearTask,
}) {
  return (
    <div className="w-full h-full pt-24 pr-64 pl-12">
      <div className="flex">
        <div className="font-bold text-4xl flex-grow">
          {selectedProject.title}
        </div>
        <div className="flex-none flex items-center justify-center">Delete</div>
      </div>
      <div className="text-gray-400 pt-8">{selectedProject.dueDate}</div>
      <div className="pt-8">{selectedProject.description}</div>
      <div className="h-1 w-full bg-gray-200 mt-6"></div>
      <AddTask
        taskList={selectedProject.tasks}
        projectIndex={projectIndex}
        handleAddTask={handleAddTask}
        handleClearTask={handleClearTask}
      />
    </div>
  );
}
