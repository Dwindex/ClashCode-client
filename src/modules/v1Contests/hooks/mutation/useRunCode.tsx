import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";

const RUN_CODE = gql`
  mutation RunCode($input: RunV1ContestCodeRequest!) {
    runCode(input: $input) {
      evaluatedTestCase {
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

export type RequestData = {
  sourceCode: string;
  problemId: number;
  languageId: number;
};

export type RunCodeParams = {
  sessionId: string;
  requestData: RequestData;
};

const useRunCode = () => {
  const [mutate, { loading, error, data }] = useMutation<any>(RUN_CODE);

  const runCode = useCallback(
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

  return { runCode, loading, error, data };
};

export default useRunCode;
