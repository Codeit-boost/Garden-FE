import React, { useState } from "react";
import "../../styles/flowerselect.css";

// 🌸 꽃 이미지 개별 import
import 능소화 from "../../assets/flowers/능소화.png";
import 라일락 from "../../assets/flowers/라일락.png";
import 메리골드 from "../../assets/flowers/메리골드.png";
import 물망초 from "../../assets/flowers/물망초.png";
import 수선화 from "../../assets/flowers/수선화.png";
import 장미 from "../../assets/flowers/장미.png";
import 제비꽃 from "../../assets/flowers/제비꽃.png";
import 초롱꽃 from "../../assets/flowers/초롱꽃.png";
import 코스모스 from "../../assets/flowers/코스모스.png";
import 튤립 from "../../assets/flowers/튤립.png";
import 해바라기 from "../../assets/flowers/해바라기.png";

const flowerData = [
  { id: 1, name: "능소화", image: 능소화 },
  { id: 2, name: "라일락", image: 라일락 },
  { id: 3, name: "메리골드", image: 메리골드 },
  { id: 4, name: "물망초", image: 물망초 },
  { id: 5, name: "수선화", image: 수선화 },
  { id: 6, name: "장미", image: 장미 },
  { id: 7, name: "제비꽃", image: 제비꽃 },
  { id: 8, name: "초롱꽃", image: 초롱꽃 },
  { id: 9, name: "코스모스", image: 코스모스 },
  { id: 10, name: "튤립", image: 튤립 },
  { id: 11, name: "해바라기", image: 해바라기 },
];

const FlowerSelect = ({ onClose, onSelectFlower }) => {
  const [selectedFlower, setSelectedFlower] = useState(null);

  // ✅ 꽃 선택 시 호출
  const handleSelectFlower = (flower) => {
    setSelectedFlower(flower);
    console.log("🌸 선택한 꽃:", flower);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="flower-modal" onClick={(e) => e.stopPropagation()}>
        {/* 상단 바 */}
        <div className="modal-bar" onClick={onClose}></div>

        <h3 className="modal-title">꽃 선택</h3>

        {/* 꽃 리스트 */}
        <div className="flower-list">
          {flowerData.map((flower) => (
            <div
              key={flower.id}
              className={`flower-item ${selectedFlower?.id === flower.id ? "selected" : ""}`}
              onClick={() => handleSelectFlower(flower)}
            >
              <input
                type="checkbox"
                checked={selectedFlower?.id === flower.id}
                readOnly
                className="flower-checkbox"
              />
              <img src={flower.image} alt={flower.name} className="flower-image" />
              <p className="flower-name">{flower.name}</p>
            </div>
          ))}
        </div>

        {/* 선택하기 버튼 */}
        <button
          className="select-button"
          disabled={!selectedFlower} // 선택한 값이 없을 경우 비활성화
          onClick={() => {
            console.log("🚀 [모달 닫기] 최종 선택한 꽃:", selectedFlower);
            onSelectFlower(selectedFlower.id); // ✅ 꽃의 ID만 넘김
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
