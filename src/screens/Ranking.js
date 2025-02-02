// src/screens/Ranking.js
import React, { useState } from "react";
import TabBar from "../components/BottomBar";
import FriendRanking from "../components/ranking/FriendRanking";
import AllRanking from "../components/ranking/AllRanking";
import "../styles/Ranking.css"; // 탭 / 레이아웃 전용 스타일

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("friends");

  // 예시 데이터
  const friendRanking = [
    { rank: 1, userName: "user 1", leaf: 8, seed: 0, time: "00 시간 00 분" },
    { rank: 2, userName: "user 2", leaf: 4, seed: 1, time: "00 시간 00 분" },
    { rank: 3, userName: "user 3", leaf: 2, seed: 1, time: "00 시간 00 분" },
    { rank: 4, userName: "user 4", leaf: 1, seed: 1, time: "00 시간 00 분" },
  ];

  const allRanking = [
    { rank: 1, userName: "user 1", leaf: 8, seed: 0, time: "00 시간 00 분" },
    { rank: 2, userName: "user 2", leaf: 4, seed: 1, time: "00 시간 00 분" },
    { rank: 3, userName: "user 3", leaf: 2, seed: 1, time: "00 시간 00 분" },
    { rank: 4, userName: "user 4", leaf: 1, seed: 1, time: "00 시간 00 분" },
    { rank: 5, userName: "user 1", leaf: 1, seed: 0, time: "00 시간 00 분" },
    { rank: 6, userName: "user 2", leaf: 0, seed: 0, time: "00 시간 00 분" },
  ];

  return (
    <div className="ranking-container">
      <h1 className="ranking-title">랭킹</h1>

      <div className="ranking-tabs">
        <button
          className={`ranking-tab ${activeTab === "friends" ? "active" : ""}`}
          onClick={() => setActiveTab("friends")}
        >
          친구
        </button>
        <button
          className={`ranking-tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          전체
        </button>
      </div>

      <div className="ranking-list">
        {activeTab === "friends" ? (
          <FriendRanking data={friendRanking} />
        ) : (
          <AllRanking data={allRanking} />
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default Ranking;
