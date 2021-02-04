import "./Homepage.css";
import HamburgerMenu from "./Hamburger";
import NavbarBlue from "./Navbar";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="Homepage">
      <NavbarBlue />
      <div className="Hamburger">
        <Link to="/menu">
          <HamburgerMenu />
        </Link>
      </div>
      <div className="HomepageDesc">
        Hi, I’m Annika. I’m a junior full stack web developer based in Berlin,
        with a passion for art and technology.
      </div>
    </div>
  );
}
