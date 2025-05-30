import React from "react";
import Hero from "../../component/Hero";
import Card from "../../component/Card";
import Panel from "../../component/Panel";
import Jedi from "../../assets/Jedi_Waiting.png";
import Icon from "../../assets/Symbols/Jedi_symbol.svg";
import Yoda from "../../assets/Jedi/Yoda.png";
import MaceWindu from "../../assets/Jedi/Windu.png";
import Kenobi from "../../assets/Jedi/Kenobi.png";
import Anakin from "../../assets/Jedi/Anakin.png";
export default function HomePage(props) {
  return (
    <>
      <Hero flip="no" />
      <Hero flip="yes" bgWhite="yes" />
      <Hero flip="no" bgWhite="yes" />
      {/* 2nd Part: Cards */}
      <section className="grid">
        <Card bgImage={Yoda} rank="Grandmaster" name="Yoda" />
        <Card bgImage={MaceWindu} rank="Jedi Master" name="Mace Windu" />
        <Card bgImage={Kenobi} rank="Jedi Master" name="Obi-wan Kenobi" />
        <Card bgImage={Anakin} rank="Jedi Knight" name="Anakin Skywalker" />
      </section>
      {/* 3rd Part: Work/Life */}
      <section className="Panel_Section">
        <Panel image={Icon} />
        <Panel image={Icon} />
        <Panel image={Icon} />
      </section>
    </>
  );
}
