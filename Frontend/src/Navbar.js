import "./App.css";
import mailblue from "./images/mail-blue.png";
import githubblue from "./images/github-blue.png";
import linkedinblue from "./images/linkedin-blue.png";
import { React, useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function NavbarBlue() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="Navbar">
      <div className="NavbarLeftBlue">
        <div>
          <Link to="./">Annika Davis</Link>
        </div>
        <div>
          <Link to="./work">Work</Link>
        </div>
        <div>
          <Link to="./about">About</Link>
        </div>
      </div>
      <div className="NavbarRight">
        <Mailto email="annikadavis@gmail.com">
          <img src={mailblue} alt="mail-icon" />
        </Mailto>
        <Link
          to={{ pathname: "https://github.com/annikadavis" }}
          target="_blank"
        >
          <img src={githubblue} alt="github-icon" />
        </Link>
        <Link
          to={{ pathname: "https://linkedin.com/in/annikadavis/" }}
          target="_blank"
        >
          <img src={linkedinblue} alt="linkedin-icon" />
        </Link>
      </div>
    </div>
  );
}
