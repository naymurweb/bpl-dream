const SelectPlayer = ({ player, handleRemove }) => {
  const { battingType, image, name, playerId} = player;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{battingType}</div>
                  </div>
                </div>
              </td>

              <th className="flex justify-end">
                <button
                  className="btn btn-sm"
                  onClick={() => handleRemove(playerId)}
                >
                  delate
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectPlayer;
