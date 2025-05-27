import React from "react";

const CarouselCard = ({ details,Id}) => {
  return (
    <section className="content-carousel-sec py-5 bg-white">
      <div className="content-carousel-box">
        <div
          id={Id}
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target={'#'+Id}
              data-bs-slide-to="0"
              className="rounded-circle active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target={'#'+Id}
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="rounded-circle"
            ></button>
            <button
              type="button"
              data-bs-target={'#'+Id}
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="rounded-circle"
            ></button>
          </div>

          <div className="carousel-inner">
            {details?.map((item, index) => {
              return (
                <div
                  className={`carousel-item${index === 0 ? " active" : ""}`}
                  data-bs-interval="10000"
                  key={index}
                >
                  <div className="container content-section py-4">
                    <div className="row align-items-center g-4 g-lg-5">
                      <div className="col-md-5 image-container">
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="img-fluid rounded-3 shadow-sm"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-md-7 text-container ps-md-4">
                        <h2 className="display-5 fw-bold mb-4">{item.title}</h2>

                        <p className="lead mb-3">{item.paragraphs[0]}</p>
                        <p className="mb-0">{item.paragraphs[1]}</p>

                        {item.button.showButton && (
                          <a
                            href={item.button.link}
                            className="btn btn-primary mt-4 px-4 py-2"
                          >
                            {item.button.text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={'#'+Id}
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
            data-bs-target={'#'+Id}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselCard;
