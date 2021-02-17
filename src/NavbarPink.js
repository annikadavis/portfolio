import mailpink from "./images/mail-pink.png";
import githubpink from "./images/github-pink.png";
import linkedinpink from "./images/linkedin-pink.png";
import { React, useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function NavbarPink() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="Navbar">
      <div className="NavbarLeft">
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
          <img src={mailpink} alt="mail-icon" />
        </Mailto>
        <Link
          to={{ pathname: "https://github.com/annikadavis" }}
          target="_blank"
        >
          <img src={githubpink} alt="github-icon" />
        </Link>
        <Link
          to={{ pathname: "https://linkedin.com/in/annikadavis/" }}
          target="_blank"
        >
          <img src={linkedinpink} alt="linkedin-icon" />
        </Link>
      </div>
    </div>
  );
}
