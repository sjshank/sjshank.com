import React from "react";
import "./style.css";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SJSHANK
      </a>

      <ul className="permLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/DjSaurabh8/" target="_blank">
          <FaFacebook fontSize={25} />
        </a>
        <a href="https://twitter.com/sjshankariya" target="_blank">
          <FaTwitter fontSize={25} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saurabh Shankariya. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
