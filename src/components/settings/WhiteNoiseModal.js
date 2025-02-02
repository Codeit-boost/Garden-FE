import React from "react";
import "../../styles/WhiteNoiseModal.css"; // ✅ CSS 파일 적용

const WhiteNoiseModal = ({
  isOpen,
  onClose,
  selectedNoise,
  setSelectedNoise,
}) => {
  // 모달이 열리지 않았다면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  // 표시할 화이트 노이즈 옵션 목록
  const noiseOptions = ["끄기", "빗소리", "새소리", "모닥불"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        {/* 모달 제목 */}
        <h2 className="modal-title">백색 소음 설정</h2>

        {/* 옵션 목록 */}
        <div className="option-container">
          {noiseOptions.map((noise) => (
            <div
              key={noise}
              className={`option ${selectedNoise === noise ? "active" : ""}`}
              onClick={() => setSelectedNoise(noise)}
            >
              {/* 옵션 텍스트 (왼쪽) */}
              {noise}
              {/* 선택된 옵션에만 체크 아이콘 표시 (오른쪽 끝) */}
              {selectedNoise === noise && <span className="check-icon">✔</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteNoiseModal;
