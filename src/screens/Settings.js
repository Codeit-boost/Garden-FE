import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Section,
  Item,
  ToggleSwitch,
  RightText,
  ArrowIcon,
} from "../styles/SettingsStyles";
import TabBar from "../components/BottomBar";
import WhiteNoiseModal from "../components/settings/WhiteNoiseModal";
import ModeSettingsModal from "../components/settings/ModeSettingsModal";
import InviteFriendsModal from "../components/settings/InviteFriendsModal";
import arrowRight from "../assets/icons/arrow-right.svg";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [isModeModalOpen, setIsModeModalOpen] = useState(false);
  const [isNoiseModalOpen, setIsNoiseModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("기본 모드");
  const [selectedNoise, setSelectedNoise] = useState("끄기");
  const navigate = useNavigate();

  return (
    <Container>
      <Header>설정</Header>

      <Section>
        <h3>계정</h3>
        <Item onClick={() => navigate("/myinfo")}>
          <span>내 정보</span>
          <ArrowIcon src={arrowRight} alt="화살표" />
        </Item>
      </Section>

      <Section>
        <h3>설정</h3>
        <Item>
          <span>알림 설정</span>
          <ToggleSwitch
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </Item>
        <Item onClick={() => setIsModeModalOpen(true)}>
          <span>모드 설정</span>
          <div>
            <RightText>{selectedMode}</RightText>
            <ArrowIcon src={arrowRight} alt="화살표" />
          </div>
        </Item>
        <Item onClick={() => setIsNoiseModalOpen(true)}>
          <span>백색 소음 설정</span>
          <div>
            <RightText>{selectedNoise}</RightText>
            <ArrowIcon src={arrowRight} alt="화살표" />
          </div>
        </Item>
      </Section>

      <Section last>
        <h3>초대</h3>
        <Item onClick={() => setIsInviteModalOpen(true)}>
          친구 초대하기 <ArrowIcon src={arrowRight} alt="화살표" />
        </Item>
      </Section>

      <TabBar />

      <ModeSettingsModal
        isOpen={isModeModalOpen}
        onClose={() => setIsModeModalOpen(false)}
        mode={selectedMode}
        setMode={setSelectedMode}
      />
      <WhiteNoiseModal
        isOpen={isNoiseModalOpen}
        onClose={() => setIsNoiseModalOpen(false)}
        selectedNoise={selectedNoise}
        setSelectedNoise={setSelectedNoise}
      />
      <InviteFriendsModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
    </Container>
  );
};

export default Settings;
