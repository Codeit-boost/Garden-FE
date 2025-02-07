import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth"; // ✅ 로그아웃 함수 가져오기
import { deleteMyInfo } from "../api/member"; // ✅ 회원 탈퇴 API 가져오기
import TabBar from "../components/BottomBar";
import backIcon from "../assets/icons/back-icon.svg";
import cameraIcon from "../assets/icons/camera-icon.svg";
import profilePlaceholder from "../assets/icons/profile-placeholder.png";
import {
  Container,
  Header,
  BackIcon,
  ProfileCard,
  ProfileImageContainer,
  ProfileImage,
  CameraIcon,
  UserName,
  InfoSection,
  InfoLabel,
  InfoValue,
  LogoutButton,
  QuitText,
} from "../styles/MyInfoStyles.js";

const MyInfo = () => {
  const navigate = useNavigate();

  // ✅ 로그아웃 핸들러 함수
  const handleLogout = async () => {
    try {
      await logout(); // ✅ 로그아웃 실행

      // ✅ 로그아웃 성공 메시지 출력
      console.log("✅ 로그아웃 성공!");

      // ✅ 토큰 삭제 확인
      const tokenCheck = localStorage.getItem("jwtToken");
      if (!tokenCheck) {
        console.log("✅ 토큰이 정상적으로 삭제되었습니다.");
      } else {
        console.warn("⚠️ 토큰이 아직 삭제되지 않았습니다:", tokenCheck);
      }

      navigate("/login"); // ✅ 로그인 페이지로 이동
    } catch (error) {
      console.error("❌ 로그아웃 중 오류 발생:", error);
    }
  };

  // ✅ 회원 탈퇴 핸들러 함수
  const handleDeleteAccount = async () => {
    try {
      const confirmDelete = window.confirm(
        "정말로 회원 탈퇴를 진행하시겠습니까?"
      );
      if (!confirmDelete) return;

      await deleteMyInfo(); // ✅ 회원 탈퇴 API 호출
      console.log("✅ 회원 탈퇴 성공!");

      // ✅ 로그아웃 처리 및 토큰 삭제
      await logout();
      console.log("✅ 계정 삭제 후 로그아웃 완료!");

      // ✅ StartScreen으로 이동
      navigate("/startscreen");
    } catch (error) {
      console.error("❌ 회원 탈퇴 중 오류 발생:", error);
    }
  };

  return (
    <Container>
      {/* 상단 헤더 */}
      <Header>
        <BackIcon src={backIcon} alt="뒤로 가기" onClick={() => navigate(-1)} />
        내 정보
      </Header>
      {/* 프로필 카드 */}
      <ProfileCard>
        <ProfileImageContainer>
          <ProfileImage src={profilePlaceholder} alt="프로필 이미지" />
          <CameraIcon src={cameraIcon} alt="카메라 아이콘" />
        </ProfileImageContainer>
        <UserName>홍길동</UserName>
      </ProfileCard>
      {/* 사용자 정보 */}
      <InfoSection>
        <InfoLabel>아이디</InfoLabel>
        <InfoValue>hong123</InfoValue>
      </InfoSection>
      {/* 로그아웃 버튼 */}
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      {/* 회원 탈퇴 버튼 */}
      <QuitText onClick={handleDeleteAccount}>탈퇴하기</QuitText>{" "}
      {/* ✅ 탈퇴 버튼 추가 */}
      {/* 하단바 */}
      <TabBar />
    </Container>
  );
};

export default MyInfo;
