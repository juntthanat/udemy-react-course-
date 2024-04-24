import { useState } from "react";
export default function PLayer({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName =
    isEditing === false ? (
      <span className="player-name">{name}</span>
    ) : (
      <input type="text" required value={name}></input>
    );

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
