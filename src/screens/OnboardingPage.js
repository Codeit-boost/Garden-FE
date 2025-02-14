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

      <BottomWrapper>
        <IndicatorContainer>
          {onboardingData.map((_, index) => (
            <Indicator key={index} active={currentIndex === index} />
          ))}
        </IndicatorContainer>

        <NextButton onClick={handleNext}>
          {currentIndex === onboardingData.length - 1 ? "시작하기" : "다음"}
        </NextButton>
      </BottomWrapper>
    </Container>
  );
};

export default Onboarding;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 화면 전체를 사용하되 스크롤바가 없도록 오버플로우 숨김 */
  height: 100vh;
  width: 100%;
  overflow: hidden;

  background-color: #f5f5f5;
  box-sizing: border-box;
  margin: 0;
  padding: 50px;
  text-align: center;
`;

const Image = styled.img`
  /* 화면이 작은 기기에서도 이미지가 너무 커지지 않도록 */
  width: 80%;
  max-width: 200px;
  height: auto;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0;
  padding: 0 10px;
  line-height: 1.4;
  text-align: center;
`;

/* 인디케이터와 버튼을 아래쪽에 배치하는 래퍼 */
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 남은 공간을 밀어내어 화면 아래에 위치시키고, 
     margin-bottom으로 버튼을 조금 띄움 */
  margin-top: auto;
  margin-bottom: 20px;
  gap: 10px; /* 인디케이터와 버튼 사이 간격 */
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
  width: 80%;
  max-width: 300px;
  height: 45px;
  width: 300px;
  background-color: #00a806;
  color: white;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  font-family: "KorailRoundGothicBold";
`;
