import React from "react";
import { useState } from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import ScrollCard from "../../../components/ui/scrollCard";
import { Link } from "react-router-dom"
const OurVolunteers = ({ founders }) => {
  const [cardWidth, setCardWidth] = useState(280);
  return (
    <section className="our-volunteers-section bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Our Founders
            </h2>
            <p className="lead text-muted">
              Meet our dedicated team of volunteers who work tirelessly to make
              a difference in our community. Their passion and commitment drive
              our mission forward every day.
            </p>
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap"
        }}>
          {founders.map((elem) => (
            <TeamIdentity
              details={elem}
              key={elem.name}
              style={{ minWidth: `${cardWidth}px` }}
            />
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/ourteam" className="btn btn-primary btn-lg px-4">
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurVolunteers);
