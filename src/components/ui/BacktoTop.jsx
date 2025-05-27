import React, { useState, useEffect } from "react";
import { iconMap } from "../../hooks/iconmap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`back-to-top ${showButton ? "show" : ""}`}
      onClick={handleBackToTopClick}
    >
      <FontAwesomeIcon icon={iconMap["arrowup"]} />
    </div>
  );
};

export default React.memo(BackToTop);
