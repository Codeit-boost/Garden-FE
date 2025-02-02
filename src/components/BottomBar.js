import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BottomBar.css"; // CSS 파일 임포트

import homeIcon from "../assets/icons/home.svg";
import gardenIcon from "../assets/icons/garden.svg";
import rankingIcon from "../assets/icons/ranking.svg";
import missionIcon from "../assets/icons/mission.svg";
import settingsIcon from "../assets/icons/settings.svg";

const BottomBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <div className="tab-container">
      <div
        className={`tab-item ${currentPath === "/home" ? "active" : ""}`}
        onClick={() => navigate("/home")}
      >
        <div
          className={`icon-wrapper ${currentPath === "/home" ? "active" : ""}`}
        >
          <img
            src={homeIcon}
            alt="홈"
            className={`icon ${currentPath === "/home" ? "active" : ""}`}
          />
        </div>
        <span>홈</span>
      </div>

      <div
        className={`tab-item ${currentPath === "/garden" ? "active" : ""}`}
        onClick={() => navigate("/garden")}
      >
        <div
          className={`icon-wrapper ${
            currentPath === "/garden" ? "active" : ""
          }`}
        >
          <img
            src={gardenIcon}
            alt="정원"
            className={`icon ${currentPath === "/garden" ? "active" : ""}`}
          />
        </div>
        <span>정원</span>
      </div>

      <div
        className={`tab-item ${currentPath === "/ranking" ? "active" : ""}`}
        onClick={() => navigate("/ranking")}
      >
        <div
          className={`icon-wrapper ${
            currentPath === "/ranking" ? "active" : ""
          }`}
        >
          <img
            src={rankingIcon}
            alt="랭킹"
            className={`icon ${currentPath === "/ranking" ? "active" : ""}`}
          />
        </div>
        <span>랭킹</span>
      </div>

      <div
        className={`tab-item ${currentPath === "/mission" ? "active" : ""}`}
        onClick={() => navigate("/mission")}
      >
        <div
          className={`icon-wrapper ${
            currentPath === "/mission" ? "active" : ""
          }`}
        >
          <img
            src={missionIcon}
            alt="미션"
            className={`icon ${currentPath === "/mission" ? "active" : ""}`}
          />
        </div>
        <span>미션</span>
      </div>

      <div
        className={`tab-item ${currentPath === "/settings" ? "active" : ""}`}
        onClick={() => navigate("/settings")}
      >
        <div
          className={`icon-wrapper ${
            currentPath === "/settings" ? "active" : ""
          }`}
        >
          <img
            src={settingsIcon}
            alt="설정"
            className={`icon ${currentPath === "/settings" ? "active" : ""}`}
          />
        </div>
        <span>설정</span>
      </div>
    </div>
  );
};

export default BottomBar;
