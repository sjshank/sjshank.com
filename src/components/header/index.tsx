import React from "react";
import CTA from "./cta";
import ME from "../../assets/dp.jpg";
import "./style.css";
import SocialProfile from "./socialProfile";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello There ! I'm</h5>
        <h1 className="animate-charcter">सौरभ शंकरिया</h1>
        <h5 className="text-light">Software Engineer</h5>

        <CTA />

        <SocialProfile />

        <div className="">
          <img src={ME} alt="me" className="me"/>
          <SocialProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
