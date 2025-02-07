import React from "react";
import leftarrow from "../../assets/icons/화살표(위).png";
import rightarrow from "../../assets/icons/화살표(아래).png";

const TimeControl = ({ isTimerMode, isRunning, handleTimeAdjust, time }) => {
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="timer-category-container">
      <button className="time-adjust" onClick={() => handleTimeAdjust(1)} disabled={!isTimerMode || isRunning}>
        <img src={leftarrow} alt="시간 증가" />
      </button>
      <p className="time-text">{formatTime(time)}</p>
      <button className="time-adjust" onClick={() => handleTimeAdjust(-1)} disabled={!isTimerMode || isRunning}>
        <img src={rightarrow} alt="시간 감소" />
      </button>
    </div>
  );
};

export default TimeControl;
