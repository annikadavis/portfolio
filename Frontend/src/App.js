import Uploader2 from "./Uploader2.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage.js";
import About from "./About.js";
import Work from "./Work.js";
import MobileMenu from "./MobileMenu";
import "./App.css";
import { React, useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/menu" exact component={MobileMenu} />
          {/* <Route path="/admin" exact component={Admin} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
