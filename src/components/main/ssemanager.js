export const connectToSSE = (setTime, setCurrentFlowerImage, setCurrentStageIndex) => {
    console.log("📡 [SSE] 서버 이벤트 연결 시작...");

    const eventSource = new EventSource('https://garden-c.kro.kr/api/focusTime/stream', { withCredentials: true });

    eventSource.onopen = () => {
        console.log("✅ [SSE] 연결 성공");
    };

    eventSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            console.log("📡 [SSE] 서버에서 받은 데이터:", data);

            // ✅ 백엔드 응답에서 focusTimeId 저장
            if (data.id) {
                localStorage.setItem("focusTimeId", data.id);
                console.log(`✅ [SSE] 집중시간 ID 저장됨: ${data.id}`);
            }

            // ✅ 서버에서 받은 시간으로 동기화
            if (data.time) {
                setTime(data.time);
            }

            // ✅ 꽃 성장 상태 반영
            if (data.FlowerImage) {
                setCurrentFlowerImage(data.FlowerImage);
                setCurrentStageIndex(4);
            } else {
                setCurrentStageIndex(prevIndex => Math.min(prevIndex + 1, 4));
            }
        } catch (error) {
            console.error("❌ [SSE] 데이터 처리 오류:", error);
        }
    };

    eventSource.onerror = (error) => {
        console.error("❌ [SSE] 서버 이벤트 연결 오류:", error);
        setTimeout(() => {
            console.log("🔄 [SSE] 재연결 시도...");
            connectToSSE(setTime, setCurrentFlowerImage, setCurrentStageIndex);
        }, 5000); // 5초 후 재연결 시도
        eventSource.close();
    };

    return () => {
        console.log("🔌 [SSE] 연결 해제");
        eventSource.close();
    };
};
