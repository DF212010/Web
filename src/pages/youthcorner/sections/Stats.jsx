import React from "react";

const Stats = ({ content }) => {
  return (
    <section className="quick-stats py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {content.map((stat, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`card stat-card h-100 border-0 shadow-sm hover-scale`}
              >
                <div className="card-body text-center p-4">
                  <div
                    className={`stat-icon bg-${stat.color} bg-opacity-10 text-${stat.color} rounded-circle mx-auto mb-3`}
                  >
                    <FontAwesomeIcon icon={stat.icon} className="fs-2" />
                  </div>
                  <h3 className="stat-number fw-bold mb-1">{stat.number}</h3>
                  <p className="stat-label text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
