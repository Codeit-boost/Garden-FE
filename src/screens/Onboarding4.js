import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Image,
  Text,
  Indicator,
  Dot,
  Button,
} from "../styles/Onboarding4Styles.js"; // 스타일 파일 import
import onboardingImage from "../assets/icons/onboarding4.png"; // 이미지 경로

const Onboarding4 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Image src={onboardingImage} alt="Flower growing" />
        <Text>
          더 열심히 집중해서,
          <br />
          나만의 정원을 가꿔보세요
        </Text>
        <Indicator>
          <Dot />
          <Dot />
          <Dot />
          <Dot className="active" />
        </Indicator>
      </Content>
      <Button onClick={() => navigate("/login")}>시작하기</Button>
    </Container>
  );
};

export default Onboarding4;
