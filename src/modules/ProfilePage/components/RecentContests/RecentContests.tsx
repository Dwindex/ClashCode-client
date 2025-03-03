import React from "react";
import Styles from "./RecentContests.module.css";

// Import images
import Up from "/static/icons/ProfilePage/Up.svg";
import Down from "/static/icons/ProfilePage/Down.svg";
import knif from "/static/images/dashboard/crossknif.svg";

const contestsData = [
  {
    id: 1,
    name: "1 vs 1 Contest",
    result: "Won",
    opponent: "@sadiq",
    amount: "+₹150",
    isPositive: true,
    date: "Jan 10, 2025",
  },
  {
    id: 2,
    name: "1 vs 1 Contest",
    result: "Lost",
    opponent: "@tourist",
    amount: "-₹290",
    isPositive: false,
    date: "Jan 10, 2025",
  },
];

const RecentContests: React.FC = () => {
  return (
    <div className={Styles.recentContests}>
      <p className={Styles.recent}>Recent Contests</p>
      {contestsData.map((contest) => (
        <div key={contest.id} className={Styles.container}>
          <div className={Styles.contestInfo}>
            <img src={knif} width={30} height={29} alt="knif" className={Styles.war} />
            <div className={Styles.contestDetails}>
              <div>
                <p className={Styles.contestName}>{contest.name}</p>
                <p className={Styles.result}>
                  {contest.result} against <span>{contest.opponent}</span>
                </p>
              </div>
              <div>
                <div className={Styles.amount}>
                  <p>{contest.amount}</p>
                  <img src={contest.isPositive ? Up : Down} alt="result-icon" />
                </div>
                <p className={Styles.date}>{contest.date}</p>
              </div>
            </div>
          </div>
          <hr className={Styles.hrLine} />
        </div>
      ))}
    </div>
  );
};

export default RecentContests;
