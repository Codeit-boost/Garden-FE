import React from "react";
import hourglassicon from "../../assets/icons/모래시계.png";
import stopwatchicon from "../../assets/icons/시계.png";

const TimerToggle = ({ isTimerMode, setIsTimerMode, setIsRunning, setTime, isRunning }) => {
  return (
    <div
      className={`mode-toggle ${isTimerMode ? "timer" : "stopwatch"}`}
      onClick={() => {
        if (isRunning) return; // ✅ 실행 중일 때 토글 비활성화
        setIsTimerMode(!isTimerMode);
        setIsRunning(false);
        setTime(!isTimerMode ? 0 : 60); // ✅ 타이머 모드: 60초, 스톱워치 모드: 0초
      }}
    >
      <div className="mode-toggle-thumb">
        <img src={isTimerMode ? hourglassicon : stopwatchicon} alt="토글 아이콘" />
      </div>
    </div>
  );
};

export default TimerToggle;
