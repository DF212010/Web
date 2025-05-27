import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMap } from '../../../hooks/iconmap';
import { useNavigate } from 'react-router-dom';
// style are inside the programs.css
const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const handleLearnM = () => {
    navigate(`/programs/${program.id}`);
  }
  return (
    <div className="program-card">
      <div className="program-image">
        <img src={program.image} alt={program.title} />
        <div className="program-category">
          <span>{program.category}</span>
        </div>
      </div>
      <div className="program-content">
        <div className="program-icon">
          <FontAwesomeIcon icon={iconMap[program.icon]} color='#800000' />
        </div>
        <h3 className="program-title">{program.title}</h3>
        <p className="program-description">{program.description}</p>
        <div className="program-actions">
          <button className="learn-more" onClick={handleLearnM}>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;