import { useEffect, useState } from "react";

const tempIndex = "000";

export default function AddTask({
  taskList,
  projectIndex,
  handleAddTask,
  handleClearTask,
}) {
  const [newTask, setNewTask] = useState("");

  const handleEditNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const onAddTask = () => {
    handleAddTask(newTask);
  };

  const onClearTask = (event) => {
    console.log(event.target.id)
  };
  return (
    <div className="pt-8 w-full">
      <div className="font-bold text-4xl flex-grow">Tasks</div>
      <div className="flex mt-8 h-10">
        <input
          type="text"
          onChange={handleEditNewTask}
          className="font-normal w-[40%] h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2 "
        ></input>
        <div onClick={onAddTask} className=" h-full flex items-center pl-8">
          Add Task
        </div>
      </div>
      <div className="w-full h-64 mt-12 pt-4 pb-4 pl-4 pr-4 bg-gray-200 overflow-auto">
        {taskList.map((task, idx) => (
          <div key={idx} className="flex mt-4">
            <div className="flex-grow">{task}</div>
            <div onClick={onClearTask} id={idx}>Clear</div>
          </div>
        ))}
      </div>
    </div>
  );
}
