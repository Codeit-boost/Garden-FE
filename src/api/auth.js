import axios from "axios";

const API_BASE_URL = "https://garden-c.kro.kr/api/auth";
const REDIRECT_URI = "https://garden-c.kro.kr/kakao/callback"; // ✅ 프론트엔드 콜백 URL

export const getKakaoLoginUrl = () => {
  return `${API_BASE_URL}/kakao?redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}`;
};

export const loginWithKakao = async (code) => {
  try {
    console.log("✅ loginWithKakao 호출됨, 인증 코드:", code);

    const response = await axios.post(`${API_BASE_URL}/kakao/callback`, {
      code,
      redirect_uri: REDIRECT_URI,
    });

    console.log("✅ 카카오 로그인 응답:", response.data);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      console.log(
        "✅ JWT 저장 완료! 저장된 값:",
        localStorage.getItem("token")
      );
      return response.data;
    } else {
      console.error("❌ JWT 없음! 응답 확인 필요:", response.data);
      throw new Error("JWT가 응답에 포함되지 않았습니다.");
    }
  } catch (error) {
    console.error("❌ 카카오 로그인 실패:", error);
    throw error;
  }
};
