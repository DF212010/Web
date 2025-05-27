import React, { useState } from 'react';
// import './ProgramDetails.css';

import contentData from './competitiveExamPage.json';

const CompetitiveExamPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="exam-prep-container">
      <div className="row g-0 min-vh-100">
        {/* Left Section - Image */}
        <div className="col-lg-5">
          <div className="h-100 w-100">
            <img
              src={contentData.page.image.src}
              alt={contentData.page.image.alt}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-7">
          <div className="right-section">
            <div className="header-section">
              <h1 className="section-title">{contentData.page.title}</h1>
              <p className="section-subtitle">{contentData.page.subtitle}</p>
            </div>
            <div className="accordion-container">
              {contentData.accordion.map((item, index) => (
                <div
                  key={item.id}
                  className={`accordion-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleSection(item.id)}
                  >
                    <div className="icon-container">
                      <i className={item.icon}></i>
                    </div>
                    <h5 className="accordion-title">{item.title}</h5>
                    <div className="chevron-icon">
                      <i className={`fas fa-chevron-${activeSection === item.id ? 'up' : 'down'}`}></i>
                    </div>
                  </div>
                  <div className={`accordion-content ${activeSection === item.id ? 'show' : ''}`}>
                    <div className="content-inner">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <button className="cta-button" onClick={() => window.location.href = contentData.cta.buttonLink}>
                <i className={`${contentData.cta.icon} me-2`}></i>
                {contentData.cta.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveExamPage;
