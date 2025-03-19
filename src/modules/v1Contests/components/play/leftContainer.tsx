import React from "react";
import styles from './play.module.css';
import ProblemDescription from "./ProblemDescription";
import ChatSection from "./ChatSection";
import { chatModal, matchmakingDataModel } from "@/types/modules/v1Contests";

interface LeftContainerProps {
    data: matchmakingDataModel | undefined;
    chatData: chatModal;
    openChat: boolean;
    inputMessage: string;
    userId: number;
    setOpenChat: (openChat: boolean) => void;
    handleSendMessage: (message: string) => void;
    setInputMessage: (message: string) => void;
}

const LeftContainer = ({
  data,
  chatData,
  openChat,
  inputMessage,
  userId,
  setOpenChat,
  handleSendMessage,
  setInputMessage,
}: LeftContainerProps) => {
  if (!data?.Problem) return null;

  return (
    <div className={styles.left_cont}>
      <div className={styles.left_cont_headder}>
        <span>
          <img
            alt="description"
            src={"/static/icons/contest/description.svg"}
            height={18}
            width={18}
          />
          Description
        </span>
        <label>
          <img
            alt="description"
            src={"/static/icons/contest/ai.svg"}
            height={18}
            width={18}
          />
          {"AI Help"}
        </label>
        <span>
          <img
            alt="description"
            src={"/static/icons/contest/submissions.svg"}
            height={18}
            width={18}
          />
          {"Submissions"}
        </span>
      </div>
      <div className={styles.left_cont_body}>
        <ProblemDescription problem={data?.Problem} />
        <ChatSection
          openChat={openChat}
          chatData={chatData}
          inputMessage={inputMessage}
          userId={userId}
          onToggleChat={() => setOpenChat(!openChat)}
          onSendMessage={handleSendMessage}
          onInputChange={setInputMessage}
        />
      </div>
    </div>
  );
};

export default React.memo(LeftContainer);
