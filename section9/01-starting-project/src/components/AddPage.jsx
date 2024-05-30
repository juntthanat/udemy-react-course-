import SaveButton from "./SaveButton"


export default function AddPage() {

    return (
        <div className="w-full h-full flex items-center pt-40 pr-64 pl-12 flex-col ">
            <SaveButton/>
            Title 
            <input className="w-full h-8 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 "></input>
            Description
            <input className="w-full h-8 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 "></input>
            Due Date 
            <input className="w-full h-8 bg-stone-200 outline-none border-gray-300 focus:border-stone-700 border-b-2 "></input>
        </div>
    )
}