import React from "react";
import MainPage from "../components/main/mainpage"; // ✅ MainPage.js 불러오기
import BottomBar from "../components/BottomBar"; // ✅ 하단 바 유지
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api"; // 한 단계 위에서 가져오기
import TabBar from "../components/BottomBar";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // 1. 토큰을 localStorage에 저장
      localStorage.setItem("jwt", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // 2. URL에서 ?token= 제거
      navigate(location.pathname, { replace: true });
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
