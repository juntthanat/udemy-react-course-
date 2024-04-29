export default function UserInput({ label, onChange }) {
  return (
    <div>
        <label>{label}</label>
        <input onChange={onChange} type="number"></input>
    </div>
  );
}
