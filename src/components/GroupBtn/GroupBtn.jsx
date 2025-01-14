const GroupBtn = ({setRenderType,selectPlayers }) => {
  return (
    <div className="md:flex text-center md:justify-between">
      <h3 className="font-bold text-2xl">Available Players</h3>
      <div className="flex justify-center mt-4 md:mt-0 gap-4">
        <button className="btn btn-warning" onClick={()=>setRenderType('available')}>
          Available
        </button>
        <button className="btn" onClick={()=>setRenderType('select')}>
          Selected ({selectPlayers.length})
        </button>
      </div>
    </div>
  );
};

export default GroupBtn;
