import { useNavigate } from 'react-router-dom';
import React,{ useEffect } from 'react';
// import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found | Stellar Explorer";
  }, []);

  return (
    <div className="not-found-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="not-found-content">
        <div className="error-graphic">
          <div className="astronaut-container">
            <div className="astronaut">
              <div className="helmet">
                <div className="visor-shine"></div>
                <div className="visor-reflection"></div>
              </div>
              <div className="backpack"></div>
              <div className="body">
                <div className="control-panel"></div>
              </div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="leg left-leg"></div>
              <div className="leg right-leg"></div>
              <div className="floating-dots">
                {[...Array(5)].map((_, i) => <div key={i} className="dot"></div>)}
              </div>
            </div>
          </div>
          <div className="error-number">
            <span className="digit">4</span>
            <span className="digit">0</span>
            <span className="digit">4</span>
          </div>
        </div>
        
        <h1>Houston, We Have a Problem!</h1>
        <p className="subtitle">
          The page you're looking for has drifted off into space.
          <br />
          Let's navigate you back to civilization.
        </p>
        
        <div className="action-buttons">
          <button 
            onClick={() => navigate(-1)} 
            className="back-button"
          >
            ← Return to Previous
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="home-button"
          >
            Launch to Home
          </button>
        </div>
        
        <div className="search-container">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search the cosmos..." 
            />
            <button className="search-button">Explore</button>
          </div>
        </div>
        
        <div className="additional-links">
          <a href="/support">Need help?</a>
          <a href="/contact">Contact Mission Control</a>
          <a href="/sitemap">View Sitemap</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;