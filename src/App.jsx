import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Jedi from "./assets/Jedi_Waiting.png";
import Icon from './assets/Symbols/Jedi_symbol.svg'
import Panel from "./component/Panel";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero flip="no" />
      <Hero flip="yes" bgWhite="yes" />
      <Hero flip="no" bgWhite="yes" />
      <section className="grid">
        <Card bgImage={Jedi} />
        <Card bgImage={Jedi} />
        <Card bgImage={Jedi} />
        <Card bgImage={Jedi} />
      </section>
      <section className="Panel_Section">
        <Panel image={Icon}/>
        <Panel image={Icon}/>
        <Panel image={Icon}/>
      </section>
      <Footer/>
    </>
  );
}

export default App;
