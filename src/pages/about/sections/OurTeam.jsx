import React from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const OurTeam = ({ content }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="lead">
            Dedicated individuals working tirelessly for positive change
          </p>
        </div>

        <div className="row g-4">
          {content.map((elem, index) => {
            return (
              <div
                className="col-md-3 m-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <TeamIdentity key={index} details={elem} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <a href="#" className="btn btn-primary-custom">
            <FontAwesomeIcon icon={iconMap["users"]}/>Meet Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
