import api from "./api";
import Cookies from "js-cookie"; // ✅ js-cookie 패키지 import 추가

// ✅ JWT 토큰을 저장하는 함수 (로컬스토리지 + 쿠키)
export const saveToken = (token) => {
  localStorage.setItem("jwtToken", token); // 로컬스토리지 저장
  Cookies.set("jwtToken", token, { expires: 7, secure: true }); // 쿠키 저장 (7일 유지)
};

// ✅ JWT 토큰을 삭제하는 함수 (로컬스토리지 + 쿠키)
export const clearToken = () => {
  localStorage.removeItem("jwtToken"); // 로컬스토리지 삭제
  Cookies.remove("jwtToken"); // 쿠키 삭제
};

// ✅ 카카오 로그인 URL 반환 함수
export const getKakaoLoginUrl = () => {
  return `${api.defaults.baseURL}/auth/kakao`;
};

// ✅ 카카오 로그인 콜백 처리 함수
export const handleKakaoCallback = async (code) => {
  try {
    const response = await api.get(`/auth/kakao/callback?code=${code}`);
    const { token, user } = response.data;

    saveToken(token); // ✅ JWT 토큰을 로컬스토리지 + 쿠키에 저장

    return { token, user };
  } catch (error) {
    console.error("❌ Kakao login failed:", error);
    throw error;
  }
};

// ✅ 인증된 사용자 정보를 가져오는 함수
export const fetchUserInfo = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data.user;
  } catch (error) {
    console.error("❌ Fetching user info failed:", error);
    throw error;
  }
};

// ✅ 로그아웃 처리 함수
export const logout = async () => {
  try {
    await api.post("/auth/logout");
    clearToken(); // ✅ 로컬스토리지 및 쿠키에서 삭제
    return true;
  } catch (error) {
    console.error("❌ Logout failed:", error);
    throw error;
  }
};
