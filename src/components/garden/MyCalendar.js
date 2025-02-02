import React, { useState } from 'react';
import '../../styles/MyCalendar.css';

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderDays = () => {
    const days = [];
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
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

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>
          &lt;
        </button>
        <span>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</span>
        <button onClick={handleNextMonth}>
          &gt;
        </button>
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
      </div>
    </div>
  );
};

export default MyCalendar;