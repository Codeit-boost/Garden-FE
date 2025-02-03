import React from "react";
import MainPage from "../components/main/mainpage"; // ✅ MainPage.js 불러오기
import BottomBar from "../components/BottomBar"; // ✅ 하단 바 유지

const Home = () => {
  return (
    <div className="home-container">
      <MainPage /> {/* ✅ MainPage.js를 불러와서 렌더링 */}
      <BottomBar /> {/* ✅ 하단 바 추가 */}
    </div>
  );
};

export default Home;
