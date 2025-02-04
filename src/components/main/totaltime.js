import React from "react";
import completedflower from "../../assets/icons/완성꽃.png";
import witheredflower from "../../assets/icons/시든꽃.png";

const Totaltime = () => {
  return (
    <div className="total-time-container">
      <div className="time-rank-container">
        <p className="total-time">07시간 01분</p>
        <p className="total-time-text">누적 시간</p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "70%" }}></div>
      </div>

      <div className="flower-count-container">
        <div className="flower-item-success">
          <img src={completedflower} alt="완성 꽃" className="flower-icon" />
          <span className="flower-count">30</span>
        </div>
        <div className="flower-item-fail">
          <img src={witheredflower} alt="시든 꽃" className="flower-icon" />
          <span className="flower-count">1</span>
        </div>
      </div>

      <div className="ranking-info-container">
        <p>다음 랭킹까지 <span className="ranking-time">2시간 59분</span></p>
      </div>
    </div>
  );
};

export default Totaltime;
