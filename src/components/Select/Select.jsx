import { useState } from "react";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const Select = ({ selectPlayers, handleRemove }) => {
  const [num, setNum] = useState(4);
  const players = selectPlayers.slice(0, num);

  return (
    <div>
      {players.map((player, id) => (
        <SelectPlayer
          key={id}
          player={player}
          handleRemove={handleRemove}
        ></SelectPlayer>
      ))}
      {selectPlayers.length > 4 && (
        <button
          className="btn btn-sm btn-warning my-4"
          onClick={() => setNum(selectPlayers.length)}
        >
          Add More Player
        </button>
      )}
    </div>
  );
};

export default Select;
