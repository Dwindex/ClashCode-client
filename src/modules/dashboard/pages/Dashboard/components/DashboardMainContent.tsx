import DashBoardSearchBox from "@/modules/dashboard/components/SearchBox";
import Styles from "../Dashboard.module.css";
import Contests from "@/modules/dashboard/components/Contests/Contests";
import DashboardGames from "@/modules/dashboard/components/Games";
import DashBoardDiscussionForem from "@/modules/dashboard/components/DiscussionForem";

import { DashBoardMainContentProps } from "@/modules/dashboard/types/dashboard";

const DashboardMainContent:React.FC<DashBoardMainContentProps> = (props) => {
    return( 
    <div className={Styles.mainContent}>
        <DashBoardSearchBox/>
       <Contests/>
       <DashboardGames/>
       <DashBoardDiscussionForem data={props.discussionForem.data} loading={props.discussionForem.loading} currentPage={props.discussionForem.currentPage} scrollRef={props.discussionForem.scrollRef} handlePagenation={props.discussionForem.handlePagenation} />
    </div>
    )
}

export default DashboardMainContent;