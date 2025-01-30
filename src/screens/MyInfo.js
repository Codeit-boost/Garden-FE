import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
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
  BackIcon,
} from "../styles/MyInfoStyles.js";
import TabBar from "../components/BottomBar";
import backIcon from "../assets/icons/back-icon.svg";
import cameraIcon from "../assets/icons/camera-icon.svg";
import profilePlaceholder from "../assets/icons/profile-placeholder.png";

const MyInfo = () => {
  const navigate = useNavigate();

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
      <LogoutButton>로그아웃</LogoutButton>
      <QuitText>탈퇴하기</QuitText>

      {/* 하단바 */}
      <TabBar />
    </Container>
  );
};

export default MyInfo;
