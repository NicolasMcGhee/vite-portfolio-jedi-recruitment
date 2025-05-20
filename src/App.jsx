import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Jedi from "./assets/Jedi_Waiting.png";
import Icon from './assets/Symbols/Jedi_symbol.svg'
import Panel from "./component/Panel";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import CouncilMembers from "./pages/council";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route
          path="/council-members"
          element={<CouncilMembers/>}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
