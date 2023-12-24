import { useState } from "react";

export default function PlayerInfo({name, symbol}) {
    const [updatingName, setUpdatingName] = useState(name)

    const [isEditing, setIsEditing] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(editing => !editing);
    }

    const handleUpdatingName = (event) => {
        setUpdatingName(event.target.value);
    }

    let PlayerName = <span className="player-name">{updatingName}</span>
    let bttnStatus = 'Edit'

    if (isEditing) {
        PlayerName = <input type="text" required placeholder="Player Name" value={updatingName} onChange={handleUpdatingName} />
        bttnStatus = 'Save'
    };




    return(
        <li>
            <span className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{bttnStatus}</button>
        </li>
    )
}