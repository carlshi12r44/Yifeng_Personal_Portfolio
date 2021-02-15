import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/navbar";
import Header from "../src/components/header";
import AboutMe from "../src/components/AboutMe";
import MyStack from "../src/components/MyStack";
import Experience from "../src/components/experience";
import Particles from "react-particles-js";
function App() {
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
      <AboutMe />
      <MyStack />
      <Experience />
    </div>
  );
}

export default App;
