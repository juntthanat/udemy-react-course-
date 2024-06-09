import { useEffect, useState } from "react";

const tempIndex = "000";

export default function AddTask({ taskList, projectIndex, handleAddTask, handleClearTask }) {
  const [newTask, setNewTask] = useState("");
  const [taskListComponent, setTaskListComponent] = useState(<div></div>);

  const handleEditNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const onAddTask = (event) => {
    handleAddTask(newTask)
  };

  const onClearTask = () => {};

  useEffect(() => {
    taskList.map((task, idx) => {
    });
  });
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
      <div className="w-full h-64 mt-12 bg-gray-200">
        {taskList.map((task, idx) => <div key={idx}>{task}</div>)}
      </div>
    </div>
  );
}
