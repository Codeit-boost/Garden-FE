import styled from "styled-components";

// 모달 뒤 어두운 오버레이
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달 컨테이너
export const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 320px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// 닫기 버튼
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
`;

// 모달 제목
export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 24px;
`;

// 모드 옵션 한 덩어리
export const ModeOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

// 텍스트 래퍼 (제목+설명)
export const ModeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// 모드 제목
export const ModeTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

// 모드 설명
export const ModeDescription = styled.span`
  font-size: 14px;
  color: #999;
  margin-top: 4px;
`;

/* ========== 토글 스위치 ========== */

// 스위치 라벨 (껍데기)
export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
`;

// 실제 체크박스(화면에 보이지 않음)
export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #4caf50;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #4caf50;
  }
  &:checked + .slider:before {
    transform: translateX(20px);
  }
`;

// 슬라이더 스타일
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;
