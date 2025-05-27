import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";
const card = ({ content }) => {
  return (
    <div className="value-card">
      <div className="value-icon">
        <FontAwesomeIcon icon={iconMap[content.icon.name]} />
      </div>
      <h3 className="h5 fw-bold">{content.heading}</h3>
      <p className="text-muted">{content.description}</p>
    </div>
  );
};

export default card;
