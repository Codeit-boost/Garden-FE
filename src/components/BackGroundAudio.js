// src/components/BackgroundAudio.js
import React, { useContext, useEffect, useRef } from "react";
import { AudioContext } from "../context/AudioContext";

// 오디오 파일 import (파일명은 실제 파일명과 경로에 맞게 조정하세요)
import fireSound from "../assets/sound/모닥불.mp3";
import rainSound from "../assets/sound/빗소리.mp3";
import birdsSound from "../assets/sound/새소리.mp3";

const BackgroundAudio = () => {
  const { whiteNoise } = useContext(AudioContext);
  const audioRef = useRef(null);

  useEffect(() => {
    let audioSrc = null;
    // 선택한 whiteNoise 값에 따라 재생할 음원 결정
    switch (whiteNoise) {
      case "빗소리":
        audioSrc = rainSound;
        break;
      case "새소리":
        audioSrc = birdsSound;
        break;
      case "모닥불":
        audioSrc = fireSound;
        break;
      default:
        audioSrc = null; // "끄기"일 경우 null 처리
    }

    if (audioRef.current) {
      if (audioSrc) {
        // 현재 재생중인 소스와 다르다면 업데이트 후 재생
        if (audioRef.current.src !== audioSrc) {
          audioRef.current.src = audioSrc;
          audioRef.current.loop = true;
          audioRef.current
            .play()
            .catch((error) => console.error("Audio playback error:", error));
        }
      } else {
        // "끄기" 선택 시 오디오 정지
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = "";
      }
    }
  }, [whiteNoise]);

  return <audio ref={audioRef} />;
};

export default BackgroundAudio;
