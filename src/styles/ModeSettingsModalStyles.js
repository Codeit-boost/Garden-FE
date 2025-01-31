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
  margin-top: 20px;
`;

export const Option = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  background: #f9f9f9;
  margin-bottom: 10px;
`;

export const Toggle = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 40px;
  height: 20px;
  background: #ddd;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  &:checked {
    background: #4caf50;
  }

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 1px;
    left: 2px;
    transition: 0.3s;
  }

  &:checked::before {
    left: 20px;
  }
`;
