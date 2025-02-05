import styled from "styled-components";

// ✅ 랭킹 화면 전체 컨테이너
export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

// ✅ 제목 + 친구 추가 버튼 컨테이너 (가운데 정렬 적용)
export const RankingHeader = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative; /* 친구 추가 버튼 위치 조정 */
`;

// ✅ 랭킹 제목 (완전 가운데 정렬)
export const RankingTitle = styled.h1`
  font-size: 24px;
  margin: 0 0 16px;
  text-align: center;
  flex-grow: 1; /* 제목이 가운데 정렬되도록 설정 */
`;

// ✅ 친구 추가 버튼 (+ 버튼, 우측 정렬)
export const AddFriendButton = styled.button`
  position: absolute;
  right: 0; /* 우측 끝으로 정렬 */
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

// ✅ 탭 컨테이너 (배경 및 둥근 테두리)
export const RankingTabs = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 40px;
  background-color: #ddd;
  border-radius: 20px;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

// ✅ 활성화된 탭을 표시하는 배경 (초록색)
export const ActiveTabIndicator = styled.div`
  position: absolute;
  top: 1px;
  left: ${(props) =>
    props.activeTab === "friends" ? "0px" : "calc(50% + 4px)"};
  width: 50%;
  height: 50px;
  background-color: #4caf50;
  border-radius: 20px;
  transition: left 0.3s ease-in-out;
`;

// ✅ 개별 탭 버튼 (텍스트)
export const RankingTabButton = styled.button`
  flex: 1;
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.active ? "#fff" : "#777")};
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
`;

// ✅ 랭킹 목록을 감싸는 컨테이너 (추가된 부분)
export const RankingListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;
