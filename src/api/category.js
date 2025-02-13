import api from "./api";

// ✅ JWT 토큰 가져오는 함수 (예외 처리 추가)
const getAuthHeaders = () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("❌ [API 오류] JWT 토큰이 없습니다.");
    return null;
  }
  return { Authorization: `Bearer ${token}` };
};

// ✅ 카테고리 목록 조회
export const fetchCategories = async () => {
  const headers = getAuthHeaders();
  if (!headers) return []; // 토큰 없으면 빈 배열 반환

  try {
    const response = await api.get("/api/categories/me", { headers });
    console.log("✅ [API 성공] 카테고리 목록:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 목록 불러오기 실패:", error);
    return [];
  }
};

// ✅ 새로운 카테고리 생성
export const createCategory = async (name) => {
  const headers = getAuthHeaders();
  if (!headers) return null; // 토큰 없으면 요청 안 보냄

  try {
    const response = await api.post("/api/categories/me", { name }, { headers });
    console.log("✅ [API 성공] 카테고리 생성:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 생성 실패:", error);
    return null;
  }
};

// ✅ 카테고리 수정
export const updateCategory = async (oldName, newName) => {
  const headers = getAuthHeaders();
  if (!headers) return null;

  try {
    const response = await api.put("/api/categories/update", { oldName, newName }, { headers });
    console.log("✅ [API 성공] 카테고리 수정:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 수정 실패:", error);
    return null;
  }
};

// ✅ 카테고리 삭제
export const deleteCategory = async (name) => {
  const headers = getAuthHeaders();
  if (!headers) return null;

  try {
    const response = await api.delete("/api/categories", {
      data: { name },
      headers,
    });
    console.log("✅ [API 성공] 카테고리 삭제:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API 오류] 카테고리 삭제 실패:", error);
    return null;
  }
};
