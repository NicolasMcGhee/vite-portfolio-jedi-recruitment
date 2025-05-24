import { useState } from "react";
import "./index.css";
import JediSymbol from "../../assets/Symbols/Jedi_symbol.svg";
import { Link } from "react-router";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="navbar-Container uppercase">
      <div className="navbar-Home">
        <img src={JediSymbol} alt="Jedi Symbol" width={30} />
        <Link to={"/"}>
          <p>Home</p>
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

      {/* Mobile Button */}

      <button
        className="mobile-Button"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        {`${activeMenu ? "Close Menu" : "Open Menu"}`}
      </button>
      <div className={`${activeMenu == false ? "hidden" : "show"}`}>
        <ul className="mobile-List">
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
    </nav>
  );
}
