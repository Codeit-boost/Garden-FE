import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { fetchMyInfo } from "../../api/member";  // ✅ 사용자 정보 API 연동
import soilImage from "../../assets/flowers/땅 이미지.png";
import flowerStage1 from "../../assets/flowers/1단계 새싹.png";
import flowerStage2 from "../../assets/flowers/2단계 새싹.png";
import flowerStage3 from "../../assets/flowers/3단계 새싹.png";
import defaultFlower from "../../assets/flowers/장미.png";
import leftArrow from "../../assets/icons/화살표(위).png";
import rightArrow from "../../assets/icons/화살표(아래).png";
import FlowerPlantSuccess from "./flowerplantsuccess";
import FlowerPlantFail from "./flowerplantfail";

const PlantingBox = ({ selectedCategory, selectedFlower, isRunning, setIsRunning, handleStartStop, isTimerMode, setIsTimerMode }) => {
  const [time, setTime] = useState(isTimerMode ? 2 * 3600 : 0); // 타이머: 2시간, 스톱워치: 0초
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [focusTimeId, setFocusTimeId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // ✅ 사용자 정보 불러오기
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        console.log("📡 [API 요청] 사용자 정보 가져오기...");
        const data = await fetchMyInfo();
        console.log("✅ [API 성공] 사용자 정보:", data);
        setUserInfo(data);
      } catch (error) {
        console.error("❌ [API 실패] 사용자 정보 불러오기 오류:", error);
      }
    };

    loadUserInfo();
  }, []);

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

  // ✅ 15분마다 꽃 성장 단계 업데이트
  const getFlowerStage = () => {
    if (elapsedTime >= 3600) return selectedFlower || defaultFlower;
    if (elapsedTime >= 2700) return flowerStage3;
    if (elapsedTime >= 1800) return flowerStage2;
    if (elapsedTime >= 900) return flowerStage1;
    return soilImage;
  };

  // ✅ 시간 조절 (15분 단위 증가/감소)
  const handleTimeAdjust = (amount) => {
    if (isTimerMode && !isRunning) {
      setTime((prevTime) => Math.max(0, prevTime + amount * 900)); // 900초 = 15분
    }
  };

  // ✅ 시간 포맷 (HH:MM:SS)
  const formatTimeForApi = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    return `${h}:${m}:00`;
  };

  // ✅ `target_time`을 초(Seconds) 단위로 변환
  const convertTimeToSeconds = (timeString) => {
    if (!timeString) {
      console.warn("⚠️ convertTimeToSeconds: target_time 값이 없음.");
      return 0;
    }
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // ✅ 집중시간 생성 API 요청
  const startFocusTime = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("❌ 인증 토큰이 없습니다.");
      return;
    }

    if (!userInfo || !userInfo.id) {
      console.error("❌ 사용자 정보가 없습니다.");
      return;
    }

    // ✅ API 요청 데이터
    const requestData = {
      target_time: formatTimeForApi(time), // "HH:MM:SS" 형식
      category: selectedCategory || "기본",
      flower_id: 1, // ✅ 현재 기본값 설정 (나중에 selectedFlower 값 적용 예정)
    };

    console.log("📡 [API 요청] 집중시간 생성 데이터:", requestData);

    try {
      const response = await api.post("/focusTime", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const responseData = response.data;

      console.log("📡 [API 응답] 집중시간 생성 결과:", responseData);

      // ✅ target_time 값이 정상적으로 들어왔는지 확인 후 변환
      if (responseData.target_time) {
        setTime(convertTimeToSeconds(responseData.target_time));
      } else {
        console.warn("⚠️ [API 경고] 서버 응답에 target_time 값이 없습니다. 기본값 유지.");
      }

      setFocusTimeId(responseData.id);
      setIsRunning(true);

      console.log("✅ [API 성공] 집중시간 생성 완료:", responseData);
    } catch (error) {
      console.error("❌ [API 실패] 집중시간 생성 오류:", error);
    }
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

      {/* 🌿 시간 조절 (15분 단위) */}
      <div className="timer-category-container">
        <button className="time-adjust" onClick={() => handleTimeAdjust(1)} disabled={!isTimerMode || isRunning}>
          <img src={leftArrow} alt="시간 증가" />
        </button>
        <p className="time-text">{formatTimeForApi(time)}</p>
        <button className="time-adjust" onClick={() => handleTimeAdjust(-1)} disabled={!isTimerMode || isRunning}>
          <img src={rightArrow} alt="시간 감소" />
        </button>
      </div>

      {/* 🌿 시작 & 포기 버튼 */}
      <button className="start-button" onClick={() => {
        if (isRunning) {
          setShowFailModal(true);
        } else {
          startFocusTime(); // API 요청
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
};

export default PlantingBox;
