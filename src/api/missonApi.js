import api from "./api"; // ✅ 공통 API 설정 가져오기

// ✅ 미션 목록 조회 함수
export const fetchMissions = async () => {
  try {
    const response = await api.get("/mission/list");

    // ✅ 응답 데이터 콘솔에 출력
    console.log("📌 미션 목록 API 응답 데이터:", response.data);

    if (!Array.isArray(response.data)) {
      throw new Error("잘못된 데이터 형식입니다.");
    }

    return response.data;
  } catch (error) {
    console.error("❌ 미션 목록 가져오기 오류:", error);
    throw error;
  }
};
