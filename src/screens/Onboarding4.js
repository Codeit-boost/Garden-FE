import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Onboarding4.css"; // ✅ CSS 파일 적용
import onboardingImage from "../assets/icons/onboarding4.png"; // 이미지 경로

const Onboarding4 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <img
          src={onboardingImage}
          alt="Flower growing"
          className="onboarding-image"
        />
        <p className="onboarding-text">
          더 열심히 집중해서,
          <br />
          나만의 정원을 가꿔보세요
        </p>
        <div className="onboarding-indicator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>
      </div>
      <button className="onboarding-button" onClick={() => navigate("/login")}>
        시작하기
      </button>
    </div>
  );
};

export default Onboarding4;
