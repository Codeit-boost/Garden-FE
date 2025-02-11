import { useState, useEffect } from "react";
import { fetchMyInfo } from "../../api/member"; // ✅ API 호출 함수
import completedFlowerIcon from "../../assets/icons/완성꽃.png";
import witheredFlowerIcon from "../../assets/icons/시든꽃.png";

const TotalTime = () => {
  const [userStats, setUserStats] = useState({
    currentTotalTime: 0,
    bloomedCount: 0,
    wiltedCount: 0,
    nextTotalTime: 0, // ✅ `null` 대신 `0`으로 설정
  });

  useEffect(() => {
    const loadUserStats = async () => {
      try {
        const data = await fetchMyInfo();
        console.log("📡 [API 응답] 사용자 통계 데이터:", data);

        // ✅ 문자열("HH:MM") → 초(Seconds) 변환 함수 적용
        setUserStats({
          currentTotalTime: convertTimeStringToSeconds(data?.currentTotalTime) || 0,
          bloomedCount: Number(data?.bloomedCount) || 0,
          wiltedCount: Number(data?.wiltedCount) || 0,
          nextTotalTime: convertTimeStringToSeconds(data?.nextTotalTime) || 0,
        });
      } catch (error) {
        console.error("❌ [API 실패] 사용자 정보 가져오기 오류:", error);
      }
    };

    loadUserStats();
  }, []);

  // ✅ `HH:MM` → 초(Seconds) 변환 함수
  const convertTimeStringToSeconds = (timeString) => {
    if (!timeString || typeof timeString !== "string") return 0;
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds; // ✅ `MM:SS` 기준 변환
  };

  // ✅ 초(Seconds) → `HH:MM:SS` 변환 함수
  const formatTotalTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return "00:00:00";
    }
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="total-time-container">
      <div className="time-rank-container">
        <p className="total-time">{formatTotalTime(userStats.currentTotalTime)}</p>
        <p className="total-time-text">누적 시간</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "70%" }}></div>
      </div>

      {/* ✅ 꽃 개수 및 다음 랭킹까지 남은 시간 */}
      <div className="rank-flower-container">
        {/* ✅ 완성 꽃 및 시든 꽃 개수 */}
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

        {/* ✅ 다음 랭킹까지 남은 시간 */}
        <div className="ranking-info">
          <p>
            다음 랭킹까지{" "}
            <span className="ranking-time">
              {userStats.nextTotalTime > 0 ? formatTotalTime(userStats.nextTotalTime) : "최고 랭킹"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalTime;
