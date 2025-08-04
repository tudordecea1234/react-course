import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages  from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{
    message: 'Hello! How can I assist you today?',
    sender: 'chatbot',
    id: crypto.randomUUID()
  }]);
  useEffect(() => {
    Chatbot.addResponses(
      {
        'goodbye': 'Hello! How can I assist you today?',
        'give me an unique id': function(){
          return `Your unique ID is: ${crypto.randomUUID()}`;
        }
      }
    );
  }, []);
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  },[chatMessages]);
  return (
    <div className="app-container">
      <div>
        {chatMessages.length === 0 && <p className="paragraph-welcome">Welcome to the chatbot project! Send a message using the textbox below.</p>}
      </div>
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
