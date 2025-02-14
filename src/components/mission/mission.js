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
        const data = await fetchMissions();
        const formattedMissions = data.map(mission => ({
          id: mission.title,
          description: mission.description || "미션 설명 없음",
          progress: mission.currentValue || 0,
          total: mission.targetValue || 1,
          completed: mission.completed,
          flowername: mission.flowerName,
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
        {missions.map(mission => (
          <div key={mission.id} className="mission-item">
            <img src={logo} alt="미션 아이콘" className="mission-icon" />
            <p className="mission-name">{mission.description}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${(mission.progress / mission.total) * 100}%` }}
              />
            </div>
            <p className="progress-text">{mission.progress}/{mission.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MissionPage;
