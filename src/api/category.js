import api from "./api";

// ✅ 카테고리 목록 조회
export const fetchCategories = async () => {
  try {
    const response = await api.get("/api/categories/me", {  // <-- `/api/` 추가
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log("✅ [API 성공] 카테고리 목록:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 목록 불러오기 실패:", error);
    throw error;
  }
};

// ✅ 새로운 카테고리 생성
export const createCategory = async (name) => {
  try {
    const response = await api.post("/api/categories/me", { name }, { // <-- `/api/` 추가
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log("✅ [API 성공] 카테고리 생성:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 생성 실패:", error);
    throw error;
  }
};

// ✅ 카테고리 수정
export const updateCategory = async (oldName, newName) => {
  try {
    const response = await api.put("/api/categories/update", { oldName, newName }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log("✅ [API 성공] 카테고리 수정:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 수정 실패:", error);
    throw error;
  }
};

// ✅ 카테고리 삭제
export const deleteCategory = async (name) => {
  try {
    const response = await api.delete("/api/categories", {
      data: { name },
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log("✅ [API 성공] 카테고리 삭제:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 삭제 실패:", error);
    throw error;
  }
};
