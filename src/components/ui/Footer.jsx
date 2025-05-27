import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="footer-logo">Dugra Foundation</div>
              <p className="text-white-50">
                Empowering communities through sustainable development and
                compassionate action since 2015.
              </p>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Programs</a>
                  </li>
                  <li>
                    <a href="#">Get Involved</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-links">
                <h5>Programs</h5>
                <ul>
                  <li>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <a href="#">Healthcare</a>
                  </li>
                  <li>
                    <a href="#">Environment</a>
                  </li>
                  <li>
                    <a href="#">Women Empowerment</a>
                  </li>
                  <li>
                    <a href="#">Disaster Relief</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="footer-links">
                <h5>Newsletter</h5>
                <p className="text-white-50">
                  Subscribe to our newsletter to receive updates on our work.
                </p>
                <form className="mt-3">
                  <div className="input-group">
                    <input
                      type="email"
                      className="footer-form-control"
                      placeholder="Your Email"
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <FontAwesomeIcon icon={iconMap["paperplane"]} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p className="mb-0">
              &copy; 2025 Dugra Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
