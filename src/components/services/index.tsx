import React from 'react';
import { BiCheck } from "react-icons/bi";
import "./style.css";

const Services = () => {
  
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" fontSize={20}/>
              <p>Agile web design and development methodology</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" fontSize={20}/>
              <p>
                Proven track record of successful web design and development
                project delivery
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" fontSize={20}/>
              <p>Rigorous quality assurance (QA) testing before “Go-Live”</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Competitive rates for web design and development talent</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Blockchain Solution</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Blockchain development, Software conceptualization &
                Architecture design
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing a detailed feature set for a blockchain system</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Delivering a roadmap for blockchain system implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blockchain software support and evolution (if required)</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Atomic design and style guide to build out standards compliant
                accessible UI
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborative and Communicative approach model to client
                engagements
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile first & Responsive design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UX Research, Testing and Validation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Competitive rates for top UX design talent</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
