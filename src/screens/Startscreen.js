import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo } from "../styles/StartscreenStyles.js";
import logo from "../assets/icons/logo.png"; // 로고 이미지 경로

const Startscreen = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/onboarding/1")}>
      <Logo src={logo} alt="Garden Logo" />
    </Container>
  );
};

export default Startscreen;
