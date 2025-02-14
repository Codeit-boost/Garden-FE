// src/screens/MissionPage.js
import React, { useEffect, useState } from "react";
import MissionComplete from "./missioncomplete";
import MissionFlower from "./missionflower";
import { fetchMissions } from "../../api/missonApi";
import "../../styles/mission.css";
import logo from "../../assets/icons/로고.png";

const MissionPage = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedMission, setCompletedMission] = useState(null);
  const [flowerMission, setFlowerMission] = useState(null);

  useEffect(() => {
    const loadMissions = async () => {
      try {
        const data = await fetchMissions(); // ✅ API 호출
        console.log("✅ 불러온 미션 목록:", data);

        // API 스펙에 따른 데이터 가공
        const formattedMissions = data.map((mission, index) => ({
          // mission.id가 없을 경우 인덱스를 임시 ID로 사용
          id: mission.id || index,
          title: mission.title || "미션",
          description: mission.description || "미션 설명 없음",
          progress: mission.currentValue || 0,
          total: mission.targetValue || 1,
          completed: mission.completed,
          flowerName: mission.flowerName || "", // 필요에 따라 아이콘이나 텍스트로 활용
        }));

        setMissions(formattedMissions);

        const completed = formattedMissions.find(mission => mission.completed);
        if (completed) {
          setCompletedMission(true);
          setFlowerMission(completed.flowername);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadMissions();
  }, []);

  if (loading) return <p>미션을 불러오는 중...</p>;
  if (error) return <p>미션을 불러오는 데 실패했습니다.</p>;

  return (
    <div className="mission-container">
      {completedMission && <MissionComplete onClose={() => setCompletedMission(false)} />}
      {flowerMission && (
        <MissionFlower
          flowername={flowerMission}
          onClose={() => setFlowerMission(null)}
        />
      )}
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
                  <p className="mission-name">
                    {mission.title} {/* 제목 표시 */}
                  </p>
                  <p className="mission-description">{mission.description}</p>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${progressPercent}%`,
                      }}
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
            );
          })
        )}
      </div>
    </div>
  );
};
export default MissionPage;
