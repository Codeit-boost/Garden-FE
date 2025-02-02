import React from "react";
import "../../styles/FriendRanking.css";

// friendRanking 배열을 props로 받아서 리스트 렌더링
const FriendRanking = ({ data }) => {
  // 1,2,3위 왕관 아이콘
  const crownIcon = {
    1: "/images/crown-gold.png",
    2: "/images/crown-silver.png",
    3: "/images/crown-bronze.png",
  };

  const renderRankItem = (item, idx) => {
    const { rank, userName, leaf, seed, time } = item;
    return (
      <div className="ranking-item" key={idx}>
        <div className="ranking-rank">
          {rank <= 3 ? (
            <img
              src={crownIcon[rank]}
              alt={`crown-${rank}`}
              className="crown-icon"
            />
          ) : (
            <span>{rank}</span>
          )}
        </div>

        <div className="ranking-user">
          <div className="user-name">{userName}</div>
          <div className="user-stats">
            <span className="user-leaf">🌱 {leaf}</span>
            <span className="user-seed">🌰 {seed}</span>
          </div>
        </div>

        <div className="ranking-time">{time}</div>
      </div>
    );
  };

  return (
    <div className="friend-ranking-container">{data.map(renderRankItem)}</div>
  );
};

export default FriendRanking;
