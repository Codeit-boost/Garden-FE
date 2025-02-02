import React from "react";
import "../../styles/ModeSettingsModal.css"; // ✅ CSS 파일 적용

const ModeSettingsModal = ({ isOpen, onClose, mode, setMode }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">모드 설정</h2>
        <div className="option-container">
          <label className={`option ${mode === "기본 모드" ? "active" : ""}`}>
            <div className="option-text">
              <span className="mode-title">기본 모드</span>
              <span className="mode-desc">
                집중 시간 동안 다른 앱을 이용할 수 있어요
              </span>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={mode === "기본 모드"}
              onChange={() => setMode("기본 모드")}
            />
          </label>
          <label className={`option ${mode === "잠금 모드" ? "active" : ""}`}>
            <div className="option-text">
              <span className="mode-title">잠금 모드</span>
              <span className="mode-desc">
                집중 시간 동안 모든 앱을 이용할 수 없어요
              </span>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={mode === "잠금 모드"}
              onChange={() => setMode("잠금 모드")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModeSettingsModal;
