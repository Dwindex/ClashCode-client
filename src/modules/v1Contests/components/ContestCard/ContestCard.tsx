import React from "react";
import Styles from "./ContestCard.module.css";

interface ContestsCardProps {
  poolPrice: number;
  entryFee: number;
}

const ContestsCard: React.FC<ContestsCardProps> = (props) => {
  return (
    <div className={Styles.contestsCard}>
      <div className={Styles.part1}>
        <div>
          <p className={Styles.poolName}>Prize Pool</p>
          <p className={Styles.poolPrize}>₹{props.poolPrice}</p>
        </div>
        <div>
          <p className={Styles.fee}>Entry Fee</p>
          <button>₹{props.entryFee}</button>
        </div>  
      </div>
      <div className={Styles.part2}>
        <div>
          <img
            alt="knif"
            width={25}
            height={35}
            src={"/static/images/dashboard/crossknif.svg"}
          />
          <p>1 v 1 Contest</p>
        </div>
        <dt>
          <li>Single</li>
        </dt>
      </div>
    </div>
  );
};

export default ContestsCard;
