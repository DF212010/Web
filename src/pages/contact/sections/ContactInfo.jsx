import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    const notification = document.getElementById("copyNotification");
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  });
};
const ContactInfo = () => {
  const handleClip = () => {
    copyToClipboard("info@yourbrand.com");
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-card clickable" onClick={handleClip}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={iconMap["mapMarkerAlt"]}/>
              </div>
              <h3>Our Location</h3>
              <p>
                123 Business Avenue, Suite 200
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="contact-card clickable" onClick={handleClip}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={iconMap["phoneAlt"]}/>
              </div>
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="contact-card clickable" onClick={handleClip}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={iconMap["envelope"]}/>
              </div>
              <h3>Email Address</h3>
              <p>info@yourbrand.com</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={iconMap["clock"]}/>
              </div>
              <h3>Business Hours</h3>
              <p>
                Mon-Fri: 9AM - 5PM
                <br />
                Sat: 10AM - 2PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactInfo;
