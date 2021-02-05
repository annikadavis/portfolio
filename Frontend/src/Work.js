import "./Work.css";
import "./App.css";
import HamburgerMenu from "./Hamburger";
import NavbarPink from "./NavbarPink.js";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import wavy from "./images/path.png";
import artscene1 from "./images/artscene-1.png";
import artscene2 from "./images/artscene-2.png";
import artscene3 from "./images/artscene-3.png";
import artscene4 from "./images/artscene-4.png";
import artscene6 from "./images/artscene-6.png";
import artscene7 from "./images/artscene-7.png";
import talariapp1 from "./images/talariapp-1.png";
import talariapp2 from "./images/talariapp-2.png";
import talariapp3 from "./images/talariapp-3.png";
import finder1 from "./images/finder-1.png";
import finder2 from "./images/finder-2.png";
import finder3 from "./images/finder-3.png";
import finder4 from "./images/finder-4.png";

export default function About() {
  return (
    <div className="Work">
      <NavbarPink />
      <div className="Hamburger">
        <Link to="/menu">
          <HamburgerMenu />
        </Link>
      </div>
      <div className="artscenetext">
        <p>
          Art Scene is a responsive web app created with React that allows
          people to find art exhibitions based on several criteria: distance
          from them, genre, and cost. The app then displays the matching
          exhibitions on a Google map with links to get more info and purchase
          tickets.
        </p>
      </div>
      <div className="Projects">
        <div>
          <img src={artscene1} alt="art scene 1" />
        </div>
        <div>
          <img src={artscene2} alt="art scene 2" />
        </div>
        <div>
          <img src={artscene3} alt="art scene 3" />
        </div>
        <div>
          <img src={artscene4} alt="art scene 4" />
        </div>
        <div>
          <img src={artscene6} alt="art scene 6" />
        </div>
        <div>
          <img src={artscene7} alt="art scene 7" width={"500px"} />
        </div>
      </div>
      <div>
        <img src={wavy} className="wavy" alt="wavy lines" />
      </div>
      <div className="talariapptext">
        <p>
          TalariApp is a web app created with React for a 2 day Hackathon. The
          Hackathon theme was to create an app that would be useful for people
          in a previous era, so we created an app for ancient Greeks to find and
          contact gods and goddesses to make requests.
        </p>
      </div>
      <div className="Projects">
        <div>
          <img src={talariapp1} alt="talariapp 1" />
        </div>
        <div>
          <img src={talariapp2} alt="talariapp 2" />
        </div>
        <div>
          <img src={talariapp3} alt="talariapp 3" />
        </div>
      </div>
      <div>
        <img src={wavy} className="wavy" alt="wavy lines" />
      </div>
      <div className="findertext">
        <p>
          The Serviceplan Employee Finder is a web app with front and back end,
          developed using React for the marketing agency Serviceplan. The app
          allows employees to search through a database of other employees,
          including their skills and experience. The database is viewable by
          everyone, but editable only by HR with login and password information.
          The design was inspired by a Picasso painting that appears on the
          Serviceplan website, and the extensive Serviceplan art collection.
        </p>
      </div>
      <div className="Projects">
        <div>
          <img src={finder2} alt="finder 2" />
        </div>
        <div>
          <img src={finder1} alt="finder 1" />
        </div>
        <div>
          <img src={finder3} alt="finder 3" />
        </div>
        <div>
          <img src={finder4} alt="finder 4" />
        </div>
      </div>
    </div>
  );
}
