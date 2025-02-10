import styled from "styled-components";

/* ✅ 전체 컨테이너 스타일 */
export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 94vh; /* 화면 전체 높이 사용 */
  padding: 24px;
  background-color: #ffffff;
`;

/* ✅ 컨텐츠 스타일 */
export const OnboardingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; /* 상단 간격 설정 */
`;

/* ✅ 이미지 스타일 */
export const OnboardingImage = styled.img`
  width: 300px;
  height: 300px;
  max-width: 100%;
  margin-top: 200px;
  margin-bottom: 20px;
`;

/* ✅ 텍스트 스타일 */
export const OnboardingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #000;
  margin: 30px 0;
  line-height: 1.5;
`;

/* ✅ 인디케이터 스타일 */
export const OnboardingIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
  margin-bottom: 20px;
`;

/* ✅ 점(인디케이터) 스타일 */
export const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 6px;
  background-color: ${(props) => (props.active ? "#4caf50" : "#e0e0e0")};
  border-radius: 50%;
`;

/* ✅ 버튼 스타일 */
export const OnboardingButton = styled.button`
  width: 100%;
  max-width: 360px;
  padding: 18px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 60px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;
