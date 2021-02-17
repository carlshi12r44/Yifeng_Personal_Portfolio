import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Hey, I am Yifeng Shi, I am a web developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "UI/UX designer",
            "Web developer",
            "Future Data Scientist",
            "Passionate about cutting-edge technology",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <Link href="/about" className="btn-main-offer">
          Contact Me
        </Link> */}
      </div>
    </div>
  );
};

export default header;
