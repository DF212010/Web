import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content" data-aos="fade-up">
        <h1 className="hero-title">About Dugra Foundation</h1>
        <p className="hero-subtitle">
          Empowering communities through sustainable development and
          compassionate action
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#mission" className="btn btn-primary-custom">
            <FontAwesomeIcon icon={iconMap["arrowdown"]} />
            Learn More
          </a>
          <a href="#" className="btn btn-outline-custom">
            <FontAwesomeIcon icon={iconMap["HeartInHand"]} />
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
