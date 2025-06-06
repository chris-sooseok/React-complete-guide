import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  // used to update player username
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  // when edit button is pressed, switch the boolean
  function handleEditClick() {
    // ? pass the latest value
    setIsEditing((editing) => !editing);

    if (isEditing) {
        onChangeName(symbol, playerName);
    }
  }

  // as player types text, update their name displayed
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // default values
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  // if true, update editablePlayerName and btnCaption
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
