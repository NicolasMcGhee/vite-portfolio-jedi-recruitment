import React from "react";
import "./index.css";
export default function Card(props) {
  return (
    <section className="Card-Container">
      <div className="Card-Image">
        <img src={props.bgImage} alt="" width={500} />
      </div>
      <div className="Card-Text">
        <div>
          <h1>{props.rank}</h1>
          <p>{props.name}</p>
        </div>
        <div className="flex link">
          <h2>Look Here</h2>
          <p>----&gt;</p>
        </div>
      </div>
    </section>
  );
}
