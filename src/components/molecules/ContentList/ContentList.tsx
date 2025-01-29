import React from "react";
import styles from "./ContentList.module.css";

type Items = {
  id: number;
  name: string;
  link: string;
};

type ContentsProps = {
  contentTitle: string;
  contentList: Items[];
};

function Contents({ contentTitle, contentList }: ContentsProps) {
  return (
    <div className={styles.mainContainer}>
      <span>{contentTitle}</span>
      <ul>
        {contentList.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default React.memo(Contents);
