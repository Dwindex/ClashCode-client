import React from "react";
import styles from "./Footer.module.css";
import ContentList from "../../molecules/ContentList";
import SocialMediaButton from "../../molecules/SocialMediaBtn";
import Constants from "@/constants";

function Footer() {
  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div className={styles.left_container}>
          <ContentList
            contentTitle={"CONTESTS"}
            contentList={Constants.contest}
          />
          <ContentList contentTitle={"BLOGS"} contentList={Constants.blogs} />
          <ContentList
            contentTitle={"POLICIES"}
            contentList={Constants.policies}
          />
          <ContentList
            contentTitle={"ABOUT US"}
            contentList={Constants.aboutus}
          />
        </div>
        <span />
        {/*this id the line that divides left and right container */}
        <div className={styles.right_container}>
            <span>Clash</span>
            <label>Payment/Withdrawl</label>
            <div>
                {Constants.paymentIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        height={icon.height}
                        width={icon.width}
                    />
                ))}
            </div>
        </div>
      </div>
      <div className={styles.mid_container}>
        {/* all the data is in constants.tsx */}
        {Constants.socialMediaData.map((socialMedia, index) => (
          <SocialMediaButton
            key={index}
            image={socialMedia.image}
            onClick={socialMedia.onClick}
            height={socialMedia.height}
            width={socialMedia.width}
            margin={socialMedia.margin}
          />
        ))}
        <span />
        <label> Made with ❤️ in Visakhapatnam, India</label>
      </div>
      <div className={styles.bottom_container}>
        <a href={"#"}> 2024, ClashCode All Right Reserved</a>
        <span />
        <label>
          {/* all the data is in constants.tsx */}
          {Constants.links.map((a, index) => (
            <a key={index} href={a.href}>
              {a.label}
              {index < Constants.links.length - 1 && <span>-</span>}
            </a>
          ))}
        </label>
      </div>
      <div className={styles.bottom_logo}>
        <label>Clash</label>
      </div>
    </div>
  );
}
export default React.memo(Footer);
