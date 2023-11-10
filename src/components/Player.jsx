import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [isEditing, SetIsEditing] = useState(false);
    const [name, setPlayerName] = useState(initialName);

    function handleEditClick() {
        SetIsEditing((isEditing) => !isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerInfo = <span className="player-name">{name}</span>;
    let buttonContent = "Edit";
    if (isEditing) {
        playerInfo = <input type="text" value={name} onChange={handleChange}/>;
        buttonContent = "Save";
    }

    return (
        <li className={isActive ? 'active':undefined}>
            <span className="player">
              {playerInfo}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {handleEditClick}>{buttonContent}</button>
          </li>
    );
}