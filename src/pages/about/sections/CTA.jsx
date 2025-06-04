import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";
const CTA = () => {
  return (
    <section className="cta-section text-white text-center section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4">
              Be part of Emotions
            </h2>
            <p className="lead mb-5">
              Be a part of the emotion <span>
                <FontAwesomeIcon icon={iconMap['arrowRight']}/>
                </span> donate today to light up someone's eye's with a brighter vision
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="btn btn-light cta-btn">
                Donate Now
              </a>
              <a href="#" className="btn btn-outline-light cta-btn">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
