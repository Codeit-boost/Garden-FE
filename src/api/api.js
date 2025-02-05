import axios from "axios";

const api = axios.create({
  baseURL: "https://garden-c.kro.kr/api", // 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
