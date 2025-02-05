import React, { useState, useEffect } from "react";
import api from "../../api/api";
import completedflower from "../../assets/icons/완성꽃.png";
import witheredflower from "../../assets/icons/시든꽃.png";

const Totaltime = () => {
  // ✅ 상태(state) 관리 (기본값 0 설정)
  const [completedFlowers, setCompletedFlowers] = useState(0);
  const [witheredFlowers, setWitheredFlowers] = useState(0);

  // ✅ API 호출 (useEffect 내부에서 수행)
  useEffect(() => {
    api.get("/flowers/completed")
      .then((response) => {
        console.log("API 응답:", response.data); // API 응답 확인용
        setCompletedFlowers(response.data.completedFlowers || 0);
        setWitheredFlowers(response.data.witheredFlowers || 0);
      })
      .catch((error) => {
        console.error("꽃 개수 정보를 불러오는 중 오류 발생:", error);
        setCompletedFlowers(0); // API 실패 시 기본값
        setWitheredFlowers(0); // API 실패 시 기본값
      });
  }, []);

  return (
    <div className="total-time-container">
      <div className="time-rank-container">
        <p className="total-time">07시간 01분</p>
        <p className="total-time-text">누적 시간</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "70%" }}></div>
      </div>

      {/* ✅ 꽃 개수 & 랭킹 정보 가로 정렬 */}
      <div className="info-container">
        {/* 🌿 꽃 개수 (왼쪽 정렬) */}
        <div className="flower-count-container">
          <div className="flower-count">
            <img src={completedflower} alt="완성된 꽃" className="flower-icon" />
            <span>{completedFlowers}</span>
          </div>
          <div className="flower-count">
            <img src={witheredflower} alt="시든 꽃" className="flower-icon" />
            <span>{witheredFlowers}</span>
          </div>
        </div>

        {/* 🏆 랭킹 정보 (오른쪽 정렬) */}
        <div className="ranking-info-container">
          <p>다음 랭킹까지 <span className="ranking-time">2시간 59분</span></p>
        </div>
      </div>
    </div>
  );
};

export default Totaltime;
