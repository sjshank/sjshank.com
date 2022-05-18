import React from "react";
import "./style.css";
import { PORTFOLIO_RECORDS, IPortfolioRecords } from "./helper";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {PORTFOLIO_RECORDS.map((record: IPortfolioRecords) => {
          return (
            <article key={record.demo + record.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={record.image} alt="Portfolio" />
              </div>
              <h3>{record.title}</h3>
              <div className="portfolio__item-cta">
                <a href={record.link} target="_blank" className="btn">
                  Github
                </a>
                <a
                  href={record.demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
