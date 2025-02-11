import React, { useState, useEffect } from "react";
import api from "../../api/api";
import "../../styles/categoryselect.css";

function CategorySelect({ onClose, onSelectCategory }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    // ✅ API: 카테고리 목록 불러오기
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories/me");
                setCategories(response.data);
            } catch (error) {
                console.error("❌ 카테고리 불러오기 실패:", error);
            }
        };
        fetchCategories();
    }, []);

    // ✅ API: 카테고리 추가
    const handleAddCategory = async () => {
        if (!newCategoryName.trim()) return;
        try {
            const response = await api.post("/categories/me", { name: newCategoryName });
            setCategories([...categories, response.data]); // ✅ 새로운 카테고리를 목록에 추가
            setNewCategoryName("");
            setIsAddingCategory(false);
        } catch (error) {
            console.error("❌ 카테고리 생성 오류:", error);
        }
    };

    return (
        <>
            {/* ✅ 배경 어두워지는 효과 */}
            <div className="category-modal-overlay" onClick={onClose}></div>

            <div className="category-modal">
                {/* ✅ 닫기 버튼 (중앙 정렬, '-' 모양) */}
                <button className="modal-close-button" onClick={onClose}></button>

                {/* ✅ 카테고리 설정 제목 */}
                <h3 className="category-title">카테고리 설정</h3>

                {/* ✅ 기존 카테고리 리스트 */}
                <div className="category-list">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`category-item ${selectedCategory === category.name ? "selected" : ""}`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* ✅ 카테고리 추가 입력창 (새로운 스타일 적용) */}
                {isAddingCategory ? (
                    <div className="add-category-container">
                        <input
                            type="text"
                            className="category-input"
                            placeholder="새 카테고리 이름"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                        <button className="confirm-button" onClick={handleAddCategory}>설정</button>
                    </div>
                ) : (
                    <button className="select-btn" onClick={() => setIsAddingCategory(true)}>
                        카테고리 추가
                    </button>
                )}

                {/* ✅ 선택하기 버튼 */}
                <button className="select-btn" onClick={() => onSelectCategory(selectedCategory)}>
                    선택하기
                </button>
            </div>
        </>
    );
}

export default CategorySelect;
