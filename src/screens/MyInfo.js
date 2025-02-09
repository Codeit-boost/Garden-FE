import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth"; // ✅ 로그아웃 함수 가져오기
import { deleteMyInfo, fetchMyInfo } from "../api/member"; // ✅ 회원 정보 API 가져오기
import TabBar from "../components/BottomBar";
import backIcon from "../assets/icons/back-icon.svg";
import {
  Container,
  Header,
  BackIcon,
  ProfileCard,
  ProfileImageContainer,
  ProfileImage,
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

  // ✅ 사용자 정보 불러오기
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const data = await fetchMyInfo(); // ✅ API 호출
        console.log("✅ 불러온 사용자 정보:", data);
        setUserInfo(data); // ✅ 상태 업데이트
      } catch (error) {
        console.error("❌ 사용자 정보 불러오기 실패:", error);
      }
    };

    loadUserInfo();
  }, []);

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
      console.log("✅ 로그아웃 후 시작 화면으로 이동!");

      navigate("/"); // ✅ Startscreen으로 이동
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
          {/* ✅ 등록된 프로필 이미지만 표시 (기본 이미지 제거) */}
          {userInfo?.img && (
            <ProfileImage src={userInfo.img} alt="프로필 이미지" />
          )}
        </ProfileImageContainer>
        <UserName>{userInfo ? userInfo.name : "로딩 중..."}</UserName>
      </ProfileCard>

      {/* 사용자 정보 */}
      <InfoSection>
        <InfoLabel>아이디</InfoLabel>
        <InfoValue>{userInfo ? userInfo.kakaoUserId : "로딩 중..."}</InfoValue>
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
