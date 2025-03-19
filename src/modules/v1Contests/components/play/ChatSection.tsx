import React from 'react';
import styles from '@/modules/v1Contests/components/play/play.module.css';
import { chatModal } from '@/modules/v1Contests/types/play';

interface ChatSectionProps {
  openChat: boolean;
  chatData: chatModal;
  inputMessage: string;
  userId: number;
  onToggleChat: () => void;
  onSendMessage: (message: string) => void;
  onInputChange: (message: string) => void;
}

const ChatSection: React.FC<ChatSectionProps> = ({
  openChat,
  chatData,
  inputMessage,
  userId,
  onToggleChat,
  onSendMessage,
  onInputChange
}) => {
  return (
    <div className={`${openChat ? styles.chat_box_open : styles.chat_box_close}`}>
      {!openChat ? (
        <div className={styles.chat_open}>
          <span>Chat Section</span>
          <div className={styles.chat_open} onClick={onToggleChat}></div>
        </div>
      ) : (
        <div className={styles.chat_box}>
          <div className={styles.chat_close} onClick={onToggleChat}>Close</div>
          <div className={styles.chat_messages_data}>
            <div className={styles.message_box}>
              {chatData.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: e.sender_id === userId ? "flex-end" : "flex-start",
                    width: '100%',
                  }}
                >
                  <label
                    style={{
                      backgroundColor: e.sender_id === userId ? "#D17D7D" : "#9BCAF3",
                      padding: "8px",
                      borderRadius: "6px"
                    }}
                  >
                    {e.message}<span>{e.time}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.chat_input}>
            <input
              type='text'
              placeholder='Type Here...'
              value={inputMessage}
              onChange={(e) => onInputChange(e.target.value)}
            />
            <button onClick={() => onSendMessage(inputMessage)}>
              <img alt='send' src={"/static/icons/contest/send.svg"} height={20} width={20} />
            </button>
            <button>
              <img alt='emoji' src={"/static/icons/contest/emoji.svg"} height={20} width={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
