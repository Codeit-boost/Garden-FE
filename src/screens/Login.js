import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import { Container, Logo, Button } from "../styles/LoginStyles.js";
import kakaoLogo from "../assets/icons/kakalogo.png";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <Container>
      <Logo src={logo} alt="Garden Logo" />
      <Button onClick={() => navigate("/home")}>
        {" "}
        {/* 클릭 시 홈 화면으로 이동 */}
        <img src={kakaoLogo} alt="Kakao Logo" />
        카카오 로그인
      </Button>
    </Container>
  );
};

export default Login;
