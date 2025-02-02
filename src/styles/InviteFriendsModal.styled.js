import styled, { keyframes } from "styled-components";

/* 슬라이드 업 애니메이션 (하단 시트 올라오는 느낌) */
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

/* ✅ 오버레이 (화면 전체 덮기) */
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
`;

/* ✅ 모달 컨테이너 (하단 시트) */
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* 하단에서 위로 올라오는 애니메이션 */
  animation: ${slideUp} 0.3s ease-out forwards;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* 전체 글자를 검정색으로 */
  color: #000;
`;

/* ✅ 닫기(X) 버튼 */
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;

  /* 닫기 버튼도 검정색 글자 */
  color: #000;
`;

/* ✅ 모달 제목 */
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;

  /* 제목 글자도 검정색 명시 */
  color: #000;
`;

/* ✅ 옵션(카톡, 링크) 묶음 컨테이너 */
export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

/* ✅ 각 옵션 버튼 */
export const Option = styled.button`
  background: #f9f9f9;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 120px;
  transition: background 0.3s;
  /* 버튼 내 글자도 검정색 */
  color: #000;

  &:hover {
    background: #ececec;
  }
`;

/* ✅ 옵션 내부 아이콘 */
export const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;
