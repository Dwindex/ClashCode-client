import NavBar from "@/components/shared/Navbar";
import React from "react"
import DashboardMainContent from "./DashboardMainContent";
import DashboardSideContent from "./DashboardSideContent";
import Footer from "@/components/shared/Footer";
import Styles from "../Dashboard.module.css";
import { DashBoardprops } from "@/modules/dashboard/types/dashboard";



const DashBoard: React.FC<DashBoardprops> = (props) => {
    return (<div className={Styles.mainContainer}>
        <NavBar />
        <div className={Styles.bodyContainer}>
            <DashboardMainContent discussionForem={props.mainContent.discussionForem}  />
            <DashboardSideContent />
        </div>
        <Footer />
    </div>)
}

export default React.memo(DashBoard);