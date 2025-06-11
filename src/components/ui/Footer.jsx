import React from "react";
import { Link } from 'react-router-dom'
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
              <div className="social-links d-flex gap-3 mt-auto flex-wrap">
                <a href="https://x.com/DurgaFoundation"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['twitterX']} />
                </a>
                <a href="https://www.instagram.com/durgafoundationngo/"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['instagram']} />
                </a>
                <a href="https://www.facebook.com/durgafoundationngo/"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['facebook']} />
                </a>
                <a href="https://in.linkedin.com/company/durgafoundation-education-for-all"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['linkedin']} />
                </a>
                <a href="https://whatsapp.com/channel/0029Va5qpUN7YSd8Pe7Bui3M" target="_blank" rel="noopener noreferrer"
                  className="text-decoration-none bg-secondary text-white">
                  <FontAwesomeIcon icon={iconMap['whatsapp']} />
                </a>
                <a href="https://www.youtube.com/@DurgaFoundation"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['youtube']} />
                </a>
                <a href="https://durgafoundation.quora.com/"
                  className="text-decoration-none bg-secondary text-white" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={iconMap['quora']} />
                </a>
              </div>
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
