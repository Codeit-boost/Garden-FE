import React, { useEffect, useState } from "react";
import { fetchMissions } from "../../api/missonApi";
import "../../styles/mission.css";
import logo from "../../assets/icons/로고.png";

const MissionPage = () => {
  const [missions, setMissions] = useState([]); // 미션 목록 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 미션 데이터 불러오기
  useEffect(() => {
    const loadMissions = async () => {
      try {
        const data = await fetchMissions(); // API 호출
        console.log("✅ 불러온 미션 목록:", data);

        // API 스펙에 따른 데이터 가공
        const formattedMissions = data.map((mission, index) => ({
          id: mission.id || index, // mission.id가 없으면 인덱스 사용
          title: mission.title || "미션",
          description: mission.description || "미션 설명 없음",
          progress: mission.currentValue || 0,
          total: mission.targetValue || 1,
          completed: mission.completed,
          flowerName: mission.flowerName || "",
        }));

        setMissions(formattedMissions);
      } catch (err) {
        console.error("❌ 미션 목록 불러오기 실패:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadMissions();
  }, []);

  // 로딩 상태 처리
  if (loading) {
    return <p className="loading-message">미션을 불러오는 중...</p>;
  }

  // 에러 발생 시 처리
  if (error) {
    return <p className="error-message">미션을 불러오는 데 실패했습니다.</p>;
  }

  return (
    <div
      className="mission-container"
      style={{ fontfamily: "KorailRoundGothicBold" }}
    >
      <h1 className="mission-title">미션</h1>
      <div className="mission-list">
        {missions.length === 0 ? (
          <p className="no-mission-message">진행 중인 미션이 없습니다.</p>
        ) : (
          missions.map((mission) => {
            // 미션 진행률 계산 (completed이면 100%)
            const progressPercent = mission.completed
              ? 100
              : (mission.progress / mission.total) * 100;

            return (
              <div key={mission.id} className="mission-item">
                <div className="mission-icon-container">
                  <img src={logo} alt="미션 아이콘" className="mission-icon" />
                </div>
                <div className="mission-content">
                  <p className="mission-name">{mission.title}</p>
                  <p className="mission-description">{mission.description}</p>
                  <div
                    className="progress-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>

                    <p className="progress-text">
                      {mission.progress}/{mission.total}{" "}
                      {mission.completed && (
                        <span className="completed-text">완료</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MissionPage;
