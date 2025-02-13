import styled from "styled-components";

// ✅ 랭킹 화면 전체 컨테이너
export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 430px; /* ✅ 모바일 크기 유지 */
  height: 100vh; /* ✅ 전체 화면을 정확히 맞춤 */
  background-color: #fff;
  overflow: hidden; /* ✅ 스크롤 방지 */
  margin: 0 auto; /* ✅ 화면 중앙 정렬 */
`;

// ✅ 제목 + 친구 추가 버튼 컨테이너 (가운데 정렬 적용)
export const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* ✅ 가운데 정렬 */
  position: relative; /* ✅ 상대적 위치 설정 */
  width: 100%;
  max-width: 400px;
  padding: 20px 0 15px; /* ✅ 상단 여백 추가해서 제목을 아래로 */
  margin-bottom: 20px; /* ✅ 하단 여백 추가 */
`;

// ✅ 랭킹 제목 (완전한 가운데 정렬)
export const RankingTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute; /* ✅ 위치 고정 */
  left: 50%; /* ✅ 화면의 정확한 중앙 */
  transform: translateX(-50%); /* ✅ 중앙 정렬 */
`;

// ✅ 친구 추가 버튼 (우측 고정)
export const AddFriendButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute; /* ✅ 위치 고정 */
  right: 10px; /* ✅ 오른쪽 끝에 배치 */
`;

// ✅ 탭 컨테이너 (배경 및 둥근 테두리)
export const RankingTabs = styled.div`
  display: flex;
  position: relative;
  width: 320px;
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
    props.activeTab === "friends" ? "0px" : "calc(50% + 2px)"};
  width: 50%;
  height: 50px;
  background-color: #4caf50;
  border-radius: 20px;
  transition: left 0.3s ease-in-out;
`;

// ✅ 개별 탭 버튼 (텍스트)
export const RankingTabButton = styled.button`
  flex: 1;
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

// ✅ 랭킹 목록을 감싸는 컨테이너 (스크롤 없이 자동 조절)
export const RankingListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  height: calc(100vh - 180px); /* ✅ 헤더, 탭바 제외한 높이 자동 조정 */
  overflow-y: auto; /* ✅ 리스트 영역 내에서만 스크롤 */
  padding-bottom: 10px; /* ✅ 하단 여백 추가 */
`;

// ✅ 로딩 메시지 스타일
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #4caf50;
`;

// ✅ 에러 메시지 스타일
export const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: red;
  font-weight: bold;
`;

// ✅ 데이터 없음 메시지 스타일
export const NoDataMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: gray;
`;
