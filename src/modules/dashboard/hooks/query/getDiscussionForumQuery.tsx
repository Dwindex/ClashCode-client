import { ApolloError, useQuery } from "@apollo/client";
import { DiscussionForemDataRequest, GetDiscussionForumResponse } from "../../types/DiscussionForum";
import { Get_Messages } from "../../graphql/querys";

interface UseDiscussionForumQueryResult {
    refresh: (input: DiscussionForemDataRequest) => void;
    loading: boolean;
    error: ApolloError | undefined;
    data: GetDiscussionForumResponse | null | undefined;
}

export const useDiscussionForumQuery = (): UseDiscussionForumQueryResult => {
    const {loading, error, data, refetch} = useQuery(Get_Messages, {
        notifyOnNetworkStatusChange:true,
        variables:{page:1,pageSize:3}
    });

    const refresh = async (input: DiscussionForemDataRequest) => {
        try {
            refetch({page:input.page ?? 1,pageSize:input.pageSize ?? 3})
        } catch (err) {
            console.error("Discussion forum query error:", err);   
            throw err;
        }
    }
    return {
        refresh,
        loading,
        error,
        data
    }
}