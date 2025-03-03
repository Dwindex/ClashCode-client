import React from "react";
import Styles from './ProfileCard.module.css';

// Import images if Webpack or Vite allows it
import ProfileImage from "/static/images/ProfilePage/profileImg.svg";
import India from "/static/icons/ProfilePage/India.svg";
import Users from "/static/icons/ProfilePage/Users.svg";
import Trophy from "/static/icons/ProfilePage/trophy2-2.svg";
import MegaClasher from '/static/icons/ProfilePage/MegaClasher.svg';
import GoldFastest from '/static/icons/ProfilePage/GoldFastest.svg';
import SilverFastest from '/static/icons/ProfilePage/SilverFastest.svg';

const ProfileCard: React.FC = () => {
    return (
        <div>
            <div className={Styles.mainBanner}>
                <div className={Styles.profileBanner}>
                    <div className={Styles.profileImage}>
                        <img
                            src={ProfileImage}
                            width={89}
                            height={98}
                            alt="profile image"
                        />
                    </div>
                    <div className={Styles.profileInfo}>
                        <div className={Styles.name}>
                            <p>S. Hemanth Srinivas</p>
                            <img
                                src={India}
                                width={25}
                                height={22}
                                alt="countryLogo"
                                className={Styles.country}
                            />
                        </div>
                        <p>@hemanth5603</p>
                        <div className={Styles.followers}>
                            <img
                                src={Users}
                                width={23}
                                height={14}
                                alt="Users"
                                className={Styles.users}
                            />
                            <p>
                                18 <span>Followers</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.stats}>
                    <div className={Styles.one}>
                        <div>
                            <p>2752</p>
                            <img src={Trophy} width={30} height={20} alt="trophies" className={Styles.trophy} />
                        </div>
                        <p>Global Rating</p>
                    </div>
                    {/* <hr className={Styles.myline} color="#989ca1" />s */}
                    <div className={Styles.two}>
                        <span>₹5145</span>
                        <p>Total winnings</p>
                    </div>
                </div>
            </div>

            <div className={Styles.prizes}>
                <div>
                    <img className={Styles.mega} src={MegaClasher} alt="MegaClasher" />
                    <p className={Styles.megaText}>Mega Clasher</p>
                </div>
                <div>
                    <img src={GoldFastest} alt="FastestWin" />
                    <p>Fastest Win</p>
                </div>
                <div>
                    <img src={GoldFastest} alt="FastestWin" />
                    <p>Fastest Win</p>
                </div>
                <div>
                    <img src={SilverFastest} alt="FastestWin" />
                    <p>Fastest Win</p>
                </div>
                <div>
                    <img src={SilverFastest} alt="FastestWin" />
                    <p>Fastest Win</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
