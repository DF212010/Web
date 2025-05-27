import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";

const OurMission = ({ content }) => {
  return (
    <section id="mission" className="section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Our Mission</h2>
          <p className="lead">
            Committed to creating lasting change through our core initiatives
          </p>
        </div>
        <div className="row g-4">
          {content.map((elem, index) => {
            return (
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <div className="mission-card">
                  <div className="mission-icon">
                    <FontAwesomeIcon icon={iconMap[elem.icon]}/>
                  </div>
                  <h3 className="h4 text-center mb-3">{elem.heading}</h3>
                  <p className="text-muted text-center"> {elem.description} </p>
                  <div className="text-center mt-3">
                    <a
                      href={elem.btnLink}
                      className="btn btn-outline-custom btn-sm"
                    >
                      {elem.btnCont}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
