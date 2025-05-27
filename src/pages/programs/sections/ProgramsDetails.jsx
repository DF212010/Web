import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { iconMap } from '../../../hooks/iconmap';
const ProgramsDetails = ({ state }) => {
    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (id) => {
        setActiveSection(activeSection === id ? null : id);
    };
    const { content, loading, error } = state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const { programId } = useParams()
    if (!content || !content.dynamicContent) {
        return <div>No content available</div>
    }
    const programs = content.dynamicContent["programs-details-ourprograms"]
    if (!programs || !Array.isArray(programs)) {
        return <div>No programs available</div>
    }
    const getPrograms = (id) => {
        return programs.find((elem) => {
            return elem.id === Number(id);
        });
    };
    const program = getPrograms(programId)
    if (!program) {
        return <div>Program not found</div>
    }
    const ctaStyle = {
        padding: '2rem 2.5rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        background: '#f8f9fa'
    };
    return (
        <div className="exam-prep-container">
            <div className="row g-0 min-vh-100">
                {/* Left Section - Image */}
                <div className="col-lg-5">
                    <div className="vh-100 w-100" style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={program.page.image.src}
                            alt={program.page.image.alt}
                            style={{
                                width: 'clamp(400px, 50vw, 500px)',
                                height: 'auto',
                                maxHeight: '400px',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                borderRadius: '12px',
                                objectFit: 'cover',
                                display: 'block',
                                margin: '0 auto'
                            }}

                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-7">
                    <div className="right-section">
                        <div className="header-section">
                            <h1 className="section-title">{program.page.title}</h1>
                            <p className="section-subtitle">{program.page.subtitle}</p>
                        </div>
                        <div className="accordion-container">
                            {program.accordion.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`accordion-item ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    <div
                                        className="accordion-header"
                                        onClick={() => toggleSection(item.id)}
                                    >
                                        <div className="icon-container">
                                            <FontAwesomeIcon icon={iconMap[item.icon]} />
                                        </div>
                                        <h5 className="accordion-title">{item.title}</h5>
                                        <div className="chevron-icon">
                                            <FontAwesomeIcon icon={iconMap[`arrow${activeSection === item.id ? 'up' : 'down'}`]} />
                                        </div>
                                    </div>
                                    <div className={`accordion-content ${activeSection === item.id ? 'show' : ''}`}>
                                        <div className="content-inner">
                                            <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cta-section" style={ctaStyle}>
                            <button className="cta-button" onClick={() => window.location.href = program.cta.buttonLink}>
                                <FontAwesomeIcon icon={iconMap[program.cta.icon]} className='me-2' />
                                {program.cta.text}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProgramsDetails