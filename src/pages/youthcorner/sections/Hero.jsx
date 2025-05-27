import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const Hero = () => {
  return (
    <>
      <section className="hero-section position-relative overflow-hidden">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <h1 className="display-3 fw-bold text-white mb-4">
                Empowering the Youth of Tomorrow
              </h1>
              <p className="lead text-white mb-5">
                Join our community of students, volunteers, and donors working
                together to create opportunities for young people to thrive.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill glow-on-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#studentLoginModal"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FontAwesomeIcon
                    icon={iconMap["graduationCap"]}
                    className="me-2"
                  />
                  Student Login
                </button>
                <button
                  className="btn btn-success btn-lg px-4 py-2 rounded-pill glow-on-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#volunteerLoginModal"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FontAwesomeIcon
                    icon={iconMap["handsHelping"]}
                    className="me-2"
                  />
                  Volunteer Login
                </button>
                <button
                  className="btn btn-warning btn-lg px-4 py-2 rounded-pill glow-on-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#donorLoginModal"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FontAwesomeIcon
                    icon={iconMap["donate"]}
                    className="me-2"
                  />
                  Donor Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
