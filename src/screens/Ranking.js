// src/screens/Ranking.js
import React, { useState } from "react";
import FriendRanking from "../components/ranking/FriendRanking";
import AllRanking from "../components/ranking/AllRanking";
import TabBar from "../components/BottomBar";

import {
  RankingContainer,
  RankingTitle,
  RankingTabs,
  RankingTabButton,
  RankingListWrapper,
} from "../styles/Ranking.styled.js";

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
    <RankingContainer>
      <RankingTitle>랭킹</RankingTitle>

      <RankingTabs>
        <RankingTabButton
          active={activeTab === "friends"}
          onClick={() => setActiveTab("friends")}
        >
          친구
        </RankingTabButton>
        <RankingTabButton
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        >
          전체
        </RankingTabButton>
      </RankingTabs>

      <RankingListWrapper>
        {activeTab === "friends" ? (
          <FriendRanking data={friendRanking} />
        ) : (
          <AllRanking data={allRanking} />
        )}
      </RankingListWrapper>

      <TabBar />
    </RankingContainer>
  );
};

export default Ranking;
