import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin(coin + 500000);
  };
  
  return (
    <div>
      <main className="container mx-auto px-5">
        <Header coin={coin} />
        <Hero handleCoin={handleCoin} />
        <AvailablePlayers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
