import api from "./api"; // API 기본 설정 가져오기
import { formatTimeForApi , convertTimeToSeconds} from "../components/main/timeutils";


// ✅ 집중시간 시작 (POST /focusTime)
export const startFocusTime = async (setIsRunning, time, selectedCategory, selectedFlower) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("❌ 인증 토큰이 없습니다.");
    return;
  }
  // ✅ time 값이 HH:MM:SS 문자열인지 확인하고 초 단위로 변환
  let timeInSeconds;
  if (typeof time === "string" && time.includes(":")) {
    timeInSeconds = convertTimeToSeconds(time); // ✅ 문자열이면 초 단위로 변환
  } else if (typeof time === "number") {
    timeInSeconds = time; // ✅ 이미 초 단위라면 그대로 사용
  } else {
    console.error("❌ [오류] 유효하지 않은 time 값:", time);
    return;
  }
  // ✅ time 값 검증 추가
  console.log("🎯 변환 전 time 값:", time);
  if (isNaN(time) || time === undefined || time === null) {
    console.error("❌ [오류] 유효하지 않은 time 값:", time);
    time = 7200; // ✅ 기본값 2시간 (7200초)로 설정
  }

  const requestData = {
    target_time: formatTimeForApi(time),  // ✅ 사용자가 설정한 시간 변환하여 적용
    category: selectedCategory || "기본",  // ✅ 사용자가 선택한 카테고리 적용
    flower_id: Number(selectedFlower) || 1,  // ✅ 사용자가 선택한 꽃 ID 적용
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

    // ✅ 포기 후 초기화
    setIsRunning(false);
    localStorage.removeItem("focusTimeId");
  } catch (error) {
    console.error("❌ [API 실패] 집중시간 포기 오류:", error);
  }
};
