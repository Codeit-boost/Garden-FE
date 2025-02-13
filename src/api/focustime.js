import api from "./api";
import { formatTimeForApi } from "../components/main/timeutils";

// ✅ 집중시간 시작 (POST /focusTime)
export const startFocusTime = async (setIsRunning, time, selectedCategory, selectedFlower) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("❌ 인증 토큰이 없습니다.");
    return;
  }

  const requestData = {
    target_time: time === "00:00:00" ? "00:00:00" : formatTimeForApi(time), // ✅ 스톱워치 모드는 target_time을 "00:00:00"으로 설정
    category: selectedCategory || "기본",
    flower_id: Number(selectedFlower) || 1,
  };

  console.log("📡 [API 요청] 집중시간 생성 데이터:", requestData);

  try {
    const response = await api.post("/focusTime", requestData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const responseData = response.data;
    console.log("✅ [API 성공] 집중시간 생성 완료:", responseData);

    if (responseData.id) {
      localStorage.setItem("focusTimeId", responseData.id);
    } else {
      console.warn("⚠️ [API 경고] 서버 응답에 focusTimeId 값이 없습니다.");
    }

    setIsRunning(true);
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 생성 오류:", error);
  }
};

// ✅ 집중시간 포기 (DELETE /focusTime/{focusTimeId}/cancel)
export const cancelFocusTime = async (setIsRunning, focusTimeId) => {
  if (!focusTimeId) {
    console.warn("⚠️ [포기 실패] 현재 실행 중인 집중시간이 없습니다.");
    return;
  }

  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("❌ [API 오류] 인증 토큰이 없습니다.");
    return;
  }

  try {
    await api.patch(`/focusTime/${focusTimeId}/cancel`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ [API 성공] 집중시간 포기 완료");
    setIsRunning(false);
    localStorage.removeItem("focusTimeId");
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 포기 오류:", error);
  }
};
