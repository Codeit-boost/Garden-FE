// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

import { AudioProvider } from "./context/AudioContext";
import BackgroundAudio from "./components/BackGroundAudio";

// AppContent 컴포넌트 내에서 현재 경로를 확인하여,
// Startscreen ("/"), Onboarding ("/onboarding"로 시작) 및 Login ("/login") 페이지에서는 BackgroundAudio를 렌더링X
const AppContent = () => {
  const location = useLocation();
  const shouldPlayAudio = !(
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname.startsWith("/onboarding")
  );

  return (
    <>
      {shouldPlayAudio && <BackgroundAudio />}
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
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <AudioProvider>
        <Router>
          <AppContent />
        </Router>
      </AudioProvider>
    </div>
  );
};

export default App;
