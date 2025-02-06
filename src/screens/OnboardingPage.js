import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const onboardingData = [
  {
    id: 1,
    image: require("../assets/icons/onboarding1.png"), // 이미지 경로 수정
    text: "집중이 필요할 때, \n꽃을 심으러 오세요!",
  },
  {
    id: 2,
    image: require("../assets/icons/onboarding2.png"),
    text: "일에 집중하는 동안, \n꽃이 무럭무럭 자라요.",
  },
  {
    id: 3,
    image: require("../assets/icons/onboarding3.png"),
    text: "앱을 나가면 꽃이 시들어요. \n",
  },
  {
    id: 4,
    image: require("../assets/icons/onboarding4.png"),
    text: "꾸준한 몰입으로, \n나만의 정원을 완성해 보세요.",
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
    <div style={styles.container}>
      
      <img src={onboardingData[currentIndex].image} alt="Onboarding" style={styles.image} />

      
      <p style={styles.text}>
        {onboardingData[currentIndex].text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    
      <div style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: currentIndex === index ? "#00A806" : "#ccc",
            }}
          />
        ))}
      </div>

      
      <button style={styles.button} onClick={handleNext}>
        {currentIndex === onboardingData.length - 1 ? "시작하기" : "다음"}
      </button>
    </div>
  );
};


const styles = {
  container: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "250px",
    height: "250px",
    
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    
    textAlign: "center",
    marginTop: "100px",
  },
  indicatorContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute", // ✅ 화면의 절대 위치 설정
    bottom: "120px", // ✅ 화면의 맨 밑에서 30px 위에 배치
    left: "50%", // 중앙 정렬
    transform: "translateX(-50%)", // 정확히 가운데 위치
   
    justifyContent: "center",
    
  },
  indicator: {
    
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    margin: "0 5px",
  },
  button: {
    position: "absolute", // ✅ 화면의 절대 위치 설정
    bottom: "30px", // ✅ 화면의 맨 밑에서 30px 위에 배치
    left: "50%", // 중앙 정렬
    transform: "translateX(-50%)", // 정확히 가운데 위치
   
    width: "282px",
    height: "53px",
    backgroundColor: "#00A806",
    color: "white",
    fontSize: "18px",
    padding: "10px 20px",
    borderRadius: "12px",
    cursor: "pointer",
    border: "none",
    fontFamily : "KorailRoundGothicBold"
  },
};

export default Onboarding;
