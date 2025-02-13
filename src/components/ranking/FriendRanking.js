import React, { useEffect, useState } from "react";
import { fetchFriends, fetchMyInfo } from "../../api/member"; // ✅ 내 정보 API도 추가
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
  UserInfoContainer,
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
  const [myId, setMyId] = useState(null); // ✅ 내 아이디 저장

  // ✅ 친구 목록 & 내 정보 불러오기
  useEffect(() => {
    const loadFriends = async () => {
      try {
        const myInfo = await fetchMyInfo(); // ✅ 내 정보 가져오기
        setMyId(myInfo.id); // ✅ 내 아이디 저장
        console.log("✅ 내 정보:", myInfo);

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
      id, // ✅ 내 아이디와 비교하기 위해 추가
      name,
      img,
      totalFocusTime,
      bloomedCount = 0,
      wiltedCount = 0,
    } = item;

    const isMe = myId === id; // ✅ 내 프로필인지 체크

    return (
      <RankingItem
        key={`friend-${idx}`}
        style={{ background: isMe ? "#e6f7ff" : "#fff" }}
      >
        
        <RankingRank>
          {rank <= 3 ? (
            <CrownIcon src={crownIcon[rank]} alt={`crown-${rank}`} />
          ) : (
            <span>{rank}</span>
          )}
        </RankingRank>
        
        <RankingUser>
          <img
            src={img?.trim() ? img : completedFlowerIcon}
            alt="프로필 이미지"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "8px",
              marginBottom : "5px"
            }}
          />
          <UserInfoContainer>
            <UserName>
              {name} {isMe && "(나)"}
            </UserName>{" "}
          
            <UserStats>
            
              <div>
                <img
                  src={completedFlowerIcon}
                  alt="완성꽃"
                  style={{ width: "12px", marginRight: "3px" }}
                />
                {bloomedCount}
              </div>

              {/* 시든꽃 (wiltedCount → seed) */}
              <div>
                <img
                  src={wiltedFlowerIcon}
                  alt="시든꽃"
                  style={{ width: "12px", marginRight: "3px" }}
                />
                {wiltedCount}
              </div>
            </UserStats>
          </UserInfoContainer>
        </RankingUser>
        {/* 집중 시간 */}
        <RankingTime>{`${totalFocusTime}분`}</RankingTime>{" "}
        {/* ✅ 0분도 그대로 표시 */}
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
