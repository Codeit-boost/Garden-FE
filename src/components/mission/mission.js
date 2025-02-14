import React from "react";
import TabBar from "../components/BottomBar";
import MissionPage from "../components/mission/mission";

const Mission = () => {
  return (
    <div className="mission-screen">
      <MissionPage />
      <TabBar />
    </div>
  );
};

export default Mission;
