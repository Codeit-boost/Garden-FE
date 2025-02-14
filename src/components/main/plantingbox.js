import React, { useState, useEffect } from "react";
import { formatTimeForApi, handleTimeIncrease, handleTimeDecrease } from "./timeutils";
import { startFocusTime, cancelFocusTime } from "../../api/focustime";
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage1 from "../../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../../assets/flowers/3단계 새싹.png";
import defaultFlower from "../../assets/flowers/장미.png";
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";
import FlowerPlantSuccess from "./flowerplantsuccess";
import FlowerPlantFail from "./flowerplantfail";
import LockModeScreen from "../../screens/LockModeScreen";
import mode from "../settings/ModeSettingsModal";
// 🌼 꽃 ID와 이름 매핑
const flowerMap = {
  1: "장미",
  2: "해바라기",
  3: "메리골드",
  4: "초롱꽃",
  5: "코스모스",
  6: "수선화",
  7: "물망초",
  8: "능소화",
  9: "제비꽃",
  10: "라벤더",
  11: "도라지꽃",
  12: "히아신스",
};

const PlantingBox = ({ selectedCategory, selectedFlower, isRunning, setIsRunning, isTimerMode }) => {
  const [time, setTime] = useState(isTimerMode ? 60 : 0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [currentFlowerImage, setCurrentFlowerImage] = useState(soilImage);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const selectedFlowerName = flowerMap[selectedFlower] || "알 수 없음";
  const flowerStages = [soilImage, flowerStage1, flowerStage2, flowerStage3 , selectedFlower || defaultFlower];

  // ✅ 🔥 모드 변경 시 초기 시간 설정
  useEffect(() => {
    setTime(isTimerMode ? 900 : 0); // 토글로 설정하는 초기시간 값
    setCurrentStageIndex(0);
    setCurrentFlowerImage(soilImage);
  }, [isTimerMode]);

  // ✅ **스톱워치 모드에서 15분(900초)마다 성장**
  useEffect(() => {
    if (!isTimerMode && isRunning) {
      const growthStage = Math.min(Math.floor(time / 15), flowerStages.length - 1); // 15분마다 성장
      if (growthStage !== currentStageIndex) {
        setCurrentStageIndex(growthStage);
        setCurrentFlowerImage(flowerStages[growthStage]);
      }
    }
  }, [time, isTimerMode, isRunning]); // `time` 값 변경 시마다 실행
  
  const isLockMode = mode === "잠금 모드"; // ✅ mode 값이 "잠금 모드"인지 확인
  if (isRunning && isLockMode) {
    return (
      <LockModeScreen
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        selectedCategory={selectedCategory}
        selectedFlower={selectedFlower}
        isTimerMode={isTimerMode}
      />
    );
  }

  return (
    <section className="planting-box">
      <div className="planting-circle">
        <img src={currentFlowerImage} alt="꽃 성장 단계" className="plant-image" />
      </div>

      {/* ✅ 선택한 카테고리 표시 */}
      <div className="category-container">
        <p className="category-text">{selectedCategory}</p>
      {/* ✅ 선택한 꽃 표시 (새로운 코드 추가) */}
  <p className="selected-flower-text">선택한 꽃: {selectedFlowerName}</p>
</div>

      {/* 🌿 시간 조절 (타이머 모드일 때만 작동) */}
      <div className="timer-category-container">
        <button 
          className="time-adjust" 
          onClick={() => isTimerMode && handleTimeIncrease(setTime, true, isRunning)} 
          disabled={!isTimerMode || isRunning}
        >
          <img src={leftArrow} alt="시간 증가" />
        </button>

        <p className="time-text">{formatTimeForApi(time)}</p>

        <button 
          className="time-adjust" 
          onClick={() => isTimerMode && handleTimeDecrease(setTime, true, isRunning)} 
          disabled={!isTimerMode || isRunning}
        >
          <img src={rightArrow} alt="시간 감소" />
        </button>
      </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={() => {
        if (isRunning) {
          cancelFocusTime(setIsRunning);
          setShowFailModal(true);
        } else {
          startFocusTime(setIsRunning, isTimerMode ? time : "00:00:00", selectedCategory, selectedFlower);
        }
      }}>
        {isRunning ? "포기" : "시작"}
      </button>

      {/* ✅ 성공/실패 모달 */}
      {showSuccessModal && <FlowerPlantSuccess onClose={() => setShowSuccessModal(false)} />}
      {showFailModal && <FlowerPlantFail onClose={() => setShowFailModal(false)} />}
    </section>
  );
};

export default PlantingBox;
