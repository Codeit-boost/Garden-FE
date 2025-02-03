// src/screens/Ranking.styled.js
import styled from "styled-components";

// 랭킹 화면 전체를 감싸는 컨테이너
export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

// 화면 상단의 제목
export const RankingTitle = styled.h1`
  font-size: 24px;
  margin: 0 0 24px;
`;

// 탭 버튼들을 감싸는 래퍼
export const RankingTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

// 탭 버튼
export const RankingTabButton = styled.button`
  background-color: ${(props) => (props.active ? "#4caf50" : "#eaeaea")};
  color: ${(props) => (props.active ? "#fff" : "#666")};
  border: none;
  border-radius: 20px;
  padding: 10px 70px;
  cursor: pointer;
  font-size: 14px;
`;

// 실제 랭킹 목록이 들어가는 영역
export const RankingListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  /* 필요한 만큼 스타일 추가 */
`;
