import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/icons/onboarding4.png";
import {
  OnboardingContainer,
  OnboardingContent,
  OnboardingImage,
  OnboardingText,
  OnboardingIndicator,
  Dot,
  OnboardingButton,
} from "../styles/Onboarding4.styled.js"; // ✅ Styled-Components import

const Onboarding4 = () => {
  const navigate = useNavigate();

  return (
    <OnboardingContainer>
      <OnboardingContent>
        <OnboardingImage src={onboardingImage} alt="Flower growing" />
        <OnboardingText>
          더 열심히 집중해서,
          <br />
          나만의 정원을 가꿔보세요
        </OnboardingText>
        <OnboardingIndicator>
          <Dot />
          <Dot />
          <Dot />
          <Dot active={true} />
        </OnboardingIndicator>
      </OnboardingContent>
      <OnboardingButton onClick={() => navigate("/login")}>
        시작하기
      </OnboardingButton>
    </OnboardingContainer>
  );
};

export default Onboarding4;
