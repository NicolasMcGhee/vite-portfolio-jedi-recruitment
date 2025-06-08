import React from "react";
import "./index.css";
import ProfileCard from "../../component/ProfileCard";
import Yoda from "../../assets/Jedi/Yoda.png";
import MaceWindu from "../../assets/Jedi/Windu.png";
import Kenobi from "../../assets/Jedi/Kenobi.png";
import Anakin from "../../assets/Jedi/Anakin.png";
import Shaak_Ti from "../../assets/Jedi/Shaak_Ti.png";
import Plo_Koon from "../../assets/Jedi/Plo_Koon.png";

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
          <div className="flex Footer-Link">
            <h2>Look Here</h2>
            <p>----&gt;</p>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="ProfileCard-title">
        <h1>A Few Of Its Members</h1>
      </div>
      <div className="Council-ProfileCardContainer">
        <ProfileCard profileImage={Yoda} name="Yoda" ranking="Grandmaster" />
        <ProfileCard
          profileImage={MaceWindu}
          name="Mace Windu"
          ranking="Jedi Master"
        />
        <ProfileCard
          profileImage={Kenobi}
          name="Obi-wan Kenobi"
          ranking="Jedi Master"
        />
        <ProfileCard
          profileImage={Shaak_Ti}
          name="Shaak Ti"
          ranking="Jedi Master"
        />
        <ProfileCard
          profileImage={Plo_Koon}
          name="Plo Koon"
          ranking="Jedi Master"
        />
        <ProfileCard
          profileImage={Anakin}
          name="Anakin Skywalker"
          ranking="Jedi Knight"
        />
      </div>
      <div className="Council-Footer">
        <div className="Footer-Text">
          {/* <div className="Footer-Details">
            <h1>Coruscant</h1>
            <h3>Home To The Replubic</h3>
          </div>

          <div className="flex">
            <h2>Look Here</h2>
            <p>----&gt;</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
