import React from "react";
import leftarrow from "../../assets/icons/화살표(위).png";
import rightarrow from "../../assets/icons/화살표(아래).png";
import { handleTimeIncrease, handleTimeDecrease } from "./timeutils"; // ✅ 새로운 함수 import

const TimeControl = ({ isTimerMode, isRunning, setTime, time }) => {
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="timer-category-container">
      {/* ✅ 왼쪽 버튼: 15분 증가 */}
      <button
        className="time-adjust"
        onClick={() => handleTimeIncrease(setTime, isTimerMode, isRunning)}
        disabled={!isTimerMode || isRunning}
      >
        <img src={leftarrow} alt="시간 증가" />
      </button>

      <p className="time-text">{formatTime(time)}</p>

      {/* ✅ 오른쪽 버튼: 15분 감소 */}
      <button
        className="time-adjust"
        onClick={() => handleTimeDecrease(setTime, isTimerMode, isRunning)}
        disabled={!isTimerMode || isRunning}
      >
        <img src={rightarrow} alt="시간 감소" />
      </button>
    </div>
  );
};

export default TimeControl;
