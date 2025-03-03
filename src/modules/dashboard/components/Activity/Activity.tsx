import { ActivityProps, DataProps } from "../../types/Activity";
import Styles from "./Activity.module.css";


const DashboardActivity:React.FC<{data:ActivityProps}> = ({data}) => {
    return(
        <div className={Styles.mainContainer}>
            <label>{"Activity"}</label>
            <div className={Styles.body}>
            {
                (!data || data?.length === 0)?
                <span>No Activiy</span>:
                data.map((e:DataProps,index:number)=>(
                    <div className={Styles.data} key={index}>
                        <span className={Styles.time}>{e.time}</span>
                        <span className={Styles.userName}>{e.username}</span>
                        <span className={Styles.message}>{e.message}</span>
                    </div>
                ))
            }
            </div>
            <div className={Styles.showMore} ><span></span></div>
        </div>
    )
}

export default DashboardActivity;