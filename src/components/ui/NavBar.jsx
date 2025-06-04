import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";
import logoImage from "/assets/images/df-logo.webp"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navLinksBox = document.querySelector('.nav-links');
  const donateBtn = `<Link to="/donate" className="nav-donate-btn" id="nav-dnt-btn" onClick={closeNavbar}>Donate Now</Link>`
  // isMobile&&document.querySelector('.nav-btn-box').remove();
  // isMobile?navLinksBox.append()
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
          <div className='logo-section'>
            <Link to="/" className="logo-text" onClick={closeNavbar}>
              <img src={logoImage} style={{ height: '60px', width: 'auto' }} />
            </Link>
          </div>

          {(isMobile) && (
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

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
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
          </div>
          <div className="nav-btn-box">
            <Link to="/donate" className="nav-donate-btn" id="nav-dnt-btn" onClick={closeNavbar}>
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;