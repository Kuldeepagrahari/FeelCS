import React, { useState } from 'react';

const SimulationPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your AI assistant. How can I help you with your simulation today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Placeholder for AI response logic [14]
    setTimeout(() => {
      setMessages();
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[70vh] max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold p-4 border-b">AI Simulation Chat</h1>
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'user'? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${msg.sender === 'user'? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimulationPage;