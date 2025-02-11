// ✅ 초(Seconds)를 "HH:MM:00" 형식으로 변환
export const formatTimeForApi = (seconds) => {
    if (seconds === null || seconds === undefined) return "00:00:00";
  
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  
    return `${h}:${m}:00`;
  };
  
  // ✅ "HH:MM:SS" 형식을 초(Seconds)로 변환
  export const convertTimeToSeconds = (timeString) => {
    if (!timeString) {
      console.warn("⚠️ convertTimeToSeconds: 유효하지 않은 timeString 값");
      return 0;
    }
  
    const [hours, minutes] = timeString.split(":").map(Number);
    return (hours || 0) * 3600 + (minutes || 0) * 60;
  };
  
  // ✅ 타이머 시간 조정 (15분 단위 증가/감소)
  export const handleTimeAdjust = (setTime, amount, isTimerMode, isRunning) => {
    if (isTimerMode && !isRunning) {
      setTime((prevTime) => Math.max(0, prevTime + amount * 900)); // 900초 = 15분
    }
  };
  