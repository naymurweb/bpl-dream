import Player from "../Player/Player";

const AvailablePlayers = ({players,handleSelectPlayer}) => {

  return (
    <div className="my-10">
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-7">
        {players.map((player) => (
          <Player key={player.playerId} player={player} handleSelectPlayer={handleSelectPlayer} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
