import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client"

interface V1Contest{
    contestId: string;
    title: string;
    entryFee: number;
    totalWinningAmount: number;
    description: string;
    type: number;
    maxParticipants: number;
    winAmount: number;
}

const GET_V1_CONTESTS = gql`
   query GetV1Contests {
    getV1Contests {
        v1Contests {
            contestId
            title
            entryFee
            totalWinningAmount
            description
            type
            maxParticipants
            winAmount
        }
    }
}
`

const useGetAllContest = () =>{
    const { loading, error, data } = useQuery(GET_V1_CONTESTS, {
        notifyOnNetworkStatusChange:true,
    })
    const contests: V1Contest[] | undefined= data?.getV1Contests?.v1Contests;

    return{
        loading,
        error, 
        data: contests
    }
}

export default useGetAllContest;