import { gql } from "@apollo/client";

export const START_MATCHMAKING = gql`
  mutation startMatchmaking($input: StartMatchmakingInput!) {
    startMatchmaking(input: $input) {
      SessionId
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
      SessionId
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
    }
  }
`;
