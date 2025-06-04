import React from "react";

const HeroCarousel = () => {
  return (
    <section className="hero-carousel-sec bg-white">
      <div
        id="hero-carousel"
        className="carousel carousel-dark slide"
        data-bs-ride="false"
        data-bs-touch="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <div className="carousel-caption d-none d-md-block mt-3 c-cap">
              <div className="s-txt-box">
                <h5 className="fw-bold display-6 text-shadow">
                  Stunning Slide Title
                </h5>
                <p className="lead text-shadow mb-4">
                  This is a short and catchy description that stands out.
                </p>
              </div>
              <div className="s-btn-box">
                <a href="#" className="btn btn-outline-light btn-lg shadow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item c-item">
            <div className="carousel-caption d-none d-md-block text-white mt-3 c-cap">
              <div className="s-txt-box">
                <h5 className="fw-bold display-6 text-shadow">
                  Stunning Slide Title
                </h5>
                <p className="lead text-shadow mb-4">
                  This is a short and catchy description that stands out.
                </p>
              </div>
              <div className="s-btn-box">
                <a href="#" className="btn btn-outline-light btn-lg shadow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item c-item">
            <div className="carousel-caption d-none d-md-block text-white mt-3 c-cap">
              <div className="s-txt-box">
                <h5 className="fw-bold display-6 text-shadow">
                  Stunning Slide Title
                </h5>
                <p className="lead text-shadow mb-4">
                  This is a short and catchy description that stands out.
                </p>
              </div>
              <div className="s-btn-box">
                <a href="#" className="btn btn-outline-light btn-lg shadow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
