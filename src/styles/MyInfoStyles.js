import styled from "styled-components";

/* ✅ 전체 컨테이너 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  background-color: #ffffff;
  padding-bottom: 0; /* 하단 여백 제거 */
  position: relative; /* ActionContainer의 절대 위치를 위한 설정 */

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

/* ✅ 상단 헤더 */
export const Header = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
  background-color: #f5f5f5;
  position: relative;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 0;
  }
`;

/* ✅ 뒤로 가기 아이콘 */
export const BackIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  cursor: pointer;

  @media (max-width: 480px) {
    left: 12px;
    width: 18px;
  }
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; /* 화면 아래 고정 */
  bottom: 120px; /* 하단바 위로 배치 */
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 480px) {
    bottom: 80px;
  }
`;

/* ✅ 로그아웃 버튼 */
export const LogoutButton = styled.button`
  width: 90%;
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
  }
`;

/* ✅ 탈퇴하기 텍스트 */
export const QuitText = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 10px; /* 버튼과 간격 조정 */
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
