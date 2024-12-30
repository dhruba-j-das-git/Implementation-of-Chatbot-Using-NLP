import React, { useState, useEffect } from 'react';
import { Message } from './types/chat';
import { generateResponse } from './utils/chatbot';
import { getSuggestions } from './utils/suggestions';
import { ChatContainer } from './components/ChatContainer';
import { ChatInput } from './components/ChatInput';
import { SuggestedResponses } from './components/SuggestedResponses';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(getSuggestions(''));

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Generate bot response with a realistic delay
    setTimeout(() => {
      const response = generateResponse(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setSuggestions(getSuggestions(content));
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex items-center gap-3">
          <Bot className="w-8 h-8 text-white" />
          <h1 className="text-xl font-semibold text-white">AI Assistant</h1>
        </div>
        
        <div className="h-[500px] flex flex-col">
          <ChatContainer messages={messages} isTyping={isTyping} />
          
          <div className="p-4 border-t space-y-4">
            <SuggestedResponses 
              suggestions={suggestions} 
              onSelect={handleSendMessage} 
            />
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;