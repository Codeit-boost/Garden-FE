import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Onboarding2.css"; // ✅ CSS 파일 적용
import onboardingImage from "../assets/icons/onboarding2.png"; // 이미지 경로

const Onboarding2 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <img
          src={onboardingImage}
          alt="Growing plant"
          className="onboarding-image"
        />
        <p className="onboarding-text">
          일에 집중하는 동안,
          <br />
          꽃이 무럭무럭 자라요.
        </p>
        <div className="onboarding-indicator">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <button
        className="onboarding-button"
        onClick={() => navigate("/onboarding/3")}
      >
        다음
      </button>
    </div>
  );
};

export default Onboarding2;
