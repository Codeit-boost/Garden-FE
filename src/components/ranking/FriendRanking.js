import React, { useEffect, useState } from "react";
import { fetchFriends } from "../../api/member"; // ✅ 친구 목록 API 가져오기
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
  LoadingMessage,
  ErrorMessage,
} from "../../styles/FriendRanking.styled.js"; // ✅ 스타일 파일에서 로딩 & 에러 메시지 추가

// 왕관 아이콘 매핑
const crownIcon = {
  1: crownGold,
  2: crownSilver,
  3: crownBronze,
};

const FriendRanking = () => {
  const [friends, setFriends] = useState([]); // ✅ 친구 목록 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ 친구 목록 불러오기
  useEffect(() => {
    const loadFriends = async () => {
      try {
        const data = await fetchFriends(1, 10); // ✅ 첫 페이지, 10개 항목 가져오기
        console.log("✅ 불러온 친구 목록:", data);
        setFriends(data.members);
      } catch (error) {
        console.error("❌ 친구 목록 불러오기 실패:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadFriends();
  }, []);

  // ✅ 로딩 상태
  if (loading) {
    return <LoadingMessage>친구 랭킹을 불러오는 중...</LoadingMessage>;
  }

  // ✅ 에러 발생 시 UI
  if (error) {
    return <ErrorMessage>친구 정보를 불러오는 데 실패했습니다.</ErrorMessage>;
  }

  // ✅ 친구 목록 아이템 렌더링
  const renderRankItem = (item, idx) => {
    const {
      rank,
      name,
      img,
      totalFocusTime,
      bloomedCount = 0,
      wiltedCount = 0,
    } = item;

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
          <img
            src={img || completedFlowerIcon} // ✅ 프로필 이미지 표시 (없으면 기본 이미지)
            alt="프로필 이미지"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          <UserName>{name}</UserName>
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
        <RankingTime>{totalFocusTime}분</RankingTime>
      </RankingItem>
    );
  };

  return (
    <FriendRankingContainer>
      {friends.map(renderRankItem)}
    </FriendRankingContainer>
  );
};

export default FriendRanking;
