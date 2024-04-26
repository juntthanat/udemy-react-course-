import { useState } from "react";
export default function PLayer({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName =
    isEditing === false ? (
      <span className="player-name">{playerName}</span>
    ) : (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
