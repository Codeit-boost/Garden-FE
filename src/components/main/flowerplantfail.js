import React from "react";
import failIcon from "../../assets/icons/꽃 심기 실패  아이콘.png";

function FlowerPlantFail({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={failIcon} alt="꽃 심기 실패" className="modal-icon" />
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
}

export default FlowerPlantFail;
