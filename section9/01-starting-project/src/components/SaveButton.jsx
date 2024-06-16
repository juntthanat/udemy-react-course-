
export default function SaveButton({onSave, onCancel}) {

    return (
        <div className="w-full flex justify-end">
            <button onClick={onCancel}className="w-24 h-10  rounded">Cancel</button>
            <button onClick={onSave} className="w-24 h-10  bg-stone-900 text-white rounded">Save</button>
        </div>
    )
}