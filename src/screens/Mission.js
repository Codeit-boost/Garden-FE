import React from "react";
import TabBar from "../components/BottomBar";
import MissionPage from "../components/mission/missionpage";
import "../styles/Missionpage.css"

const Mission = () => {
  return (
    <div className="mission-screen" style={{ fontfamily:"KorailRoundGothicBold"}}>
      <MissionPage />
      <TabBar />
    </div>
  );
};

export default Mission;
