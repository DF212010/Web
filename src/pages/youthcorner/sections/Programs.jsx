import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const Programs = ({ content }) => {
  return (
    <>
      <section id="programs" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Our Programs</h2>
            <p className="lead text-muted">
              Discover how you can get involved with YouthCorner
            </p>
          </div>
          <div className="row g-4">
            {content.map((program, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`card program-card h-100 border-0 shadow-sm overflow-hidden hover-float`}
                >
                  <div
                    className={`program-card-header bg-${program.color} text-white p-4`}
                  >
                    <FontAwesomeIcon
                      icon={iconMap[program.icon]}
                      className="fa-3x mb-3"
                    />
                    <h3 className="h4">{program.title}</h3>
                  </div>
                  <div className="card-body p-4">
                    <ul className="list-unstyled">
                      {program.items.map((item, i) => (
                        <li className="mb-2" key={i}>
                          <FontAwesomeIcon
                            icon={iconMap["check"]}
                            className={`text-${program.color} me-2`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`btn btn-outline-${program.color} w-100 mt-3 hover-effect`}
                      data-bs-toggle="modal"
                      data-bs-target={`#${program.title
                        .toLowerCase()
                        .replace(" ", "")}LoginModal`}
                    >
                      {program.title.split(" ")[1]} Login
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
