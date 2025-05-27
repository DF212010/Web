import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const OurVolunteers = ({ volunteers }) => {
  const scrollBoxRef = useRef(null);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [cardWidth, setCardWidth] = useState(280); // Default card width

  // Calculate scroll amount based on card width
  const scrollAmount = useCallback(() => {
    if (!scrollBoxRef.current) return cardWidth * 2;
    const containerWidth = scrollBoxRef.current.clientWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    return cardWidth * Math.max(1, Math.floor(visibleCards * 0.75));
  }, [cardWidth]);

  // Handle window resize to update card width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth(240); // Mobile card width
      } else {
        setCardWidth(280); // Desktop card width
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollBy({
        left: scrollAmount(),
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);

  const handlePrev = useCallback(() => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);

  const updateButtonVisibility = useCallback(() => {
    if (!scrollBoxRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollBoxRef.current;
    setShowPrevBtn(scrollLeft > 10); // Small threshold to prevent flickering
    setShowNextBtn(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const scrollBox = scrollBoxRef.current;
    if (!scrollBox) return;

    updateButtonVisibility();
    scrollBox.addEventListener("scroll", updateButtonVisibility);

    return () => {
      scrollBox.removeEventListener("scroll", updateButtonVisibility);
    };
  }, [updateButtonVisibility]);

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

        <div className="position-relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="btn btn-primary btn-nav position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle"
            style={{ visibility: showPrevBtn ? "visible" : "hidden" }}
            aria-label="Scroll left"
            disabled={!showPrevBtn}
          >
            <FontAwesomeIcon icon={iconMap["leftMove"]} />
          </button>
          <button
            onClick={handleNext}
            className="btn btn-primary btn-nav position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle"
            style={{ visibility: showNextBtn ? "visible" : "hidden" }}
            aria-label="Scroll right"
            disabled={!showNextBtn}
          >
            <FontAwesomeIcon icon={iconMap["rightMove"]} />
          </button>

          {/* Scrollable Volunteer Cards */}
          <div
            ref={scrollBoxRef}
            className="d-flex overflow-hidden gap-4 px-2 py-3 scroll-box"
            style={{ scrollBehavior: "smooth" }}
            aria-live="polite"
          >
            {volunteers.map((elem) => (
              <TeamIdentity
                details={elem}
                key={elem.name}
                style={{ minWidth: `${cardWidth}px` }}
              />
            ))}
          </div>
        </div>

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
