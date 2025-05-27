import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 992);
      if (width >= 992) closeNavbar();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkClass = ({ isActive }) => `nav-item ${isActive ? "active" : ""}`;

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className={`logo-section ${isTablet ? "tablet-logo" : ""}`}>
            <Link to="/" className="logo-text" onClick={closeNavbar}>
              Dugra Foundation
            </Link>
          </div>

          {(isMobile || isTablet) && (
            <button
              className="menu-toggle"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FontAwesomeIcon icon={iconMap["xmark"]} />
              ) : (
                <FontAwesomeIcon icon={iconMap["bar"]} />
              )}
            </button>
          )}

          <div
            className={`nav-links ${isOpen ? "open" : ""} ${
              isTablet ? "tablet-menu" : ""
            }`}
          >
            {["home", "about", "programs", "youth Corner", "contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === "home" ? "/" : `/${item.replace(" ", "")}`}
                  className={navLinkClass}
                  onClick={closeNavbar}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              )
            )}
            <Link to="/donate" className="donate-btn" onClick={closeNavbar}>
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;