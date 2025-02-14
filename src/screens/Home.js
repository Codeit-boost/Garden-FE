import React, { useEffect } from "react";
import MainPage from "../components/main/mainpage"; // ✅ MainPage.js 불러오기
import BottomBar from "../components/BottomBar"; // ✅ 하단 바 유지
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api"; // 한 단계 위에서 가져오기

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromURL = params.get("token");
    const storedToken = localStorage.getItem("jwt");

    if (tokenFromURL) {
      console.log("🔍 받은 토큰:", tokenFromURL);

      // ✅ 토큰을 localStorage에 저장
      localStorage.setItem("jwt", tokenFromURL);
      api.defaults.headers.common["Authorization"] = `Bearer ${tokenFromURL}`;
      console.log("✅ 토큰이 localStorage에 저장되었습니다.");

      // ✅ URL에서 ?token= 제거
      navigate(location.pathname, { replace: true });
    } else if (storedToken) {
      // ✅ localStorage에서 기존 토큰 가져오기
      api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    } else {
      console.warn("⚠️ 토큰이 없습니다. 로그인 필요");
      navigate("/login", { replace: true }); // 로그인 페이지로 리디렉트
    }
  }, [location, navigate]);

  return (
    <div className="home-container">
      <MainPage /> {/* ✅ MainPage.js를 불러와서 렌더링 */}
      <BottomBar /> {/* ✅ 하단 바 추가 */}
    </div>
  );
};

export default Home;
