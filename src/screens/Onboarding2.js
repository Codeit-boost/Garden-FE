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
} from "../styles/Onboarding2Styles.js";
import onboardingImage from "../assets/icons/onboarding2.png"; // 이미지 경로

const Onboarding2 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Image src={onboardingImage} alt="Growing plant" />
        <Text>
          일에 집중하는 동안,
          <br />
          꽃이 무럭무럭 자라요.
        </Text>
        <Indicator>
          <Dot />
          <Dot className="active" />
          <Dot />
          <Dot />
        </Indicator>
      </Content>
      <Button onClick={() => navigate("/onboarding/3")}>다음</Button>
    </Container>
  );
};

export default Onboarding2;
