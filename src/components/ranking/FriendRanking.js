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

// 왕관 아이콘 매핑
const crownIcon = {
  1: crownGold,
  2: crownSilver,
  3: crownBronze,
};

const FriendRanking = ({ data = [] }) => {
  const renderRankItem = (item, idx) => {
    const {
      rank,
      name,
      totalFocusTime,
      bloomedCount = 0,
      wiltedCount = 0,
    } = item; // ✅ 필드명 변경

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
          <UserName>{name}</UserName> {/* ✅ 필드명 수정 */}
          <UserStats>
            {/* 완성꽃 (bloomedCount → leaf) */}
            <div>
              <img
                src={completedFlowerIcon}
                alt="완성꽃"
                style={{ width: "16px", marginRight: "4px" }}
              />
              {bloomedCount}
            </div>

            {/* 시든꽃 (wiltedCount → seed) */}
            <div>
              <img
                src={wiltedFlowerIcon}
                alt="시든꽃"
                style={{ width: "16px", marginRight: "4px" }}
              />
              {wiltedCount}
            </div>
          </UserStats>
        </RankingUser>
        {/* 집중 시간 */}
        <RankingTime>{totalFocusTime}분</RankingTime> {/* ✅ 시간 표시 수정 */}
      </RankingItem>
    );
  };

  return (
    <FriendRankingContainer>{data.map(renderRankItem)}</FriendRankingContainer>
  );
};

export default FriendRanking;
