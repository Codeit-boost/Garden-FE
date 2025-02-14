import axios from "axios";
import { logout } from "./auth"; // ✅ 로그아웃 함수 추가

const api = axios.create({
  baseURL: "https://garden-c.kro.kr/api", // 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 요청 인터셉터: 모든 요청에 JWT 토큰 자동 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


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

export default api;
