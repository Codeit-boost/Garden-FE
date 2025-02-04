import React, { useState, useEffect } from "react";
import "../../styles/mainpage.css";

// 🌿 아이콘 및 이미지
import logo from "../../assets/icons/로고.png";
import slogan from "../../assets/icons/슬로건.png";
import notificationIcon from "../../assets/icons/알림.png";

// 📌 분리된 컴포넌트 import
import PlantingBox from "./plantingbox";
import ModeToggle from "./timer-toggle";
import TotalTime from "./totaltime";
import FlowerSelect from "./flowerselect";
import CategorySelect from "./categoryselect";

function MainPage() {
  const [isTimerMode, setIsTimerMode] = useState(true);
  const [time, setTime] = useState(2 * 3600);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("공부");
  const [selectedFlower, setSelectedFlower] = useState("메리골드");
  const [isFlowerModalOpen, setFlowerModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (isTimerMode ? Math.max(0, prevTime - 1) : prevTime + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isTimerMode]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

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

        <TotalTime totalTime="07시간 01분" progress={70} />
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

      <PlantingBox
        selectedCategory={selectedCategory}
        selectedFlower={selectedFlower}
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        handleStartStop={handleStartStop}
        isTimerMode={isTimerMode}
      />

      {/* 🌸 꽃 변경 & 카테고리 설정 버튼 */}
      <div className="action-buttons">
        <button className="change-flower-button" onClick={() => setFlowerModalOpen(true)}>꽃 선택</button>
        <button className="change-category-button" onClick={() => setCategoryModalOpen(true)}>카테고리 설정</button>
      </div>

      {/* 🌼 오늘의 꽃말 */}
      <div className="today-quote-container">
        <h3 className="today-quote-title">오늘의 꽃말</h3>
        <div className="quote-background">
          <p className="quote-text">해바라기의 "열정 추억"</p>
        </div>
      </div>

      {/* 🌸 모달 */}
      {isFlowerModalOpen && (
        <FlowerSelect
          onClose={() => setFlowerModalOpen(false)}
          onSelectFlower={(flower) => {
            setSelectedFlower(flower);
            setFlowerModalOpen(false);
          }}
        />
      )}

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
