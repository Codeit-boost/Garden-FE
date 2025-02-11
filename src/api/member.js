import api from "./api";

// 모든 멤버를 집중시간 총합 순으로 페이지네이션 조회
// page: 페이지 번호, limit: 페이지당 항목 수 (기본값 설정 가능)
export const fetchMembers = async (page = 1, limit = 10) => {
  try {
    const response = await api.get("/members", {
      params: { page, limit },
    });

    console.log("📌 API 응답 데이터:", response.data);

    if (!response.data || !Array.isArray(response.data.members)) {
      throw new Error("잘못된 데이터 형식입니다.");
    }

    const members = response.data.members.map((member, index) => ({
      ...member,
      rank: member.rank ?? index + 1, // rank 값이 없으면 기본적으로 index + 1
    }));

    console.log("✅ 가공된 멤버 데이터:", members);

    return { ...response.data, members };
  } catch (error) {
    console.error("❌ 멤버 정보 가져오기 오류:", error);
    throw error;
  }
};

// ✅ 친구 목록 조회 (집중시간 총합 순으로 페이지네이션 조회)
export const fetchFriends = async (page = 1, limit = 10) => {
  try {
    const response = await api.get("/members/friends", {
      params: { page, limit },
    });

    console.log("📌 친구 목록 API 응답 데이터:", response.data);

    if (!response.data || !Array.isArray(response.data.members)) {
      throw new Error("잘못된 데이터 형식입니다.");
    }

    const friends = response.data.members.map((friend, index) => ({
      ...friend,
      rank: index + 1, // ✅ 친구 목록에서는 rank 직접 부여
    }));

    console.log("✅ 가공된 친구 목록 데이터:", friends);

    return { ...response.data, members: friends };
  } catch (error) {
    console.error("❌ 친구 목록 가져오기 오류:", error);
    throw error;
  }
};

// 회원 상세 정보 조회 (본인 정보)
export const fetchMyInfo = async () => {
  try {
    const response = await api.get("/members/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching member info:", error);
    throw error;
  }
};

// 회원 정보 수정 (본인 정보 수정)
export const updateMyInfo = async (updateData) => {
  try {
    const response = await api.put("/members/me", updateData);
    return response.data;
  } catch (error) {
    console.error("Error updating member info:", error);
    throw error;
  }
};

// 회원 삭제 (본인 계정 삭제)
export const deleteMyInfo = async () => {
  try {
    const response = await api.delete("/members/me");
    return response.data;
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
};

// 친구 추가 요청
export const addFriend = async (friendId) => {
  try {
    const response = await api.post("/members/friend", { friendId });
    return response.data;
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};
