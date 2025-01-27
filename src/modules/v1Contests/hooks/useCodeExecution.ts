import { useState } from 'react';
import ApiClient from '../../page/ApiClient/ApiClient';
import routes from '@/lib/routes';
import { runDataModal } from '../types/play';

interface UseCodeExecutionProps {
  sessionId: string;
  userId: number;
  problemId: number;
}

export const useCodeExecution = ({ sessionId, userId, problemId }: UseCodeExecutionProps) => {
  const [runData, setRunData] = useState<runDataModal>();
  const [submitedData, setSubmitedData] = useState(null);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const executeCode = async (code: string, languageId: number, isSubmission: boolean = false) => {
    try {
      setSubmitting(true);
      const cleanedCode = code.replace(/\r/g, "");
      const encodedCode = btoa(decodeURIComponent(encodeURIComponent(cleanedCode)));
      const body = {
        "session_id": sessionId,
        "user_id": userId,
        "request": {
          "language_id": languageId,
          "source_code": encodedCode,
          "problem_id": problemId
        }
      };

      const endpoint = isSubmission ? routes.SUBMITCODE : routes.RUNCODE;
      const res = await ApiClient.postWithToken(endpoint, body);
      
      if (isSubmission) {
        setSubmitedData(res['response']);
      } else {
        setRunData(res['response']);
      }
      
      return res['response'];
    } catch (error) {
      console.log("Error Occurred: ", error);
      return null;
    }
  };

  return {
    runData,
    submitedData,
    isSubmitting,
    setSubmitting,
    runCode: (code: string, languageId: number) => executeCode(code, languageId, false),
    submitCode: (code: string, languageId: number) => executeCode(code, languageId, true)
  };
};
