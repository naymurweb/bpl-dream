import { useEffect, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import GroupBtn from "./components/GroupBtn/GroupBtn";
import Select from "./components/Select/Select";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [coin, setCoin] = useState(0);
  const [renderType, setRenderType] = useState("available");
  const [selectPlayers, setSelectPlayers] = useState([]);
  const handleCoin = () => {
    setCoin(coin + 5000000);
  };
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelectPlayer = (player) => {
    const selectPlayerPrice = player.biddingPrice;
    if (selectPlayerPrice < coin) {
      setCoin(coin - selectPlayerPrice);
      setSelectPlayers([...selectPlayers, player]);
    } else {
      toast("Coin not available!");
      return;
    }
  };
  const handleRemove = (id) => {
    const players = selectPlayers.filter((player) => player.playerId !== id);
    setSelectPlayers(players);
  };
  return (
    <div>
      <main className="container mx-auto px-5">
        <Header coin={coin} />
        <Hero handleCoin={handleCoin} />
        <GroupBtn setRenderType={setRenderType} selectPlayers={selectPlayers} />
        {renderType === "available" ? (
          <AvailablePlayers
            players={players}
            handleSelectPlayer={handleSelectPlayer}
          />
        ) : (
          <Select selectPlayers={selectPlayers} handleRemove={handleRemove} />
        )}
      </main>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default App;
