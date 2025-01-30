import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 94vh; /* 화면 전체 높이 사용 */
  padding: 24px;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; /* 상단 간격 설정 */
`;

export const Image = styled.img`
  width: 201px; /* 지정된 이미지 너비 */
  height: 230px; /* 지정된 이미지 높이 */
  max-width: 100%; /* 최대 크기 제한 */
  margin-top: 291px; /* 위에서부터 이미지까지의 간격 */
  margin-bottom: 20px; /* 이미지와 텍스트 간격 */
`;

export const Text = styled.p`
  font-size: 24px; /* 텍스트 크기 */
  font-weight: bold; /* 글씨 굵게 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  color: #000;
  margin: 30px 0 30px; /* 아래 간격 추가 */
  line-height: 1.5; /* 줄 간격 */
`;

export const Indicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px; /* 텍스트와의 간격 */
  margin-bottom: 20px; /* 아래 버튼과의 간격 */
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 6px; /* 점 간격 */
  background-color: #e0e0e0;
  border-radius: 50%;

  &.active {
    background-color: #4caf50;
  }
`;

export const Button = styled.button`
  width: 100%; /* 모바일 화면 너비에 맞게 */
  max-width: 360px; /* 최대 너비 제한 */
  padding: 18px 0;
  font-size: 18px; /* 버튼 텍스트 크기 */
  font-weight: bold; /* 버튼 텍스트 굵기 */
  text-align: center;
  background-color: #4caf50; /* 버튼 배경색 */
  color: #fff; /* 텍스트 색상 */
  border: none;
  border-radius: 12px; /* 둥근 모서리 */
  cursor: pointer;
  margin-bottom: 20px; /* 버튼 하단 간격 */
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;
