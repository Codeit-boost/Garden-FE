import React from "react";
import successIcon from "../../assets/icons/꽃 심기 완료 아이콘.png";

function FlowerPlantSuccess({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={successIcon} alt="꽃 심기 완료" className="modal-icon" />
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
}

export default FlowerPlantSuccess;
