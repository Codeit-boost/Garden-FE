import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/icons/onboarding2.png"; // ✅ 이미지 경로 추가
import {
  OnboardingContainer,
  OnboardingContent,
  OnboardingImage,
  OnboardingText,
  OnboardingIndicator,
  Dot,
  OnboardingButton,
} from "../styles/Onboarding2.styled.js"; // ✅ Styled-Components import

const Onboarding2 = () => {
  const navigate = useNavigate();

  return (
    <OnboardingContainer>
      <OnboardingContent>
        <OnboardingImage src={onboardingImage} alt="Growing plant" />
        <OnboardingText>
          일에 집중하는 동안,
          <br />
          꽃이 무럭무럭 자라요.
        </OnboardingText>
        <OnboardingIndicator>
          <Dot />
          <Dot active={true} />
          <Dot />
          <Dot />
        </OnboardingIndicator>
      </OnboardingContent>
      <OnboardingButton onClick={() => navigate("/onboarding/3")}>
        다음
      </OnboardingButton>
    </OnboardingContainer>
  );
};

export default Onboarding2;
