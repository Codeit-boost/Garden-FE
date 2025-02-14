import styled from "styled-components";

// 모달 뒤 배경 (오버레이)
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
  z-index: 1000;
`;

// 모달 컨테이너
export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 480px) {
    padding: 16px;
    max-width: 90%;
    border-radius: 12px;
  }
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

  @media (max-width: 480px) {
    top: 8px;
    left: 8px;
    font-size: 18px;
  }
`;

// 모달 제목
export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

// 옵션 목록 전체를 감싸는 컨테이너
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 개별 옵션 아이템
export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  color: #aaa; /* 비활성 옵션 글자색 */
  font-weight: normal;

  &.active {
    font-weight: bold;
    color: #333;
  }

  /* 호버 효과 (필요시 주석 해제)
  &:hover {
    background: #f9f9f9;
  } */

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

// 체크 아이콘
export const CheckIcon = styled.span`
  font-size: 18px;
  color: #4caf50; /* 녹색 아이콘 */
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
