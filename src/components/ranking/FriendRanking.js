import React from "react";
import crownGold from "../../assets/icons/1등 왕관.png";
import crownSilver from "../../assets/icons/2등 왕관.png";
import crownBronze from "../../assets/icons/3등 왕관.png";

import completedFlowerIcon from "../../assets/icons/완성꽃.png";
import wiltedFlowerIcon from "../../assets/icons/시든꽃.png";

import {
  FriendRankingContainer,
  RankingItem,
  RankingRank,
  CrownIcon,
  RankingUser,
  UserName,
  UserStats,
  RankingTime,
} from "../../styles/FriendRanking.styled.js";

// 1,2,3등 왕관
const crownIcon = {
  1: crownGold,
  2: crownSilver,
  3: crownBronze,
};

const FriendRanking = ({ data = [] }) => {
  const renderRankItem = (item, idx) => {
    const { rank, userName, leaf, seed, time } = item;
    return (
      <RankingItem key={`friend-${idx}`}>
        {/* 순위 영역 */}
        <RankingRank>
          {rank <= 3 ? (
            <CrownIcon src={crownIcon[rank]} alt={`crown-${rank}`} />
          ) : (
            <span>{rank}</span>
          )}
        </RankingRank>

        {/* 사용자 정보 */}
        <RankingUser>
          <UserName>{userName}</UserName>
          <UserStats>
            {/* leaf 아이콘 + 갯수 */}
            <div>
              <img
                src={completedFlowerIcon}
                alt="완성꽃"
                style={{ width: "16px", marginRight: "4px" }}
              />
              {leaf}
            </div>

            {/* seed 아이콘 + 갯수 */}
            <div>
              <img
                src={wiltedFlowerIcon}
                alt="시든꽃"
                style={{ width: "16px", marginRight: "4px" }}
              />
              {seed}
            </div>
          </UserStats>
        </RankingUser>

        {/* 시간 */}
        <RankingTime>{time}</RankingTime>
      </RankingItem>
    );
  };

  return (
    <FriendRankingContainer>{data.map(renderRankItem)}</FriendRankingContainer>
  );
};

export default FriendRanking;
