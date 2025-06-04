import React, { useState } from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
import ScrollCard from "../../../components/ui/scrollCard";
const OurTeam = ({ content }) => {
  const [cardWidth, setCardWidth] = useState(280); // Default card width
  return (
    <section className="section" id="volunteer">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="lead">
            Dedicated individuals working tirelessly for positive change
          </p>
        </div>

        <ScrollCard>
          {content.map((elem) => (
            <TeamIdentity
              details={elem}
              key={elem.name}
              style={{ minWidth: `${cardWidth}px` }}
            />
          ))}
        </ScrollCard>

        <div className="text-center mt-5" data-aos="fade-up">
          <a href="#" className="btn btn-primary-custom">
            <FontAwesomeIcon icon={iconMap["users"]} />Meet Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
