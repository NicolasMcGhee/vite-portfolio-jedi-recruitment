import React from "react";
import Hero from "../../component/Hero";
import Card from "../../component/Card";
import Panel from "../../component/Panel";
import Jedi from "../../assets/Jedi_Waiting.png";
import Icon from '../../assets/Symbols/Jedi_symbol.svg'
export default function HomePage(props) {
  return (
    <>
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
        <Panel image={Icon} />
        <Panel image={Icon} />
        <Panel image={Icon} />
      </section>
    </>
  );
}
