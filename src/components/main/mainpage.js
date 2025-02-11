import React, { useState, useEffect } from "react";
import "../../styles/mainpage.css";
import api from "../../api/api"; // API 연동을 위한 axios 설정
import { connectToSSE } from "./ssemanager";

// 🌿 아이콘 및 이미지
import logo from "../../assets/icons/로고.png";
import slogan from "../../assets/icons/슬로건.png";
import notificationIcon from "../../assets/icons/알림.png";

// 📌 분리된 컴포넌트 import
import PlantingBox from "./plantingbox";
import PlantBox from "./plantbox";
import ModeToggle from "./timer-toggle";
import TotalTime from "./totaltime";
import FlowerSelect from "./flowerselect";  // ✅ 수정: 올바른 모달 파일 import 확인
import CategorySelect from "./categoryselect";  // ✅ 수정: 올바른 모달 파일 import 확인

function MainPage() {
  const [isTimerMode, setIsTimerMode] = useState(true);
  const [time, setTime] = useState(2 * 3600);
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [focusTime, setFocusTime] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("공부");
  const [selectedFlower, setSelectedFlower] = useState("메리골드");
  const [isFlowerModalOpen, setFlowerModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const disconnectSSE = connectToSSE(setFocusTime, setIsRunning, setIndex, initialized, setIsTimerMode, setInitialized);
    console.log(isRunning)
    return () => disconnectSSE();
  }, [isRunning, index]);

  const [flower, setFlower] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    const today = new Date();
    const fMonth = today.getMonth() + 1;
    const fDay = today.getDate();

    api.get(`/flower/todayflower?fMonth=${fMonth}&fDay=${fDay}`)
      .then((response) => {
        setFlower(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("오늘의 꽃 정보를 불러오는 중 오류 발생:", error);
        setError("오늘의 꽃 정보를 불러올 수 없습니다.");
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="main-container">
      <header className="header-container">
        <div className="header-top">
          <div className="header-left">
            <img src={logo} alt="로고" className="header-logo" />
            <img src={slogan} alt="슬로건" className="header-slogan" />
          </div>
          <img src={notificationIcon} alt="알림" className="header-notification" />
        </div>

        {/* ✅ 누적 시간 & 꽃 개수를 가로 정렬하는 컨테이너 */}
        <div className="time-flower-container">
          <TotalTime />
        </div>
      </header>

      <div className="divider"></div>

      {/* 🌱 꽃 심기 + 모드 토글 */}
      <div className="planting-header">
        <h2 className="planting-title">꽃 심기</h2>
        <ModeToggle 
          isTimerMode={isTimerMode} 
          setIsTimerMode={setIsTimerMode} 
          setIsRunning={setIsRunning} 
          setTime={setTime} 
        />
      </div>
      {isRunning && focusTime && focusTime.id ?(
        <PlantBox
        focusTime = {focusTime} 
        index = {index}
        isRunning = {isRunning}
        isTimerMode = {isTimerMode}
        setIsRunning = {setIsRunning}
        />
      ) : ( 
      <PlantingBox
        selectedCategory={selectedCategory}
        selectedFlower={selectedFlower}
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        handleStartStop={handleStartStop}
        isTimerMode={isTimerMode}
      />
      )}
      

      {/* 🌸 꽃 변경 & 카테고리 설정 버튼 */}
      <div className="action-buttons">
        <button className="change-flower-button" onClick={() => setFlowerModalOpen(true)}>꽃 선택</button>
        <button className="change-category-button" onClick={() => setCategoryModalOpen(true)}>카테고리 설정</button>
      </div>

      {/* 🌼 오늘의 꽃말 */}
      <div className="today-quote-container">
        <h3 className="today-quote-title">오늘의 꽃말</h3>
        <div className="quote-background">
          {isLoading ? (
            <p className="quote-text">오늘의 꽃 정보를 불러오는 중...</p>
          ) : error ? (
            <p className="quote-text">{error}</p>
          ) : flower ? (
            <>
              <p className="quote-text">{flower.name}의 "{flower.language}"</p>
            </>
          ) : (
            <p className="quote-text">오늘의 꽃 정보가 없습니다.</p>
          )}
        </div>
      </div>

      {/* 🌸 꽃 선택 모달 */}
      {isFlowerModalOpen && (
        <FlowerSelect
          onClose={() => setFlowerModalOpen(false)}
          onSelectFlower={(flower) => {
            setSelectedFlower(flower);
            setFlowerModalOpen(false);
          }}
        />
      )}

      {/* 📌 카테고리 선택 모달 */}
      {isCategoryModalOpen && (
        <CategorySelect
          isOpen={isCategoryModalOpen}
          onClose={() => setCategoryModalOpen(false)}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      )}
    </div>
  );
}

export default MainPage;


