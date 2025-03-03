import Button from "@/components/atoms/Button";
import { handleImageError } from "../../hooks/utils/handleErrorImage";
import Styles from "./Friends.module.css";
import { Friends } from "../../types/Friends";

const DashBoardFriends:React.FC<{data: Friends[]}> = ({data}) => {

    return(
        <div className={Styles.mainContainer}>
            <label>{"Friends"}</label>
            {
                
                (data?.length === 0 || !data)?
                <span>{"No Friends"}</span> :

                data?.map((e:Friends,index:number) =>(
                    <div key={index}>
                       <div>
                       <img src={e.profile} alt="img" onError={handleImageError}/>
                        <div>
                            <label>{e.name}</label>
                            <span>{`Reating: ${e.rating}`}</span>
                        </div>
                       </div>

                        <Button className={Styles.challangeBtn} variant="primary" type="button" onClick={()=>{}} >{"Challenge"}</Button>
                    </div>
                ))

            }
        </div>
    );
}

export default DashBoardFriends;