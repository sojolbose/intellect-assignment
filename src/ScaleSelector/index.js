import React, { useState } from 'react';
import './ScaleSelector.css'

const ScaleSelector = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (level) => {
    setSelectedLevel(level);
  };

  const getFillColor = (level) => (selectedLevel === level ? "#FFFFFF" : "#97abaf");

  const sections = [
    { className: 'section-1', color: '#5a6e7f' },
    { className: 'section-2', color: '#718997' },
    { className: 'section-3', color: '#8aa3b0' },
    { className: 'section-4', color: '#a3bdc8' },
    { className: 'section-5', color: '#ffffff' },
  ];

  return (
    <div class="inverted-triangle">
        <div className="inner-container">
            {sections.map(({ className, color }, index) => (
            <div
                key={index}
                className={`section ${className}`}
                style={{ background: getFillColor(index+1) }}
                onClick={() => handleClick(index + 1)}
            >
            </div>
            ))}
        </div>
        {/* <div class="section section-1"></div>
        <div class="section section-2"></div>
        <div class="section section-3"></div>
        <div class="section section-4"></div>
        <div class="section section-5"></div> */}
    </div>
  );
};

export default ScaleSelector;
