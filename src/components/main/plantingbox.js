import React, { useState, useEffect } from "react";
import { formatTimeForApi, convertTimeToSeconds, handleTimeAdjust } from "./timeutils";
import { startFocusTime, cancelFocusTime } from "../../api/focustime"; // ✅ API 호출 함수 가져오기
import { connectToSSE } from "./ssemanager"; // ✅ SSE 연결 함수 가져오기
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage1 from "../../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../../assets/flowers/3단계 새싹.png";
import defaultFlower from "../../assets/flowers/장미.png";
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";
import FlowerPlantSuccess from "./flowerplantsuccess"; // ✅ 성공 모달 추가
import FlowerPlantFail from "./flowerplantfail"; // ✅ 실패 모달 추가

const PlantingBox = ({ selectedCategory, selectedFlower, isRunning, setIsRunning }) => {
  const [time, setTime] = useState("00:15:00");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [currentFlowerImage, setCurrentFlowerImage] = useState(soilImage);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ 성공 모달 상태 추가
  const [showFailModal, setShowFailModal] = useState(false); // ✅ 실패 모달 상태 추가

  const flowerStages = [soilImage, flowerStage1, flowerStage2, flowerStage3, selectedFlower || defaultFlower];

  return (
    <section className="planting-box">
      <div className="planting-circle">
        <img src={currentFlowerImage} alt="꽃 성장 단계" className="plant-image" />
      </div>

      {/* ✅ 선택한 카테고리 표시 */}
      <div className="category-container">
        <p className="category-text">{selectedCategory}</p>
      </div>

      {/* 🌿 시간 조절 (15분 단위) */}
      <div className="timer-category-container">
        <button className="time-adjust" onClick={() => handleTimeAdjust(setTime, 1, true, isRunning)}>
          <img src={leftArrow} alt="시간 증가" />
        </button>
        <p className="time-text">{formatTimeForApi(convertTimeToSeconds(time))}</p>
        <button className="time-adjust" onClick={() => handleTimeAdjust(setTime, -1, true, isRunning)}>
          <img src={rightArrow} alt="시간 감소" />
        </button>
      </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={() => {
        if (isRunning) {
          cancelFocusTime(setIsRunning);
          setShowFailModal(true); // ✅ 실패 모달 표시
        } else {
          startFocusTime(setIsRunning, setTime, setCurrentFlowerImage, setCurrentStageIndex);
        }
      }}>
        {isRunning ? "포기" : "시작"}
      </button>

      {/* ✅ 성공 모달 */}
      {showSuccessModal && <FlowerPlantSuccess onClose={() => setShowSuccessModal(false)} />}

      {/* ✅ 실패 모달 */}
      {showFailModal && <FlowerPlantFail onClose={() => setShowFailModal(false)} />}
    </section>
  );
};

export default PlantingBox;
