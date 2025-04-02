import React from "react";
import Style from "./MatchMaking.module.css"
import { handleImageError } from "@/modules/dashboard/hooks/utils/handleErrorImage";
import assets from "@/lib/assets";

interface MatchMakingUserCardProps{
    userName:string,
    rating:string,
    profileImage:string
}

const MatchMakingUserCard:React.FC<{data: MatchMakingUserCardProps}>= (props) => {
    var data = props.data;

    if(data.userName.length === 0 || data.rating.length === 0){
        return(
        <div className={Style.findingUser}>
            <img src="/" alt="img" onError={handleImageError}/>
            <label>{"Finding Player...."}</label>
        </div>
        )
    }

    return (
        <div className={Style.userCard}>
            <img src={data.profileImage === "" ? "/" : data.profileImage} alt="img" onError={handleImageError}/>
            <label>{data.userName}</label>
            <div>
                <div>
                    <img src={assets.Icons.contest.trophy2} alt="trpy"/>
                </div>
                <span>{data.rating}</span>
            </div>
        </div>
    )
}

export default React.memo(MatchMakingUserCard);