import Home from "./components/Home";
import Skills from "./components/Skills";
import MF from "./components/MF";
import Vics from "./components/Vics";
import VicsAbout from "./components/VicsAbout";

function App() {
  return (
    <div className="App font-signature">
      <Home />
      <MF />
      <Vics />
      <VicsAbout />
      <Skills />
    </div>
  );
}

export default App;
