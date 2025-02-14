import styled from "styled-components";

// ✅ 친구 추가 모달 오버레이 (배경)
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;

  @media (max-width: 480px) {
    /* 모바일에서도 하단 정렬 유지 */
    align-items: flex-end;
  }
`;

// ✅ 모달 컨테이너 (하단 시트 디자인)
export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 16px;
    border-radius: 12px 12px 0 0;
  }
`;

// ✅ 입력 필드 + 버튼 컨테이너
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 16px;
  }
`;

// ✅ 이메일 입력 필드
export const InputField = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #4caf50;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 13px;
  }
`;

// ✅ 보내기 버튼
export const SendButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;

// ✅ 닫기 버튼
export const CloseModalButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
    margin-top: 8px;
  }
`;
