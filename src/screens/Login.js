import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import "../styles/Login.css"; // ✅ CSS 파일 적용
import kakaoLogo from "../assets/icons/kakalogo.png";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div className="login-container">
      <img src={logo} alt="Garden Logo" className="login-logo" />
      <button className="login-button" onClick={() => navigate("/home")}>
        <img src={kakaoLogo} alt="Kakao Logo" className="login-kakao-logo" />
        카카오 로그인
      </button>
    </div>
  );
};

export default Login;
