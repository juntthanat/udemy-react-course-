import NoProjectImage from "../assets/no-projects.png"
import Button from "./Button.jsx";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img src={NoProjectImage} alt="An empty task list" className="x-16 h-16 object-contain mx-auto"/>
      <h2 className="text-sl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Selected a Project or get started with a new one</p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
