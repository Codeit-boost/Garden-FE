import React, { useState } from "react";
import "../../styles/categoryselect.css"; // ✅ 스타일 적용

const categoriesList = ["공부", "독서", "운동", "취미","대외활동"]; // ✅ 기본 카테고리 리스트

const CategorySelect = ({ isOpen, onClose, onSelectCategory }) => {
  const [categories, setCategories] = useState(categoriesList);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategory, setEditedCategory] = useState("");

  // ✅ 카테고리 선택 (회색 점 포함)
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsEditing(false);
  };

  // ✅ 카테고리 삭제
  const handleDeleteCategory = (category) => {
    const updatedCategories = categories.filter((cat) => cat !== category);
    setCategories(updatedCategories);
    setSelectedCategory(null); // 선택 초기화
  };

  // ✅ 수정 모드 활성화
  const handleEditCategory = (category) => {
    setIsEditing(true);
    setEditedCategory(category);
  };

  // ✅ 수정 내용 적용
  const handleSaveEdit = () => {
    if (editedCategory.trim() !== "") {
      setCategories(
        categories.map((cat) => (cat === selectedCategory ? editedCategory : cat))
      );
      setSelectedCategory(editedCategory);
      setIsEditing(false);
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className={`category-modal ${isEditing ? "expanded" : ""}`}>
          {/* 모달 상단 바 */}
          <div className="modal-bar" onClick={onClose}></div>
          <h3 className="modal-title">카테고리 설정</h3>

          {/* ✅ 카테고리 리스트 (가로 스크롤 가능) */}
          <div className="category-list">
            {categories.map((category) => (
              <div
                key={category}
                className={`category-item ${selectedCategory === category ? "selected" : ""}`}
                onClick={() => handleSelectCategory(category)}
              >
                <span className="category-dot"></span> {/* ✅ 회색 점 추가 */}
                <span>{category}</span>
                {selectedCategory === category && (
                  <div className="edit-options">
                    <button className="edit-btn" onClick={() => handleEditCategory(category)}>✏️</button>
                    <button className="delete-btn" onClick={() => handleDeleteCategory(category)}>❌</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ✅ 수정 모드 UI */}
          {isEditing && (
            <div className="edit-container">
              <input
                type="text"
                className="edit-input"
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              />
              <button className="save-edit-btn" onClick={handleSaveEdit}>수정</button>
            </div>
          )}

          {/* ✅ "변경하기" 버튼 (카테고리 선택 후 활성화) */}
          <button
            className="select-btn"
            disabled={!selectedCategory}
            onClick={() => {
              if (selectedCategory) {
                onSelectCategory(selectedCategory); // ✅ MainPage.js에 선택된 값 반영
                onClose();
              }
            }}
          >
            변경하기
          </button>
        </div>
      </div>
    )
  );
};

export default CategorySelect;
