import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJSSquare,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import ReactLogo from "../images/React_Logo.png";
import JsLogo from "../images/javascript-js-seeklogo.com.svg";
import MySQLLogo from "../images/MySQL_Logo.png";
import cssLogo from "../images/css3_logo.png";
import htmlLogo from "../images/html5_logo.png";
const MyStack = () => {
  return (
    <div className="My-Stack">
      <div className="py-5">
        <div className="container">
          <h1 className="My-Stack-Heading">My Skill Stack</h1>
          <div className="row make-it-flex">
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <img className="reactLogo" src={ReactLogo} alt="React Logo" />
                <h3>React</h3>
                <p>
                  I used React JS for my internships and most web development
                  projects
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <img className="JSLogo" src={JsLogo} alt="Javascript Logo" />
                <h3>Javascript</h3>
                <p>I used Javascript to implement most React component logic</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <img className="CSSLogo" src={cssLogo} alt="CSS Logo" />
                <h3>CSS 3</h3>
                <p>
                  I used CSS 3 to style React component and pages for user
                  experience
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <img className="HTMLLogo" src={htmlLogo} alt="HTML 5 Logo" />
                <h3>HTML 5</h3>
                <p>I used HTML 5 to construct page structures and fundation.</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <img className="MySQLLogo" src={MySQLLogo} alt="MySQL Logo" />
                <h3>MySQL</h3>
                <p>
                  I used MySQL database to store backend routes for user
                  information in some of my projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStack;
