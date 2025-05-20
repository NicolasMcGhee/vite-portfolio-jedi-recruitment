import React from "react";
import "./index.css";
import JediSymbol from "../../assets/Symbols/Jedi_symbol.svg";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar-Container uppercase">
      <div className="navbar-Items">
        <img src={JediSymbol} alt="Jedi Symbol" width={30} />
        <Link to={"/"}>
          <p>Join The Jedi</p>
        </Link>
      </div>
      <div className="navbar-Items">
        <ul className="navbar-List">
          <Link to={"/council-members"}>
            <li>Council Members</li>
          </Link>
          <Link>
            <li>Stories</li>
          </Link>

          <Link>
            <li>Requirements</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-Items ">
        <button className="navbar-Button uppercase">Join Us</button>
      </div>
    </nav>
  );
}
