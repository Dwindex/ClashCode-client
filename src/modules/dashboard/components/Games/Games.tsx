import { contestCard } from "../../types/ContestCard";
import ContestCard from "../ContestCard";
import constants from "@/constants";
import Styles from "./Games.module.css";

const DashboardGames:React.FC = () => {
    return(
        <div className={Styles.mainContainer} >
            <label>{"Games"}</label>
            <div>
                {
                    constants.dashboardGames.map((e:contestCard,index:number) => (
                        <ContestCard
                            key={index}
                            imageUrl={e.imageUrl}
                            title={e.title}
                            baseTitle={e.baseTitle}
                            iconUrl={e.iconUrl}
                            route={e.route}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default  DashboardGames;