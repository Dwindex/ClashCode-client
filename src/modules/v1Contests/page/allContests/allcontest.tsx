import React from "react";
import NavBar from "@/components/shared/Navbar";
import styles from "./allcontest.module.css";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/shared/Faq/Faq";
import HowToPlay from "@/components/shared/HowToPlay";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import ContestsCard from "../../components/ContestCard/ContestCard";
import useGetAllContest from "../../hooks/useGetAllContests";
import { useState } from "react";

function Contests() {
  const { data: contests } = useGetAllContest();
  const [showConfimationModal, setShowConfirmationModel] = React.useState(false);

  console.info("data", contests);

  function openModal(){
    setShowConfirmationModel(true);
  }
  
  function closeModal(){
    setShowConfirmationModel(false);
  }

  return (
    <div className={styles.contestsPage}>
      <NavBar />
      <Modal />
      <div className={styles.contests}>
        <div className={styles.contestsCard}>
          {/* <div>
            <h1>Recommended for you</h1>
            <ContestsCard poolPrice={180} entryFee={100} />
          </div> */}

          <div className={styles.vs}>
            <h1>1 v 1 Contests</h1>
            {contests?.map((contest, index) => (
              <ContestsCard key={index} poolPrice={contest?.totalWinningAmount} entryFee={contest?.entryFee} />
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        {/* section-3 */}
        <div className={styles.stats}>
          {/* <h1>Your Activity</h1> */}
          <div></div>
          <div className={styles.leaderboard}>
            <Leaderboard onClick={() => {}} Data={[]} />
          </div>
        </div>
      </div>

      {/* how to play */}
      <div className={styles.howToPlay}>
      <HowToPlay />
      </div>

      {/* FAQ */}
      <div className={styles.faq}>
        <FAQ />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default React.memo(Contests);
