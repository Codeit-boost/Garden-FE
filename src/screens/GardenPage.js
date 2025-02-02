import React from "react";
import "../styles/GardenPage.css"; // CSS 파일 추가
import MyGarden from "../components/garden/MyGarden"; // MyGarden 컴포넌트
import GardenHeader from "../components/garden/GardenHeader"; // GardenHeader 컴포넌트
import MyBarChart from "../components/garden/MyBarChart";
import MyPieChart from "../components/garden/MyPieChart";
import MyBestFlower from "../components/garden/MyBestFlower";
import BottomBar from "../components/BottomBar";

const GardenPage = () => {
  return (
    
    <div className="garden-page">
      <div className="garden-header">
      <GardenHeader />
      </div>
      <div className="my-garden">
        <MyGarden />
      </div>
      <div className="chart-container">
        <MyBarChart />
      </div>
      <div className="chart-container">
        <MyPieChart />
      </div>
      <div className="my-best-flower">
        <MyBestFlower />
      </div>

      {/* ✅ BottomBar 추가 (페이지 하단에 위치) */}
      <BottomBar />
    </div>
  );
};

export default GardenPage;
