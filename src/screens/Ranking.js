// src/screens/Ranking.js
import React, { useState, useEffect } from "react";
import FriendRanking from "../components/ranking/FriendRanking";
import AllRanking from "../components/ranking/AllRanking";
import TabBar from "../components/BottomBar";
import RankInviteFriendsModal from "../components/ranking/RankInviteFriendsModal";
import friendIcon from "../assets/icons/friend.svg";
import { fetchMembers } from "../api/member"; // API 함수 import

import {
  RankingContainer,
  RankingHeader,
  RankingTitle,
  AddFriendButton,
  RankingTabs,
  RankingTabButton,
  ActiveTabIndicator,
  RankingListWrapper,
  LoadingMessage,
  ErrorMessage,
  NoDataMessage,
} from "../styles/Ranking.styled.js";

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [membersData, setMembersData] = useState([]); // API로부터 받은 멤버 데이터 저장
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔍 API 요청 상태 확인을 위한 로그 추가
  useEffect(() => {
    console.log("🔍 Ranking 컴포넌트 마운트됨. fetchMembers 실행");

    const loadMembers = async () => {
      setLoading(true);
      try {
        console.log("📡 API 요청 시작: fetchMembers(1, 10)");

        const data = await fetchMembers(1, 10); // 첫 페이지, 10개 항목
        console.log("✅ API 응답 데이터:", data);

        if (data && data.members) {
          setMembersData(data.members);
        } else {
          console.warn("⚠️ API 응답에 members 데이터 없음:", data);
        }
      } catch (err) {
        setError(err);
        console.error("❌ 멤버 불러오기 오류:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  // ⏳ 로딩 상태 UI
  if (loading) {
    return <LoadingMessage>멤버 정보를 불러오는 중...</LoadingMessage>;
  }

  // ❌ API 요청 실패 UI
  if (error) {
    return (
      <ErrorMessage>
        멤버 정보를 불러오는 데 오류가 발생했습니다: {error.message}
      </ErrorMessage>
    );
  }

  return (
    <RankingContainer>
      <RankingHeader>
        <RankingTitle>랭킹</RankingTitle>
        <AddFriendButton onClick={() => setIsModalOpen(true)}>
          <img src={friendIcon} alt="친구 추가" />
        </AddFriendButton>
      </RankingHeader>

      {/* 랭킹 탭 */}
      <RankingTabs>
        <ActiveTabIndicator activeTab={activeTab} />
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

      {/* 랭킹 리스트 */}
      <RankingListWrapper>
        {membersData.length === 0 ? (
          <NoDataMessage>등록된 멤버가 없습니다.</NoDataMessage>
        ) : activeTab === "friends" ? (
          <FriendRanking data={membersData} />
        ) : (
          <AllRanking data={membersData} />
        )}
      </RankingListWrapper>

      <TabBar />

      <RankInviteFriendsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </RankingContainer>
  );
};

export default Ranking;
