// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startscreen from "./screens/Startscreen";
import Onboarding from "./screens/OnboardingPage";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Garden from "./screens/GardenPage";
import Ranking from "./screens/Ranking";
import Mission from "./screens/Mission";
import Settings from "./screens/Settings";
import MyInfo from "./screens/MyInfo";
import KakaoCallback from "./screens/KakaoCallback";
import "./styles/App.css";

// 전역 오디오 컨텍스트 및 백그라운드 오디오 컴포넌트 임포트
import { AudioProvider } from "./context/AudioContext";
import BackgroundAudio from "./components/BackGroundAudio";

const App = () => {
  return (
    <div className="App">
      {/* AudioProvider로 앱 전체를 감싸고, 
          BackgroundAudio 컴포넌트를 최상위에 렌더링하여 라우터 전환에도 유지 */}
      <AudioProvider>
        <BackgroundAudio />
        <Router>
          <Routes>
            <Route path="/" element={<Startscreen />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/kakao/callback" element={<KakaoCallback />} />
          </Routes>
        </Router>
      </AudioProvider>
    </div>
  );
};

export default App;
