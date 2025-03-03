import Styles from "./DiscussionForem.module.css";
import { handleImageError } from "../../hooks/utils/handleErrorImage";
import assets from "@/lib/assets";
import { getShortTimeAgo } from "../../hooks/utils/get_short_time_ago";
import {  Message } from "../../types/DiscussionForum";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import React from "react";
import { DiscussionForumProps } from "../../types/dashboard";

const DashBoardDiscussionForum: React.FC<DiscussionForumProps> = (props) => {
    
    if(!props.loading && !props.data){
        return <div className={Styles.mainContainer}><label>No Discussions Are Available</label></div>
    }

    return (
        <div ref={props.scrollRef} className={Styles.mainContainer}>
            <label>Discussion {(props.loading) && <LoadingSpinner className={Styles.spinnerColor}/>} 
            {props.data?.getMessages.messages.length === 0 && "No Data"}
            </label>
            <div className={Styles.body}>
                {
                    props.data && 
                    props.data?.getMessages.messages.map((e: Message, index: number) => (
                        <div key={index} className={Styles.data}>

                            <div className={Styles.profileImage}>
                                <img src={e.user.image.length === 0 ? "/" : e.user.image} onError={handleImageError} alt="img" />
                            </div>

                            <div className={Styles.contextWrapper}>
                                <div className={Styles.context} >
                                    <div className={Styles.contextHeader} >
                                        <div className={Styles.contextHeaderTitle}>
                                            <label>{e.user.username}</label>
                                            <span>{getShortTimeAgo(e.time)}</span>
                                        </div>
                                        <div className={Styles.contextHeaderNavigator}>
                                            <div />
                                            <div />
                                            <div />
                                        </div>
                                    </div>

                                    <div className={Styles.contextBody}>
                                        <label>{e.title}</label>

                                        <p>{e.message}</p>
                                    </div>
                                </div>
                                <div className={Styles.icons}>
                                    <div>
                                        <img src={assets.Icons.common.likeIcon} />
                                        <span>{e.likes}</span>
                                    </div>

                                    <div>
                                        <img src={assets.Icons.common.comment} />
                                        <span>{0}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

           {

           props.data && props.data!.getMessages.totalResults > 1 &&
             <div className={Styles.pages}>
             <img
                 onClick={() => props.handlePagenation(1, 0)}
                 className={Styles.leftArrow} src={assets.Icons.common.arrow} />
             {
                 Array.from({ length: props.data?.getMessages.totalResults ?? 1 }, (_, index) => (
                     <span
                         key={index}
                         style={{
                             backgroundColor: `${(index + 1) === props.currentPage ? "#D9D9D933" : ""}`,
                             height: `${(index + 1) === props.currentPage ? "24px" : ""}`,
                             width: `${(index + 1) === props.currentPage ? "24px" : ""}`
                         }}
                         onClick={() => props.handlePagenation(2, index + 1)}
                     >{index + 1}</span>
                 ))
             }
             <img className={Styles.rightArrow} src={assets.Icons.common.arrow}
                 onClick={() => props.handlePagenation(3, 0)} />
         </div>
           }
        </div>
    )
}


export default React.memo(DashBoardDiscussionForum);

