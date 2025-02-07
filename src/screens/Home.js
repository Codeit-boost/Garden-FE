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
      console.log("🔍 받은 토큰:", token);

      // ✅ 토큰이 있다면 로컬스토리지에 저장하고 API 헤더에 추가
      localStorage.setItem("jwt", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("✅ 토큰이 localStorage에 저장되었습니다.");

      // ✅ URL에서 ?token= 제거 (단, 현재 URL이 token을 포함하고 있을 때만 실행)
      if (location.search.includes("token")) {
        navigate(location.pathname, { replace: true });
      }
    } else {
      console.log("⚠️ 토큰이 없습니다. (이미 제거된 상태일 수 있음)");
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
