import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around; /* 균등 정렬 */
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px; /* 높이 조정 */
  background-color: #ffffff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  padding: 10px 0;
`;

export const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; /* 모든 아이콘이 동일한 너비를 가짐 */
  font-size: 14px;
  color: ${(props) =>
    props.active ? "#000000" : "#b0b0b0"}; /* 활성화된 아이콘 검정색 */
  cursor: pointer;
  transition: color 0.3s;

  span {
    font-size: 12px;
    font-weight: ${(props) =>
      props.active ? "bold" : "normal"}; /* 활성화된 텍스트 볼드 */
    margin-top: 4px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#F5F5F5" : "transparent"}; /* 선택된 아이콘 배경 */
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  filter: ${(props) =>
    props.active
      ? "none"
      : "grayscale(100%) opacity(0.5)"}; /* 비활성화 아이콘 투명도 */
`;
