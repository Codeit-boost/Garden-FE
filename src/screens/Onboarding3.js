import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Onboarding3.css"; // ✅ CSS 파일 적용
import onboardingImage from "../assets/icons/onboarding3.png"; // 이미지 경로

const Onboarding3 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <img
          src={onboardingImage}
          alt="Withered flower"
          className="onboarding-image"
        />
        <p className="onboarding-text">앱을 나가면 꽃이 시들어요.</p>
        <div className="onboarding-indicator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
      <button
        className="onboarding-button"
        onClick={() => navigate("/onboarding/4")}
      >
        다음
      </button>
    </div>
  );
};

export default Onboarding3;
