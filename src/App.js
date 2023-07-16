import React, { useState } from "react";
import Message from "./Mensagem";
import Button from "./Botao";
import "./styled.css";

const Chat = () => (
  <body>
    <div className="chat">
      <div className="header">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
        </button>
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          <li className="message">
            <button className="options">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            <span className="visualized yes">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
              </svg>
            </span>
            <p>Oi...</p>
          </li>
          <li className="message">
            <button className="options">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            <span className="visualized yes">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3" /> 

  const Message = ({ text, sender, visualized }) => {
  //const messageClass = 'message ' + (sender ? 'me' : '');

  return (
    <li className={messageClass}>
      <button className="options">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
        </svg>
      </button>
      <span className={`visualized ${visualized ? 'yes' : ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
                </span>
      <p>{text}</p>
    </li>
  );

const ChatApp = () => {
const [messages, setMessages] = useState([
    { id: 1, text: 'Oi...', sender: true, visualized: true },
    { id: 2, text: 'Tu não me ama mais?', sender: false, visualized: true },
    { id: 3, text: 'Oi, boa tarde.', sender: true, visualized: false },
    { id: 4, text: 'Quem é você mesmo?', sender: false, visualized: false },
  ]);

  return (
    <div className="chat">
      <div className="header">
        <Button>
          {/* SVG do botão */}
        </Button>
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {messages.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              sender={message.sender}
              visualized={message.visualized}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

  return (
    <li className={messageClass}>
      <button className="options">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      </button>
      <span className={`visualized ${visualized ? 'yes' : ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
        </svg>
      </span>
      <p>{text}</p>
    </li>
  );
  };

  return (
    <div className="chat">
      <div className="header">
        <Button>
          {/* SVG do botão */}
        </Button>
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {messages.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              sender={message.sender}
              visualized={message.visualized}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};