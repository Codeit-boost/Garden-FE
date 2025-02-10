import { useState, useEffect } from "react";
import { fetchMyInfo } from "../../api/member"; // ✅ 기존 API 함수 활용
import completedFlowerIcon from "../../assets/icons/완성꽃.png"; // ✅ 완성 꽃 아이콘 추가
import witheredFlowerIcon from "../../assets/icons/시든꽃.png"; // ✅ 시든 꽃 아이콘 추가

const TotalTime = () => {
  const [userStats, setUserStats] = useState({
    currentTotalTime: 0,
    bloomedCount: 0,
    wiltedCount: 0,
    nextTotalTime: null,
  });

  useEffect(() => {
    const loadUserStats = async () => {
      try {
        const data = await fetchMyInfo();
        console.log("📡 [API 응답] 사용자 통계 데이터:", data);

        setUserStats({
          currentTotalTime: data.currentTotalTime || 0,
          bloomedCount: data.bloomedCount || 0,
          wiltedCount: data.wiltedCount || 0,
          nextTotalTime: data.nextTotalTime || null,
        });
      } catch (error) {
        console.error("❌ [API 실패] 사용자 정보 가져오기 오류:", error);
      }
    };

    loadUserStats();
  }, []);

  // ✅ 시간 변환 함수 (초 → HH:MM:SS)
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="total-time-container">
      <div className="time-rank-container">
        <p className="total-time">{formatTime(userStats.currentTotalTime)}</p>
        <p className="total-time-text">누적 시간</p>
      </div>
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "70%" }}></div>
      </div>    

      {/* ✅ 꽃 아이콘 및 개수를 먼저 표시, 그다음 '다음 랭킹까지' 표시 */}
      <div className="rank-flower-container">
        {/* ✅ 꽃 아이콘 및 개수 (왼쪽 정렬) */}
        <div className="flower-count">
          <div className="flower-item1">
            <img src={completedFlowerIcon} alt="완성 꽃" className="flower-icon" />
            <p>{userStats.bloomedCount}</p>
          </div>
          <div className="flower-item1">
            <img src={witheredFlowerIcon} alt="시든 꽃" className="flower-icon" />
            <p>{userStats.wiltedCount}</p>
          </div>
        </div>

        {/* ✅ 다음 랭킹까지 남은 시간 (오른쪽 정렬) */}
        <div className="ranking-info">
          <p>
            다음 랭킹까지{" "}
            <span className="ranking-time">
              {userStats.nextTotalTime !== null ? formatTime(userStats.nextTotalTime) : "최고 랭킹"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalTime;
