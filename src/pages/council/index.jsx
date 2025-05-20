import React from "react";
import "./index.css";
import Hero from "../../component/Hero";
import JediCouncilRoom from "../../assets/Jedi_Council_Room.jpg";

export default function CouncilMembers() {
  return (
    <section className="Council-Container">
      <div className="Council-Banner">
        <div className="Council-Text">
          <h3>the council chambers</h3>
          <h1>Jedi High Council</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            nulla dicta facilis. Qui eligendi ad, officiis doloremque amet
            exercitationem quae animi neque obcaecati, nesciunt, asperiores
            deleniti vitae! Quisquam nihil, nulla illo alias possimus debitis
            fugit ipsum consequatur illum molestias quibusdam quae minima nemo.
            Eligendi exercitationem harum perferendis nihil earum id.
          </p>
          <div className="flex">
            <h2>Look Here</h2>
            <p>----&gt;</p>
          </div>
        </div>
      </div>
      {/* <img src={JediCouncilRoom} alt="" /> */}
    </section>
  );
}
