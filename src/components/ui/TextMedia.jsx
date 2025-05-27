import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";

const TextMedia = ({ content }) => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos={content.animation.enabled ? content.animation.image : ""}
            data-aos-delay={content.animation.delay}
          >
            <div className="image-container rounded shadow overflow-hidden">
              <img
                src={content.img.link}
                alt={content.img.alt}
                className="img-fluid hover-zoom"
              />
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos={
              content.animation.enabled ? content.animation.content : ""
            }
            data-aos-delay={content.animation.delay + 100}
          >
            <h2 className="fw-bold mb-4">{content.heading}</h2>
            {content.paragraph.map((elem, index) => (
              <p
                className={`${index === 0 ? "lead" : ""} ${elem.muted ? "text-muted" : ""
                  }`}
                key={index}
              >
                {elem.text}
              </p>
            ))}

            <div className="mt-4">
              {content.btn.status && (
                <>
                  <a href={content.btn.link} className="btn btn-outline-primary me-2 hover-effect">{content.btn.name}
                    {content.btn.icon && (
                      <FontAwesomeIcon
                        icon={iconMap[content.btn.icon]}
                        className="ms-2"
                      />
                    )}
                  </a>
                  {content.btnMore.status && (
                    <a
                      href={content.btnMore.link}
                      className="btn btn-primary hover-effect"
                    >
                      {content.btnMore.name}
                      {content.btnMore.icon && content.btn.icon && (
                        <FontAwesomeIcon
                          icon={iconMap[content.btn.icon]}
                          className="ms-2"
                        />
                      )}
                    </a>
                  )}
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMedia;
