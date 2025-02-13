export const formatTime = (seconds) => {
    const totalSeconds = Math.floor(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
};

// ✅ 초(Seconds)를 "HH:MM:00" 형식으로 변환
export const formatTimeForApi = (seconds) => {
    if (seconds === null || seconds === undefined) return "00:00:00";
  
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  
    return `${h}:${m}:00`;
  };
  
  export const convertTimeToSeconds = (timeString) => {
    if (!timeString || typeof timeString !== "string" || !timeString.includes(":")) {
      console.warn("⚠️ convertTimeToSeconds: 유효하지 않은 time 값:", timeString);
      return 0; // 기본값 0초 반환
    }
  
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
  };
  
  
  // ✅ 15분 단위 증가
export const handleTimeIncrease = (setTime, isTimerMode, isRunning) => {
  if (isTimerMode && !isRunning) {
    setTime((prevTime) => prevTime + 900); // 900초 = 15분 증가
  }
};

// ✅ 15분 단위 감소
export const handleTimeDecrease = (setTime, isTimerMode, isRunning) => {
  if (isTimerMode && !isRunning) {
    setTime((prevTime) => Math.max(0, prevTime - 900)); // 900초 = 15분 감소
  }
};
