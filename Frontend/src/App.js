import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage.js";
import About from "./About.js";
import Work from "./Work.js";
import MobileMenu from "./MobileMenu";
import "./App.css";
import { React } from "react";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/menu" exact component={MobileMenu} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
