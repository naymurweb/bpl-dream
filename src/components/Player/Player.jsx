import { FaUser, FaFontAwesomeFlag } from "react-icons/fa";

const Player = () => {
  return (
    <div className="card bg-base-100 border shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          <FaUser /> Viral Kohli
        </h2>
        <div className="flex justify-between border-b-2 py-2">
          <span className="flex items-center">
            <FaFontAwesomeFlag /> India
          </span>
          <button className="btn btn-sm">All-Rounder</button>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center font-bold">Rating</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center font-bold">Left-Hand-Bat</span>
          <span className="flex items-center text-gray-400">Left-Hand-Bat</span>
        </div>

        <div className="flex justify-between">
          <span className="flex font-bold items-center">Price: $1500000</span>
          <button className="btn btn-sm text-gray-600">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
