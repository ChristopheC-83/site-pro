import "./Style/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Realisations from "./pages/Realisations";
import Fonctionnement from "./pages/Fonctionnement";
import Tarifs from "./pages/Tarifs";
import Mentions from "./pages/Mentions";
import Navbar from "./component/Navbar";
import ContactBar from "./component/ContactBar";







function App() {

  return (
    <div className="App">
      <Navbar />
      <ContactBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/realisations" element={<Realisations/>}/>
        <Route path="/fonctionnement" element={<Fonctionnement/>}/>
        <Route path="/tarifs" element={<Tarifs/>}/>
        <Route path="/mentions" element={<Mentions/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
