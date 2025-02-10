import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/icons/onboarding3.png";
import {
  OnboardingContainer,
  OnboardingContent,
  OnboardingImage,
  OnboardingText,
  OnboardingIndicator,
  Dot,
  OnboardingButton,
} from "../styles/Onboarding3.styled.js";

const Onboarding3 = () => {
  const navigate = useNavigate();

  return (
    <OnboardingContainer>
      <OnboardingContent>
        <OnboardingImage src={onboardingImage} alt="Withered flower" />
        <OnboardingText>앱을 나가면 꽃이 시들어요.</OnboardingText>
        <OnboardingIndicator>
          <Dot />
          <Dot />
          <Dot active={true} />
          <Dot />
        </OnboardingIndicator>
      </OnboardingContent>
      <OnboardingButton onClick={() => navigate("/onboarding/4")}>
        다음
      </OnboardingButton>
    </OnboardingContainer>
  );
};

export default Onboarding3;
