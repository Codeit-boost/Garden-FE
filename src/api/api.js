import axios from "axios";

const api = axios.create({
  baseURL: "https://garden-c.kro.kr/api", // 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
  // 쿠키를 사용하지 않으므로 withCredentials 옵션 제거
});

// 요청 인터셉터를 추가하여 localStorage에서 "jwt" 토큰을 읽어 모든 요청 헤더에 추가합니다.
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

export default api;
