import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  InputContainer,
  InputField,
  SendButton,
  CloseModalButton,
} from "../../styles/RankInviteFriendsModal.styled.js"; // ✅ 새로운 스타일 파일 적용

const RankInviteFriendsModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSendInvite = () => {
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }
    alert(`${email}로 초대 링크를 보냈습니다.`);
    setEmail("");
  };

  return (
    isOpen && (
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <h2>친구 추가</h2>

          <InputContainer>
            <InputField
              type="email"
              placeholder="이메일을 입력해 주세요.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SendButton onClick={handleSendInvite}>보내기</SendButton>
          </InputContainer>

          <CloseModalButton onClick={onClose}>닫기</CloseModalButton>
        </ModalContainer>
      </Overlay>
    )
  );
};

export default RankInviteFriendsModal;
