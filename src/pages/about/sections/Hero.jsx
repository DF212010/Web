import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const Hero = () => {
  return (
    <section className="hero-section" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(var(--primary-dark-rgb), 0.8), rgba(var(--primary-rgb), 0.8)), url("/assets/images/page-about-hero.webp")`
    }}
    >
      <div className="container hero-content" data-aos="fade-up">
        <h1 className="hero-title">About Dugra Foundation</h1>
        <p className="hero-subtitle">
          We believe you have wings — Durga Foundation is here to fuel your flight and ignite your journey to greatness.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#mission" className="btn btn-primary-custom">
            <FontAwesomeIcon icon={iconMap["arrowdown"]} />
            Learn More
          </a>
          <a href="#" className="btn btn-outline-custom">
            <FontAwesomeIcon icon={iconMap["handHoldingDollar"]} />
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
