import React, { useState, useEffect } from 'react';
import '../../styles/MyCalendar.css';

const MyCalendar = ({ onSelectDate, onClose, defaultDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(defaultDate || new Date());

  useEffect(() => {
    if (defaultDate) {
      setSelectedDate(defaultDate);
      setCurrentDate(new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 1));
    }
  }, [defaultDate]);

  const renderDays = () => {
    const days = [];
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const today = new Date();

    const prevLastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    for (let i = startDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-day prev-month">
          {prevLastDate - i}
        </div>
      );
    }

    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isSelected = selectedDate.toDateString() === date.toDateString();
      const isToday = today.toDateString() === date.toDateString();

      days.push(
        <div
          key={i}
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </div>
      );
    }

    const remainingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-day next-month">
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleSave = () => {
    if (selectedDate) {
      onSelectDate(selectedDate); 
      onClose(); 
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="prev-button" onClick={handlePrevMonth}></button>
        <span>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</span>
        <button className="next-button" onClick={handleNextMonth}></button>
      </div>
      <div className="calendar-body">
        <div className="calendar-weekdays">
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {renderDays()}
        </div>
        <div className="calendar-buttons">
        <button className="close-button" onClick={handleSave}>닫기</button>
          {/* <button className="save-button" onClick={handleSave}>변경</button> */}
          
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
