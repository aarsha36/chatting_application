import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const clientRef = useRef(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws",
      reconnectDelay: 5000,

      onConnect: () => {
        client.subscribe("/topic/messages", (msg) => {
          const data = JSON.parse(msg.body);
          setMessages((prev) => [...prev, data]);
        });
      },
    });

    client.activate();
    clientRef.current = client;

    return () => client.deactivate();
  }, []);

  const sendMessage = () => {
    if (!username || !text) return;

    clientRef.current.publish({
      destination: "/app/chat",
      body: JSON.stringify({
        sender: username,
        content: text,
      }),
    });

    setText("");
  };

  return (
    <div className="chat-page">
      <div className="chat-card">
        <h2>Chat App</h2>

        <input
          className="input"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === username
                  ? "message my-msg"
                  : "message other-msg"
              }
            >
              <small>{msg.sender}</small>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        <div className="bottom">
          <input
            className="input"
            placeholder="Type message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
