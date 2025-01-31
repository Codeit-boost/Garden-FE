import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  Title,
  CloseButton,
  OptionContainer,
  Option,
  Toggle,
} from "../../styles/ModeSettingsModalStyles.js";

const ModeSettingsModal = ({ isOpen, onClose, mode, setMode }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>모드 설정</Title>
        <OptionContainer>
          <Option>
            <span>기본 모드</span>
            <Toggle
              checked={mode === "기본 모드"}
              onChange={() => setMode("기본 모드")}
            />
          </Option>
          <Option>
            <span>잠금 모드</span>
            <Toggle
              checked={mode === "잠금 모드"}
              onChange={() => setMode("잠금 모드")}
            />
          </Option>
        </OptionContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModeSettingsModal;
