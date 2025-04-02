import React from "react";
import Style from "./MatchMaking.module.css";
import MatchMakingUserCard from "./MatchMakingUserCard";

interface MatchMakingUserCardProps{
    userName:string,
    rating:string,
    profileImage:string
}


interface MatchMakingCardProps{
    user1: MatchMakingUserCardProps,
    user2: MatchMakingUserCardProps,
    winnings: string,
    matchMakingTime:string,
    onClick: () => void
}

const MatchMakingCard:React.FC<MatchMakingCardProps> = (data) => {
    return (
        <div className={Style.mainContainer}>
            <div>
                <MatchMakingUserCard data={data.user1}/>
                <div className={Style.middleContext}>
                    <label>{"VS"}</label>
                    <div>
                      <label>{"Winnings"}</label>
                      <span>{`₹${data.winnings}`}</span>  
                    </div>
                </div>
                <MatchMakingUserCard data={data.user2}/>
            </div>
            <label>{`Finding you opponent in ${data.matchMakingTime}...`}</label>
            <button onClick={data.onClick}>Abort Search</button>
        </div>
    )
}

export default React.memo(MatchMakingCard);