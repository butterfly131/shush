import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Guests = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Connect to the Socket.io server
    const socket = io("http://localhost:3000"); // Replace with your server URL

    // Listen for new messages from the server
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Guests</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default Guests;
