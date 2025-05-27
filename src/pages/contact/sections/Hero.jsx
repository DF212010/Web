import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Get in Touch With Us
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Have questions or need assistance? We're here to help! Reach out to
          our dedicated team using the contact information below or send us a
          message directly.
        </p>
        <a
          href="#contact-form"
          className="btn btn-primary"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FontAwesomeIcon icon={iconMap["envelope"]} className="me-2"/> Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
