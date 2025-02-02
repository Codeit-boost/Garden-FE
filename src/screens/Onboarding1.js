import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Onboarding1.css"; // ✅ CSS 파일 적용
import onboardingImage from "../assets/icons/onboarding1.png";

const Onboarding1 = () => {
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
          집중이 필요할 때,
          <br />
          꽃을 심으러 오세요!
        </p>
        <div className="onboarding-indicator">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <button
        className="onboarding-button"
        onClick={() => navigate("/onboarding/2")}
      >
        다음
      </button>
    </div>
  );
};

export default Onboarding1;
