import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const heroStyle = {
    'background-image': 'linear-gradient(to bottom,rgba(var(--primary-dark-rgb), 0.8),rgba(var(--primary-rgb), 0.8)),url("/assets/images/page-programs-hero.webp")'
  }
  return (
    <section className="hero-section" style={heroStyle}>
      <div className="container position-relative z-index-1">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center" data-aos="fade-up">
            <h1 className="display-3 fw-bold text-white mb-4">
              Our Programs
            </h1>

            {/* Animated separator */}
            <div
              className="header-separator mx-auto mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>

            <p className="lead text-white mb-5 mx-auto" style={{ maxWidth: "700px" }}>
              Creating change through education, empowerment, and entrepreneurial action.
            </p>

            {/* Interactive program indicators */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              <div
                className="program-pill d-flex align-items-center px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-scale"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white me-2" />
                <span className="text-white">Entrepreneurship</span>
              </div>

              <div
                className="program-pill d-flex align-items-center px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-scale"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <FontAwesomeIcon icon={faLightbulb} className="text-white me-2" />
                <span className="text-white">Education</span>
              </div>

              <div
                className="program-pill d-flex align-items-center px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-scale"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FontAwesomeIcon icon={faUsers} className="text-white me-2" />
                <span className="text-white">Empowerment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx="true">{`
        .programs-hero {
          background: linear-gradient(rgba(168, 58, 73, 0.9), rgba(128, 0, 0, 0.9)),
                      url('https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80');
          background-size: cover;
          background-position: center;
          padding: 8rem 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        
        .hero-overlay {
          background: linear-gradient(to right, rgba(168, 58, 73, 0.8), rgba(128, 0, 0, 0.8));
          z-index: 0;
        }
        
        .header-separator {
          width: 100px;
          height: 4px;
          background: var(--white);
          position: relative;
          overflow: hidden;
        }
        
        .header-separator::after {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: separatorAnimation 2s infinite;
        }
        
        .program-pill {
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .program-pill:hover {
          background-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-3px);
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        @keyframes separatorAnimation {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @media (max-width: 768px) {
          .programs-hero {
            padding: 6rem 0;
            min-height: auto;
          }
          
          .program-pill {
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;