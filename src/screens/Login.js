import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getKakaoLoginUrl } from "../api/auth"; // 수정된 함수 import
import "../styles/Login.css";
import kakaoLogo from "../assets/icons/kakalogo.png";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const navigate = useNavigate();

  // 이미 로그인 상태라면 대시보드로 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/home"); // 원하는 경로로 변경 가능
    }
  }, [navigate]);

  // 카카오 로그인 버튼 클릭 핸들러
  const handleKakaoLogin = useCallback(() => {
    const loginUrl = getKakaoLoginUrl();
    if (!loginUrl) {
      console.error("Kakao login URL is not defined.");
      return;
    }
    window.location.href = loginUrl;
  }, []);

  return (
    <div className="login-container">
      <img src={logo} alt="Garden Logo" className="login-logo" />
      <button className="login-button" onClick={handleKakaoLogin}>
        <img src={kakaoLogo} alt="Kakao Logo" className="login-kakao-logo" />
        카카오 로그인
      </button>
    </div>
  );
};

export default Login;
