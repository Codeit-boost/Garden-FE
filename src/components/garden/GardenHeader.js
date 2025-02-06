import React, { useState } from 'react';
import '../../styles/GardenHeader.css';
import arrowIcon from '../../assets/icons/화살표(아래).png';
import MyCalendar from './MyCalendar';

const GardenHeader = ({ onSelectPeriod, onSelectDate }) => {
  const [selected, setSelected] = useState('주');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // ✅ Default: today

  const handleSelect = (item) => {
    setSelected(item);
    onSelectPeriod(item); // ✅ Trigger API request when period changes
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onSelectDate(date); // ✅ Send date change to GardenPage.js
    setShowCalendar(false);
  };

  return (
    <div className="gardenheader">
      <h2>정원</h2>

      <div className="date-selector">
        {['일', '주', '월'].map((item) => (
          <button 
            key={item}
            className={selected === item ? 'selected' : ''}
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="year-month-selector" onClick={() => setShowCalendar(!showCalendar)}>
        {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 <img src={arrowIcon} alt="Arrow Down" className="arrow" />
      </div>

      {showCalendar && (
        <div className='calendar-container'>
        <MyCalendar onSelectDate={handleDateSelect} onClose={() => setShowCalendar(false)} />
          </div>
      )}
    </div>
  );
};

export default GardenHeader;
