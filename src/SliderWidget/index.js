// src/SliderWithProgress.js
import React, { useState, useEffect, useRef } from 'react';
import './SliderWidget.css';

const SliderWidget = () => {
  const [value, setValue] = useState(0);
  const progressRef = useRef(null);


  const handleSliderChange = (event) => {
    setValue(Number(event.target.value));
  };

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const percentage = (value / 10) * 100;
    slider.style.background = `linear-gradient(to right, #81c7da ${percentage}%, #ffffff ${percentage}%)`;

    const adjustFontSize = () => {
        if (progressRef.current) {
          const { width, height } = progressRef.current.getBoundingClientRect();
          const newSize = Math.min(width, height) * 0.2; // Adjust the 0.2 factor as needed
          progressRef.current.style.fontSize = `${newSize}px`;
        }
      };
  
      adjustFontSize();
      window.addEventListener('resize', adjustFontSize);
  
      return () => {
        window.removeEventListener('resize', adjustFontSize);
      };
  }, [value]);

  return (
    <div className="slider-with-progress">
        <div className="progress-container">
            <div className="dotted-border">
                <div
                    className="circle"
                    style={{
                    background: `conic-gradient(#ffffff ${value * 36}deg, #356b7a ${value * 36}deg)`
                    }}
                >
                    <div className="circle-inner">
                        <div className="inner-section">
                            {/* <span className="progress-value">{value}</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <span className="progress-value" ref={progressRef}>{value}</span>
        </div>
        <input
            type="range"
            min="0"
            max="10"
            value={value}
            color='red'
            onChange={handleSliderChange}
            className="slider"
        />
    </div>
  );
};

export default SliderWidget;
