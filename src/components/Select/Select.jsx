import SelectPlayer from "../SelectPlayer/SelectPlayer";

const Select = ({ selectPlayers, handleRemove, setRenderType }) => {
  return (
    <div>
      {selectPlayers.map((player, id) => (
        <SelectPlayer
          key={id}
          player={player}
          handleRemove={handleRemove}
        ></SelectPlayer>
      ))}
      <button
        onClick={() => setRenderType("available")}
        className="btn btn-sm btn-warning my-4"
      >
        Add More Player
      </button>
    </div>
  );
};

export default Select;
