import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth"; // 로그아웃 함수
import { deleteMyInfo, fetchMyInfo } from "../api/member"; // 회원 정보 API
import TabBar from "../components/BottomBar";
import backIcon from "../assets/icons/back-icon.svg";

/* 스타일 컴포넌트 불러오기 */
import {
  Container,
  Header,
  BackIcon,
  HeaderTitle,
  ProfileCard,
  ProfileImageContainer,
  ProfileImage,
  UserName,
  InfoSection,
  InfoLabel,
  InfoValue,
  LogoutButton,
  QuitText,
  ActionContainer,
} from "../styles/MyInfoStyles";

const MyInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  // 사용자 정보 불러오기
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const data = await fetchMyInfo();
        console.log("✅ 불러온 사용자 정보:", data);
        setUserInfo(data);
      } catch (error) {
        console.error("❌ 사용자 정보 불러오기 실패:", error);
      }
    };
    loadUserInfo();
  }, []);

  // 로그아웃
  const handleLogout = async () => {
    try {
      await logout();
      console.log("✅ 로그아웃 성공!");
      navigate("/login");
    } catch (error) {
      console.error("❌ 로그아웃 중 오류 발생:", error);
    }
  };

  // 회원 탈퇴
  const handleDeleteAccount = async () => {
    try {
      const confirmDelete = window.confirm(
        "정말로 회원 탈퇴를 진행하시겠습니까?"
      );
      if (!confirmDelete) return;

      await deleteMyInfo();
      console.log("✅ 회원 탈퇴 성공!");

      // 로그아웃 후 시작화면으로
      await logout();
      console.log("✅ 로그아웃 후 시작 화면으로 이동!");
      navigate("/");
    } catch (error) {
      console.error("❌ 회원 탈퇴 중 오류 발생:", error);
    }
  };

  return (
    <Container>
      {/* 상단 헤더 */}
      <Header>
        <BackIcon src={backIcon} alt="뒤로 가기" onClick={() => navigate(-1)} />
        <HeaderTitle>내 정보</HeaderTitle>
      </Header>

      {/* 프로필 카드 */}
      <ProfileCard>
        <ProfileImageContainer>
          {userInfo?.img && (
            <ProfileImage src={userInfo.img} alt="프로필 이미지" />
          )}
        </ProfileImageContainer>
        <UserName>{userInfo ? userInfo.name : "로딩 중..."}</UserName>
      </ProfileCard>

      {/* 사용자 정보 - 아이디 */}
      <InfoSection>
        <InfoLabel>아이디</InfoLabel>
        <InfoValue>{userInfo ? userInfo.kakaoUserId : "로딩 중..."}</InfoValue>
      </InfoSection>

      {/* 사용자 정보 - 이메일 */}
      <InfoSection>
        <InfoLabel>이메일</InfoLabel>
        <InfoValue>{userInfo ? userInfo.email : "로딩 중..."}</InfoValue>
      </InfoSection>

      {/* 하단 버튼 영역 */}
      <ActionContainer>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        <QuitText onClick={handleDeleteAccount}>탈퇴하기</QuitText>
      </ActionContainer>

      {/* 하단바 */}
      <TabBar />
    </Container>
  );
};

export default MyInfo;
