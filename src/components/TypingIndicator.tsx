import React from 'react';

export function TypingIndicator() {
  return (
    <div className="flex gap-1 px-3 py-2">
      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
    </div>
  );
}