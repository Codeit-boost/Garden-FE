import React, { useState } from "react";
import "../../styles/GardenHeader.css";
import arrowIcon from "../../assets/icons/화살표(아래).png";
import MyCalendar from "./MyCalendar";

const GardenHeader = ({ onSelectPeriod, onSelectDate }) => {
  const [selected, setSelected] = useState("일");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // ✅ Default: today

  // ✅ 주차 계산 함수 (해당 날짜가 몇 주차인지 계산)
  const getWeekNumber = (date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return Math.ceil((date.getDate() + firstDayOfMonth.getDay()) / 7);
  };

  // ✅ 주차 시작일과 종료일 계산
  const getWeekRange = (date) => {
    const dayOfWeek = date.getDay(); // 요일 (0 = 일요일, 1 = 월요일, ..., 6 = 토요일)
    const startDate = new Date(date); // 주 시작일
    startDate.setDate(date.getDate() - dayOfWeek + 1); // 이번 주 월요일로 설정

    const endDate = new Date(startDate); // 주 종료일
    endDate.setDate(startDate.getDate() + 6); // 이번 주 일요일로 설정

    return { startDate, endDate };
  };

  const handleSelect = (item) => {
    setSelected(item);
    onSelectPeriod(item);

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const week = getWeekNumber(selectedDate);

    let queryParams = { type: "daily", year, month, day };

    if (item === "주") {
      queryParams = { type: "weekly", year, month, week };
    } else if (item === "월") {
      queryParams = { type: "monthly", year, month };
    }

    console.log("📌 API 요청 파라미터:", queryParams);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onSelectDate(date);

   
    handleSelect(selected);

    setShowCalendar(false);
  };

  
  const getFormattedDate = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const week = getWeekNumber(selectedDate);

    if (selected === "일") {
      return `${year}년 ${month}월 ${day}일`;
    } else if (selected === "주") {
      const { startDate, endDate } = getWeekRange(selectedDate);
      return `${year}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일 ~ ${endDate.getMonth() + 1}월 ${endDate.getDate()}일`;
    } else if (selected === "월") {
      return `${year}년 ${month}월`;
    }
  };

  return (
    <div className="gardenheader">
      <h2>정원</h2>

    
      <div className="date-selector">
        {["일", "주", "월"].map((item) => (
          <button
            key={item}
            className={selected === item ? "selected" : ""}
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>

      
      <div
        className="year-month-selector"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {getFormattedDate()} <img src={arrowIcon} alt="Arrow Down" className="arrow" />
      </div>

      {showCalendar && (
        <div className="calendar-container">
          <MyCalendar
            onSelectDate={handleDateSelect}
            onClose={() => setShowCalendar(false) } defaultDate={selectedDate}
          />
        </div>
      )}
    </div>
  );
};

export default GardenHeader;
