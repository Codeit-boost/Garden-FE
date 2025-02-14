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
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showFlowerModal, setShowFlowerModal] = useState(false);
  const [flowerMission, setFlowerMission] = useState(null);
  const [completedMissions, setCompletedMissions] = useState(new Set(JSON.parse(localStorage.getItem('completedMissions')) || []));

  useEffect(() => {
    const loadMissions = async () => {
      try {
        const data = await fetchMissions();
        console.log("✅ 불러온 미션 목록:", data);

        const formattedMissions = data.map((mission, index) => ({
          id: mission.id || index,
          title: mission.title || "미션",
          description: mission.description || "미션 설명 없음",
          progress: mission.currentValue || 0,
          total: mission.targetValue || 1,
          completed: mission.completed,
          flowerName: mission.flowerName || "",
        }));

        setMissions(formattedMissions);

        const newlyCompleted = formattedMissions.find(
          (mission) => mission.completed && !completedMissions.has(mission.id)
        );

        if (newlyCompleted) {
          const updatedSet = new Set(completedMissions).add(newlyCompleted.id);
          setCompletedMissions(updatedSet);
          localStorage.setItem('completedMissions', JSON.stringify(Array.from(updatedSet)));
          setFlowerMission(newlyCompleted.flowerName);
          setShowCompleteModal(true);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadMissions();
  }, [completedMissions]);

  if (loading) return <p>미션을 불러오는 중...</p>;
  if (error) return <p>미션을 불러오는 데 실패했습니다.</p>;

  return (
    <div className="mission-container">
      {showCompleteModal && (
        <MissionComplete
          onClose={() => {
            setShowCompleteModal(false);
            setShowFlowerModal(true);
          }}
        />
      )}
      {showFlowerModal && flowerMission && (
        <MissionFlower
          flowername={flowerMission}
          onClose={() => setShowFlowerModal(false)}
        />
      )}

      <h1 className="mission-title">미션</h1>
      <div className="mission-list">
        {missions.length === 0 ? (
          <p className="no-mission-message">진행 중인 미션이 없습니다.</p>
        ) : (
          missions.map((mission) => {
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
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <p className="progress-text">
                    {mission.progress}/{mission.total} {mission.completed && (
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
