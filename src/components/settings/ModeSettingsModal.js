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
import { updateMyInfo } from "../../api/member"; // ✅ 회원 정보 수정 API 추가

const ModeSettingsModal = ({ isOpen, onClose, mode, setMode }) => {
  // ✅ 로컬 상태 관리
  const [localBasicMode, setLocalBasicMode] = useState(mode === "기본 모드");
  const [localLockMode, setLocalLockMode] = useState(mode === "잠금 모드");

  // 모달 표시 여부에 따라 렌더링
  if (!isOpen) return null;

  // ✅ 모드 변경 함수 (API 호출 포함)
  const handleModeChange = async (newMode) => {
    console.log(`📢 모드 변경: ${newMode}`); // ✅ 콘솔 출력
    setLocalBasicMode(newMode === "기본 모드");
    setLocalLockMode(newMode === "잠금 모드");
    setMode(newMode); // ✅ 부모 컴포넌트 상태 업데이트

    try {
      await updateMyInfo({ mode: newMode }); // ✅ API 호출
      console.log("✅ 모드 변경 API 요청 성공:", newMode);
    } catch (error) {
      console.error("❌ 모드 변경 API 요청 실패:", error);
    }
  };

  // 모달 배경 클릭 시 닫기
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
              checked={localBasicMode}
              onChange={() => handleModeChange("기본 모드")}
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
              checked={localLockMode}
              onChange={() => handleModeChange("잠금 모드")}
            />
            <Slider className="slider" />
          </ToggleSwitch>
        </ModeOption>
      </ModalContainer>
    </Overlay>
  );
};

export default ModeSettingsModal;
