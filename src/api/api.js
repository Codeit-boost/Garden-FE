import axios from "axios";
import Cookies from "js-cookie"; // ✅ 쿠키 사용을 위한 라이브러리 추가
import { logout } from "./auth"; // ✅ 로그아웃 함수 추가

const api = axios.create({
  baseURL: "https://garden-c.kro.kr/api", // 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 요청 인터셉터: 모든 요청에 JWT 토큰 자동 추가 (쿠키 + 로컬스토리지)
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("jwtToken") || Cookies.get("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 응답 인터셉터: 402 에러 발생 시 자동 로그아웃
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 402) {
      console.warn("🔄 토큰이 만료되었습니다. 자동 로그아웃 처리합니다.");
      await logout();
      window.location.href = "/login"; // ✅ 로그인 페이지로 이동
    }
    return Promise.reject(error);
  }
);

// ✅ JWT 토큰 저장 함수 (로컬스토리지 + 쿠키)
export const saveToken = (token) => {
  localStorage.setItem("jwtToken", token); // ✅ 로컬 스토리지 저장
  Cookies.set("jwtToken", token, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  }); // ✅ 쿠키 저장 (7일 유효)
};

// ✅ JWT 토큰 삭제 함수 (로컬스토리지 + 쿠키)
export const clearToken = () => {
  localStorage.removeItem("jwtToken");
  Cookies.remove("jwtToken");
};

export default api;
