import axios from "axios";

const api = axios.create({
  baseURL: "https://garden-c.kro.kr/api", // 백엔드 API 기본 주소
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IuydtOyKueywrCIsImlhdCI6MTczODg5MzI5MSwiZXhwIjoxNzM4OTc5NjkxfQ.EfNVR4389uH-wlcVHs7mUe40t7U3FnGFpz7yBvgNofY";
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;