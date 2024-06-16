import React, { useState } from 'react';
import './ScaleSelector.css'

const ScaleSelector = () => {
  const [selectedLevel, setSelectedLevel] = useState(Infinity);

  const handleClick = (level) => {
    setSelectedLevel(level);
  };

  // function to determine the fill color of bars based on the selected level
  // current implementation is to select all the bars below the selected level, this can be changed
  // only select the selected level by replacing <= with ===
  const getFillColor = (level) => (selectedLevel <= level ? "#FFFFFF" : "#97abaf");

  return (
    <div className="inverted-triangle">
        <div className="inner-container">
            {[1,2,3,4,5].map((value) => (
            <div
                key={value}
                className={`section section-${value}`}
                style={{ background: getFillColor(value) }}
                onClick={() => handleClick(value)}
                role="button"
            >
            </div>
            ))}
        </div>
    </div>
  );
};

export default ScaleSelector;
