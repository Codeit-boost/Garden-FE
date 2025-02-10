// src/api/member.js
import api from "./api";

// 모든 멤버를 집중시간 총합 순으로 페이지네이션 조회
// page: 페이지 번호, limit: 페이지당 항목 수 (기본값 설정 가능)
export const fetchMembers = async (page = 1, limit = 10) => {
  try {
    const response = await api.get("/members", {
      params: { page, limit },
    });

    // 응답 데이터 로깅
    console.log("📌 API 응답 데이터:", response.data);

    // API 응답 데이터가 올바른 구조인지 확인
    if (!response.data || !Array.isArray(response.data.members)) {
      throw new Error("잘못된 데이터 형식입니다.");
    }

    // 멤버 리스트 가공 (rank가 없는 경우 기본값 부여)
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

// 회원 상세 정보 조회 (본인 정보)
export const fetchMyInfo = async () => {
  try {
    const response = await api.get("/members/me");
    // 응답 예시: { id: 1, name: "John Doe", alarm: true }
    return response.data;
  } catch (error) {
    console.error("Error fetching member info:", error);
    throw error;
  }
};

// 회원 정보 수정 (본인 정보 수정)
// updateData 예시: { name: "John Doe", alarm: true, mode: "dark", sound: "on" }
export const updateMyInfo = async (updateData) => {
  try {
    const response = await api.put("/members/me", updateData);
    // 수정된 회원 정보 반환
    return response.data;
  } catch (error) {
    console.error("Error updating member info:", error);
    throw error;
  }
};

// 회원 삭제 (본인 계정 삭제)
// 성공 시 204 응답을 받을 수 있으므로 response.data가 없을 수 있음
export const deleteMyInfo = async () => {
  try {
    const response = await api.delete("/members/me");
    // 삭제 성공 시 별도의 데이터 없이 status code를 확인할 수 있음
    return response.data;
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
};

// 친구 추가 요청
// friendId: 추가하고자 하는 친구의 회원 아이디
export const addFriend = async (friendId) => {
  try {
    const response = await api.post("/members/friend", { friendId });
    // 성공 시 201 응답과 함께 결과 데이터 반환
    return response.data;
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};
