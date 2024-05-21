import NoProject from "../assets/no-projects.png";

export default function HomePageUnselect() {
  return (
    <div className="w-full h-full flex items-center pt-40 flex-col">
      <img src={NoProject} className="h-24 w-24" />
      <h1 className="font-bold text-2xl pt-4">No Project Selected</h1>
      <p className="text-gray-400 text-xl pt-4">
        Select a project or get started with a new one
      </p>
      <button className="text-gray-400 bg-stone-700 h-12 w-52 rounded text-xl mt-8">
        Create new project
      </button>
    </div>
  );
}
