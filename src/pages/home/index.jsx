import React from "react";
import Hero from "../../component/Hero";
import Card from "../../component/Card";
import Panel from "../../component/Panel";
import Jedi from "../../assets/Jedi_Waiting.png";
import Jedi_Yoda from "../../assets/Yoda_Background.png";
import Jedi_High_Republic from "../../assets/Jedi_High_Republic.png";
import Icon from "../../assets/Symbols/Jedi_symbol.svg";
import Yoda from "../../assets/Jedi/Yoda.png";
import MaceWindu from "../../assets/Jedi/Windu.png";
import Kenobi from "../../assets/Jedi/Kenobi.png";
import Anakin from "../../assets/Jedi/Anakin.png";
export default function HomePage(props) {
  return (
    <>
      <Hero flip="no" JediImage={Jedi}/>
      <Hero flip="yes" bgWhite="yes" JediImage={Jedi_Yoda}/>
      <Hero flip="no" bgWhite="yes" JediImage={Jedi_High_Republic} width="750"/>
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
