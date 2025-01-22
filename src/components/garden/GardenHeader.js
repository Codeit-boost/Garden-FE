import React from 'react';
import './GardenHeader.css';

const GardenHeader = () => {
  return (
    <div className="garden-header">
      <h1>정원</h1>
      <div className="date-selector">
        <button>일</button>
        <button>주</button>
        <button>월</button>
      </div>
    </div>
  );
};

export default GardenHeader;