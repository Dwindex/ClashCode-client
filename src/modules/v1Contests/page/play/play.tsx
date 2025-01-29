import React, { useState, useEffect } from 'react';
import styles from './play.module.css';
import NavBar from '../../components/play/NavBar';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useCodeExecution } from '../../hooks/useCodeExecution';
import { matchmakingDataModel } from '@/types/modules/v1Contests';
import { chatModal } from '../../types/play';
import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';

const Play = () => {
  const [codeValue, setCodeValue] = useState(`// write your code below this line`);
  const [data, setData] = useState<matchmakingDataModel>();
  const [rating, setRating] = useState<string>("0");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("54");
  const [chatData, setChatData] = useState<chatModal>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const userId = 2;
  const { runData, isSubmitting, setSubmitting, runCode, submitCode } = useCodeExecution({
    sessionId: data?.session_id ?? "",
    userId,
    problemId: data?.problem?.problem_id ?? 0
  });

  const { sendChatMessage } = useWebSocket({
    sessionId: data?.session_id ?? "",
    userId,
    onChatMessage: (newMessage) => {
      setChatData(prev => [...prev, newMessage]);
    },
    onSystemEvent: (msg) => {
      alert(msg);
    }
  });

  useEffect(() => {
    const storedData = localStorage.getItem('matchmaking_data');
    setRating("0");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      localStorage.removeItem('matchmaking_data');
      setData(parsedData);
    }
  }, []);

  const handleSendChatMessage = (message: string) => {
    const newMessage = sendChatMessage(message);
    if (newMessage) {
      setChatData(prev => [...prev, newMessage]);
      setInputMessage("");
    }
  };

  const handleRunCode = () => {
    runCode(codeValue, parseInt(language));
  };

  const handleSubmitCode = () => {
    submitCode(codeValue, parseInt(language));
  };

  return (
    <div className={styles.container}>
      <NavBar
        rating={rating}
        onRunCode={handleRunCode}
        onSubmitCode={handleSubmitCode}
      />
      <div className={styles.body_cont}>
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
        <RightContainer 
          isSubmitting={isSubmitting}
          language={language}
          setLanguage={setLanguage}
          code={codeValue}
          setCode={setCodeValue}
          runData={runData}
          setSubmitting={setSubmitting}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      </div>
    </div>
  );
};

export default React.memo(Play);
