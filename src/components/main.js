import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Particles from "react-particles-js";
const main = () => {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
};

export default main;
