import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginWithKakao } from "../api/auth";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    console.log("✅ 카카오 로그인 코드:", code);

    if (code) {
      loginWithKakao(code)
        .then(() => {
          const token = localStorage.getItem("token");
          console.log("✅ 로그인 후 JWT:", token);

          if (token) {
            console.log("✅ 홈으로 이동!");
            navigate("/home"); // ✅ `?token=...` 없이 이동하도록 수정!
          } else {
            console.error("❌ JWT 저장 실패! 로그인 재시도 필요");
            alert("로그인 실패! 다시 시도해주세요.");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("❌ 로그인 요청 실패:", error);
          alert("로그인 실패! 다시 시도해주세요.");
          navigate("/login");
        });
    } else {
      alert("잘못된 접근입니다.");
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
