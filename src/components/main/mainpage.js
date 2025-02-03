import React, { useState } from "react";
import "../../styles/mainpage.css"; // ✅ CSS 경로 수정

// 🌿 아이콘 이미지 개별 import (폴더명 변경: "icons", "flowers")
import logo from "../../assets/icons/로고.png";
import slogan from "../../assets/icons/슬로건.png";
import notificationIcon from "../../assets/icons/알림.png";
import witheredFlower from "../../assets/icons/시든꽃.png";
import completedFlower from "../../assets/icons/완성꽃.png";
import hourglassIcon from "../../assets/icons/모래시계.png";
import stopwatchIcon from "../../assets/icons/시계.png";
import upArrow from "../../assets/icons/화살표(위).png";
import downArrow from "../../assets/icons/화살표(아래).png";

// 🌸 꽃 & 흙 이미지 개별 import (폴더명 변경: "flowers")
import flowerStage from "../../assets/flowers/메리골드.png";
import soilImage from "../../assets/flowers/땅 이미지.png"; // ✅ 흙 이미지 추가

function MainPage() {
  const [isFlowerModalOpen, setFlowerModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isTimerMode, setIsTimerMode] = useState(true);

  return (
    <div className="main-container">
      {/* 🌿 헤더 */}
      <header className="header-container">
        <div className="header-top">
          <div className="header-left">
            <img src={logo} alt="로고" className="header-logo" />
            <img src={slogan} alt="슬로건" className="header-slogan" />
          </div>
          <img src={notificationIcon} alt="알림" className="header-notification" />
        </div>

        {/* 🌿 누적 시간 & 게이지 바 */}
        <div className="total-time-container">
          <div className="time-rank-container">
            <p className="total-time">07시간 01분</p>
            <p className="total-time-text">누적 시간</p>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* 🌸 성공한 꽃 / 실패한 꽃 개수 */}
        <div className="flower-count-container">
          <div className="flower-item">
            <img src={completedFlower} alt="완성 꽃" className="flower-icon" />
            <span className="flower-count">30</span>
          </div>
          <div className="flower-item">
            <img src={witheredFlower} alt="시든 꽃" className="flower-icon" />
            <span className="flower-count">1</span>
          </div>
        </div>

        {/* 🌿 "다음 랭킹까지" 텍스트 및 시간 */}
        <div className="ranking-info-container">
          <p>다음 랭킹까지 <span className="ranking-time">2시간 59분</span></p>
        </div>
      </header>

      {/* 🌿 얇은 회색 선 */}
      <div className="divider"></div>

      {/* 🌱 꽃 심기 박스 */}
      <div className="planting-container">
        <div className="planting-header">
          <h2 className="planting-title">꽃 심기</h2>
          <div
            className={`mode-toggle ${isTimerMode ? "timer" : "stopwatch"}`}
            onClick={() => setIsTimerMode(!isTimerMode)}
          >
            <div className="mode-toggle-thumb">
              <img src={isTimerMode ? hourglassIcon : stopwatchIcon} alt="토글 아이콘" />
            </div>
            <img src={hourglassIcon} alt="타이머 아이콘" className="mode-icon" />
            <img src={stopwatchIcon} alt="스톱워치 아이콘" className="mode-icon" />
          </div>
        </div>

        {/* 🌱 꽃 심기 영역 */}
        <section className="planting-box">
          <div className="planting-circle">
            {/* ✅ 흙 이미지 추가 (동그란 원 내부에서만 보이도록) */}
            <div className="soil-container">
              <img src={soilImage} alt="땅" className="soil-image" />
            </div>
            {/* 🌼 꽃 이미지 */}
            <img src={flowerStage} alt="꽃 단계" className="plant-image" />
          </div>
          <p className="category-text">공부</p>

          {/* 🌿 시간 조절 화살표를 좌우 배치 */}
          <div className="timer-category-container">
            <button className="time-adjust">
              <img src={upArrow} alt="시간 증가" />
            </button>
            <p className="time-text">03:00:00</p>
            <button className="time-adjust">
              <img src={downArrow} alt="시간 감소" />
            </button>
          </div>

          {/* 🌿 시작 버튼 */}
          <button className="start-button">시작</button>
        </section>
      </div>

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
    </div>
  );
}

export default MainPage;
