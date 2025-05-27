import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";

const OurValues = ({ content }) => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Our Core Values</h2>
          <p className="lead">
            The principles that guide our work and shape our impact
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
                <div className="value-card">
                  <div className="value-icon">
                    <FontAwesomeIcon icon={iconMap[elem.icon]}/>
                  </div>
                  <h3 className="h5 fw-bold">{elem.heading}</h3>
                  <p className="text-muted">{elem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
