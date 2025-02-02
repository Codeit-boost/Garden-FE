import React from "react";

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
import kakaoIcon from "../../assets/icons/카카오톡.png";
import linkIcon from "../../assets/icons/링크.png";

const InviteFriendsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 링크 복사 기능
  const handleCopyLink = () => {
    const inviteLink = "https://yourapp.com/invite";
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert("링크가 복사되었습니다!");
    });
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>친구 초대하기</Title>

        <OptionContainer>
          <Option onClick={() => alert("카카오톡 공유 기능 추가 예정")}>
            <IconImage src={kakaoIcon} alt="카카오톡" />
            카카오톡
          </Option>
          <Option onClick={handleCopyLink}>
            <IconImage src={linkIcon} alt="링크 복사" />
            링크 복사
          </Option>
        </OptionContainer>
      </Container>
    </Overlay>
  );
};

export default InviteFriendsModal;
