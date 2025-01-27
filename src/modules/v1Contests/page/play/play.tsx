import React, { useState, useEffect } from 'react';
import styles from './Contest.module.css';
import Cookies from 'js-cookie';
import constants from '@/constants/constants';
import CodeEditor from './components/codeEditor';
import NavBar from '../../components/play/NavBar';
import ProblemDescription from '../../components/play/ProblemDescription';
import ChatSection from '../../components/play/ChatSection';
import TestResults from '../../components/play/TestResults';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useCodeExecution } from '../../hooks/useCodeExecution';
import { chatModal } from '@/model/contest/contest';
import DropDown from '../styled-components/DropDown';

const Contest = () => {
  const [codeValue, setCodeValue] = useState(`// write your code below this line`);
  const [data, setData] = useState<matchmakingDataModel>();
  const userId = parseInt(Cookies.get('user_id') ?? "");
  const [rating, setRating] = useState<string>("0");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("54");
  const [chatData, setChatData] = useState<chatModal>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [fullScreen, setFullScreen] = useState<boolean>(false);

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
    setRating(Cookies.get('rating') ?? "0");
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
        <div className={styles.left_cont}>
          <div className={styles.left_cont_headder}>
            <span>
              <img alt='description' src={"/static/icons/contest/description.svg"} height={18} width={18} />
              Description
            </span>
            <label>
              <img alt='description' src={"/static/icons/contest/ai.svg"} height={18} width={18} />
              {"AI Help"}
            </label>
            <span>
              <img alt='description' src={"/static/icons/contest/submissions.svg"} height={18} width={18} />
              {"Submissions"}
            </span>
          </div>
          <div className={styles.left_cont_body}>
            <ProblemDescription problem={data?.problem ?? {}} />
            <ChatSection
              openChat={openChat}
              chatData={chatData}
              inputMessage={inputMessage}
              userId={userId}
              onToggleChat={() => setOpenChat(!openChat)}
              onSendMessage={handleSendChatMessage}
              onInputChange={setInputMessage}
            />
          </div>
        </div>
        <div className={styles.right_cont}>
          <div
            style={{
              height: isSubmitting ? "49%" : "70%"
            }}
            className={styles.code_cont}>
            <div className={styles.code_headder}>
              <div>
                <DropDown
                  placeHolder='Language'
                  height='30px'
                  borderRadius='6px'
                  value={language}
                  onChange={(e: string) => setLanguage(e)}
                  options={constants.monacoLanguages}
                />
                <DropDown
                  placeHolder='Themes'
                  height='30px'
                  borderRadius='6px'
                  value={""}
                  onChange={(e: string) => { console.log(e) }}
                  options={constants.monacoLanguages}
                />
              </div>
              <div>
                <img
                  className={styles.headder_img}
                  onClick={() => setCodeValue("// write your code below this line")}
                  src={"/static/icons/reset.svg"}
                  height={30}
                  width={30}
                  alt='reset'
                />
                <img
                  className={styles.headder_img}
                  onClick={() => setFullScreen(!fullScreen)}
                  src={"/static/icons/fullscreen.svg"}
                  height={30}
                  width={30}
                  alt='reset'
                />
              </div>
            </div>
            <CodeEditor
              isFullScreen={fullScreen}
              cancelFullScreen={() => setFullScreen(false)}
              value={codeValue}
              onChange={(e: string) => setCodeValue(e)}
            />
          </div>
          <TestResults
            isSubmitting={isSubmitting}
            runData={runData}
            onClose={() => setSubmitting(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contest;
