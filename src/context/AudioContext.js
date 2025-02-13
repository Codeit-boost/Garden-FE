// src/context/AudioContext.js
import React, { createContext, useState, useEffect } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [whiteNoise, setWhiteNoise] = useState("끄기");

  // 앱 시작 시 localStorage에 저장된 값이 있다면 불러옴
  useEffect(() => {
    const storedSound = localStorage.getItem("whiteNoise");
    if (storedSound) {
      setWhiteNoise(storedSound);
    }
  }, []);

  // whiteNoise 상태가 변경될 때마다 localStorage 업데이트
  useEffect(() => {
    localStorage.setItem("whiteNoise", whiteNoise);
  }, [whiteNoise]);

  return (
    <AudioContext.Provider value={{ whiteNoise, setWhiteNoise }}>
      {children}
    </AudioContext.Provider>
  );
};
