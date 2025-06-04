import React from "react";
import { useState} from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import ScrollCard from "../../../components/ui/scrollCard";
const OurVolunteers = ({ volunteers }) => {
  const [cardWidth, setCardWidth] = useState(280);
  return (
    <section className="our-volunteers-section bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Our Volunteers
            </h2>
            <p className="lead text-muted">
              Meet our dedicated team of volunteers who work tirelessly to make
              a difference in our community. Their passion and commitment drive
              our mission forward every day.
            </p>
          </div>
        </div>

        /volunteers scroll box
        <ScrollCard>
          {volunteers.map((elem) => (
            <TeamIdentity
              details={elem}
              key={elem.name}
              style={{ minWidth: `${cardWidth}px` }}
            />
          ))}
        </ScrollCard>
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-4">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurVolunteers);
