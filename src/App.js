import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startscreen from "./screens/Startscreen";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding4 from "./screens/Onboarding4";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Garden from "./screens/GardenPage";
import Ranking from "./screens/Ranking";
import Mission from "./screens/Mission";
import Settings from "./screens/Settings";
import MyInfo from "./screens/MyInfo";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Startscreen />} />
          <Route path="/onboarding/1" element={<Onboarding1 />} />
          <Route path="/onboarding/2" element={<Onboarding2 />} />
          <Route path="/onboarding/3" element={<Onboarding3 />} />
          <Route path="/onboarding/4" element={<Onboarding4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/myinfo" element={<MyInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
