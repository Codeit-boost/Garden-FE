import React from "react";
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage from "../../assets/flowers/메리골드.png";
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";

function PlantingBox({ selectedCategory, selectedFlower, time, setTime, isRunning, handleStartStop, isTimerMode }) {
  const handleTimeAdjust = (amount) => {
    if (isTimerMode && !isRunning) {
      setTime((prevTime) => Math.max(0, prevTime + amount * 3600));
    }
  };

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <section className="planting-box">
      <div className="planting-circle">
        <div className="soil-container">
          <img src={soilImage} alt="땅" className="soil-image" />
        </div>
        <img src={flowerStage} alt={selectedFlower} className="plant-image" />
      </div>

      {/* ✅ 선택한 카테고리 표시 */}
      <div className="category-container">
        <span className="category-dot"></span>
        <p className="category-text">{selectedCategory}</p>
      </div>

      {/* 🌿 시간 조절 */}
      <div className="timer-category-container">
        <button className="time-adjust" onClick={() => handleTimeAdjust(1)} disabled={!isTimerMode || isRunning}>
          <img src={leftArrow} alt="시간 증가" />
        </button>
        <p className="time-text">{formatTime(time)}</p>
        <button className="time-adjust" onClick={() => handleTimeAdjust(-1)} disabled={!isTimerMode || isRunning}>
          <img src={rightArrow} alt="시간 감소" />
        </button>
      </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={handleStartStop}>
        {isRunning ? "포기" : "시작"}
      </button>
    </section>
  );
}

export default PlantingBox;
