import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconMap } from "../../hooks/iconmap";

const TeamIdentity = ({ details }) => {
  return (
    <div className="volunteer-card">
      <div className="card border-0 shadow-sm h-100 transition-all hover-transform">
        <div className="card-body text-center p-4 d-flex flex-column">
          <div className="user-picture mx-auto mb-3 overflow-hidden">
            <img
              src={details.image}
              alt={`Portrait of ${details.name}`}
              className="img-fluid rounded-circle w-100 h-100 object-fit-cover"
              width="100"
              height="100"
              loading="lazy"
            />
          </div>

          <h3 className="fw-bold mb-1 fs-5 text-primary">{details.name}</h3>
          <p className="text-muted small mb-2">{details.role}</p>
          <p className="mb-3 flex-grow-1">{details.bio}</p>

          <div className="social-links d-flex justify-content-center gap-3 mt-auto">
            {details.social.map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-decoration-none"
                aria-label={`${details.name}'s ${platform}`}
              >
                <FontAwesomeIcon icon={iconMap[platform]} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TeamIdentity);
