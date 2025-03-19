import React from "react";
import styles from "./ParticipantCard.module.css";

const ParticipantCard = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "400px",
        padding: "20px",
      }}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="a.jpeg" />
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.name}>Hemanth5603</p>
          <div className={styles.championContainer}>
            <img src="trophy.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
