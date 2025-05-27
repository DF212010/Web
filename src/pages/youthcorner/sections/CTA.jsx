import React from "react";
import { iconMap } from "../../../hooks/iconmap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CTA = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div
            className="cta-box bg-dark text-white rounded p-5 text-center position-relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="cta-overlay position-absolute w-100 h-100"></div>
            <div className="position-relative">
              <h2 className="fw-bold mb-4">Ready to Make a Difference?</h2>
              <p className="lead mb-5">
                Join our community today and start your journey with YouthCorner
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill glow-on-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#studentLoginModal"
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
                >
                  <FontAwesomeIcon icon={iconMap["donate"]} className="me-2" />
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

export default CTA;
