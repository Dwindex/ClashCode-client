import { getRankColor } from "../../hooks/utils/getRankColor";
import { leaderBoard } from "../../types/Leaderboard";
import Styles from "./LeaderBoard.module.css";

const DashboardLeaderboard:React.FC<{data:leaderBoard[]}> = ({data}) => {
    
    


    return(
        <div className={Styles.mainContainer}>
            <div className={Styles.stickyContainer}>
                <div className={Styles.header}>
                    <label>{"Top Rated"}</label>
                </div>

                <div className={Styles.table}>
                    <label>{"Rank"}</label>
                    <label>{"User"}</label>
                    <label>{"Rating"}</label>
                </div>
            </div>
            {   
                (!data || data?.length === 0)?
                <label>No data</label>:
                data?.map((e:leaderBoard,index:number)=>(
                    <div key={index} className={Styles.table}>
                        <span className={getRankColor(e.rank)} >{e.rank}</span>
                        <span className={Styles.user}>{e.user}</span>
                        <span className={Styles.rating}>{e.rating}</span>
                    </div>
                ))
            }
            {(data && data.length !== 0 ) && <span>{"Show More"}</span>}
        </div>
    );
}

export default DashboardLeaderboard;