import React from "react";
import styles from "@/modules/v1Contests/page/play/play.module.css";

interface NavBarProps {
  rating: string;
  onRunCode: () => void;
  onSubmitCode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ rating, onRunCode, onSubmitCode }) => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_box_1}>
        <label>
          Clash<span>Code</span>
        </label>
      </div>
      <div className={styles.nav_box_2}>
        <div className={styles.nav_box_2_item_1}>
          <img
            alt="bug"
            height={16}
            width={20}
            src={"/static/icons/contest/bug.svg"}
          />
        </div>
        <span></span>
        <div onClick={onRunCode} className={styles.nav_box_2_item_2}>
          <img
            alt="bug"
            height={16}
            width={20}
            src={"/static/icons/contest/run.svg"}
          />
        </div>
        <span></span>
        <div onClick={onSubmitCode} className={styles.nav_box_2_item_3}>
          <img
            alt="bug"
            height={16}
            width={20}
            src={"/static/icons/contest/next.svg"}
          />
        </div>
      </div>
      <div className={styles.nav_box_3}>
        <div className={styles.nav_box_3_item_1}>
          <img
            alt="rating"
            src={"/static/icons/contest/rating.svg"}
            height={20}
            width={18}
          />
          {rating ?? 0}
        </div>
        <div className={styles.nav_box_3_item_2}>
          <img
            alt="rating"
            src={"/static/icons/setting.svg"}
            height={20}
            width={20}
          />
        </div>
        <div className={styles.nav_box_3_item_3}>
          <img
            className={styles.profile_img}
            alt="rating"
            src={"/static/icons/profile.svg"}
            height={24}
            width={24}
          />
          <div>
            <span className={styles.gradiant_1}>
              <img
                alt="rating"
                src={"/static/icons/light.svg"}
                height={18}
                width={18}
              />
            </span>
            <span className={styles.gradiant_2}>
              <img
                alt="rating"
                src={"/static/icons/dark.svg"}
                height={18}
                width={18}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
