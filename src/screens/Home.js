import React, { useEffect } from "react";
import MainPage from "../components/main/mainpage"; // ✅ MainPage.js 불러오기
import BottomBar from "../components/BottomBar"; // ✅ 하단 바 유지
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api"; // ✅ API 설정 가져오기
import Cookies from "js-cookie"; // ✅ 쿠키 패키지 추가

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      console.log("🔍 받은 토큰:", token);

      // ✅ 토큰이 있다면 로컬스토리지 + 쿠키 저장하고 API 헤더에 추가
      localStorage.setItem("jwt", token);
      Cookies.set("jwtToken", token, { expires: 7, secure: true }); // ✅ 쿠키 7일 유지
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      console.log("✅ 토큰이 localStorage와 쿠키에 저장되었습니다.");
      console.log("🟢 현재 저장된 쿠키:", Cookies.get("jwtToken"));

      // ✅ URL에서 ?token= 제거
      if (location.search.includes("token")) {
        navigate(location.pathname, { replace: true });
      }
    } else {
      console.log("⚠️ 토큰이 없습니다. (이미 제거된 상태일 수 있음)");
      console.log("🔴 현재 저장된 쿠키:", Cookies.get("jwtToken") || "없음");
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
