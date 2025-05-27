import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";

const OurImpact = ({ content }) => {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title text-white">Our Impact</h2>
          <p className="lead text-white-50">
            Numbers that tell our story of progress and change
          </p>
        </div>

        <div className="row g-4">
          {content.map((elem, index) => {
            return (
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <div className="stats-card">
                  <div className="stats-icon">
                    <FontAwesomeIcon icon={iconMap[elem.icon]}/>
                    
                  </div>
                  <div
                    className="stats-number counter"
                    data-target={elem.targetNumber}
                  >
                    0
                  </div>
                  <p className="stats-label">{elem.work}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
