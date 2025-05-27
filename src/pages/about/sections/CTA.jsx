import React from "react";
const CTA = () => {
  return (
    <section className="cta-section text-white text-center section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="lead mb-5">
              Join us in our mission to create a better world for all. Every
              contribution, big or small, helps us make a difference.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="btn btn-light cta-btn">
                Donate Now
              </a>
              <a href="#" className="btn btn-outline-light cta-btn">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
