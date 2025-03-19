import { useMutation } from "@apollo/client";
import { START_MATCHMAKING } from "../../graphql/mutation";

const useMatchMakingMutation = ({
  contestId,
  tags,
}: {
  contestId: string;
  tags: string[];
}) => {
  const [mutate, { data, loading, error }] = useMutation(START_MATCHMAKING);

  const startMatchmaking = async () => {
    try {
      const response = await mutate({
        variables: { input: { ContestId: contestId, Tags: tags } },
      });
      return response.data;
    } catch (err) {
      console.error("Error entering contest:", err);
      throw err;
    }
  };

  return {
    startMatchmaking,
    data,
    loading,
    error,
  };
};

export default useMatchMakingMutation;
