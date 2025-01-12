import { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="my-10">
      <div className="md:flex text-center md:justify-between">
        <h3 className="font-bold text-2xl">Available Players</h3>
        <div className="flex justify-center mt-4 md:mt-0 gap-4">
          <button className="btn btn-warning">Available</button>
          <button className="btn">Selected (0)</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-7">
        {players.map((player) => (
          <Player key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
