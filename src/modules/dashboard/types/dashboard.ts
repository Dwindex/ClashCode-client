import { Ref } from "react";
import { GetDiscussionForumResponse } from "./DiscussionForum";

export interface DiscussionForumProps {
    data: GetDiscussionForumResponse | null | undefined,
    loading: boolean,
    currentPage: number,
    scrollRef: Ref<HTMLDivElement | null>,
    handlePagenation: (state: number, index: number) => void;
}

export interface DashBoardMainContentProps{
    discussionForem:DiscussionForumProps,
}

export interface DashBoardprops{
    mainContent:DashBoardMainContentProps
}