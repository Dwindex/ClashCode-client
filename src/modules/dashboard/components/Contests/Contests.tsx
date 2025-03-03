import assets from "@/lib/assets";
import ContestCard from "../ContestCard";
import Styles from "./Contests.module.css";

const Contests:React.FC = () => {
    return(
        <div className={Styles.mainContainer}>
            <ContestCard imageUrl={assets.Images.contests.contest1v1}
            iconUrl={assets.Icons.contest.icon1v1}
            title="1 vs 1 Contest"
            baseTitle="Battle live with your opponent on a common problem statement and win 2x Prize money"
            route="/"
            />
            <ContestCard imageUrl={assets.Images.contests.poolcontest}
            iconUrl={assets.Icons.contest.trophy2}
            title="Pool Contest"
            baseTitle="Battle live with your opponent on a common problem statement and win 2x Prize money"
            route="/"
            />
        </div>
    );
}

export default Contests;