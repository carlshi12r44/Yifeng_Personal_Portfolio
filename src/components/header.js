import React from "react";
import Typed from "react-typed";

const header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Hey I am Yifeng Shi, I am a web developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "UI/UX designer",
            "Web developmer",
            "Future Data Scientists",
            "Passionate about cutting-edge technology",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default header;
