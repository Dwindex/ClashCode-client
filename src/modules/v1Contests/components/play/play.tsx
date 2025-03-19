import React, { useState, useEffect, useCallback } from "react";
import styles from "./play.module.css";
import NavBar from "./NavBar";
import { useWebSocket } from "../../hooks/useWebSocket";
import { matchmakingDataModel } from "@/types/modules/v1Contests";
import { chatModal } from "../../types/play";
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";
import useGetSessionDetailsQuery from "../../hooks/query/useGetSessionDetailsQuery";
import useRunCode from "../../hooks/mutation/useRunCode";
import useSubmitCode from "../../hooks/mutation/useSubmitCode";
import ResizableSection from "@/components/shared/Resizablesection/ResizableSection";

const Play = ({ contest, sessionId }) => {
  const [codeValue, setCodeValue] = useState(
    `// write your code below this line`
  );
  const [data, setData] = useState<matchmakingDataModel>();
  const [rating, setRating] = useState<string>("0");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("54");
  const [chatData, setChatData] = useState<chatModal>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const userId = 2;
  const isSubmitting = false;
  // const { sessionId } = contest;
  const { data: sessionData } = useGetSessionDetailsQuery(sessionId ?? "");

  const { runCode } = useRunCode();
  const { submitCode } = useSubmitCode();

  const { sendChatMessage } = useWebSocket({
    sessionId: data?.session_id ?? "",
    userId,
    onChatMessage: (newMessage) => {
      setChatData((prev) => [...prev, newMessage]);
    },
    onSystemEvent: (msg) => {
      alert(msg);
    },
  });

  const runData = {};

  useEffect(() => {
    if (sessionData) {
      setData(sessionData);
    }
  }, [sessionData]);

  const handleSendChatMessage = (message: string) => {
    const newMessage = sendChatMessage(message);
    if (newMessage) {
      setChatData((prev) => [...prev, newMessage]);
      setInputMessage("");
    }
  };

  const setSubmitting = (isSubmitting: boolean) => {
    // setSubmitting(isSubmitting);
  };

  const handleRunCode = useCallback(async () => {
    console.warn("handleRunCode: ", data?.Problem?.ID);

    const runData = await runCode({
      sessionId,
      requestData: {
        sourceCode: btoa(codeValue),
        problemId: data?.Problem?.ID,
        languageId: 50,
      },
    });
    console.warn("runData: ", runData);

    // runCode(codeValue, parseInt(language));
  }, [runCode, sessionId, codeValue, data?.Problem?.ID]);

  const handleSubmitCode = useCallback(async () => {
    const submitCodeData = await submitCode({
      sessionId,
      requestData: {
        sourceCode: btoa(codeValue),
        problemId: data?.Problem?.ID,
        languageId: 50,
      },
    });

    // runCode(codeValue, parseInt(language));
  }, [submitCode, sessionId, codeValue, data?.Problem?.ID]);

  return (
    <div className={styles.container}>
      <NavBar
        rating={rating}
        onRunCode={handleRunCode}
        onSubmitCode={handleSubmitCode}
      />
      <div className={styles.body_cont}>
        <ResizableSection
          LeftComponent={() => (
            <LeftContainer
              data={data}
              chatData={chatData}
              openChat={openChat}
              inputMessage={inputMessage}
              userId={userId}
              setOpenChat={setOpenChat}
              handleSendMessage={handleSendChatMessage}
              setInputMessage={setInputMessage}
            />
          )}
          rightComponent={
            <RightContainer
              isSubmitting={isSubmitting}
              language={language}
              setLanguage={setLanguage}
              code={codeValue}
              setCode={setCodeValue}
              runData={runData as any}
              setSubmitting={setSubmitting}
              fullScreen={fullScreen}
              setFullScreen={setFullScreen}
            />
          }
          minLeftWidth={15}
          maxLeftWidth={40}
          dividerWidth={8}
          dividerColor="#e2e8f0"
          dividerHoverColor="#cbd5e1"
          orientation="horizontal"
          containerClassName="border-t border-gray-200"
          leftClassName="bg-gray-50"
          rightClassName="bg-gray-100"
          // onResize={handleResize}
        />
      </div>
    </div>
  );
};

export default React.memo(Play);
