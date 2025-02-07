import api from "./api";

// 카카오 로그인 URL을 반환하는 함수
export const getKakaoLoginUrl = () => {
  // axios 인스턴스의 baseURL을 사용하여 URL 생성
  return `${api.defaults.baseURL}/auth/kakao`;
};

// 카카오 로그인 콜백을 처리하는 함수
export const handleKakaoCallback = async (code) => {
  try {
    const response = await api.get(`/auth/kakao/callback?code=${code}`);
    const { token, user } = response.data;

    // JWT 토큰 저장 및 axios 기본 헤더 설정
    localStorage.setItem("jwtToken", token);
    // api.defaults.headers.common["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IuydtOyKueywrCIsImlhdCI6MTczODg5MzI5MSwiZXhwIjoxNzM4OTc5NjkxfQ.EfNVR4389uH-wlcVHs7mUe40t7U3FnGFpz7yBvgNofY`;
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   
    return { token, user };
  } catch (error) {
    console.error("Kakao login failed:", error);
    throw error;
  }
};

// 인증된 사용자 정보를 가져오는 함수
export const fetchUserInfo = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data.user;
  } catch (error) {
    console.error("Fetching user info failed:", error);
    throw error;
  }
};

// 로그아웃 처리 함수
export const logout = async () => {
  try {
    await api.post("/auth/logout");

    // 로컬 스토리지 및 axios 헤더 정리
    localStorage.removeItem("jwtToken");
    delete api.defaults.headers.common["Authorization"];

    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
