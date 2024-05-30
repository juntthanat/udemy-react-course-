import SaveButton from "./SaveButton";

export default function AddPage() {
  return (
    <div className="w-full h-full flex items-center pt-40 pr-64 pl-12 flex-col ">
      <SaveButton />
      <div className="w-full h-full font-bold flex flex-col space-y-6 mt-6">
        <div>
          TITLE
          <input
            type="text"
            className="w-full h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></input>
        </div>
        <div>
          DESCRIPTION
          <textarea
            type="text"
            className="w-full h-20 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></textarea>
        </div>
        <div>
          DUE DATE
          <input
            type="date"
            className="font-normal w-full h-10 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 p-2"
          ></input>
        </div>
      </div>
    </div>
  );
}
