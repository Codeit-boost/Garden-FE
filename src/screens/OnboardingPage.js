import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const onboardingData = [
  {
    id: 1,
    image: require("../assets/icons/onboarding1.png"),
    text: "집중이 필요할 때,\n꽃을 심으러 오세요!",
  },
  {
    id: 2,
    image: require("../assets/icons/onboarding2.png"),
    text: "일에 집중하는 동안,\n꽃이 무럭무럭 자라요.",
  },
  {
    id: 3,
    image: require("../assets/icons/onboarding3.png"),
    text: "앱을 나가면 꽃이 시들어요.",
  },
  {
    id: 4,
    image: require("../assets/icons/onboarding4.png"),
    text: "꾸준한 몰입으로,\n나만의 정원을 완성해 보세요.",
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Image src={onboardingData[currentIndex].image} alt="Onboarding" />
      <Text>
        {onboardingData[currentIndex].text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Text>
      <IndicatorContainer>
        {onboardingData.map((_, index) => (
          <Indicator key={index} active={currentIndex === index} />
        ))}
      </IndicatorContainer>
      <NextButton onClick={handleNext}>
        {currentIndex === onboardingData.length - 1 ? "시작하기" : "다음"}
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 201px;
  height: auto;
  margin-top: 50px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  padding: 0 15px;
  line-height: 1.5;
  text-align: center;
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#00A806" : "#ccc")};
`;

const NextButton = styled.button`
  width: 90%;
  max-width: 300px;
  height: 50px;
  background-color: #00a806;
  color: white;
  font-size: 18px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  font-family: "KorailRoundGothicBold";
  margin-bottom: 20px;
`;

export default Onboarding;
