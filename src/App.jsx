import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Jedi from "./assets/Jedi_Waiting.png";

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
    </>
  );
}

export default App;
