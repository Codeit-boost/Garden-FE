import api from "../../api/api";
import { connectToSSE } from "./ssemanager";
import { formatTimeForApi } from "./timeutils";

export const startFocusTime = async (time, selectedCategory, setIsRunning, setFocusTimeId, token) => {
  if (!token) {
    console.error("❌ 인증 토큰이 없습니다.");
    return;
  }

  const requestData = {
    target_time: formatTimeForApi(time),
    category: selectedCategory || "기본",
    flower_id: 1,
  };

  console.log("📡 [API 요청] 집중시간 생성 데이터:", requestData);

  try {
    const response = await api.post("/focusTime", requestData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const responseData = response.data;
    console.log("✅ [API 성공] 집중시간 생성 완료:", responseData);

    if (responseData.id) {
      setFocusTimeId(responseData.id);
      connectToSSE(responseData.id, token);
    } else {
      console.warn("⚠️ [API 경고] 서버 응답에 focusTimeId 값이 없습니다.");
    }

    setIsRunning(true);
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 생성 오류:", error);
  }
};

export const cancelFocusTime = async (focusTimeId, setIsRunning, setFocusTimeId, setShowFailModal, token) => {
  if (!focusTimeId) {
    console.warn("⚠️ [포기 실패] 현재 실행 중인 집중시간이 없습니다.");
    return;
  }

  try {
    await api.delete(`/focusTime/${focusTimeId}/cancel`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ [API 성공] 집중시간 포기 완료");
    setIsRunning(false);
    setFocusTimeId(null);
    setShowFailModal(true);
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 포기 오류:", error);
  }
};
