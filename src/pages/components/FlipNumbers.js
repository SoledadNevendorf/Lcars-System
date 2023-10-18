import React, { useState, useEffect } from 'react';

function RandomValueColumn() {
  const [randomValues, setRandomValues] = useState(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10000)));

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;
    
    const toggleVisibility = () => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
      const randomInterval = Math.floor(Math.random() * 2000) + 1000;
      timeout = setTimeout(toggleVisibility, randomInterval);
    };

    toggleVisibility(); // Start the first toggle
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div className="col-2">
      {randomValues.map((randomValue, index) => (
        <p
          className={`flipNumber text-uppercase text-end orange bold ${isVisible ? '' : 'hidden'}`}
          key={index}
          data-link-alt={randomValue}
        >
          {randomValue}
        </p>
      ))}
    </div>
  );
}

export default function FlipNumbers() {
  return (
    <div className="col-5 row">
      <RandomValueColumn />
      <RandomValueColumn />
      <RandomValueColumn />
      <RandomValueColumn />
      <RandomValueColumn />
    </div>
  );
}
