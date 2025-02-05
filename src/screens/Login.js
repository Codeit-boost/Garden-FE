import React from "react";
import { getKakaoLoginUrl } from "../api/auth"; // ✅ API 함수 가져오기
import "../styles/Login.css";
import kakaoLogo from "../assets/icons/kakalogo.png";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const handleKakaoLogin = () => {
    window.location.href = getKakaoLoginUrl(); // ✅ `redirect_uri`가 `/kakao/callback`으로 이동하도록 수정됨
  };

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
