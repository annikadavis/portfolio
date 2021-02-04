import "./About.css";
import HamburgerMenu from "./Hamburger";
import NavbarPink from "./NavbarPink";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import annika from "./images/annika.jpg";
import resume from "./images/annika-resume-jan21.pdf";

export default function About() {
  return (
    <div className="About">
      <NavbarPink />
      <div className="Hamburger">
        <Link to="/menu">
          <HamburgerMenu />
        </Link>
      </div>
      <div>
        <div>
          <img className="annika" src={annika} alt="annika" />
        </div>
        <p>
          Hi, I’m Annika. I’m a junior full stack web developer based in Berlin,
          with a passion for art and technology. I believe in technology as a
          tool for collaboration, self expression, democracy, and accessibility.
          <br />I hold a certificate in Full Stack Web Development from Wild
          Code School Berlin, and a Master’s Degree in Art History from the
          University of British Columbia. I have over 7 years of experience
          working in the creative field, and am proficient in HTML, CSS,
          JavaScript, React, the Adobe Creative Suite, and Figma. On the back
          end, I have experience with Express, Node.js, MySQL, and PostgreSQL.
          <br />I have lived and worked in several cities around the world,
          including New York City, Tokyo, Vancouver, and now Berlin. My native
          language is English, but I am also proficient in Japanese, and
          currently studying German.
          <br />
          Please{" "}
          <a href={resume} target="_blank">
            download
          </a>{" "}
          my CV for more information.
          <br />I can’t wait to work with you!
        </p>
      </div>
    </div>
  );
}
