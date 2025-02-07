import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth"; // ✅ 로그아웃 함수 가져오기
import { deleteMyInfo, fetchMyInfo } from "../api/member"; // ✅ 회원 정보 API 가져오기
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
} from "../styles/MyInfoStyles.js"; // ✅ `UserName`을 가져옴

const MyInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); // ✅ 사용자 정보 상태

  // ✅ 사용자 정보 불러오기 (백엔드 + localStorage 동기화)
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        // ✅ localStorage에서 변경된 정보 가져오기
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        } else {
          const data = await fetchMyInfo();
          setUserInfo(data);
        }
        console.log("✅ 불러온 사용자 정보:", storedUserInfo || userInfo);
      } catch (error) {
        console.error("❌ 사용자 정보 불러오기 실패:", error);
      }
    };

    loadUserInfo();
  }, [localStorage.getItem("userInfo")]); // ✅ localStorage 값이 변경될 때마다 다시 불러오기

  // ✅ 로그아웃 핸들러 함수
  const handleLogout = async () => {
    try {
      await logout(); // ✅ 로그아웃 실행
      console.log("✅ 로그아웃 성공!");
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

      // ✅ 로그아웃 처리 및 이동
      await logout();
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
        <UserName>{userInfo ? userInfo.name : "로딩 중..."}</UserName>{" "}
        {/* ✅ 이름만 표시 */}
      </ProfileCard>

      {/* 사용자 정보 */}
      <InfoSection>
        <InfoLabel>아이디</InfoLabel>
        <InfoValue>
          {userInfo ? userInfo.kakaoUserId : "로딩 중..."}
        </InfoValue>{" "}
        {/* ✅ 카카오 ID만 표시 */}
      </InfoSection>

      {/* 로그아웃 버튼 */}
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>

      {/* 회원 탈퇴 버튼 */}
      <QuitText onClick={handleDeleteAccount}>탈퇴하기</QuitText>

      {/* 하단바 */}
      <TabBar />
    </Container>
  );
};

export default MyInfo;
