import assets from "@/lib/assets";
import { contestCard } from "../../types/ContestCard";
import Styles from "./ContestCard.module.css";
import { handleImageError } from "../../hooks/utils/handleErrorImage";

const ContestCard:React.FC<contestCard> = (data) => {
    
    return(
        <div className={Styles.mainContainer}
        style={
            {
                background:` linear-gradient(to top,#00000099,#36363666,#D4D4D400), url(${data.imageUrl})`,
            }
        }
        >
               <div>

               <div>
               <img src={data.iconUrl} onError={handleImageError} alt="icon" />
                <div>
                    <label>{data.title}</label>
                    <span>{data.baseTitle}</span>
                </div>    
               </div>

                <a href={data.route} ><img src={assets.Icons.contest.topRightArrow} alt="icon"/></a>
                </div> 
        </div>
    );
}

export default ContestCard;