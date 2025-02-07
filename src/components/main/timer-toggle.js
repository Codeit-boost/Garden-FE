import React from "react";
import hourglassicon from "../../assets/icons/모래시계.png";
import stopwatchicon from "../../assets/icons/시계.png";

const TimerToggle = ({ isTimerMode, setIsTimerMode, setIsRunning, setTime }) => {
  return (
    <div
      className={`mode-toggle ${isTimerMode ? "timer" : "stopwatch"}`}
      onClick={() => {
        setIsTimerMode(!isTimerMode);
        setIsRunning(false);
        setTime(isTimerMode ? 0 : 2 * 3600);
      }}
    >
      <div className="mode-toggle-thumb">
        <img src={isTimerMode ? hourglassicon : stopwatchicon} alt="토글 아이콘" />
      </div>
    </div>
  );
};

export default TimerToggle;
