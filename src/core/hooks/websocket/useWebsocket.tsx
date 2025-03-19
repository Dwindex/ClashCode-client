/* eslint-disable @typescript-eslint/no-explicit-any */
import { WEBSOCKET_URL } from "@/lib/routes";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const LastMessages: Map<string, any> = new Map();
const Channels: Set<string> = new Set();

const MessageTypes = {
  SUBSCRIBE: "channel_subscribe",
  UNSUBSCRIBE: "channel_unsubscribe",
};
type SendMessage = (message: any) => void;

type UseCustomWebsocket = () => {
  sendMessage: SendMessage;
  readyState: ReadyState;
  LastMessages: Map<string, any>;
  joinChannel: (channel: string) => void;
  leaveChannel: (channel: string) => void;
  Channels: Set<string>;
};


const useCustomWebsocket: UseCustomWebsocket = () => {
  const { lastMessage, sendMessage, readyState } = useWebSocket(
    `${WEBSOCKET_URL}`,
    {
      reconnectAttempts: 40,
      reconnectInterval: 1000,
      disableJson: true,
    }
  );

  useEffect(() => {
    if (lastMessage && lastMessage.data && readyState === ReadyState.OPEN) {
      const data = JSON.parse(lastMessage.data);
      const channel = data?.channel;

      if (channel) {
        LastMessages.set(channel, data);
      }
    }
  }, [lastMessage, readyState]);

  const _sendMessage: SendMessage = (message: any) => {
    if (readyState === ReadyState.OPEN) {
      const _message =
        typeof message === "string" ? message : JSON.stringify(message);
      sendMessage(_message);
    }
  };

  const joinChannel = (channel: string) => {
    if (readyState === ReadyState.OPEN && !Channels.has(channel)) {
      sendMessage(JSON.stringify({ type: MessageTypes.SUBSCRIBE, channel }));
      Channels.add(channel);
    }
  };

  const leaveChannel = (channel: string) => {
    if (readyState === ReadyState.OPEN && Channels.has(channel)) {
      sendMessage(JSON.stringify({ type: MessageTypes.UNSUBSCRIBE, channel }));
      Channels.delete(channel);
    }
  };

  return {
    sendMessage: _sendMessage,
    readyState,
    LastMessages: LastMessages,
    joinChannel,
    leaveChannel,
    Channels: Channels,
  };
};

export default useCustomWebsocket;
