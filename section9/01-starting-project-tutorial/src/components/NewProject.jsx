import Input from "./Input";
export default function NewProject() {
  return (
    <div className="w-[32rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title"/>
        <Input label="Description" textarea/>
        <Input label="Due Date"/>
      </div>
    </div>
  );
}
