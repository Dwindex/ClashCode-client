import React, { Suspense} from "react";
import Dashboard from "./components/Dashboard";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import Styles from "./Dashboard.module.css";
import useDiscussionForum from "../../hooks/utils/use_discussionForum";


const DashboardContainer: React.FC = () => {
    const discussionForemData = useDiscussionForum();
    const mainContent = {
        discussionForem:{
            data:discussionForemData.discussionForem.data || null,
            loading:discussionForemData.discussionForem.loading,
            currentPage:discussionForemData.currentPage,
            scrollRef: discussionForemData.scrollRef,
            handlePagenation:discussionForemData.handlePagenation
        }
    }

    return (
            <Suspense fallback={<div className={Styles.mainContainer} ><LoadingSpinner className={Styles.spinnerColor}/></div>}>
                 <Dashboard mainContent={mainContent} />
            </Suspense>
    );
}

export default React.memo(DashboardContainer);