import React, { useState } from "react";
import "./nav.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#edu">Education</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#contact">Contact Me</a>
    </p>
    <p>
      <a href="#resume">Resume</a>
    </p>
  </>
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <h1>Socials</h1>
            <div className="navbar-social-link">
              <a href="https://www.linkedin.com/in/ayush-negi-b93b591ba/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
                <p>LinkedIn</p>
              </a>
              <br />
              <a href="https://twitter.com/AyushNe49236766" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
                <p>Twitter</p>
              </a>
              <br />
              <a href="https://www.instagram.com/m_ayush_00/?hl=en/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
                <p>Instagram</p>
              </a>
              <br />
              <a href="https://github.com/Light0Yagami" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
                <p>GitHub</p>
              </a>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
