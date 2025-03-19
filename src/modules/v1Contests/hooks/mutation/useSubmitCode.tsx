import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import { RunCodeParams } from "./useRunCode";

const SUBMIT_CODE = gql`
  mutation SubmitCode($input: RunV1ContestCodeRequest!) {
    submitCode(input: $input) {
      evaluatedTestCases {
        stdin
        stdout
        expectedOutput
        time
        memory
        isHidden
        score
        status
      }
    }
  }
`;

const useSubmitCode = () => {
  const [mutate, { loading, error, data }] = useMutation<any>(SUBMIT_CODE);
  const submitCode = useCallback(
    async (params: RunCodeParams) => {
      try {
        const response = await mutate({
          variables: {
            input: params,
          },
        });
        if (!response.data) {
          throw new Error("No data returned from mutation");
        }
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    [mutate]
  );
  return { submitCode, loading, error, data };
};
export default useSubmitCode;
