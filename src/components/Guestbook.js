import React from "react";
import { useState, useEffect } from "react";
import './Guestbook.css'


const Guestbook = () => {
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Load messages from local storage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("guestMessages")) || [];
    setMessages(storedMessages);
  }, []);

  // Save messages to local storage whenever messages state changes
  useEffect(() => {
    localStorage.setItem("guestMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestName.trim() && guestMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        name: guestName,
        message: guestMessage,
      };
      setMessages([...messages, newMessage]);
      setGuestName("");
      setGuestMessage("");
    }
  };

  return (
    <section className="guestbook-section">
      <h2 className="section-title">Guestbook</h2>
      <div className="guestbook-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <textarea
            value={guestMessage}
            onChange={(e) => setGuestMessage(e.target.value)}
            placeholder="Your Message here!"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="guestbook-messages">
        {messages.map((message) => (
          <div className="guestbook-card" key={message.id}>
            <p className="guest-name">{message.name}</p>
            <p className="guest-message">{message.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guestbook;
