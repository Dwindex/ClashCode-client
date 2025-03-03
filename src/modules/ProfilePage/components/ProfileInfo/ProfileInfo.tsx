import React from "react";
import styles from "./ProfileInfo.module.css";

// Import SVGs properly
import EmailIcon from "/static/icons/ProfilePage/Email.svg";
import LocationIcon from "/static/icons/ProfilePage/Location.svg";
import BirthdayIcon from "/static/icons/ProfilePage/Birthday.svg";
import BusinessIcon from "/static/icons/ProfilePage/Business.svg";
// Define types
interface Friend {
  id: number;
  name: string;
  rating: number;
  profilePic: string;
}

interface ProfileInfoProps {
  stats: {
    contestsWon: number;
    contestsLost: number;
    winRate: string;
    totalContests: number;
    mostUsedLanguage: string;
  };
  friends: Friend[];
  profile: {
    email: string;
    location: string;
    birthday: string;
    profession: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ stats, friends, profile }) => {
  // Prevent crashing
  if (!stats || !friends || !profile) {
    return <p>Loading...</p>;
  }
  console.log("ProfileInfo component is rendering!", stats, friends, profile);

  return (
    <div className={styles.container}>
      <div className={styles.statsSection}>
        <div className={styles.statRow}>
          <span>Contests Won</span>
          <span className={styles.greenText}>{stats.contestsWon}</span>
        </div>
        <div className={styles.statRow}>
          <span>Contests Lost</span>
          <span className={styles.redText}>{stats.contestsLost}</span>
        </div>
        <div className={styles.statRow}>
          <span>Win Rate</span>
          <span className={styles.Texts}>{stats.winRate}</span>
        </div>
        <div className={styles.statRow}>
          <span>Total Contests</span>
          <span className={styles.Texts}>{stats.totalContests}</span>
        </div>
        <div className={styles.statRow}>
          <span>Most Used Language</span>
          <span className={styles.languageTag}>{stats.mostUsedLanguage}</span>
        </div>
      </div>

      <div className={styles.friendsSection}>
        <h3>Friends</h3>
        {friends.map((friend) => (
          <div key={friend.id} className={styles.friendRow}>
            <div className={styles.friendInfo}>
              <img
                src={friend.profilePic}
                width={50}
                height={50}
                alt={`${friend.name}'s profile picture`}
                className={styles.friendAvatar}
              />
              <div className={styles.friendDetails}>
                <span>{friend.name}</span>
                <span className={styles.friendRating}>Rating: {friend.rating}</span>
              </div>
            </div>
            <button className={styles.challengeButton}>Challenge</button>
          </div>
        ))}
      </div>

      <div className={styles.profileSection}>
        <div>
          <img src={EmailIcon} alt="Email Icon" />
          <p>{profile.email}</p>
        </div>
        <div>
          <img src={LocationIcon} alt="Location Icon" />
          <p>{profile.location}</p>
        </div>
        <div>
          <img src={BirthdayIcon} alt="Birthday Icon" />
          <p>{profile.birthday}</p>
        </div>
        <div>
          <img src={BusinessIcon} alt="Business Icon" />
          <p>{profile.profession}</p>
        </div>
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
