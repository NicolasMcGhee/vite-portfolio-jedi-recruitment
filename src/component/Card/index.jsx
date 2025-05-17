import React from "react";
import "./index.css";
export default function Card(props) {
  return (
    <section className="Card-Container">
      <div>
        <img src={props.bgImage} alt="" />
      </div>
      <div className="Card-Text">
        <div>
          <h1>The Mountians</h1>
          <p>by Luke Skywaler</p>
        </div>
        <div className="flex">
          <h2>Look Here</h2>
          <p>----&gt;</p>
        </div>
      </div>
    </section>
  );
}
