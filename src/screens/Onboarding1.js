import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/icons/onboarding1.png";
import {
  OnboardingContainer,
  OnboardingContent,
  OnboardingImage,
  OnboardingText,
  OnboardingIndicator,
  Dot,
  OnboardingButton,
} from "../styles/Onboarding1.styled.js"; //

const Onboarding1 = () => {
  const navigate = useNavigate();

  return (
    <OnboardingContainer>
      <OnboardingContent>
        <OnboardingImage src={onboardingImage} alt="Flower growing" />
        <OnboardingText>
          집중이 필요할 때,
          <br />
          꽃을 심으러 오세요!
        </OnboardingText>
        <OnboardingIndicator>
          <Dot active={true} />
          <Dot />
          <Dot />
          <Dot />
        </OnboardingIndicator>
      </OnboardingContent>
      <OnboardingButton onClick={() => navigate("/onboarding/2")}>
        다음
      </OnboardingButton>
    </OnboardingContainer>
  );
};

export default Onboarding1;
