import api from "./api"; // API 기본 설정 가져오기

// ✅ 집중시간 시작 (POST /focusTime)
export const startFocusTime = async (setIsRunning, setTime, setCurrentFlowerImage, setCurrentStageIndex) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("❌ 인증 토큰이 없습니다.");
    return;
  }

  const requestData = {
    target_time: "00:15:00", // 기본 값 (변경 가능)
    category: "기본",
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
      localStorage.setItem("focusTimeId", responseData.id); // ✅ 집중시간 ID 저장
    } else {
      console.warn("⚠️ [API 경고] 서버 응답에 focusTimeId 값이 없습니다.");
    }

    setIsRunning(true);
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 생성 오류:", error);
  }
};

// ✅ 집중시간 포기 (DELETE /focusTime/{focusTimeId}/cancel)
export const cancelFocusTime = async (setIsRunning) => {
  const focusTimeId = localStorage.getItem("focusTimeId");
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
    await api.delete(`/focusTime/${focusTimeId}/cancel`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ [API 성공] 집중시간 포기 완료");

    // ✅ 포기 후 초기화
    setIsRunning(false);
    localStorage.removeItem("focusTimeId");
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 포기 오류:", error);
  }
};
