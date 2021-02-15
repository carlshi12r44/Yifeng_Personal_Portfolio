import React from "react";
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-md-cenetr text-left">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Contact me
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
