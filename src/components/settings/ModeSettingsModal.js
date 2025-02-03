import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  ModeOption,
  ModeTextWrapper,
  ModeTitle,
  ModeDescription,
  ToggleSwitch,
  ToggleInput,
  Slider,
} from "../../styles/ModeSettingsModal.styled.js";

const ModeSettingsModal = ({ isOpen, onClose }) => {
  // 여기서 로컬 상태로 '기본 모드'와 '잠금 모드'의 체크 여부를 관리
  const [localBasicMode, setLocalBasicMode] = useState(false);
  const [localLockMode, setLocalLockMode] = useState(false);

  // 모달 표시 여부에 따라 렌더링
  if (!isOpen) return null;

  // 배경 클릭 시 모달 닫기 (필요 없다면 삭제 가능)
  const handleOverlayClick = () => {
    if (onClose) {
      onClose();
    }
  };

  // 모달 안쪽 클릭 시 이벤트 전파 중단 (배경 클릭과 구분)
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalContainerClick}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>모드 설정</Title>

        {/* 기본 모드 */}
        <ModeOption>
          <ModeTextWrapper>
            <ModeTitle>기본 모드</ModeTitle>
            <ModeDescription>
              집중 시간 동안 다른 앱을 이용할 수 있어요
            </ModeDescription>
          </ModeTextWrapper>

          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              // localBasicMode에 따라 On/Off
              checked={localBasicMode}
              // 클릭 시 localBasicMode를 반전
              onChange={(e) => setLocalBasicMode(e.target.checked)}
            />
            <Slider className="slider" />
          </ToggleSwitch>
        </ModeOption>

        {/* 잠금 모드 */}
        <ModeOption>
          <ModeTextWrapper>
            <ModeTitle>잠금 모드</ModeTitle>
            <ModeDescription>
              집중 시간 동안 모든 앱을 이용할 수 없어요
            </ModeDescription>
          </ModeTextWrapper>

          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              // localLockMode에 따라 On/Off
              checked={localLockMode}
              // 클릭 시 localLockMode를 반전
              onChange={(e) => setLocalLockMode(e.target.checked)}
            />
            <Slider className="slider" />
          </ToggleSwitch>
        </ModeOption>
      </ModalContainer>
    </Overlay>
  );
};

export default ModeSettingsModal;
