// src/screens/Settings.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";
import TabBar from "../components/BottomBar";
import WhiteNoiseModal from "../components/settings/WhiteNoiseModal";
import ModeSettingsModal from "../components/settings/ModeSettingsModal";
import InviteFriendsModal from "../components/settings/InviteFriendsModal";
import arrowRight from "../assets/icons/arrow-right.svg";
import { fetchMyInfo, updateMyInfo } from "../api/member";
import { AudioContext } from "../context/AudioContext";

const Settings = () => {
  const navigate = useNavigate();

  // 모드, 백색 소음, 초대 모달 등의 상태 관리
  const [isModeModalOpen, setIsModeModalOpen] = useState(false);
  const [isNoiseModalOpen, setIsNoiseModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("기본 모드");

  // 백색 소음 상태는 전역 AudioContext에서 관리
  const { whiteNoise, setWhiteNoise } = useContext(AudioContext);

  // 백엔드에서 사용자 설정 불러오기
  useEffect(() => {
    const loadUserSettings = async () => {
      try {
        const userInfo = await fetchMyInfo();

        // 알림 설정은 제거하고, 모드와 백색 소음만 설정
        setSelectedMode(userInfo.mode);
        setWhiteNoise(userInfo.sound);

        // 변경된 설정을 localStorage에도 저장 (다른 화면에서 즉시 반영 가능)
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (error) {
        console.error("❌ 사용자 정보 불러오기 실패:", error);
      }
    };

    loadUserSettings();
  }, [setWhiteNoise]);

  // 상태 변경 시 API 연동 (자동 업데이트)
  const handleUpdateSettings = async (newSettings) => {
    try {
      console.log("📡 업데이트 요청:", newSettings);
      await updateMyInfo(newSettings);

      const updatedUserInfo = {
        ...JSON.parse(localStorage.getItem("userInfo") || "{}"),
        ...newSettings,
      };
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      console.log("✅ 설정이 업데이트되었습니다.");
    } catch (error) {
      console.error("❌ 설정 업데이트 실패:", error);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header-container">
        <h1 className="settings-header">설정</h1>
      </div>

      <div className="settings-section">
        <h3>계정</h3>
        <div className="settings-item" onClick={() => navigate("/myinfo")}>
          <span>내 정보</span>
          <img className="settings-arrow-icon" src={arrowRight} alt="화살표" />
        </div>
      </div>

      <div className="settings-section">
        <h3>설정</h3>

        {/* 모드 설정 */}
        <div className="settings-item" onClick={() => setIsModeModalOpen(true)}>
          <span>모드 설정</span>
          <div>
            <span className="settings-right-text">{selectedMode}</span>
            <img
              className="settings-arrow-icon"
              src={arrowRight}
              alt="화살표"
            />
          </div>
        </div>

        {/* 백색 소음 설정 */}
        <div
          className="settings-item"
          onClick={() => setIsNoiseModalOpen(true)}
        >
          <span>백색 소음 설정</span>
          <div>
            <span className="settings-right-text">{whiteNoise}</span>
            <img
              className="settings-arrow-icon"
              src={arrowRight}
              alt="화살표"
            />
          </div>
        </div>
      </div>

      <div className="settings-section last">
        <h3>초대</h3>
        <div
          className="settings-item"
          onClick={() => setIsInviteModalOpen(true)}
        >
          친구 초대하기
          <img className="settings-arrow-icon" src={arrowRight} alt="화살표" />
        </div>
      </div>

      <TabBar />

      {/* 모드 설정 모달 */}
      <ModeSettingsModal
        isOpen={isModeModalOpen}
        onClose={() => setIsModeModalOpen(false)}
        mode={selectedMode}
        setMode={(mode) => {
          setSelectedMode(mode);
          handleUpdateSettings({ mode });
        }}
      />

      {/* 백색 소음 설정 모달 */}
      <WhiteNoiseModal
        isOpen={isNoiseModalOpen}
        onClose={() => setIsNoiseModalOpen(false)}
        selectedNoise={whiteNoise}
        setSelectedNoise={(sound) => {
          setWhiteNoise(sound);
          handleUpdateSettings({ sound });
        }}
      />

      {/* 친구 초대 모달 */}
      <InviteFriendsModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
    </div>
  );
};

export default Settings;
