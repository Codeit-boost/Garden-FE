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
    <div>
      <h1>홈 화면</h1>
      <TabBar />
    </div>
  );
};

export default Home;
