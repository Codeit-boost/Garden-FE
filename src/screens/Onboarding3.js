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
} from "../styles/Onboarding3Styles.js";
import onboardingImage from "../assets/icons/onboarding3.png"; // 이미지 경로

const Onboarding3 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Image src={onboardingImage} alt="Withered flower" />
        <Text>앱을 나가면 꽃이 시들어요.</Text>
        <Indicator>
          <Dot />
          <Dot />
          <Dot className="active" />
          <Dot />
        </Indicator>
      </Content>
      <Button onClick={() => navigate("/onboarding/4")}>다음</Button>
    </Container>
  );
};

export default Onboarding3;
