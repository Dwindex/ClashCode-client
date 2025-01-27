import React from "react";
    import NavBar from "@/components/shared/Navbar";
import contestBanner from "@/static/images/ContestsPage/contestsBanner.svg";
import Image from "next/image";
import Styles from "@/components/ContestsPage/Contests.module.css";
import ContestsCard from "@/components/styled-components/ContestsPage/ContestsCard";
import Leaderboard from "@/components/styled-components/dashboard/Leaderboard";
import HowToPlay from "@/components/styled-components/ContestsPage/HowToPlay";
import FAQ from "@/components/styled-components/ContestsPage/FAQ";
import Footer from "@/components/shared/Footer";

function Contests() {
  return (
    <div className={Styles.ContestsPage}>
      <NavBar />
      <div className={Styles.contestBanner}>
        <Image src={contestBanner} alt="Contests" />
      </div>

      <div className={Styles.contests}>
        {/* section-2  */}
        <div className={Styles.contestsCard}>
          <div>
            <h1>Recommended for you</h1>
            <ContestsCard poolPrice={180} entryFee={100} />
          </div>
          <div className={Styles.vs}>
            <h1>1 v 1 Contests</h1>
            <ContestsCard poolPrice={180} entryFee={100} />
            <ContestsCard poolPrice={460} entryFee={100} />
            <ContestsCard poolPrice={980} entryFee={100} />
            <ContestsCard poolPrice={1460} entryFee={100} />
          </div>
        </div>
        <div className={Styles.divider}></div>
        {/* section-3 */}
        <div className={Styles.stats}>
          <h1>Your Activity</h1>
          <div></div>
          <div className={Styles.leaderboard}>
            <Leaderboard onClick={() => {}} Data={[]} />
          </div>
        </div>
      </div>

      {/* how to play */}
      <div className={Styles.howToPlay}>
      <HowToPlay />
      </div>

      {/* FAQ */}
      <div className={Styles.faq}>
        <FAQ />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default React.memo(Contests);
