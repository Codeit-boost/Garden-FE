import React, { useState, useEffect } from "react";
import { fetchMyInfo } from "../../api/member";
import { handleStartStop } from "./buttonHandlers";
import FlowerPlantFail from "./flowerplantfail";

const PlantingBox = ({ selectedCategory, isRunning, setIsRunning }) => {
  const [time, setTime] = useState(2 * 3600);
  const [focusTimeId, setFocusTimeId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [showFailModal, setShowFailModal] = useState(false);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const data = await fetchMyInfo();
        setUserInfo(data);
      } catch (error) {
        console.error("❌ 사용자 정보 불러오기 오류:", error);
      }
    };
    loadUserInfo();
  }, []);

  return (
    <section className="planting-box">
      <button
        className="start-button"
        onClick={() =>
          handleStartStop(
            isRunning,
            setIsRunning,
            focusTimeId,
            setFocusTimeId,
            setShowFailModal,
            time,
            selectedCategory
          )
        }
      >
        {isRunning ? "포기" : "시작"}
      </button>

      {showFailModal && <FlowerPlantFail onClose={() => setShowFailModal(false)} />}
    </section>
  );
};

export default PlantingBox;
