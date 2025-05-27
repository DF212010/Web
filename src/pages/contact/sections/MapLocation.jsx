import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../../hooks/iconmap";
const MapLocation = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h2 className="section-title text-center mb-4">
              Find Us on the Map
            </h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.21557488971!2d-73.9878449240963!3d40.74844097138966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690833879811!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-card">
                <h4>Our Headquarters</h4>
                <div className="map-card-item">
                  <FontAwesomeIcon icon={iconMap["mapMarkerAlt"]} className="map-card-icon"/>
                  <span>123 Business Avenue, NY 10001</span>
                </div>
                <div className="map-card-item">
                  <FontAwesomeIcon icon={iconMap["phoneAlt"]} className="map-card-icon"/>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="map-card-item">
                  <FontAwesomeIcon icon={iconMap["envelope"]} className="map-card-icon"/>
                  <span>info@yourbrand.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MapLocation;
