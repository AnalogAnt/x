import Home from "./components/Home";
import Skills from "./components/Skills";
import MF from "./components/MF";
import Vics from "./components/Vics";
import VicsAbout from "./components/VicsAbout";
import KosAbout1 from "./components/Kosikk";
import KosAbout2 from "./components/Kosikk2";
import DhanImage from "./components/dhanImage";
import ABI from "./components/ABI";
import Vikas2025 from "./components/Vikas2025";
import Ananya2025 from "./components/Ananya2025";
import Dhanwanth2025 from "./components/Dhanwanth2025";
import Kousik2025 from "./components/Kousik2025";

function App() {
  return (
    <div className="App font-signature">
      <Home />
      <ABI />
      <Vikas2025 />
      <Ananya2025 />
      <Kousik2025 />
      <Dhanwanth2025 />
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
