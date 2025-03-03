import { handleImageError } from "../../hooks/utils/handleErrorImage";
import Styles from "./SearchBox.module.css";


const DashBoardSearchBox: React.FC = () => {
    type InputEvent = React.SyntheticEvent<HTMLInputElement,Event>;
    
    const handleInput = (e:InputEvent) => {
            
    }

    return(
    <div className={Styles.SearchBox}>
        <img src="/" alt="profile" onError={handleImageError}/>
        <input onChange={handleInput} type="text" placeholder="Write a Post, Blog, or something.."/>
    </div>
 );
}

export default DashBoardSearchBox