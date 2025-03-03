import Styles from "../../components/LeaderBoard/LeaderBoard.module.css"

export const getRankColor = (rank:number) => {{
    switch(rank){
        case 1:{
            return Styles.rank1Color;
        }
        case 2:{
            return Styles.rank2Color;
        }
        case 3:{
            return Styles.rank3Color;
        }
        default:{
            return Styles.rank
        }
    }
}}