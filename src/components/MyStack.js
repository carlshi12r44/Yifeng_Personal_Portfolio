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
                <div className="circle-up">
                  <img className="reactLogo" src={ReactLogo} alt="React Logo" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <div className="circle-down">
                  <img className="JSLogo" src={JsLogo} alt="Javascript Logo" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <div className="circle-up">
                  <img className="CSSLogo" src={cssLogo} alt="CSS Logo" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <div className="circle-down">
                  <img className="HTMLLogo" src={htmlLogo} alt="HTML 5 Logo" />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <div className="box">
                <div className="circle-up">
                  <img className="MySQLLogo" src={MySQLLogo} alt="MySQL Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStack;
