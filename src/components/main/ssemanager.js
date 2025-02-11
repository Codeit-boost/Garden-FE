import { EventSourcePolyfill } from 'event-source-polyfill';

export const connectToSSE = (setFocusTime, setIsRunning, setIndex, initialized,setIsTimerMode, setInitialized) => {
  console.log("📡 [SSE] 서버 이벤트 연결 시작...");

  const token = localStorage.getItem("jwt");
  const eventSource = new EventSourcePolyfill('https://garden-c.kro.kr/api/focusTime/stream', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  eventSource.onopen = () => {
    console.log("✅ [SSE] 연결 성공");
  };

  eventSource.onmessage = (event) => {
    // 첫 메시지일 때 집중시간 여부를 판단
    if (!initialized) {
      setInitialized(true); // 외부에서도 첫 메시지 수신 여부를 알 수 있게 처리
      if (event.data === ":") {
        setIsRunning(false); // 집중시간이 생성되지 않음
        return;
      } else {
        setIsRunning(true); // 집중시간 진행 중
      }
    }

    // 하트비트 (:) 무시
    if (event.data === ":") return;

    try {
      const parsedData = JSON.parse(event.data);
      setFocusTime(parsedData);
      setIsRunning(true);
      setIsTimerMode(parsedData.target_time != "00:00:00")
      setIndex(parsedData.index)
    } catch (err) {
      console.error('파싱 오류:', err);
    }
  };

  eventSource.onerror = (error) => {
    console.error("❌ [SSE] 서버 이벤트 연결 오류:", error);
    setTimeout(() => {
      console.log("🔄 [SSE] 재연결 시도...");
      // 재연결 로직 추가 가능
    }, 5000);
    eventSource.close();
  };

  return () => {
    console.log("🔌 [SSE] 연결 해제");
    eventSource.close();
  };
};