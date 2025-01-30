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
import arrowRight from "../assets/icons/arrow-right.svg"; // 화살표 아이콘

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      <Header>설정</Header>

      <Section>
        <h3>계정</h3>
        <Item onClick={() => navigate("/myinfo")}>
          {" "}
          {/* ✅ 클릭 시 내 정보 페이지 이동 */}
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
        <Item>
          <span>모드 설정</span>
          <div>
            <RightText>기본 모드</RightText>
            <ArrowIcon src={arrowRight} alt="화살표" />
          </div>
        </Item>
        <Item>
          <span>백색 소음 설정</span>
          <div>
            <RightText>끄기</RightText>
            <ArrowIcon src={arrowRight} alt="화살표" />
          </div>
        </Item>
      </Section>

      {/* 초대하기 (화면 하단 꽉 차게) */}
      <Section last>
        <h3>초대</h3>
        <Item>
          친구 초대하기 <ArrowIcon src={arrowRight} alt="화살표" />
        </Item>
      </Section>

      <TabBar />
    </Container>
  );
};

export default Settings;
