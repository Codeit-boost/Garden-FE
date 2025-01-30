import styled from "styled-components";

// 전체 컨테이너 스타일
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 88vh; /* 한 화면에 맞춤 */
  background-color: #fafafa;
  padding-bottom: 80px; /* 하단바 여백 */
  overflow: hidden; /* 스크롤 방지 */
`;

// 설정 헤더 컨테이너 (흰색 배경 추가)
export const HeaderContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

// 상단 "설정" 헤더 스타일
export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 설정 섹션 (각 블록) 스타일
export const Section = styled.div`
  width: 90%;
  background-color: white;
  margin-top: 10px;
  padding: 12px 20px;

  ${(props) =>
    props.last &&
    `
    flex-grow: 1; /* 마지막 섹션(초대)만 확장 */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
    justify-content: flex-start; /* 상단 정렬 */
    min-height: 120px; /* 최소 높이 지정 */
    margin-bottom: 0; /* 하단바와 맞추기 */
  `}

  h3 {
    font-size: 13px;
    font-weight: bold;
    color: gray;
    margin-bottom: 8px;
  }
`;

// 설정 항목 스타일
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

// 오른쪽 텍스트 (설정 값) 스타일
export const RightText = styled.span`
  font-size: 13px;
  color: #4caf50;
  margin-right: 8px;
`;

// 토글 스위치 스타일
export const ToggleSwitch = styled.input`
  appearance: none;
  width: 36px;
  height: 18px;
  background: #ccc;
  border-radius: 50px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:checked {
    background: #4caf50;
  }

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    top: 1px;
    left: 2px;
    transition: 0.3s;
  }

  &:checked::before {
    left: 18px;
  }
`;

// 화살표 아이콘 스타일
export const ArrowIcon = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.6;
`;
