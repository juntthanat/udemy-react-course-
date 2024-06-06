import ProjectBar from "./components/ProjectBar";
import HomePageUnselect from "./components/HomePageUnselect";
import AddProject from "./components/AddProject";
import ProjectPage from "./components/ProjectPage";
import { useState } from "react";

const tempData = {
  index: "000",
  title: "TestTitle",
  description: "TestDescription",
  dueDate: "00/00/00",
  tasks: ["TestMe", "Hello world"],
};

function App() {
  const [projects, setProjects] = useState([]);
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
        tasks: [],
      },
    ]);
    setCreateProject(false);
    console.log(projects);
  };

  const handleCancel = () => {
    setCreateProject(false);
  }

  const handleOnClickProjectBar = (event) => {
    console.log(projectIndex)
    setProjectIndex(event);
  }

  const handleProjectPage = (event) => {};

  const handleAddProject = (event) => {
    setCreateProject(true);
    console.log("Click")
  };

  const handlePages = () => {
    if (createProject == true) {
      return <AddProject onSaveNewProject={handleSaveNewProject} onCancel={handleCancel}/>;
    } else if (projects.length == 0) {
      return <HomePageUnselect onAddProject={handleAddProject} />;
    } else {
      return <ProjectPage projects={projects} projectIndex={projectIndex} />;
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-12" />
      <section className="w-full h-5/6 flex flex-auto flex-row">
        <ProjectBar projects={projects} projectIndex={projectIndex} onAddProject={handleAddProject} onClickProject={handleOnClickProjectBar}/>
        <section className="w-3/4 h-full">
          {handlePages()}
        </section>
      </section>
      {/* <div className="w-full flex-auto h-2 bg-stone-700"/> */}
    </main>
  );
}

export default App;

// {
//   title: "",
//   description: "",
//   dueDate: "",
//   tasks: {},
// }
