import Home from "./components/Home";
import Skills from "./components/Skills";
import MF from "./components/MF";
import Vics from "./components/Vics";
import VicsAbout from "./components/VicsAbout";
import KosAbout1 from "./components/Kosikk";
import KosAbout2 from "./components/Kosikk2";
import DhanImage from "./components/dhanImage";

function App() {
  return (
    <div className="App font-signature">
      <Home />
      <MF />
      <Vics />
      <VicsAbout />
      <KosAbout1 />
      <KosAbout2 />
      <DhanImage />
      <Skills />
    </div>
  );
}

export default App;
