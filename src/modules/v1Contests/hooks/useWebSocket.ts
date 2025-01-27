import { useEffect, useRef } from 'react';
import { initializeSocket } from './web_socket_initalize';
import { socketChatDataModal } from '../types/play';

interface UseWebSocketProps {
  sessionId: string;
  userId: number;
  onChatMessage: (data: any) => void;
  onSystemEvent: (msg: string) => void;
}

export const useWebSocket = ({ sessionId, userId, onChatMessage, onSystemEvent }: UseWebSocketProps) => {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (sessionId) {
      const ws = initializeSocket(sessionId);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("connected to websocket server in contest page");
      };

      ws.onmessage = (event: MessageEvent) => {
        try {
          const receivedData = JSON.parse(event.data);
          if (receivedData['type'] === "SYSTEM_EVENT") {
            onSystemEvent(receivedData['data']['msg']);
          }
          if (receivedData['type'] === "CHAT_MESSAGE") {
            onChatMessage(receivedData['data']);
          }
        } catch (error) {
          console.error("error parsing message:", error);
        }
      };

      ws.onclose = () => {
        console.log("Websocket is disconnected");
      };

      ws.onerror = (error: ErrorEvent) => {
        console.log('webSocket Error:', error);
      };
    }
  }, [sessionId]);

  const sendChatMessage = (message: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const val: socketChatDataModal = {
        type: "CHAT_MESSAGE",
        session_id: sessionId,
        data: {
          time: new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
          message,
          sender_id: userId
        }
      };
      wsRef.current.send(JSON.stringify(val));
      return val.data;
    }
    console.error("Websocket is not open. Cannot send message.");
    return null;
  };

  return { sendChatMessage };
};
