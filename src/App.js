import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../src/components/main";
import AboutMe from "../src/components/AboutMe";
import Experience from "../src/components/experience";
import Portfolio from "../src/components/portfolio";
function App() {
  return (
    /** Added such basename that make sure the app is hosted under this sub directory */
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/home" exact component={Main} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/portfolio" exact component={Portfolio}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
