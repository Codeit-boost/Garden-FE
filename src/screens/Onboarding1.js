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
} from "../styles/Onboarding1Styles.js";
import onboardingImage from "../assets/icons/onboarding1.png";

const Onboarding1 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Image src={onboardingImage} alt="Flower growing" />
        <Text>
          집중이 필요할 때,
          <br />
          꽃을 심으러 오세요!
        </Text>
        <Indicator>
          <Dot className="active" />
          <Dot />
          <Dot />
          <Dot />
        </Indicator>
      </Content>
      <Button onClick={() => navigate("/onboarding/2")}>다음</Button>
    </Container>
  );
};

export default Onboarding1;
