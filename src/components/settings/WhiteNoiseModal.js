import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  Title,
  CloseButton,
  OptionContainer,
  Option,
  CheckIcon,
} from "../../styles/WhiteNoiseModalStyles.js"; // ✅ 스타일 파일 분리

const WhiteNoiseModal = ({
  isOpen,
  onClose,
  selectedNoise,
  setSelectedNoise,
}) => {
  if (!isOpen) return null;

  const noiseOptions = ["끄기", "빗소리", "새소리", "모닥불"];

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>백색 소음 설정</Title>
        <OptionContainer>
          {noiseOptions.map((noise) => (
            <Option key={noise} onClick={() => setSelectedNoise(noise)}>
              {noise}
              {selectedNoise === noise && <CheckIcon>✔</CheckIcon>}
            </Option>
          ))}
        </OptionContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default WhiteNoiseModal;
