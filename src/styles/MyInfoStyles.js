import styled from "styled-components";

/* ✅ 전체 컨테이너 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 화면 폭이 커져도 너무 넓어지지 않도록 최대 폭 제한 */
  width: 100%;
  max-width: 480px;
  margin: 0 auto; /* 좌우 중앙 정렬 */

  height: 100vh; /* 화면 전체 높이 */
  background-color: #ffffff;
  position: relative; /* ActionContainer의 절대 위치를 위한 설정 */

  /* 모바일에서 좌우 패딩을 약간 주어 화면 끝에 붙지 않게 */
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

/* ✅ 상단 헤더: flex 배치로 아이콘 + 제목 */
export const Header = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  position: relative;

  display: flex;
  align-items: center;
  padding: 16px;

  /* 폰트 크기, 굵기 */
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px;
  }
`;

/* ✅ 뒤로 가기 아이콘 */
export const BackIcon = styled.img`
  width: 20px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 18px;
  }
`;

/* ✅ 헤더 타이틀 (아이콘과 간격) */
export const HeaderTitle = styled.div`
  margin-left: 12px; /* 아이콘과의 간격 */
  color: #333;
`;

/* ✅ 프로필 카드 */
export const ProfileCard = styled.div`
  width: 100%;
  background-color: #fafafa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  margin-top: 50px; /* 여백 조정 */

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: 30px;
  }
`;

/* ✅ 프로필 이미지 컨테이너 */
export const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

/* ✅ 프로필 이미지 */
export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

/* ✅ 사용자 이름 */
export const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

/* ✅ 사용자 정보 섹션 */
export const InfoSection = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 20px;

  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 16px;
  }
`;

/* ✅ 정보 라벨 */
export const InfoLabel = styled.span`
  font-size: 14px;
  color: gray;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

/* ✅ 정보 값 */
export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

/* ✅ 하단 고정 액션 영역 */
export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 화면 아래 고정: TabBar 위에 띄우기 */
  position: absolute;
  bottom: 120px;
  left: 47.25%;
  transform: translateX(-50%);

  @media (max-width: 480px) {
    bottom: 80px;
  }
`;

/* ✅ 로그아웃 버튼 (중앙 정렬) */
export const LogoutButton = styled.button`
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 보장 */
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #388e3c;
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
    width: 70%;
  }
`;

/* ✅ 탈퇴하기 텍스트 (중앙 정렬) */
export const QuitText = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 10px; /* 버튼과 간격 조정 */
  text-align: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-top: 8px;
  }
`;
