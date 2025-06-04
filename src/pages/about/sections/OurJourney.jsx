import React from "react";

const OurJourney = ({ content }) => {
  return (
    <section className="py-5 py-md-7 bg-light section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3" data-aos="fade-up">
              Our Journey
            </h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
              Milestones of Impact at Durga Foundation
              <br></br>
              From a humble beginning to a movement of change, Durga Foundation has touched countless lives through education, digital literacy, and community empowerment. Here’s a look at the key milestones that shaped our purpose-driven journey
            </p>
          </div>
        </div>

        <div className="timeline">
          {content.map((elem, index) => {
            return (
              <div
                className={`timeline-item${index % 2 == 0 ? " right" : " left"
                  }`}
                data-aos={index % 2 == 0 ? "fade-left" : "fade-right"}
                key={index}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{elem.year}</span>
                  <h5 className="fw-bold mt-2">{elem.title}</h5>
                  <p className="text-muted">{elem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
