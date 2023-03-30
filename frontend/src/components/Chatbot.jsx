import React, { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [hideChatbot, setHideChatbot] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { user: true, content: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');
    // simulate bot response
    setTimeout(() => {
      const botResponse = { user: false, content: 'I am a mock bot response.' };
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  //effect to open chatbot after 3 seconds
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowChatbot(true);
  //   }, 30000);

  //   return () => clearTimeout(timeout);
  // }, []);
  //close open chat

  const handleChats = () => {
    setShowChatbot(true);
    setHideChatbot(false);
  };
  const handleClosedChats = () => {
    setShowChatbot(false);
    setHideChatbot(true);
  };

  return (
    <>
      {showChatbot && (
        <div
          className="fixed bottom-0 left-0 w-full p-4
          bg-transparent shadow-lg rounded-l-3xl z-10 m-3 
          sm:max-w-md sm:right-0"
        >
          <AiOutlineCloseCircle
            className="text-green-700 focus:outline-none
          hover:text-indigo-300 mb-2"
            onClick={handleClosedChats}
          />

          <div
            className="bg-green-400 text-white max-w-xs px-4 py-3
           rounded-xl shadow-md my-2 mr-auto"
          >
            Olá, nós estamos online no whatsapp.
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=+351965472229"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500
             hover:bg-green-600 text-white font-medium rounded-full py-2 px-4"
          >
            Falar no Whatsapp
          </a>
        </div>
      )}
      {hideChatbot && (
        <div className="fixed bottom-0 left-0 p-5 m-2 z-20">
          <BsWhatsapp
            className="text-3xl text-emerald-600 cursor-pointer"
            onClick={handleChats}
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;
