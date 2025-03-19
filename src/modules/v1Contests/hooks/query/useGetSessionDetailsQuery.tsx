import { gql, useQuery } from "@apollo/client";

const GET_SESSION_DETAILS = gql`
  query GetSessionDetails($getSessionDetailsInput: GetSessionDetailsInput!) {
    getSessionDetails(input: $getSessionDetailsInput) {
      User2 {
        userID
        username
        email
        firstname
        lastname
        kyc
        image
        rating
        address
        summary
        dob
        gender
        isactive
      }
      User1 {
        userID
        username
        email
        firstname
        lastname
        kyc
        image
        rating
        address
        summary
        dob
        gender
        isactive
      }
      Problem {
        ID
        Title
        Description
        DifficultyLevel
        TimeLimitSeconds
        MemoryLimitMB
        InputFormat
        OutputFormat
        Constraints
        SampleInput
        SampleOutPut
        Explaination
        AuthorId
        MinRating
        MaxRating
        IsActive
        CreatedAt
        UpdatedAt
        Tags
        TotalTestcases
      }
      Contest {
        ContestId
        Title
        EntryFee
        TotalWinningAmount
        Description
        Type
      }
    }
  }
`;

const useGetSessionDetailsQuery = (sessionId: string) => {
  const { data, loading, error } = useQuery(GET_SESSION_DETAILS, {
    variables: {
      getSessionDetailsInput: {
        sessionId,
      },
    },
  });

  return {
    data: data?.getSessionDetails,
    loading,
    error,
  };
};

export default useGetSessionDetailsQuery;
