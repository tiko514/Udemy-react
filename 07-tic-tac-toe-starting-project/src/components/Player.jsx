import { useState } from "react";

function Player({ Name, Symbol }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(Name);

    // const NameControl = isEditing ? "input" : "span";

    const handleEditClick = (event) => {
        // Update based on previous state
        setIsEditing((!isEditing));
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing
                    ? <input type="text" className="player" defaultValue={Name} text={playerName} onChange={handleNameChange} />
                    : <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{Symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}

export default Player;