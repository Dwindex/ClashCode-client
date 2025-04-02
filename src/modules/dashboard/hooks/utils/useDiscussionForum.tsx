import { useRef, useState } from "react";
import { useDiscussionForumQuery } from "../query/getDiscussionForumQuery";

const useDiscussionForum = () => {
    const discussionForem = useDiscussionForumQuery();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const handlePagenation = (state: number, index: number) => {
        setCurrentPage((prev) => {
            let page = prev;
            if (state === 1 && prev !== 1) {
                page = prev - 1;
                discussionForem.refresh({ page: page, pageSize: 3 });
            }
            if (state === 2 && page != index) {
                page = index;
                discussionForem.refresh({ page: page, pageSize: 3 });
            }
            if (state === 3 && prev !== discussionForem.data?.getMessages.totalResults) {
                page = prev + 1;
                discussionForem.refresh({ page: prev + 1, pageSize: 3 });
            }
            return page;
        });
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return { discussionForem, currentPage, scrollRef, handlePagenation };
}

export default useDiscussionForum;