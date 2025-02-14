import React, { useEffect, useState } from "react";
import { fetchMembers } from "../../api/member"; // ✅ 전체 멤버 API 가져오기
import crownGold from "../../assets/icons/1등 왕관.png";
import crownSilver from "../../assets/icons/2등 왕관.png";
import crownBronze from "../../assets/icons/3등 왕관.png";
import completedFlowerIcon from "../../assets/icons/완성꽃.png";
import wiltedFlowerIcon from "../../assets/icons/시든꽃.png";

import {
  AllRankingContainer,
  RankingItem,
  RankingRank,
  CrownIcon,
  RankingUser,
  UserName,
  UserStats,
  RankingTime,
  LoadingMessage,
  ErrorMessage,
} from "../../styles/AllRanking.styled.js";

// 왕관 아이콘 매핑
const crownIcon = {
  1: crownGold,
  2: crownSilver,
  3: crownBronze,
};

const AllRanking = () => {
  const [members, setMembers] = useState([]); // ✅ 전체 멤버 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ 전체 멤버 불러오기
  useEffect(() => {
    const loadMembers = async () => {
      try {
        console.log("📡 전체 랭킹 데이터 요청: fetchMembers(1, 10)");
        const data = await fetchMembers(1, 10);
        console.log("✅ 불러온 전체 멤버 목록:", data);
        setMembers(data.members || []);
      } catch (error) {
        console.error("❌ 전체 멤버 목록 불러오기 실패:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  // ✅ 로딩 상태
  if (loading) {
    return <LoadingMessage>전체 랭킹을 불러오는 중...</LoadingMessage>;
  }

  // ✅ 에러 발생 시 UI
  if (error) {
    return (
      <ErrorMessage>전체 멤버 정보를 불러오는 데 실패했습니다.</ErrorMessage>
    );
  }

  return (
    <AllRankingContainer>
      {members.length === 0 ? (
        <ErrorMessage>등록된 멤버가 없습니다.</ErrorMessage>
      ) : (
        members.map((item, idx) => (
          <RankingItem key={`all-${idx}`}>
            {/* 순위 영역 */}
            <RankingRank>
              {item.rank <= 3 ? (
                <CrownIcon
                  src={crownIcon[item.rank]}
                  alt={`crown-${item.rank}`}
                />
              ) : (
                <span>{item.rank}</span>
              )}
            </RankingRank>

            {/* 사용자 정보 */}
            <RankingUser>
              <UserName>{item.name}</UserName>
              {/* 유저 아이디 추가 */}
              <div style={{ fontSize: "0.8em", color: "#777" , marginTop: "3px"}}>
                ID: {item.id}
              </div>
              <UserStats>
                {/* 완성꽃 (bloomedCount → leaf) */}
                <div>
                  <img src={completedFlowerIcon} alt="완성꽃" style={{ width: "10px"}} />
                  {item.bloomedCount}
                </div>
                {/* 시든꽃 (wiltedCount → seed) */}
                <div>
                  <img src={wiltedFlowerIcon} alt="시든꽃" style={{ width: "10px"}}/>
                  {item.wiltedCount}
                </div>
              </UserStats>
            </RankingUser>

            {/* 집중 시간 */}
            <RankingTime>{item.totalFocusTime}분</RankingTime>
          </RankingItem>
        ))
      )}
    </AllRankingContainer>
  );
};

export default AllRanking;
