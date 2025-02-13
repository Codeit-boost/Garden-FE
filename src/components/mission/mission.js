import React, { useEffect, useState } from "react";
import { fetchMissions } from "../../api/missonApi";
import "../../styles/mission.css";
import logo from "../../assets/icons/로고.png";

const MissionPage = () => {
  const [missions, setMissions] = useState([]); // ✅ 미션 목록 상태
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태
  const [error, setError] = useState(null); // ✅ 에러 상태

  // ✅ 미션 데이터 불러오기
  useEffect(() => {
    const loadMissions = async () => {
      try {
        const data = await fetchMissions(); // ✅ API 호출
        console.log("✅ 불러온 미션 목록:", data);

        // ✅ 데이터 가공 (progress & total 추가)
        const formattedMissions = data.map((mission) => ({
          id: mission.id,
          description: mission.description || "미션 설명 없음",
          progress: mission.progress || 0, // 기본값 0
          total: mission.total || 1, // 기본값 1
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

  // ✅ 로딩 상태 처리
  if (loading) {
    return <p className="loading-message">미션을 불러오는 중...</p>;
  }

  // ✅ 에러 발생 시 처리
  if (error) {
    return <p className="error-message">미션을 불러오는 데 실패했습니다.</p>;
  }

  return (
    <div className="mission-container">
      <h1 className="mission-title">미션</h1>
      <div className="mission-list">
        {missions.length === 0 ? (
          <p className="no-mission-message">진행 중인 미션이 없습니다.</p>
        ) : (
          missions.map((mission) => (
            <div key={mission.id} className="mission-item">
              <div className="mission-icon-container">
                <img src={logo} alt="미션 아이콘" className="mission-icon" />
              </div>
              <div className="mission-content">
                <p className="mission-name">{mission.description}</p>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${(mission.progress / mission.total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="progress-text">
                  {mission.progress}/{mission.total}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MissionPage;
