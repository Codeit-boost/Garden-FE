import React, { useState, useEffect } from "react";
import api from "../../api/api";
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage1 from "../../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../../assets/flowers/3단계 새싹.png";
import defaultFlower from "../../assets/flowers/장미.png"; // 기본값 (장미)
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";
import FlowerPlantSuccess from "./flowerplantsuccess";
import FlowerPlantFail from "./flowerplantfail";

function PlantingBox({ selectedCategory, selectedFlower, isRunning, setIsRunning, handleStartStop, isTimerMode, setIsTimerMode }) {
  // ✅ 기본값 설정
  const [time, setTime] = useState(isTimerMode ? 2 * 3600 : 0); // 타이머: 2시간, 스톱워치: 0초
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [focusTimeId, setFocusTimeId] = useState(null);

  // ✅ 시간 감소 or 증가 (타이머 모드에서는 감소, 스톱워치 모드에서는 증가)
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (isTimerMode ? Math.max(0, prevTime - 1) : prevTime + 1));
        setElapsedTime((prevElapsed) => prevElapsed + 1);
      }, 1000);
    } else {
      setElapsedTime(0);
    }
    return () => clearInterval(interval);
  }, [isRunning, isTimerMode]);

  // ✅ 1시간 경과 시 성공 모달 표시
  useEffect(() => {
    if (elapsedTime >= 3600) {
      setShowSuccessModal(true);
      setIsRunning(false);
    }
  }, [elapsedTime]);

  // ✅ 시간 조절 (15분 단위 증가/감소) - 스톱워치 모드에서는 비활성화
  const handleTimeAdjust = (amount) => {
    if (isTimerMode && !isRunning) {
      setTime((prevTime) => Math.max(0, prevTime + amount * 900)); // 900초 = 15분
    }
  };

  // ✅ 시간 포맷 (시:분:초)
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // ✅ 꽃 성장 단계 결정
  const getFlowerStage = () => {
    if (elapsedTime >= 3600) return selectedFlower || defaultFlower;
    if (elapsedTime >= 2700) return flowerStage3;
    if (elapsedTime >= 1800) return flowerStage2;
    if (elapsedTime >= 900) return flowerStage1;
    return soilImage;
  };

  return (
    <section className="planting-box">
      <div className="planting-circle">
        <div className="soil-container">
          <img src={soilImage} alt="땅" className="soil-image" />
        </div>
        <img src={getFlowerStage()} alt="꽃 성장 단계" className="plant-image" />
      </div>

      {/* ✅ 선택한 카테고리 표시 */}
      <div className="category-container">
        <span className="category-dot"></span>
        <p className="category-text">{selectedCategory}</p>
      </div>

      {/* 🌿 시간 조절 (15분 단위) - 스톱워치 모드에서는 비활성화 */}
      <div className="timer-category-container">
        <button className="time-adjust" onClick={() => handleTimeAdjust(1)} disabled={!isTimerMode || isRunning}>
          <img src={leftArrow} alt="시간 증가" />
        </button>
        <p className="time-text">{formatTime(time)}</p> {/* ✅ 시간 표시 */}
        <button className="time-adjust" onClick={() => handleTimeAdjust(-1)} disabled={!isTimerMode || isRunning}>
          <img src={rightArrow} alt="시간 감소" />
        </button>
      </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={() => {
        if (isRunning) {
          setShowFailModal(true);
        }
        setIsRunning(!isRunning);
      }}>
        {isRunning ? "포기" : "시작"}
      </button>

      {/* ✅ 성공 모달 */}
      {showSuccessModal && <FlowerPlantSuccess onClose={() => setShowSuccessModal(false)} />}

      {/* ✅ 실패 모달 */}
      {showFailModal && <FlowerPlantFail onClose={() => setShowFailModal(false)} />}
    </section>
  );
}

export default PlantingBox;
