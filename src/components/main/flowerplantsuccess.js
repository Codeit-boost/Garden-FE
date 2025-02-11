import React from "react";
import successIcon from "../../assets/icons/꽃 심기 완료 아이콘.png";
import "../../styles/flowerplantfail.css"; // ✅ 동일한 CSS 사용

function FlowerPlantSuccess({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={successIcon} alt="꽃 심기 완료" className="modal-icon" />
        <p className="modal-text">꽃 심기 완료!</p>
        <p className="modal-subtext">방금 심은 꽃을 나의 정원에서 확인해 보세요</p>
        <button className="modal-button" onClick={onClose}>확인</button>
      </div>
    </div>
  );
}

export default FlowerPlantSuccess;
