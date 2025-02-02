import React from "react";
import "../../styles/InviteFriendsModal.css"; // ✅ CSS 파일 올바른 경로로 import

import kakaoIcon from "../../assets/icons/카카오톡.png";
import linkIcon from "../../assets/icons/링크.png";

const InviteFriendsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 링크 복사 기능
  const handleCopyLink = () => {
    const inviteLink = "https://yourapp.com/invite";
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert("링크가 복사되었습니다!");
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">친구 초대하기</h2>
        <div className="option-container">
          <button
            className="option"
            onClick={() => alert("카카오톡 공유 기능 추가 예정")}
          >
            <img src={kakaoIcon} alt="카카오톡" className="icon-image" />
            카카오톡
          </button>
          <button className="option" onClick={handleCopyLink}>
            <img src={linkIcon} alt="링크 복사" className="icon-image" />
            링크 복사
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsModal;
