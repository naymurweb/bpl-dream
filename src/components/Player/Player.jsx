import { FaUser, FaFontAwesomeFlag } from "react-icons/fa";
import PropTypes from "prop-types";
const Player = ({ player }) => {
  const { image, name, country, biddingPrice, bowlingType, role } = player;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" width="100%" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          <FaUser /> {name}
        </h2>
        <div className="flex justify-between border-b-2 py-2">
          <span className="flex items-center">
            <FaFontAwesomeFlag /> {country}
          </span>
          <button className="btn btn-sm">All-Rounder</button>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center font-bold">Rating</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center font-bold">{role}</span>
          <span className="flex items-center text-gray-400">{bowlingType}</span>
        </div>

        <div className="flex justify-between">
          <span className="flex font-bold items-center">
            Price: ${biddingPrice}
          </span>
          <button className="btn btn-sm text-gray-00">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
export default Player;
