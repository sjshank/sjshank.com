import React from "react";
import "./style.css";
import ME from "../../assets/me.jpg";
import { FaAward, FaBirthdayCake, FaUserGraduate } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiAchievement, GiClockwork, GiTrophiesShelf } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward fontSize={25} className="about__icon" />
              <h5>Experience</h5>
              <small>9 Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers fontSize={25} className="about__icon" />
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen fontSize={25} className="about__icon" />
              <h5>Projects</h5>
              <small>65+ Completed</small>
            </article>
            <article className="about__card">
              <FaUserGraduate fontSize={25} className="about__icon" />
              <h5>Certifications</h5>
              <small>5+ Certified</small>
            </article>
            <article className="about__card">
              <GiTrophiesShelf fontSize={25} className="about__icon" />
              <h5>Achievements</h5>
              <small>10+ Rewards</small>
            </article>
            <article className="about__card">
              <FaBirthdayCake fontSize={25} className="about__icon" />
              <h5>Natal Day</h5>
              <small>9 July</small>
            </article>
          </div>

          <p>
            Hey, my name's Saurabh, and I'm a design-minded software developer. 
            I like building collaborative experiences, interactive articles, 
            and open-source projects.
          </p>
          <p>  
            I am passionate about learning Frontend and Blockchain engineering,
            and discovering facts about the tech world.
          </p>
          <p>
            My hobbies also include Sound mixing, spending time at farmland, and enjoying holy expedition.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
