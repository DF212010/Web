import React from "react";

const UpcomingEvents = ({ events }) => {
  return (
    <section className="u-events-sec py-5 bg-light">
      <div className="u-events-box">
        <div
          id="upcoming-events-c"
          className="carousel carousel-dark slide u-event-c-box"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {events?.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#upcoming-events-c"
                data-bs-slide-to={index}
                className={
                  index === 0 ? "active rounded-circle" : "rounded-circle"
                }
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {events?.map((event, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="container content-section py-4">
                  <div className="row align-items-center g-4 g-lg-5">
                    <div className="col-md-5 image-container">
                      <img
                        src="assets/images/premium_photo-1682125773446-259ce64f9dd7.avif"
                        alt={event.title}
                        className="img-fluid rounded-3 shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-7 text-container ps-md-4">
                      <div className="badge bg-primary mb-3">{event.date}</div>
                      <h2 className="display-6 fw-bold mb-3">{event.title}</h2>
                      <p className="mb-3">{event.description}</p>
                      <ul className="list-unstyled mb-4">
                        {event.details.map((detail, i) => (
                          <li key={i} className="mb-2">
                            <i
                              className={`bi ${
                                i === 0
                                  ? "bi-clock"
                                  : i === 1
                                  ? "bi-geo-alt"
                                  : "bi-people"
                              } me-2`}
                            ></i>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={event.button.url}
                        className="btn btn-outline-primary px-4"
                        target={event.button.target}
                      >
                        {event.button.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
