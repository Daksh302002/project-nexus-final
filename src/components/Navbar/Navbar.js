import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <img src="./images/1.png" alt="not found" style={{ width: "90px" }} />
        <Link className="navbar-brand" to="/">
          Techy Software
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-3" to="/about" smooth>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-3 " to="/service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-3 " to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
