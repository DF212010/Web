import React from "react";

const Donation = () => {
  return (
    <section className="donation-cta bg-white py-4 py-md-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5 bg-white p-3 p-md-4 p-lg-5 rounded-3 shadow-sm hover-shadow transition-all">
          <div className="col-lg-6 order-lg-1 order-2">
            <figure className="m-0 overflow-hidden rounded-3 border border-3 border-primary transition-all hover-scale">
              <img
                src="assets/images/children-in-a-computer-lab.webp"
                alt="Children learning in a computer lab"
                className="img-fluid w-100 h-auto"
                loading="lazy"
                width="600"
                height="400"
              />
              <figcaption className="small text-muted mt-2 px-2">
                Empowering underprivileged children through education
              </figcaption>
            </figure>
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            <div className="pe-lg-4">
              <h2 className="display-6 display-md-5 fw-bold text-primary mb-3 mb-md-4">
                <span className="d-inline-block pb-2 border-bottom border-3 border-warning highlight-text">
                  Let your birthday
                </span>
                be the beginning of a better life for thousands!
              </h2>

              <p className="lead mb-3 mb-md-4 fade-in-text">
                Celebrate your special day by creating lasting change. Your
                fundraiser can provide education, meals, and hope to children in
                need.
              </p>

              <div className="d-flex flex-column flex-sm-row flex-wrap gap-3">
                <a
                  href="#donate"
                  className="btn btn-warning btn-lg fw-bold px-4 py-2 py-md-3 shadow-sm bounce-hover"
                >
                  <i className="bi bi-gift-fill me-2"></i> START FUNDRAISER NOW
                </a>
                <a
                  href="#learn-more"
                  className="btn btn-outline-primary btn-lg px-4 py-2 py-md-3 slide-hover"
                >
                  Learn How It Works <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>

              <div className="mt-3 mt-md-4 d-flex align-items-center fade-in">
                <img
                  src="assets/images/shield-check.svg"
                  alt="Verified"
                  width="24"
                  height="24"
                  className="me-2 pulse"
                />
                <small className="text-muted">
                  100% of donations go directly to the cause
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
