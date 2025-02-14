import React from "react";
import "../../styles/flowerplantfail.css"; 

function MissionFlower({ flowername, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img 
          src={require(`../../assets/flowers/${flowername}.png`)} 
          alt="미션 완료" 
          className="modal-icon" 
        />
        <p className="modal-text">잠금 해제!</p>
        <p className="modal-subtext">이제 {flowername}를 심을 수 있어요</p>
        <button className="modal-button" onClick={onClose}>확인</button>
      </div>
    </div>
  );
}
export default MissionFlower;
