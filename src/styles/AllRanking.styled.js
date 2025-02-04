// src/components/ranking/AllRanking.styled.js
import styled from "styled-components";

// 전체 랭킹을 감싸는 컨테이너
export const AllRankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; /* 각 아이템 간 간격 */
`;

// 랭킹 아이템(한 줄) 전체를 감싸는 박스
export const RankingItem = styled.div`
  background: #fff; /* 흰색 배경 */
  border-radius: 8px; /* 살짝 둥근 모서리 */
  display: flex; /* 가로 방향 배치 */
  align-items: center; /* 수직 정렬 가운데 */
  padding: 12px; /* 내부 여백 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* 가벼운 그림자 */
`;

// 랭킹 순위 표시 영역 (왼쪽 1,2,3,4등 등)
export const RankingRank = styled.div`
  width: 40px; /* 고정 너비 40px */
  text-align: center; /* 중앙 정렬 */
  margin-right: 12px; /* 오른쪽 여백 */
  font-size: 18px; /* 폰트 크기 */
`;

// 1~3위일 때 표시할 왕관 아이콘
export const CrownIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// 사용자 정보(이름, 통계)를 감싸는 영역
export const RankingUser = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향 배치 */
  flex: 1; /* 남은 공간을 전부 차지 */
`;

// 사용자 이름 텍스트
export const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

// 사용자 통계 (leaf, seed 등)
export const UserStats = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 4px; /* 이름과의 간격 */
  display: flex;
  gap: 8px; /* 통계 간 간격 */
`;

// 공부 시간 또는 집중 시간 등을 표시하는 영역 (오른쪽 끝)
export const RankingTime = styled.div`
  margin-left: auto; /* 왼쪽으로 공간을 최대 확보, 오른쪽 정렬 효과 */
  font-size: 14px;
  color: #333;
`;
