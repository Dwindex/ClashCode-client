import React from "react";
import styles from "./Leaderboard.module.css";

type LeaderboardDataModal = {
  rank: number;
  user: string;
  rating: number;
};

type LeaderboardProps = {
  onClick: () => void;
  Data: LeaderboardDataModal[];
  // optionsList?: string[];
};

const Leaderboard: React.FC<LeaderboardProps> = ({ onClick, Data }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.top}>
        <span>Leaderboards</span>
      </div>
      <div className={styles.score_board}>
        <div className={styles.header}>
          <span>Rank</span>
          <span>User</span>
          <span>Rating</span>
        </div>
        <div className={styles.body}>
          {Data.map((item, index) => (
            <>
              <div className={styles.rows}>
                <span
                  style={{
                    color:
                      (item.rank === 1 && "#FFC15E") ||
                      (item.rank === 2 && "#0000FF") ||
                      (item.rank === 3 && "#C66A00") ||
                      "",
                  }}
                >
                  {item.rank}
                </span>
                <span className={styles.user_data}>{item.user}</span>
                <span>{item.rating}</span>
              </div>
              {index === Data.length - 1 && (
                <button className={styles.button} onClick={onClick}>
                  Show More
                </button>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Leaderboard);
