import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <main className="container mx-auto px-5">
        <Header />
        <Hero />
        <AvailablePlayers/>

      </main>
      <Footer/>

    </div>
  );
}

export default App;
