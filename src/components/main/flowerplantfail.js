import React from "react";
import failIcon from "../../assets/icons/꽃 심기 실패  아이콘.png";

function FlowerPlantFail({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <img src={failIcon} alt="꽃 심기 실패" className="modal-icon" />
          <p className="modal-text">꽃 심기 실패!</p>
          <p className="modal-subtext">심은 꽃이 시들었어요</p>
          <button className="modal-button" onClick={onClose}>확인</button>
        </div>
      </div>
    </div>
  );
}

export default FlowerPlantFail;
