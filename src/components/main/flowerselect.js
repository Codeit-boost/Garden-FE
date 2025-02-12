import React, { useState, useEffect } from "react";
import "../../styles/flowerselect.css";
import api from "../../api/api";
import lockIcon from "../../assets/icons/잠금 아이콘.jpeg"; // 🔒 잠긴 아이콘 이미지

const FlowerSelect = ({ onClose, onSelectFlower }) => {
  const [flowers, setFlowers] = useState([]); // 🌸 API에서 꽃 목록 불러오기
  const [selectedFlower, setSelectedFlower] = useState(null);

  // ✅ API 호출하여 꽃 목록 가져오기
  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await api.get("/flower/unlocked");
        setFlowers(response.data); // 🌸 불러온 꽃 목록 상태에 저장
      } catch (error) {
        console.error("❌ 꽃 목록 불러오기 실패:", error);
      }
    };
    fetchFlowers();
  }, []);

  // ✅ 꽃 선택 핸들러
  const handleSelectFlower = (flower) => {
    if (!flower.unlocked) return; // 🔒 잠긴 꽃은 선택 불가
    setSelectedFlower(flower.id);
    console.log("🌸 선택한 꽃:", flower.name);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="flower-modal" onClick={(e) => e.stopPropagation()}>
        {/* 상단 바 */}
        <div className="modal-bar" onClick={onClose}></div>
        <h3 className="modal-title">꽃 선택</h3>

        {/* 🌸 꽃 리스트 */}
        <div className="flower-list">
          {flowers.map((flower) => (
            <div
              key={flower.id}
              className={`flower-item ${selectedFlower === flower.id ? "selected" : ""} ${
                !flower.unlocked ? "locked" : ""
              }`}
              onClick={() => handleSelectFlower(flower)}
            >
              <input
                type="checkbox"
                checked={selectedFlower === flower.id}
                readOnly
                className="flower-checkbox"
              />
              <img
                src={flower.unlocked ? flower.FlowerImg : lockIcon} // 🔓 잠금 상태에 따라 이미지 변경
                alt={flower.name}
                className="flower-image"
              />
              <p className="flower-name">{flower.name}</p>
            </div>
          ))}
        </div>

        {/* ✅ 선택하기 버튼 */}
        <button
          className="select-button"
          disabled={!selectedFlower} // 선택한 값이 없을 경우 비활성화
          onClick={() => {
            console.log("🚀 [모달 닫기] 최종 선택한 꽃 ID:", selectedFlower);
            onSelectFlower(selectedFlower); // ✅ 선택한 꽃 ID만 전달
            onClose();
          }}
        >
          선택하기
        </button>
      </div>
    </div>
  );
};

export default FlowerSelect;
