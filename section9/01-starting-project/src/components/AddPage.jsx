import SaveButton from "./SaveButton";
import { useState } from "react";

export default function AddPage() {
  const [saveProjectData, setSaveProjectData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleSave = () => {
    console.log(saveProjectData);
  };
  const handleCancel = () => {

  }

  const handleTitle = (event) => {
    setSaveProjectData({
      ...saveProjectData,
      title: event.target.value,
    });
  };

  const handleDescription = (event) => {
    setSaveProjectData({
      ...saveProjectData,
      description: event.target.value,
    });
  };

  const handleDueDate = (event) => {
    setSaveProjectData({
      ...saveProjectData,
      dueDate: event.target.value,
    });
  };

  return (
    <div className="w-full h-full flex items-center pt-40 pr-64 pl-12 flex-col ">
      <SaveButton onSave={handleSave} onCancel={handleCancel}/>
      <div className="w-full h-full font-bold flex flex-col space-y-6 mt-6">
        <div>
          TITLE
          <input
            type="text"
            onChange={handleTitle}
            className="font-normal w-full h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></input>
        </div>
        <div>
          DESCRIPTION
          <textarea
            type="text"
            onChange={handleDescription}
            className="font-normal w-full h-20 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></textarea>
        </div>
        <div>
          DUE DATE
          <input
            type="date"
            onChange={handleDueDate}
            className="font-normal w-full h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></input>
        </div>
      </div>
    </div>
  );
}
