import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";
import TabBar from "../components/BottomBar";
import WhiteNoiseModal from "../components/settings/WhiteNoiseModal";
import ModeSettingsModal from "../components/settings/ModeSettingsModal";
import InviteFriendsModal from "../components/settings/InviteFriendsModal";
import arrowRight from "../assets/icons/arrow-right.svg";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [isModeModalOpen, setIsModeModalOpen] = useState(false);
  const [isNoiseModalOpen, setIsNoiseModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("기본 모드");
  const [selectedNoise, setSelectedNoise] = useState("끄기");
  const navigate = useNavigate();

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
        <div className="settings-item">
          <span>알림 설정</span>
          <input
            className="settings-toggle-switch"
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
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
        <div
          className="settings-item"
          onClick={() => setIsNoiseModalOpen(true)}
        >
          <span>백색 소음 설정</span>
          <div>
            <span className="settings-right-text">{selectedNoise}</span>
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
          친구 초대하기{" "}
          <img className="settings-arrow-icon" src={arrowRight} alt="화살표" />
        </div>
      </div>

      <TabBar />

      <ModeSettingsModal
        isOpen={isModeModalOpen}
        onClose={() => setIsModeModalOpen(false)}
        mode={selectedMode}
        setMode={setSelectedMode}
      />
      <WhiteNoiseModal
        isOpen={isNoiseModalOpen}
        onClose={() => setIsNoiseModalOpen(false)}
        selectedNoise={selectedNoise}
        setSelectedNoise={setSelectedNoise}
      />
      <InviteFriendsModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
    </div>
  );
};

export default Settings;
