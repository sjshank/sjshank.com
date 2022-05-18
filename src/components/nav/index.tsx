import React, { useState } from "react";
import "./style.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");

  const clickActionHandler = (hrefName: string) => {
    setActiveLink(hrefName);
  };

  return (
    <nav>
      <a
        href="#"
        title="Home"
        onClick={(e) => clickActionHandler("home")}
        className={activeLink === "home" ? "active" : ""}
      >
        <AiOutlineHome fontSize={20} />
      </a>
      <a
        href="#about"
        title="About Me"
        onClick={(e) => clickActionHandler("about")}
        className={activeLink === "about" ? "active" : ""}
      >
        <AiOutlineUser fontSize={20} />
      </a>
      <a
        href="#experience"
        title="Experience"
        onClick={(e) => clickActionHandler("experience")}
        className={activeLink === "experience" ? "active" : ""}
      >
        <BiBook fontSize={20} />
      </a>
      <a
        href="#services"
        title="Services"
        onClick={(e) => clickActionHandler("services")}
        className={activeLink === "services" ? "active" : ""}
      >
        <RiServiceLine fontSize={20} />
      </a>
      <a
        href="#contact"
        title="Contact Me"
        onClick={(e) => clickActionHandler("conact")}
        className={activeLink === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail fontSize={20} />
      </a>
    </nav>
  );
};

export default Navigation;
