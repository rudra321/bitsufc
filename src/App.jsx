import React from "react";
import "./App.css";
import AboutUs from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Chants2 from "./components/Chants2.0/Chants2";
import Stats from "./components/Stats/Stats";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
function App() {
  return (
    <div>
      <Header/>
      <Stats/>
      <Game />
      <Chants2/>
      <AboutUs />
      <Gallery />
      <MeetTheTeam/>
      <Footer />
    </div>
  );
}

export default App;
