import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Startscreen.css"; // CSS 파일 임포트
import logo from "../assets/icons/logo.png"; // 로고 이미지 경로

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container" onClick={() => navigate("/Onboarding")}>
      <img className="logo" src={logo} alt="Garden Logo" />
    </div>
  );
};

export default Startscreen;
