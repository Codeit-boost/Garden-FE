// src/components/ranking/RankInviteFriendsModal.js
import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  InputContainer,
  InputField,
  SendButton,
  CloseModalButton,
} from "../../styles/RankInviteFriendsModal.styled.js"; // 스타일 파일
import { addFriend } from "../../api/member.js"; // 친구 추가 API 함수 import

const RankInviteFriendsModal = ({ isOpen, onClose }) => {
  const [friendIdInput, setFriendIdInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendInvite = async () => {
    // 입력값이 없으면 알림
    if (!friendIdInput.trim()) {
      alert("친구 아이디를 입력해주세요.");
      return;
    }

    // 입력값을 숫자로 변환 (API에서는 숫자 타입의 friendId를 기대)
    const friendId = parseInt(friendIdInput, 10);
    if (isNaN(friendId)) {
      alert("올바른 친구 아이디를 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await addFriend(friendId);
      alert("친구 추가 요청이 성공적으로 전송되었습니다.");
      setFriendIdInput("");
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("친구 추가 요청 실패:", error);
      alert("친구 추가 요청에 실패하였습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <h2>친구 추가</h2>

          <InputContainer>
            <InputField
              type="text" // 친구 아이디 입력 (숫자로 입력)
              placeholder="친구 아이디를 입력해 주세요"
              value={friendIdInput}
              onChange={(e) => setFriendIdInput(e.target.value)}
            />
            <SendButton onClick={handleSendInvite} disabled={loading}>
              {loading ? "보내는 중..." : "보내기"}
            </SendButton>
          </InputContainer>

          <CloseModalButton onClick={onClose}>닫기</CloseModalButton>
        </ModalContainer>
      </Overlay>
    )
  );
};

export default RankInviteFriendsModal;
