import React from "react";
import { useLocation } from "react-router-dom"; // ✅ 현재 URL 가져오기
import {
  Overlay,
  Container,
  CloseButton,
  Title,
  OptionContainer,
  Option,
  IconImage,
} from "../../styles/InviteFriendsModal.styled";

/* 아이콘 이미지 */
import linkIcon from "../../assets/icons/링크.png";

const InviteFriendsModal = ({ isOpen, onClose }) => {
  const location = useLocation(); // ✅ 현재 페이지 URL 가져오기

  if (!isOpen) return null;

  // ✅ 초대 링크를 클립보드에 복사하는 함수
  const handleCopyClipBoard = async () => {
    try {
      // ✅ 초대용 링크를 고정
      const inviteUrl = "https://garden-fe-shw012s-projects.vercel.app/";

      await navigator.clipboard.writeText(inviteUrl);
      alert("클립보드에 초대 링크가 복사되었어요! 📋");
    } catch (err) {
      console.error("❌ 링크 복사 실패:", err);
      alert("링크 복사에 실패했습니다.");
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>링크 복사</Title>
        <OptionContainer>
          <Option onClick={handleCopyClipBoard}>
            <IconImage src={linkIcon} alt="링크 복사" />
            링크 복사
          </Option>
        </OptionContainer>
      </Container>
    </Overlay>
  );
};

export default InviteFriendsModal;
