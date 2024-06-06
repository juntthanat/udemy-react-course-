export default function AddTask() {
  return (
    <div className="pt-8 w-full">
      <div className="font-bold text-4xl flex-grow">Tasks</div>
      <div className="flex mt-8 h-10">
        <input
          type="text"
          className="font-normal w-[40%] h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2 "
        ></input>
        <div className=" h-full flex items-center pl-8">Add Task</div>
      </div>
      <div className="w-full h-64 mt-12 bg-gray-200">

      </div>
    </div>
  );
}
