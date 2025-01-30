import React from "react";
import { useNavigate } from "react-router-dom";
import { TabContainer, TabItem, Icon } from "../styles/BottomBarStyles.js";

import homeIcon from "../assets/icons/home.svg";
import gardenIcon from "../assets/icons/garden.svg";
import rankingIcon from "../assets/icons/ranking.svg";
import missionIcon from "../assets/icons/mission.svg";
import settingsIcon from "../assets/icons/settings.svg";

const BottomBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <TabContainer>
      <TabItem
        active={currentPath === "/home"}
        onClick={() => navigate("/home")}
      >
        <Icon src={homeIcon} alt="홈" />
        <span>홈</span>
      </TabItem>
      <TabItem
        active={currentPath === "/garden"}
        onClick={() => navigate("/garden")}
      >
        <Icon src={gardenIcon} alt="정원" />
        <span>정원</span>
      </TabItem>
      <TabItem
        active={currentPath === "/ranking"}
        onClick={() => navigate("/ranking")}
      >
        <Icon src={rankingIcon} alt="랭킹" />
        <span>랭킹</span>
      </TabItem>
      <TabItem
        active={currentPath === "/mission"}
        onClick={() => navigate("/mission")}
      >
        <Icon src={missionIcon} alt="미션" />
        <span>미션</span>
      </TabItem>
      <TabItem
        active={currentPath === "/settings"}
        onClick={() => navigate("/settings")}
      >
        <Icon src={settingsIcon} alt="설정" />
        <span>설정</span>
      </TabItem>
    </TabContainer>
  );
};

export default BottomBar;
