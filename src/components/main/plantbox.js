import React, { useState, useEffect } from "react";
import { formatTime, convertTimeToSeconds, handleTimeAdjust } from "./timeutils";
import { startFocusTime, cancelFocusTime } from "../../api/focustime"; // ✅ API 호출 함수 가져오기
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage1 from "../../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../../assets/flowers/3단계 새싹.png";
import defaultFlower from "../../assets/flowers/장미.png";
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";
import FlowerPlantSuccess from "./flowerplantsuccess"; // ✅ 성공 모달 추가
import FlowerPlantFail from "./flowerplantfail"; // ✅ 실패 모달 추가

const PlantBox = ({ focusTime, index ,isRunning, isTimerMode, setIsRunning }) => {
    const initialTime =
    focusTime.target_time != "00:00:00"
    ? convertTimeToSeconds(focusTime.target_time) -
    (convertTimeToSeconds(focusTime.time) + (Date.now() - focusTime.now) / 1000)
    : convertTimeToSeconds(focusTime.time) + (Date.now() - focusTime.now) / 1000;

    console.log(focusTime.target_time,focusTime.time, initialTime)

  const [time, setTime] = useState(initialTime);
  const [currentFlowerImage, setCurrentFlowerImage] = useState(focusTime.currentFlowerImage);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ 성공 모달 상태 추가
  const [showFailModal, setShowFailModal] = useState(false); // ✅ 실패 모달 상태 추가

  const flowerStages = [soilImage, flowerStage1, flowerStage2, flowerStage3, focusTime.FlowerImage || defaultFlower];
 
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (focusTime.target_time != "00:00:00" ? Math.max(0, prevTime - 1) : prevTime + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning,]);
  
  useEffect(() => {
    if (index > 4 && isTimerMode) {
      setShowSuccessModal(true);
    }
  }, [index, isTimerMode]); 

  return (
    <section className="planting-box">
      <div className="planting-circle">
        <img src={flowerStages[index]} alt="꽃 성장 단계" className="plant-image" />
      </div>

      {/* ✅ 선택한 카테고리 표시 */}
      <div className="category-container">
        <p className="category-text">{focusTime.category}</p>
      </div>

      {/* 🌿 시간 보여주기 */}
        <div className="timer-category-container">
            <p className="time-text">{formatTime(time)}</p>
        </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={() => {
        if (isRunning) {
          cancelFocusTime(setIsRunning, focusTime.id);
          if(isTimerMode){
            setShowFailModal(true); // ✅ 실패 모달 표시
          }else{ // 스톱워치는 성공
            setShowSuccessModal(true); // ✅ 성공 모달 표시
          }
          
        } else {
          startFocusTime(setIsRunning, setTime, setCurrentFlowerImage, 0);
        }
      }}>
        {isRunning ? "포기" : "시작"}
      </button>

      {/* ✅ 성공 모달 */}
      {showSuccessModal && <FlowerPlantSuccess onClose={() => {window.location.reload(); setShowSuccessModal(false);}} />}

      {/* ✅ 실패 모달 */}
      {showFailModal && <FlowerPlantFail onClose={() => setShowFailModal(false)} />}
    </section>
  );
};

export default PlantBox;
