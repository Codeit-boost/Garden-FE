// src/components/settings/WhiteNoiseModal.js
import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  ModalTitle,
  OptionContainer,
  OptionItem,
  CheckIcon,
} from "../../styles/WhiteNoiseModal.styled.js";

const WhiteNoiseModal = ({
  isOpen,
  onClose,
  selectedNoise,
  setSelectedNoise,
}) => {
  // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  // 표시할 화이트 노이즈 옵션 목록
  const noiseOptions = ["끄기", "빗소리", "새소리", "모닥불"];

  // 모달 배경(오버레이) 클릭 시 모달 닫힘
  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  // 모달 본체 클릭 시 배경 클릭 이벤트 전파 막기
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleContainerClick}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalTitle>백색 소음 설정</ModalTitle>

        <OptionContainer>
          {noiseOptions.map((noise) => {
            const isActive = selectedNoise === noise;
            return (
              <OptionItem
                key={noise}
                className={isActive ? "active" : ""}
                onClick={() => setSelectedNoise(noise)}
              >
                {noise}
                {isActive && <CheckIcon>✔</CheckIcon>}
              </OptionItem>
            );
          })}
        </OptionContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default WhiteNoiseModal;
