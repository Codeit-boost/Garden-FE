import React from "react";
import "../../styles/mission.css";
import logo from "../../assets/icons/로고.png";

const missions = [
  { id: 1, name: "3일 연속 심기", description: "연속 3일 동안 꽃을 심었어요", progress: 1, total: 3 },
  { id: 2, name: "7일 연속 심기", description: "연속 7일 동안 꽃을 심었어요", progress: 0, total: 7 },
  { id: 3, name: "30일 연속 심기", description: "연속 30일 동안 꽃을 심었어요", progress: 0, total: 30 },
  { id: 4, name: "초급 가드너", description: "총 2개의 꽃을 심었어요", progress: 2, total: 2 },
  { id: 5, name: "중급 가드너", description: "총 5개의 꽃을 심었어요", progress: 0, total: 5 },
  { id: 6, name: "고급 가드너", description: "총 10개의 꽃을 심었어요", progress: 0, total: 10 },
  { id: 7, name: "5시간 집중", description: "총 5시간 동안 집중했어요", progress: 5, total: 5 },
  { id: 8, name: "10시간 집중", description: "총 10시간 동안 집중했어요", progress: 0, total: 10 },
  { id: 9, name: "15시간 집중", description: "총 15시간 동안 집중했어요", progress: 0, total: 15 },
];

const MissionPage = () => {
  return (
    <div className="mission-container">
      <h1 className="mission-title">미션</h1>
      <div className="mission-list">
        {missions.map((mission) => (
          <div key={mission.id} className="mission-item">
            <div className="mission-icon-container">
              <img src={logo} alt="미션 아이콘" className="mission-icon" />
            </div>
            <div className="mission-content">
              <p className="mission-name">{mission.name}</p>
              <p className="mission-description">{mission.description}</p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                ></div>
              </div>
              <p className="progress-text">{mission.progress}/{mission.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionPage;
