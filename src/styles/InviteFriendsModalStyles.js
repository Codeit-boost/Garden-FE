import styled from "styled-components";

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

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

  &:hover {
    background: #ececec;
  }
`;

export const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;
