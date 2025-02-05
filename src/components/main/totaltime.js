import React, { useState, useEffect } from "react";
import api from "../../api/api";
import completedflower from "../../assets/icons/완성꽃.png";
import witheredflower from "../../assets/icons/시든꽃.png";

const Totaltime = () => {
  // ✅ 상태(state) 관리
  const [totalTime, setTotalTime] = useState("0시간 0분");
  const [nextRankingTime, setNextRankingTime] = useState(null); // 1등일 경우 null
  const [completedFlowers, setCompletedFlowers] = useState(0);
  const [witheredFlowers, setWitheredFlowers] = useState(0);

  // ✅ API 호출 (useEffect 내부에서 실행)
  useEffect(() => {
    api.get("/members/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } // 인증 필요
    })
      .then((response) => {
        console.log("API 응답:", response.data); // API 응답 확인
        setTotalTime(response.data.currentTotalTime ? `${response.data.currentTotalTime}분` : "0시간 0분");
        setNextRankingTime(response.data.nextTotalTime); // 1등이면 null
        setCompletedFlowers(response.data.bloomedCount || 0);
        setWitheredFlowers(response.data.wiltedCount || 0);
      })
      .catch((error) => {
        console.error("사용자 정보를 불러오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className="total-time-container">
      <div className="time-rank-container">
        <p className="total-time">{totalTime}</p> {/* ✅ 총 누적 시간 */}
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
          {nextRankingTime === null ? (
            <p className="ranking-time">현재 1등입니다! 🏆</p> // ✅ 1등일 경우
          ) : (
            <p>다음 랭킹까지 <span className="ranking-time">{nextRankingTime}분</span></p> // ✅ 다음 랭킹까지 남은 시간
          )}
        </div>
      </div>
    </div>
  );
};

export default Totaltime;
