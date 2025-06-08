import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="Footer_Container">
      <div>
        <ul className="Footer-List">
          <li>Stories</li>
          <li>Council Members</li>
          <li>Requirements</li>
        </ul>
      </div>
      <div>
        <div className="flex Footer-Link">
          <h2>Look Here</h2>
          <p>----&gt;</p>
        </div>
      </div>
    </footer>
  );
}
