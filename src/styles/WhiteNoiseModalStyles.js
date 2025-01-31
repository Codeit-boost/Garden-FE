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
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 300px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
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
  flex-direction: column;
`;

export const Option = styled.div`
  padding: 12px 15px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  background: #f9f9f9;
  margin-bottom: 8px;

  &:hover {
    background: #ececec;
  }
`;

export const CheckIcon = styled.span`
  font-size: 18px;
  color: #4caf50;
  font-weight: bold;
`;
