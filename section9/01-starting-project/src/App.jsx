import ProjectBar from "./components/ProjectBar";
import HomePageUnselect from "./components/HomePageUnselect";
import AddProject from "./components/AddProject";
import ProjectPage from "./components/ProjectPage";
import { useState } from "react";

const tempData = [
  {
    index: "0",
    title: "TestTitle",
    description: "TestDescription",
    dueDate: "00/00/00",
    tasks: ["hello world", "Test Task"],
  },
  {
    index: "1",
    title: "TestTitle2",
    description: "TestDescription2",
    dueDate: "00/00/01",
    tasks: ["hello world2", "Test Task2"],
  },
];

function App() {
  const [projects, setProjects] = useState(tempData);
  const [projectIndex, setProjectIndex] = useState(0);
  const [createProject, setCreateProject] = useState(false);

  const handleSaveNewProject = (userInput) => {
    setProjects([
      ...projects,
      {
        index: projects.length,
        title: userInput.title,
        description: userInput.description,
        dueDate: userInput.dueDate,
      },
    ]);
    setCreateProject(false);
    console.log(projects);
  };

  const handleCancel = () => {
    setCreateProject(false);
  };

  const handleOnClickProjectBar = (event) => {
    setProjectIndex(event);
  };

  const handleAddProject = (event) => {
    setCreateProject(true);
    console.log("Click");
  };

  const handleAddTask = (event) => {
    const updateProject = projects.map((project) => {
      if (project.id !== projectIndex) {
        return project;
      } else {
        return {
          ...project,
          task: [project.tasks, event],
        };
      }
    });
    setProjects(updateProject);
    console.log(projects);
  };

  const handleClearTask = (event) => {
    const updateProject = projects.map((project) => {
      if (project.id !== projectIndex) {
        return project;
      } else {
        return {
          ...project,
          task: [project.tasks.filter((task) => task === event)],
        };
      }
    });
    setProjects(updateProject);
  };

  const handlePages = () => {
    let selectedProject = {};
    projects.map((project) => {
      if (project.index == projectIndex) {
        selectedProject = project;
      }
    });
    if (createProject == true) {
      return (
        <AddProject
          onSaveNewProject={handleSaveNewProject}
          onCancel={handleCancel}
        />
      );
    } else if (projects.length == 0) {
      return <HomePageUnselect onAddProject={handleAddProject} />;
    } else {
      return (
        <ProjectPage
          selectedProject={selectedProject}
          projectIndex={projectIndex}
          handleAddTask={handleAddTask}
          handleClearTask={handleClearTask}
        />
      );
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-12" />
      <section className="w-full h-5/6 flex flex-auto flex-row">
        <ProjectBar
          projects={projects}
          projectIndex={projectIndex}
          onAddProject={handleAddProject}
          onClickProject={handleOnClickProjectBar}
        />
        <section className="w-3/4 h-full">{handlePages()}</section>
      </section>
    </main>
  );
}

export default App;