import React, { useState } from "react";
import styles from "@/styles/NavBar.module.css";
import profilebg from "@/static/icons/profilebg.svg";
import Wallet from "@/static/icons/Wallet.svg";
import Notification from "@/static/icons/Notification.svg";
import Menu from "@/static/icons/menu.svg";
import Close from "@/static/icons/close.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Overlay for blur effect */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className={styles.menu} onClick={toggleMenu}>
        <img src={menuOpen ? Close : Menu} alt="Menu" width={24} height={24} />
      </div>
      <div className={styles.introText}>
        <span>Clash</span>
      </div>
      <ul className={`${styles.navItems} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contests</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Join</a>
        </li>
      </ul>
      <div className={styles.Icons}>
        <img src={Notification} width={26} height={28} alt="Notification" />
        <img src={Wallet} width={32} height={32} alt="Wallet" />
        <img src={profilebg} width={34} height={34} alt="Profile" />
      </div>
    </nav>
  );
}

export default React.memo(NavBar);
