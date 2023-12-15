import React from 'react';
import './css/Pop.css';

function DiscontinuedPopup() {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <p>O site foi descontinuado.</p>
        </div>
      </div>
    </div>
  );
}

export default DiscontinuedPopup;
