import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
        ${isBot ? 'bg-blue-500' : 'bg-gray-600'} 
        transition-transform hover:scale-110`}>
        {isBot ? (
          <MessageCircle className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className={`max-w-[80%] px-4 py-2 rounded-lg 
        ${isBot ? 'bg-blue-100' : 'bg-gray-100'}
        transform transition-all duration-200 hover:shadow-md`}>
        <p className="text-gray-800">{message.content}</p>
        <span className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}