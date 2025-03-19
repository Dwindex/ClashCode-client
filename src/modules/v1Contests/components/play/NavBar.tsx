import React from "react";
import styles from "@/modules/v1Contests/components/play/play.module.css";

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
    </div>
  );
};

export default NavBar;
