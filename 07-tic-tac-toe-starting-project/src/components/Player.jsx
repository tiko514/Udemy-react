import { useState } from "react";

function Player({ Name, Symbol, IsActive, onNameChanged }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(Name);

    const handleEditClick = () => {
        setIsEditing((prevState => !prevState));
        if (isEditing) {
            onNameChanged(Symbol, playerName);
        }
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li className={IsActive ? 'active' : undefined}>
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