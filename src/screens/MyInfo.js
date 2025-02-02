import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyInfo.css";
import TabBar from "../components/BottomBar";
import backIcon from "../assets/icons/back-icon.svg";
import cameraIcon from "../assets/icons/camera-icon.svg";
import profilePlaceholder from "../assets/icons/profile-placeholder.png";

const MyInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* 상단 헤더 */}
      <div className="header">
        <img
          className="back-icon"
          src={backIcon}
          alt="뒤로 가기"
          onClick={() => navigate(-1)}
        />
        내 정보
      </div>

      {/* 프로필 카드 */}
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={profilePlaceholder}
            alt="프로필 이미지"
          />
          <img className="camera-icon" src={cameraIcon} alt="카메라 아이콘" />
        </div>
        <div className="user-name">홍길동</div>
      </div>

      {/* 사용자 정보 */}
      <div className="info-section">
        <span className="info-label">아이디</span>
        <span className="info-value">hong123</span>
      </div>

      {/* 로그아웃 버튼 */}
      <button className="logout-button">로그아웃</button>
      <div className="quit-text">탈퇴하기</div>

      {/* 하단바 */}
      <TabBar />
    </div>
  );
};

export default MyInfo;
