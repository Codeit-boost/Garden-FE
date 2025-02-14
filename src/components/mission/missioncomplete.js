import React from "react";
import successIcon from "../../assets/icons/꽃 심기 완료 아이콘.png";
import "../../styles/flowerplantfail.css"; 

function MissionComplete({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={successIcon} alt="미션 완료" className="modal-icon" />
        <p className="modal-text">미션 완료!</p>
        <p className="modal-subtext">미션 보상으로 더 많은 꽃을 심을 수 있어요</p>
        <button className="modal-button" onClick={onClose}>확인</button>
      </div>
    </div>
  );
}
export default MissionComplete;
