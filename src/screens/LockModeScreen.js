import React, { useEffect } from "react";
import { formatTime } from "../components/main/timeutils";
import soilImage from "../assets/flowers/땅 이미지.png";
import flowerStage1 from "../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../assets/flowers/3단계 새싹.png";
import defaultFlower from "../assets/flowers/장미.png";

const LockModeScreen = ({ time, setTime, isRunning, setIsRunning, selectedCategory, selectedFlower, isTimerMode }) => {
  const flowerStages = [soilImage, flowerStage1, flowerStage2, flowerStage3, selectedFlower || defaultFlower];

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (isTimerMode ? Math.max(0, prevTime - 1) : prevTime + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isTimerMode]);

  return (
    <div className="lock-mode-container">
      <div className="lock-mode-header">
        <h2>잠금 모드 ({isTimerMode ? "목표 모드" : "자유 모드"})</h2>
      </div>

      <div className="planting-circle">
        <img src={flowerStages[Math.min(4, Math.floor(time / 900))]} alt="꽃 성장 단계" className="plant-image" />
      </div>

      <p className="category-text">{selectedCategory}</p>
      <p className="time-text">{formatTime(time)}</p>

      <button className="stop-button" onClick={() => setIsRunning(false)}>포기</button>
    </div>
  );
};

export default LockModeScreen;
