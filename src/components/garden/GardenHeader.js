import React, { useState } from 'react';
import '../../styles/GardenHeader.css';
import arrowIcon from '../../assets/icons/화살표(아래).png';
import MyCalendar from './MyCalendar';


const GardenHeader = () => {
  const [selected, setSelected] = useState('주'); 
  const [showCalendar, setShowCalendar] = useState(false); 

  return (
    <div className="gardenheader">
      <h2>정원</h2>

    
      <div className="date-selector">
        {['일', '주', '월'].map((item) => (
          <button 
            key={item}
            className={selected === item ? 'selected' : ''}
            onClick={() => setSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>

      
      <div className="year-month-selector" onClick={() => setShowCalendar(!showCalendar)}>
        2025년 1월 <img src={arrowIcon} alt="Arrow Down" className="arrow" />
     
      </div>

      
      {showCalendar && (
        <div className="calendar-container">
          <MyCalendar />
        </div>
      )}
    </div>
  );
};

export default GardenHeader;