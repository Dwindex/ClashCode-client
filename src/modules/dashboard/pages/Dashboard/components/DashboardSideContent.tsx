import DashBoardFriends from "@/modules/dashboard/components/FriendsContainer";
import Styles from "../Dashboard.module.css";
import DashboardLeaderboard from "@/modules/dashboard/components/LeaderBoard";
import DashboardActivity from "@/modules/dashboard/components/Activity";

 const DashboardSideContent:React.FC = () => {
    return(
        <div className={Styles.sideContent}>
            <DashBoardFriends data={[]}/>
            <DashboardLeaderboard data={[]} />
            <DashboardActivity data={[]}/>
        </div>
    )
 }

 export default DashboardSideContent;