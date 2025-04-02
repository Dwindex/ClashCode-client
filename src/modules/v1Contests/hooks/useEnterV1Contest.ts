import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useCallback } from "react";

const ENTER_V1_CONTEST = gql`
  mutation EnterContest($input: EnterContestInput!) {
    enterContest(input: $input) {
      participantId
      isActive
    }
  }
`;

interface EnterContestInput {
  contestId: string;
}

interface EnterContestResponse {
  enterContest: {
    participantId: number;
    isActive: boolean;
  } | null;
}

export function useEnterV1Contest() {
  const [enterContestMutation, { data, loading, error }] = useMutation<EnterContestResponse, { input: EnterContestInput }>(
    ENTER_V1_CONTEST
  );

  const enterV1Contest = useCallback(
    async (contestId: string) => {
      try {
        const response = await enterContestMutation({
          variables: {
            input: {
              contestId,
            },
          },
        });

        return { enteredContest: response.data?.enterContest, loading, error };
      } catch (error) {        
        return { enteredContest: null, loading: false, error: error as Error }; // Explicitly cast error as Error
      }
    },
    [enterContestMutation]
  );

  return { enterV1Contest, data, loading, error };
}