import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleKakaoCallback } from "../api/auth"; // loginWithKakao 대신 사용

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // URL의 쿼리 파라미터에서 인증 코드 추출
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      handleKakaoCallback(code)
        .then(({ token, user }) => {
          console.log("Login successful:", user);
          // 로그인 성공 후 홈 화면으로 이동하도록 경로 변경
          navigate("/home");
        })
        .catch((error) => {
          console.error("Kakao login error:", error);
          // 에러 발생 시 로그인 페이지 등으로 다시 리다이렉트할 수 있음
          navigate("/login");
        });
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default KakaoCallback;
